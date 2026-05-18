VN baked background assets live here.

Current generated2dmap pipeline:
- map_mode: baked_scene_mode
- visual_model: baked_raster / project-native SVG
- runtime_object_model: none
- collision_model: none
- engine_target: project-native Vite public asset

Each accepted background must keep a matching prompt metadata file:

  <name>.svg
  <name>.prompt.txt

Scenario BCG directives should reference these assets with `/assets/bg/<name>.svg`.
Do not route every scene to `/assets/ui/image0_13_6.jpg`; that file is an imported UI/background placeholder, not the scene background system.
