import { assertEquals, assertNotEquals } from "@std/assert";
import { VideoMaterial } from "./VideoMaterial.ts";
import { DraftMaterial } from "../draft_materials/DraftMaterial.ts";
import { Value } from "../../interfaces/MetaInfo.ts";
import { resolve } from "@std/path";

Deno.test("VideoMaterial initializes with default values", () => {
  const videoMaterial = new VideoMaterial();
  const data = videoMaterial.getDataValues();

  assertEquals(data.path, "");
  assertEquals(data.category_name, "local");
  assertEquals(data.check_flag, 62978047);
  assertEquals(data.duration, 0);
  assertEquals(data.material_name, "");
  assertEquals(data.type, "");
  assertEquals(data.height, 0);
  assertEquals(data.width, 0);
  assertEquals(data.aigc_history_id, "");
  assertEquals(data.aigc_item_id, "");
  assertEquals(data.aigc_type, "none");
  assertEquals(data.audio_fade, null);
  assertEquals(data.beauty_body_preset_id, "");
  assertEquals(data.beauty_face_preset_infos.length, 0);
  assertEquals(data.cartoon_path, "");
  assertEquals(data.category_id, "");
  assertEquals(data.crop.lower_left_x, 0.0);
  assertEquals(data.crop.lower_left_y, 1.0);
  assertEquals(data.crop.lower_right_x, 1.0);
  assertEquals(data.crop.lower_right_y, 1.0);
  assertEquals(data.crop.upper_left_x, 0.0);
  assertEquals(data.crop.upper_left_y, 0.0);
  assertEquals(data.crop.upper_right_x, 1.0);
  assertEquals(data.crop.upper_right_y, 0.0);
  assertEquals(data.crop_ratio, "free");
  assertEquals(data.crop_scale, 1.0);
  assertEquals(data.extra_type_option, 0);
  assertEquals(data.formula_id, "");
  assertEquals(data.freeze, null);
  assertEquals(data.has_audio, false);
  assertEquals(data.has_sound_separated, false);
  assertEquals(data.intensifies_audio_path, "");
  assertEquals(data.intensifies_path, "");
  assertEquals(data.is_ai_generate_content, false);
  assertEquals(data.is_copyright, false);
  assertEquals(data.is_text_edit_overdub, false);
  assertEquals(data.is_unified_beauty_mode, false);
  assertEquals(data.local_id, "");
  assertEquals(data.local_material_from, "");
  assertEquals(data.local_material_id, "");
  assertEquals(data.material_id, "");
  assertEquals(data.material_url, "");
  assertEquals(data.matting.custom_matting_id, "");
  assertEquals(data.matting.expansion, 0);
  assertEquals(data.matting.feather, 0);
  assertEquals(data.matting.flag, 0);
  assertEquals(data.matting.has_use_quick_brush, false);
  assertEquals(data.matting.has_use_quick_eraser, false);
  assertEquals(data.matting.interactiveTime.length, 0);
  assertEquals(data.matting.path, "");
  assertEquals(data.matting.reverse, false);
  assertEquals(data.matting.strokes.length, 0);
  assertEquals(data.media_path, "");
  assertEquals(data.multi_camera_info, null);
  assertEquals(data.object_locked, null);
  assertEquals(data.origin_material_id, "");
  assertEquals(data.picture_from, "none");
  assertEquals(data.picture_set_category_id, "");
  assertEquals(data.picture_set_category_name, "");
  assertEquals(data.request_id, "");
  assertEquals(data.reverse_intensifies_path, "");
  assertEquals(data.reverse_path, "");
  assertEquals(data.smart_match_info, null);
  assertEquals(data.smart_motion, null);
  assertEquals(data.source, 0);
  assertEquals(data.source_platform, 0);
  assertEquals(data.stable.matrix_path, "");
  assertEquals(data.stable.stable_level, 0);
  assertEquals(data.stable.time_range.duration, 0);
  assertEquals(data.stable.time_range.start, 0);
  assertEquals(data.team_id, "");
  assertEquals(data.video_algorithm.ai_background_configs.length, 0);
  assertEquals(data.video_algorithm.aigc_generate, null);
  assertEquals(data.video_algorithm.algorithms.length, 0);
  assertEquals(data.video_algorithm.complement_frame_config, null);
  assertEquals(data.video_algorithm.deflicker, null);
  assertEquals(data.video_algorithm.gameplay_configs.length, 0);
  assertEquals(data.video_algorithm.motion_blur_config, null);
  assertEquals(data.video_algorithm.mouth_shape_driver, null);
  assertEquals(data.video_algorithm.noise_reduction, null);
  assertEquals(data.video_algorithm.path, "");
  assertEquals(data.video_algorithm.quality_enhance, null);
  assertEquals(data.video_algorithm.smart_complement_frame, null);
  assertEquals(data.video_algorithm.super_resolution, null);
  assertEquals(data.video_algorithm.time_range, null);
});

Deno.test("VideoMaterial initializes with provided values", () => {
  const videoMaterial = new VideoMaterial({
    id: "custom_id",
    path: "custom_path",
    category_name: "custom_category",
    check_flag: 123456,
    duration: 120,
    material_name: "custom_material",
    type: "photo",
    height: 1080,
    width: 1920,
    aigc_history_id: "custom_aigc_history_id",
    aigc_item_id: "custom_aigc_item_id",
    aigc_type: "custom_aigc_type",
    audio_fade: "custom_audio_fade",
    beauty_body_preset_id: "custom_beauty_body_preset_id",
    beauty_face_preset_infos: ["custom_beauty_face_preset_info"],
    cartoon_path: "custom_cartoon_path",
    category_id: "custom_category_id",
    crop: {
      lower_left_x: 0.1,
      lower_left_y: 0.9,
      lower_right_x: 0.9,
      lower_right_y: 0.9,
      upper_left_x: 0.1,
      upper_left_y: 0.1,
      upper_right_x: 0.9,
      upper_right_y: 0.1,
    },
    crop_ratio: "16:9",
    crop_scale: 1.5,
    extra_type_option: 1,
    formula_id: "custom_formula_id",
    freeze: "custom_freeze",
    has_audio: true,
    has_sound_separated: true,
    intensifies_audio_path: "custom_intensifies_audio_path",
    intensifies_path: "custom_intensifies_path",
    is_ai_generate_content: true,
    is_copyright: true,
    is_text_edit_overdub: true,
    is_unified_beauty_mode: true,
    local_id: "custom_local_id",
    local_material_from: "custom_local_material_from",
    local_material_id: "custom_local_material_id",
    material_id: "custom_material_id",
    material_url: "custom_material_url",
    matting: {
      custom_matting_id: "custom_custom_matting_id",
      expansion: 1,
      feather: 1,
      flag: 1,
      has_use_quick_brush: true,
      has_use_quick_eraser: true,
      interactiveTime: [1, 2, 3],
      path: "custom_path",
      reverse: true,
      strokes: ["custom_stroke"],
    },
    media_path: "custom_media_path",
    multi_camera_info: "custom_multi_camera_info",
    object_locked: "custom_object_locked",
    origin_material_id: "custom_origin_material_id",
    picture_from: "custom_picture_from",
    picture_set_category_id: "custom_picture_set_category_id",
    picture_set_category_name: "custom_picture_set_category_name",
    request_id: "custom_request_id",
    reverse_intensifies_path: "custom_reverse_intensifies_path",
    reverse_path: "custom_reverse_path",
    smart_match_info: "custom_smart_match_info",
    smart_motion: "custom_smart_motion",
    source: 1,
    source_platform: 1,
    stable: {
      matrix_path: "custom_matrix_path",
      stable_level: 1,
      time_range: { duration: 60, start: 0 },
    },
    team_id: "custom_team_id",
    video_algorithm: {
      ai_background_configs: ["custom_ai_background_config"],
      aigc_generate: "custom_aigc_generate",
      algorithms: ["custom_algorithm"],
      complement_frame_config: "custom_complement_frame_config",
      deflicker: "custom_deflicker",
      gameplay_configs: ["custom_gameplay_config"],
      motion_blur_config: "custom_motion_blur_config",
      mouth_shape_driver: "custom_mouth_shape_driver",
      noise_reduction: "custom_noise_reduction",
      path: "custom_path",
      quality_enhance: "custom_quality_enhance",
      smart_complement_frame: "custom_smart_complement_frame",
      super_resolution: "custom_super_resolution",
      time_range: "custom_time_range",
    },
  });
  const data = videoMaterial.getDataValues();

  assertEquals(data.id, "custom_id");
  assertEquals(data.path, "custom_path");
  assertEquals(data.category_name, "custom_category");
  assertEquals(data.check_flag, 123456);
  assertEquals(data.duration, 120);
  assertEquals(data.material_name, "custom_material");
  assertEquals(data.type, "photo");
  assertEquals(data.height, 1080);
  assertEquals(data.width, 1920);
  assertEquals(data.aigc_history_id, "custom_aigc_history_id");
  assertEquals(data.aigc_item_id, "custom_aigc_item_id");
  assertEquals(data.aigc_type, "custom_aigc_type");
  assertEquals(data.audio_fade, "custom_audio_fade");
  assertEquals(data.beauty_body_preset_id, "custom_beauty_body_preset_id");
  assertEquals(data.beauty_face_preset_infos, [
    "custom_beauty_face_preset_info",
  ]);
  assertEquals(data.cartoon_path, "custom_cartoon_path");
  assertEquals(data.category_id, "custom_category_id");
  assertEquals(data.crop.lower_left_x, 0.1);
  assertEquals(data.crop.lower_left_y, 0.9);
  assertEquals(data.crop.lower_right_x, 0.9);
  assertEquals(data.crop.lower_right_y, 0.9);
  assertEquals(data.crop.upper_left_x, 0.1);
  assertEquals(data.crop.upper_left_y, 0.1);
  assertEquals(data.crop.upper_right_x, 0.9);
  assertEquals(data.crop.upper_right_y, 0.1);
  assertEquals(data.crop_ratio, "16:9");
  assertEquals(data.crop_scale, 1.5);
  assertEquals(data.extra_type_option, 1);
  assertEquals(data.formula_id, "custom_formula_id");
  assertEquals(data.freeze, "custom_freeze");
  assertEquals(data.has_audio, true);
  assertEquals(data.has_sound_separated, true);
  assertEquals(data.intensifies_audio_path, "custom_intensifies_audio_path");
  assertEquals(data.intensifies_path, "custom_intensifies_path");
  assertEquals(data.is_ai_generate_content, true);
  assertEquals(data.is_copyright, true);
  assertEquals(data.is_text_edit_overdub, true);
  assertEquals(data.is_unified_beauty_mode, true);
  assertEquals(data.local_id, "custom_local_id");
  assertEquals(data.local_material_from, "custom_local_material_from");
  assertEquals(data.local_material_id, "custom_local_material_id");
  assertEquals(data.material_id, "custom_material_id");
  assertEquals(data.material_url, "custom_material_url");
  assertEquals(data.matting.custom_matting_id, "custom_custom_matting_id");
  assertEquals(data.matting.expansion, 1);
  assertEquals(data.matting.feather, 1);
  assertEquals(data.matting.flag, 1);
  assertEquals(data.matting.has_use_quick_brush, true);
  assertEquals(data.matting.has_use_quick_eraser, true);
  assertEquals(data.matting.interactiveTime, [1, 2, 3]);
  assertEquals(data.matting.path, "custom_path");
  assertEquals(data.matting.reverse, true);
  assertEquals(data.matting.strokes, ["custom_stroke"]);
  assertEquals(data.media_path, "custom_media_path");
  assertEquals(data.multi_camera_info, "custom_multi_camera_info");
  assertEquals(data.object_locked, "custom_object_locked");
  assertEquals(data.origin_material_id, "custom_origin_material_id");
  assertEquals(data.picture_from, "custom_picture_from");
  assertEquals(data.picture_set_category_id, "custom_picture_set_category_id");
  assertEquals(
    data.picture_set_category_name,
    "custom_picture_set_category_name"
  );
  assertEquals(data.request_id, "custom_request_id");
  assertEquals(
    data.reverse_intensifies_path,
    "custom_reverse_intensifies_path"
  );
  assertEquals(data.reverse_path, "custom_reverse_path");
  assertEquals(data.smart_match_info, "custom_smart_match_info");
  assertEquals(data.smart_motion, "custom_smart_motion");
  assertEquals(data.source, 1);
  assertEquals(data.source_platform, 1);
  assertEquals(data.stable.matrix_path, "custom_matrix_path");
  assertEquals(data.stable.stable_level, 1);
  assertEquals(data.stable.time_range.duration, 60);
  assertEquals(data.stable.time_range.start, 0);
  assertEquals(data.team_id, "custom_team_id");
  assertEquals(data.video_algorithm.ai_background_configs, [
    "custom_ai_background_config",
  ]);
  assertEquals(data.video_algorithm.aigc_generate, "custom_aigc_generate");
  assertEquals(data.video_algorithm.algorithms, ["custom_algorithm"]);
  assertEquals(
    data.video_algorithm.complement_frame_config,
    "custom_complement_frame_config"
  );
  assertEquals(data.video_algorithm.deflicker, "custom_deflicker");
  assertEquals(data.video_algorithm.gameplay_configs, [
    "custom_gameplay_config",
  ]);
  assertEquals(
    data.video_algorithm.motion_blur_config,
    "custom_motion_blur_config"
  );
  assertEquals(
    data.video_algorithm.mouth_shape_driver,
    "custom_mouth_shape_driver"
  );
  assertEquals(data.video_algorithm.noise_reduction, "custom_noise_reduction");
  assertEquals(data.video_algorithm.path, "custom_path");
  assertEquals(data.video_algorithm.quality_enhance, "custom_quality_enhance");
  assertEquals(
    data.video_algorithm.smart_complement_frame,
    "custom_smart_complement_frame"
  );
  assertEquals(
    data.video_algorithm.super_resolution,
    "custom_super_resolution"
  );
  assertEquals(data.video_algorithm.time_range, "custom_time_range");
});

Deno.test("VideoMaterial setDraftMaterial updates values correctly", () => {
  const videoMaterial = new VideoMaterial();
  const draftMaterialData: Partial<Value> = {
    id: "draft_id",
    extra_info: "draft_extra_info",
    file_Path: "draft_file_path",
    width: 1920,
    height: 1080,
    duration: 120,
    metetype: "video",
  };

  const draftMaterial = new DraftMaterial({
    ...draftMaterialData,
    file_Path: "draft_file_path",
  });

  videoMaterial.setDraftMaterial(draftMaterial);
  const data = videoMaterial.getDataValues();

  assertEquals(data.local_material_id, "draft_id");
  assertEquals(data.material_name, "draft_extra_info");
  assertEquals(data.path, resolve("draft_file_path"));
  assertEquals(data.width, 1920);
  assertEquals(data.height, 1080);
  assertEquals(data.duration, 120);
  assertEquals(data.type, "video");
});

Deno.test(
  "VideoMaterial clone returns a new instance with the same values",
  () => {
    const videoMaterial = new VideoMaterial({
      id: "custom_id",
    });
    const draftMaterial = new DraftMaterial({
      id: "draft_id",
      file_Path: "draft_file_path",
    });

    videoMaterial.setDraftMaterial(draftMaterial);

    const clonedVideoMaterial = videoMaterial.clone();

    assertNotEquals(videoMaterial, clonedVideoMaterial);
    assertNotEquals(clonedVideoMaterial.id, "custom_id");
    assertNotEquals(clonedVideoMaterial.draftMaterial?.id, "draft_id");
  }
);
