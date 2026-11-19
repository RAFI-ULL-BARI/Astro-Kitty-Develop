"""Database models. SQLite by default; set DATABASE_URL for Postgres in production.

Privacy by design: a player is a generated kitty name plus a random token. No
real names, emails, ages or birthdays are ever stored.
"""
from __future__ import annotations

import datetime as dt
import os
import uuid

from sqlalchemy import JSON, DateTime, ForeignKey, Integer, String, UniqueConstraint, create_engine
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship, sessionmaker


def now() -> dt.datetime:
    return dt.datetime.now(dt.timezone.utc)


class Base(DeclarativeBase):
    pass


class Classroom(Base):
    __tablename__ = "classrooms"
    id: Mapped[int] = mapped_column(primary_key=True)
    code: Mapped[str] = mapped_column(String(8), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(60))
    teacher_key_hash: Mapped[str] = mapped_column(String(64))
    created: Mapped[dt.datetime] = mapped_column(DateTime(timezone=True), default=now)
    players: Mapped[list["Player"]] = relationship(back_populates="classroom")


class Player(Base):
    __tablename__ = "players"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    token_hash: Mapped[str] = mapped_column(String(64), unique=True, index=True)
    kitty_name: Mapped[str] = mapped_column(String(60), index=True)
    classroom_id: Mapped[int | None] = mapped_column(ForeignKey("classrooms.id"), nullable=True, index=True)
    mastery: Mapped[dict] = mapped_column(JSON, default=dict)
    created: Mapped[dt.datetime] = mapped_column(DateTime(timezone=True), default=now)
    classroom: Mapped[Classroom | None] = relationship(back_populates="players")


class LevelResult(Base):
    """Best verified result per player and level (daily challenges included)."""
    __tablename__ = "level_results"
    __table_args__ = (UniqueConstraint("player_id", "level_id"),)
    id: Mapped[int] = mapped_column(primary_key=True)
    player_id: Mapped[str] = mapped_column(ForeignKey("players.id"), index=True)
    level_id: Mapped[str] = mapped_column(String(32), index=True)
    stars: Mapped[int] = mapped_column(Integer)
    commands: Mapped[int] = mapped_column(Integer)
    steps: Mapped[int] = mapped_column(Integer)
    code: Mapped[str] = mapped_column(String(4000))
    created: Mapped[dt.datetime] = mapped_column(DateTime(timezone=True), default=now)


class QuizResult(Base):
    __tablename__ = "quiz_results"
    id: Mapped[int] = mapped_column(primary_key=True)
    player_id: Mapped[str] = mapped_column(ForeignKey("players.id"), index=True)
    part: Mapped[str] = mapped_column(String(20), index=True)
    correct: Mapped[int] = mapped_column(Integer)
    total: Mapped[int] = mapped_column(Integer)
    stars: Mapped[int] = mapped_column(Integer)
    results: Mapped[list] = mapped_column(JSON)
    created: Mapped[dt.datetime] = mapped_column(DateTime(timezone=True), default=now)


def make_session_factory(url: str | None = None):
    url = url or os.environ.get("DATABASE_URL", "sqlite:///./astro-kitty.db")
    # Render/Heroku give postgres:// URLs; use the psycopg 3 driver from requirements.txt.
    for prefix in ("postgres://", "postgresql://"):
        if url.startswith(prefix):
            url = "postgresql+psycopg://" + url[len(prefix):]
    kwargs = {"connect_args": {"check_same_thread": False}} if url.startswith("sqlite") else {"pool_pre_ping": True}
    if url == "sqlite://":
        from sqlalchemy.pool import StaticPool
        kwargs["poolclass"] = StaticPool
    engine = create_engine(url, **kwargs)
    Base.metadata.create_all(engine)
    return sessionmaker(engine, expire_on_commit=False)
