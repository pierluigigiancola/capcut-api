import { assertEquals, assertNotEquals } from "@std/assert";
import { Segment } from "./Segments.ts";
import { VideoMaterial } from "../materials/VideoMaterial.ts";
import { ITrack, Track } from "../tracks/Track.ts";
import { SpeedMaterial } from "../materials/SpeedMaterial.ts";
import { VocalSeparationMaterial } from "../materials/VocalSeparationMaterial.ts";
import { PlaceholderInfoMaterial } from "../materials/PlaceholderInfoMaterial.ts";
import { CanvasMaterial } from "../materials/CanvasMaterial.ts";
import { SoundChannelMappingMaterial } from "../materials/SoundChannelMappingMaterial.ts";

Deno.test("Segment initializes with default values", () => {
  const segment = new Segment();
  const data = segment.getDataValues();
  assertEquals(data.raw_segment_id, "");
  assertEquals(data.caption_info, null);
  assertEquals(data.cartoon, false);
  assertEquals(data.clip.alpha, 1.0);
  assertEquals(data.clip.flip.horizontal, false);
  assertEquals(data.clip.flip.vertical, false);
  assertEquals(data.clip.rotation, 0.0);
  assertEquals(data.clip.scale.x, 1.0);
  assertEquals(data.clip.scale.y, 1.0);
  assertEquals(data.clip.transform.x, 0.0);
  assertEquals(data.clip.transform.y, 0.0);
  assertEquals(data.common_keyframes.length, 0);
  assertEquals(data.desc, "");
  assertEquals(data.enable_adjust, true);
  assertEquals(data.enable_adjust_mask, false);
  assertEquals(data.enable_color_correct_adjust, false);
  assertEquals(data.enable_color_curves, true);
  assertEquals(data.enable_color_match_adjust, false);
  assertEquals(data.enable_color_wheels, true);
  assertEquals(data.enable_hsl, false);
  assertEquals(data.enable_lut, true);
  assertEquals(data.enable_smart_color_adjust, false);
  assertEquals(data.enable_video_mask, true);
  assertEquals(data.extra_material_refs.length, 0);

  assertEquals(data.group_id, "");
  assertEquals(data.hdr_settings.intensity, 1.0);
  assertEquals(data.hdr_settings.mode, 1);
  assertEquals(data.hdr_settings.nits, 1000);
  assertEquals(data.intensifies_audio, false);
  assertEquals(data.is_loop, false);
  assertEquals(data.is_placeholder, false);
  assertEquals(data.is_tone_modify, false);
  assertEquals(data.keyframe_refs.length, 0);
  assertEquals(data.last_nonzero_volume, 1.0);
  assertEquals(data.render_index, 1);
  assertEquals(data.responsive_layout.enable, false);
  assertEquals(data.responsive_layout.horizontal_pos_layout, 0);
  assertEquals(data.responsive_layout.size_layout, 0);
  assertEquals(data.responsive_layout.target_follow, "");
  assertEquals(data.responsive_layout.vertical_pos_layout, 0);
  assertEquals(data.reverse, false);
  assertEquals(data.source_timerange.duration, 5000000);
  assertEquals(data.source_timerange.start, 0);
  assertEquals(data.speed, 1.0);
  assertEquals(data.state, 0);
  assertEquals(data.target_timerange.duration, 5000000);
  assertEquals(data.target_timerange.start, 0);
  assertEquals(data.template_id, "");
  assertEquals(data.template_scene, "default");
  assertEquals(data.track_attribute, 0);
  assertEquals(data.track_render_index, 0);
  assertEquals(data.uniform_scale.on, true);
  assertEquals(data.uniform_scale.value, 1.0);
  assertEquals(data.visible, true);
  assertEquals(data.volume, 1.0);
});

Deno.test("Segment initializes with provided values", () => {
  const initValues = {
    raw_segment_id: "custom_raw_segment_id",
    caption_info: "custom_caption_info",
    cartoon: true,
    clip: {
      alpha: 0.5,
      flip: { horizontal: true, vertical: true },
      rotation: 45.0,
      scale: { x: 2.0, y: 2.0 },
      transform: { x: 10.0, y: 10.0 },
    },
    common_keyframes: ["keyframe1", "keyframe2"],
    desc: "custom_desc",
    enable_adjust: false,
    enable_adjust_mask: true,
    enable_color_correct_adjust: true,
    enable_color_curves: false,
    enable_color_match_adjust: true,
    enable_color_wheels: false,
    enable_hsl: true,
    enable_lut: false,
    enable_smart_color_adjust: true,
    enable_video_mask: false,
    group_id: "custom_group_id",
    hdr_settings: { intensity: 0.5, mode: 2, nits: 500 },
    intensifies_audio: true,
    is_loop: true,
    is_placeholder: true,
    is_tone_modify: true,
    keyframe_refs: ["keyframe_ref1", "keyframe_ref2"],
    last_nonzero_volume: 0.5,
    render_index: 2,
    responsive_layout: {
      enable: true,
      horizontal_pos_layout: 1,
      size_layout: 1,
      target_follow: "custom_target_follow",
      vertical_pos_layout: 1,
    },
    reverse: true,
    source_timerange: { duration: 1000000, start: 500 },
    speed: 2.0,
    state: 1,
    target_timerange: { duration: 1000000, start: 500 },
    template_id: "custom_template_id",
    template_scene: "custom_template_scene",
    track_attribute: 1,
    track_render_index: 1,
    uniform_scale: { on: false, value: 0.5 },
    visible: false,
    volume: 0.5,
  };

  const segment = new Segment(initValues);
  const data = segment.getDataValues();

  assertEquals(data.raw_segment_id, "custom_raw_segment_id");
  assertEquals(data.caption_info, "custom_caption_info");
  assertEquals(data.cartoon, true);
  assertEquals(data.clip.alpha, 0.5);
  assertEquals(data.clip.flip.horizontal, true);
  assertEquals(data.clip.flip.vertical, true);
  assertEquals(data.clip.rotation, 45.0);
  assertEquals(data.clip.scale.x, 2.0);
  assertEquals(data.clip.scale.y, 2.0);
  assertEquals(data.clip.transform.x, 10.0);
  assertEquals(data.clip.transform.y, 10.0);
  assertEquals(data.common_keyframes, ["keyframe1", "keyframe2"]);
  assertEquals(data.desc, "custom_desc");
  assertEquals(data.enable_adjust, false);
  assertEquals(data.enable_adjust_mask, true);
  assertEquals(data.enable_color_correct_adjust, true);
  assertEquals(data.enable_color_curves, false);
  assertEquals(data.enable_color_match_adjust, true);
  assertEquals(data.enable_color_wheels, false);
  assertEquals(data.enable_hsl, true);
  assertEquals(data.enable_lut, false);
  assertEquals(data.enable_smart_color_adjust, true);
  assertEquals(data.enable_video_mask, false);
  assertEquals(data.group_id, "custom_group_id");
  assertEquals(data.hdr_settings.intensity, 0.5);
  assertEquals(data.hdr_settings.mode, 2);
  assertEquals(data.hdr_settings.nits, 500);
  assertEquals(data.intensifies_audio, true);
  assertEquals(data.is_loop, true);
  assertEquals(data.is_placeholder, true);
  assertEquals(data.is_tone_modify, true);
  assertEquals(data.keyframe_refs, ["keyframe_ref1", "keyframe_ref2"]);
  assertEquals(data.last_nonzero_volume, 0.5);
  assertEquals(data.render_index, 2);
  assertEquals(data.responsive_layout.enable, true);
  assertEquals(data.responsive_layout.horizontal_pos_layout, 1);
  assertEquals(data.responsive_layout.size_layout, 1);
  assertEquals(data.responsive_layout.target_follow, "custom_target_follow");
  assertEquals(data.responsive_layout.vertical_pos_layout, 1);
  assertEquals(data.reverse, true);
  assertEquals(data.source_timerange.duration, 1000000);
  assertEquals(data.source_timerange.start, 500);
  assertEquals(data.speed, 2.0);
  assertEquals(data.state, 1);
  assertEquals(data.target_timerange.duration, 1000000);
  assertEquals(data.target_timerange.start, 500);
  assertEquals(data.template_id, "custom_template_id");
  assertEquals(data.template_scene, "custom_template_scene");
  assertEquals(data.track_attribute, 1);
  assertEquals(data.track_render_index, 1);
  assertEquals(data.uniform_scale.on, false);
  assertEquals(data.uniform_scale.value, 0.5);
  assertEquals(data.visible, false);
  assertEquals(data.volume, 0.5);
});

Deno.test("Segment setTrack updates values correctly", () => {
  const segment = new Segment();
  const trackData: ITrack = {
    id: "track_id",
    attribute: 1,
    flag: 3,
    is_default_name: false,
    name: "custom_name",
    type: "audio",
    segments: [],
  };
  const track = new Track(trackData);

  segment.setTrack(track);
  const data = segment.getDataValues();

  assertEquals(segment.track, track);
  assertEquals(data.raw_segment_id, "track_id");
});

Deno.test("Segment setMaterial updates values correctly", () => {
  const segment = new Segment();
  const materialData = {
    id: "material_id",
    duration: 1000000,
  };
  const material = new VideoMaterial(materialData);

  segment.setMaterial(material);
  const data = segment.getDataValues();
  assertEquals(segment.material, material);
  assertEquals(data.material_id, "material_id");
  assertEquals(data.source_timerange.duration, 1000000);
  assertEquals(data.target_timerange.duration, 1000000);
});

Deno.test("Segment setExtraMaterials updates values correctly", () => {
  const segment = new Segment();
  const extraMaterial1 = new SpeedMaterial({ id: "extra_material_id1" });
  const extraMaterial2 = new VocalSeparationMaterial({
    id: "extra_material_id2",
  });
  const extraMaterial3 = new PlaceholderInfoMaterial({
    id: "extra_material_id3",
  });
  const extraMaterial4 = new CanvasMaterial({ id: "extra_material_id4" });
  const extraMaterial5 = new SoundChannelMappingMaterial({
    id: "extra_material_id5",
  });
  segment.setExtraMaterials({
    speeds: extraMaterial1,
    vocal_separations: extraMaterial2,
    placeholder_infos: extraMaterial3,
    canvases: extraMaterial4,
    sound_channel_mappings: extraMaterial5,
  });
  const data = segment.getDataValues();
  assertEquals(segment.extra_materials, {
    speeds: extraMaterial1,
    vocal_separations: extraMaterial2,
    placeholder_infos: extraMaterial3,
    canvases: extraMaterial4,
    sound_channel_mappings: extraMaterial5,
  });
  assertEquals(data.extra_material_refs, [
    "extra_material_id1",
    "extra_material_id2",
    "extra_material_id3",
    "extra_material_id4",
    "extra_material_id5",
  ]);
});

Deno.test("Segment mergeClip updates values correctly", () => {
  const segment = new Segment({
    clip: {
      alpha: 1.0,
      flip: { horizontal: false, vertical: false },
      rotation: 0.0,
      scale: { x: 1.0, y: 1.0 },
      transform: { x: 0.0, y: 0.0 },
    },
  });
  segment.mergeClip({
    flip: { horizontal: true, vertical: true },
    rotation: 45.0,
  });
  const data = segment.getDataValues();
  assertEquals(data.clip.alpha, 1.0);
  assertEquals(data.clip.flip.horizontal, true);
  assertEquals(data.clip.flip.vertical, true);
  assertEquals(data.clip.rotation, 45.0);
  assertEquals(data.clip.scale.x, 1.0);
  assertEquals(data.clip.scale.y, 1.0);
  assertEquals(data.clip.transform.x, 0.0);
  assertEquals(data.clip.transform.y, 0.0);
});

Deno.test("Segment clone materials and extra materials", () => {
  const segment = new Segment();
  segment.setMaterial(new VideoMaterial({ id: "material_id" }));
  segment.setExtraMaterials({
    speeds: new SpeedMaterial({ id: "speed_id" }),
    vocal_separations: new VocalSeparationMaterial({
      id: "vocal_separation_id",
    }),
    placeholder_infos: new PlaceholderInfoMaterial({
      id: "placeholder_info_id",
    }),
    canvases: new CanvasMaterial({ id: "canvas_id" }),
    sound_channel_mappings: new SoundChannelMappingMaterial({
      id: "sound_channel_mapping_id",
    }),
  });

  const clonedSegment = segment.clone();

  assertNotEquals(segment.material, clonedSegment.material);
  assertNotEquals(segment.material?.id, clonedSegment.material?.id);
  assertNotEquals(
    segment.extra_materials.speeds,
    clonedSegment.extra_materials.speeds
  );
  assertNotEquals(
    segment.extra_materials.speeds?.id,
    clonedSegment.extra_materials.speeds?.id
  );
  assertNotEquals(
    segment.extra_materials.vocal_separations,
    clonedSegment.extra_materials.vocal_separations
  );
  assertNotEquals(
    segment.extra_materials.vocal_separations?.id,
    clonedSegment.extra_materials.vocal_separations?.id
  );
  assertNotEquals(
    segment.extra_materials.placeholder_infos,
    clonedSegment.extra_materials.placeholder_infos
  );
  assertNotEquals(
    segment.extra_materials.placeholder_infos?.id,
    clonedSegment.extra_materials.placeholder_infos?.id
  );
  assertNotEquals(
    segment.extra_materials.canvases,
    clonedSegment.extra_materials.canvases
  );
  assertNotEquals(
    segment.extra_materials.canvases?.id,
    clonedSegment.extra_materials.canvases?.id
  );
  assertNotEquals(
    segment.extra_materials.sound_channel_mappings,
    clonedSegment.extra_materials.sound_channel_mappings
  );
  assertNotEquals(
    segment.extra_materials.sound_channel_mappings?.id,
    clonedSegment.extra_materials.sound_channel_mappings?.id
  );
});
