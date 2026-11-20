"""Run with Blender in background mode and pass the source STL and output GLB after --."""

import sys
from pathlib import Path

import bpy

source_path, output_path = map(Path, sys.argv[sys.argv.index("--") + 1:])
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.wm.stl_import(filepath=str(source_path), use_mesh_validate=True)
habitat = bpy.context.object
habitat.name = "Supplied Mars habitat"
mesh = habitat.data
bounds = list(map(tuple, habitat.bound_box))
low = [min(point[axis] for point in bounds) for axis in range(3)]
high = [max(point[axis] for point in bounds) for axis in range(3)]
scale = 18 / max(high[0] - low[0], high[1] - low[1])
for vertex in mesh.vertices:
    vertex.co.x = (vertex.co.x - (low[0] + high[0]) / 2) * scale
    vertex.co.y = (vertex.co.y - (low[1] + high[1]) / 2) * scale
    vertex.co.z = (vertex.co.z - low[2]) * scale
mesh.update()

modifier = habitat.modifiers.new("Browser mesh", "DECIMATE")
modifier.ratio = 0.028
bpy.ops.object.modifier_apply(modifier=modifier.name)

for name, color, metallic in [
    ("Habitat shell", (0.57, 0.54, 0.48, 1), 0.20),
    ("Landing foundation", (0.24, 0.17, 0.145, 1), 0.12),
]:
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    bsdf = material.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = 0.74
    habitat.data.materials.append(material)

for polygon in habitat.data.polygons:
    polygon.material_index = 1 if polygon.center.z < 0.50 else 0
    polygon.use_smooth = True

print(f"Browser habitat: {len(habitat.data.polygons):,} triangles")
bpy.ops.export_scene.gltf(filepath=str(output_path), export_format="GLB")
