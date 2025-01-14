import { MaterialVideo } from "../../interfaces/Content.ts";
import { DraftMaterial } from "../draft_materials/DraftMaterial.ts";
import { Root } from "../Root.ts";

export class VideoMaterial extends Root<MaterialVideo, VideoMaterial> {
  draftMaterial?: DraftMaterial;

  constructor(init?: Partial<VideoMaterial["data"]>) {
    super(init);
    this.data.path = "";
    this.data.category_name = "local";
    // No IDEA what this is
    this.data.check_flag = 62978047;
    // Duration of who?
    this.data.duration = 0;
    this.data.material_name = "";
    this.data.type = "photo";
    this.data.height = 0;
    this.data.width = 0;

    this.data.aigc_history_id = "";
    this.data.aigc_item_id = "";
    this.data.aigc_type = "none";
    this.data.audio_fade = null;
    this.data.beauty_body_preset_id = "";
    this.data.beauty_face_preset_infos = [];
    this.data.cartoon_path = "";
    this.data.category_id = "";
    this.data.crop = {
      lower_left_x: 0.0,
      lower_left_y: 1.0,
      lower_right_x: 1.0,
      lower_right_y: 1.0,
      upper_left_x: 0.0,
      upper_left_y: 0.0,
      upper_right_x: 1.0,
      upper_right_y: 0.0,
    };
    this.data.crop_ratio = "free";
    this.data.crop_scale = 1.0;
    this.data.extra_type_option = 0;
    this.data.formula_id = "";
    this.data.freeze = null;
    this.data.has_audio = false;
    this.data.has_sound_separated = false;
    this.data.intensifies_audio_path = "";
    this.data.intensifies_path = "";
    this.data.is_ai_generate_content = false;
    this.data.is_copyright = false;
    this.data.is_text_edit_overdub = false;
    this.data.is_unified_beauty_mode = false;
    this.data.local_id = "";
    this.data.local_material_from = "";
    this.data.local_material_id = "";
    this.data.material_id = "";
    this.data.material_url = "";
    this.data.matting = {
      custom_matting_id: "",
      expansion: 0,
      feather: 0,
      flag: 0,
      has_use_quick_brush: false,
      has_use_quick_eraser: false,
      interactiveTime: [],
      path: "",
      reverse: false,
      strokes: [],
    };
    this.data.media_path = "";
    this.data.multi_camera_info = null;
    this.data.object_locked = null;
    this.data.origin_material_id = "";
    this.data.picture_from = "none";
    this.data.picture_set_category_id = "";
    this.data.picture_set_category_name = "";
    this.data.request_id = "";
    this.data.reverse_intensifies_path = "";
    this.data.reverse_path = "";
    this.data.smart_match_info = null;
    this.data.smart_motion = null;
    this.data.source = 0;
    this.data.source_platform = 0;
    this.data.stable = {
      matrix_path: "",
      stable_level: 0,
      time_range: { duration: 0, start: 0 },
    };
    this.data.team_id = "";
    this.data.video_algorithm = {
      ai_background_configs: [],
      aigc_generate: null,
      algorithms: [],
      complement_frame_config: null,
      deflicker: null,
      gameplay_configs: [],
      motion_blur_config: null,
      mouth_shape_driver: null,
      noise_reduction: null,
      path: "",
      quality_enhance: null,
      smart_complement_frame: null,
      super_resolution: null,
      time_range: null,
    };

    Object.assign(this.data, init);
  }

  setDraftMaterial(draftMaterial: DraftMaterial) {
    const draftMaterialData = draftMaterial.getDataValues();
    const metetype = draftMaterialData.metetype;
    if (metetype === "video" || metetype === "photo") {
      const draftMaterialData = draftMaterial.getDataValues();
      this.draftMaterial = draftMaterial;
      this.data.local_material_id = draftMaterialData.id;
      this.data.material_name = draftMaterialData.extra_info;
      this.data.path = draftMaterialData.file_Path;
      this.data.width = draftMaterialData.width;
      this.data.height = draftMaterialData.height;
      this.data.duration = draftMaterialData.duration;
      this.data.type = metetype;
    } else {
      console.warn(
        `DraftMaterial with metetype ${metetype} is not supported by VideoMaterial`
      );
    }
  }

  public override clone() {
    const newObj = super.clone();
    if (this.draftMaterial) {
      newObj.setDraftMaterial(this.draftMaterial.clone());
    }
    return newObj;
  }
}
