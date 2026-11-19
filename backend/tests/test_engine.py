import datetime as dt

import pytest

from astrokitty import adaptive, crew, levels, names, quizzes
from astrokitty.kittycode import parse, run, to_tree


def test_simple_program_reaches_base_with_three_stars():
    result = run("MOVE 3", [">..B"], par=1)
    assert result["status"] == "success" and result["stars"] == 3


def test_crash_reports_the_line():
    result = run("TURN RIGHT\nMOVE", [">..B"])
    assert result["status"] == "crashed" and result["line"] == 2


def test_typo_gets_suggestion():
    assert run("tunr left", [">..B"])["error"]["line"] == 1
    assert run("mvoe", [">..B"])["error"]["suggestion"] == "MOVE"


def test_bangla_program():
    src = "পুনরাবৃত্তি ৩ বার\n  এগোও\nশেষ"
    assert run(src, [">..B"], 3)["status"] == "success"


def test_bangla_not_inside_word_is_left_alone():
    # "নমুনা" ends with "না" (not) but must stay part of "নমুনা এখানে".
    src = "যদি নমুনা এখানে\n খনন\nশেষ\nএগোও ৩"
    assert run(src, [">..B"])["status"] == "success"


def test_infinite_loop_is_stopped():
    assert run("REPEAT UNTIL AT BASE\nTURN LEFT\nEND", [">..B"])["status"] == "too_long"


def test_recursive_routine_is_stopped():
    assert run("DEFINE GO\nGO\nEND\nGO", [">..B"])["status"] == "too_long"


def test_routines_and_conditions():
    src = "DEFINE STEP\n IF PATH AHEAD\n  MOVE\n END\nEND\nREPEAT 5 TIMES\n STEP\nEND"
    assert run(src, [">..B"])["status"] == "success"


def test_robot_tree():
    tree = to_tree(parse("REPEAT 2 TIMES\nMOVE\nEND"))
    assert tree == [{"op": "repeat", "line": 1, "arg": 2, "body": [{"op": "move", "line": 2, "arg": 1}]}]


def test_every_level_is_winnable_and_stable():
    first = levels.build_all()
    assert len(first) == 60
    for level in first:
        levels.check_level(level)
    assert first == levels.build_all()  # same seed, same levels


def test_levels_teach_their_concept():
    by_world = {}
    for level in levels.build_all():
        by_world.setdefault(level["world"], []).append(level["reference"])
    assert all("REPEAT" in ref for ref in by_world[2])
    assert all("IF" in ref for ref in by_world[3])
    assert all("DEFINE" in ref for ref in by_world[4])


def test_daily_level_is_same_all_day_and_changes_daily():
    a = levels.daily_level(dt.date(2026, 11, 19))
    assert a == levels.daily_level(dt.date(2026, 11, 19))
    assert a["map"] != levels.daily_level(dt.date(2026, 11, 20))["map"]


def test_quiz_bank_is_valid():
    assert quizzes.validate(quizzes.load_bank()) == []


def test_quiz_validator_catches_problems():
    bad = {"parts": {"x": {}}, "questions": [{"id": "a", "part": "x", "type": "choice", "q": {"en": "Hi?"},
                                              "options": [{"en": "a", "bn": "ক"}], "answer": 3, "explain": {},
                                              "source": "https://example.com", "level": 5}]}
    problems = " ".join(quizzes.validate(bad))
    for expected in ("missing q.bn", "NASA source", "level", "answer", "at least 2 options", "needs at least"):
        assert expected in problems


def test_quiz_scoring():
    qs = quizzes.questions_for("flight")
    answers = {}
    for q in qs[:5]:
        if q["type"] == "truefalse":
            answers[q["id"]] = q["answer"]
        elif q["type"] == "choice":
            answers[q["id"]] = q["answer"]
        else:
            answers[q["id"]] = list(range(len(q["options"])))
    assert quizzes.score("flight", answers)["stars"] == 3
    wrong = {qid: ([1, 0] if isinstance(a, list) else (not a if isinstance(a, bool) else a + 1)) for qid, a in answers.items()}
    assert quizzes.score("flight", wrong)["correct"] == 0


def test_quiz_pick_favours_weak_skills():
    counts = {"weak": 0, "strong": 0}
    mastery = {"orbits": 0.05, "mars-facts": 0.99}
    for seed in range(200):
        for q in quizzes.pick("flight", mastery, seed=seed, size=3):
            if q["skill"] == "orbits":
                counts["weak"] += 1
            elif q["skill"] == "mars-facts":
                counts["strong"] += 1
    assert counts["weak"] > counts["strong"]


def test_bkt_moves_the_right_way():
    p = adaptive.P_INIT
    assert adaptive.update(p, True) > p
    assert adaptive.update(p, False) < adaptive.update(p, True)
    m = adaptive.apply({}, [("loops", True)] * 6)
    assert adaptive.summary(m)["mastered"] == ["loops"]


def test_names_are_generated_and_safe():
    taken = set()
    for _ in range(50):
        name = names.make_name(taken)
        assert names.is_generated(name)
        taken.add(name)
    assert not names.is_generated("Rafi from Khulna")


def test_crew_game_flow():
    base = crew.Base(seed=1)
    base.join("a", "Brave Comet Kitty", "engineer")
    base.join("b", "Swift Nova Kitty", "botanist")
    with pytest.raises(ValueError):
        base.choose("a", "fix_panels")  # not started
    base.start()
    with pytest.raises(ValueError):
        base.choose("a", "water_garden")  # botanist's job
    assert base.choose("a", "fix_panels") is False
    assert base.choose("b", "water_garden") is True
    assert base.sol == 2 and base.log[0]["event"] == "calm"


def test_doing_nothing_loses_the_base():
    base = crew.Base(seed=3)
    for i, role in enumerate(crew.ROLES):
        base.join(str(i), f"Kitty {i}", role)
    base.start()
    while base.phase == "playing":
        for pid in list(base.members):
            if base.phase == "playing":
                base.choose(pid, "rest")
    assert base.phase == "lost"
