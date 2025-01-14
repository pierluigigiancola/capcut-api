import { join } from "@std/path";
import { MaterialAudio } from "../../interfaces/Content.ts";
import { DraftMaterial } from "../draft_materials/DraftMaterial.ts";
import { Root } from "../Root.ts";

const capcutCachePath = join("your", 'path', 'to', 'CapCut', 'User Data', 'Cache');

const capcutCacheMusicPath = join(capcutCachePath, "music");

const base = {
  app_id: 1775,
  category_id: "search_audio",
  category_name: "search_audio",
  check_flag: 1,
  effect_id: "",
  formula_id: "",
  intensifies_path: "",
  local_material_id: "",
  request_id: "",
  resource_id: "",
  source_platform: 0,
  team_id: "",
  text_id: "",
  tone_category_id: "",
  tone_category_name: "",
  tone_effect_id: "",
  tone_effect_name: "",
  tone_speaker: "",
  tone_type: "",
  type: "music",
  video_id: "",
  wave_points: [],
};

const audios = {
  lofiWarmth: {
    ...base,
    duration: 60000000,
    music_id: "7431142741662369808",
    path: join(capcutCacheMusicPath, "e7dd5448aa25c726f615e5e1620f3c3f.mp3"),
    name: "Lofi Warmth",
    type: "music",
  },
};

export class AudioMaterial extends Root<MaterialAudio, AudioMaterial> {
  draftMaterial?: DraftMaterial;

  constructor(init?: Partial<AudioMaterial["data"]>) {
    super(init);

    Object.assign(this.data, {
      ai_music_type: 0,
      aigc_history_id: "",
      aigc_item_id: "",
      app_id: 1775,
      category_id: "search_audio",
      category_name: "search_audio",
      check_flag: 1,
      copyright_limit_type: "none",
      duration: 60000000,
      effect_id: "",
      formula_id: "",
      intensifies_path: "",
      is_ai_clone_tone: false,
      is_ai_clone_tone_post: false,
      is_text_edit_overdub: false,
      is_ugc: false,
      local_material_id: "",
      lyric_type: 0,
      music_id: "7431142741662369808",
      music_source: "",
      name: "Lofi Warmth",
      // ⚠️ this need setup...is always the same once it's downloaded similar to the fonts and other resources
      path: join(capcutCacheMusicPath, "e7dd5448aa25c726f615e5e1620f3c3f.mp3"),
      pgc_id: "",
      pgc_name: "",
      query: "",
      request_id: "",
      resource_id: "",
      search_id: "",
      similiar_music_info: {
        original_song_id: "",
        original_song_name: "",
      },
      sound_separate_type: "",
      source_from: "",
      source_platform: 0,
      team_id: "",
      text_id: "",
      third_resource_id: "",
      tone_category_id: "",
      tone_category_name: "",
      tone_effect_id: "",
      tone_effect_name: "",
      tone_emotion_name_key: "",
      tone_emotion_role: "",
      tone_emotion_scale: 0.0,
      tone_emotion_selection: "",
      tone_emotion_style: "",
      tone_platform: "",
      tone_second_category_id: "",
      tone_second_category_name: "",
      tone_speaker: "",
      tone_type: "",
      tts_generate_scene: "",
      tts_task_id: "",
      type: "music",
      video_id: "",
      wave_points: [],
    });

    Object.assign(this.data, init);
  }

  setDraftMaterial(draftMaterial: DraftMaterial) {
    const draftMaterialData = draftMaterial.getDataValues();
    this.draftMaterial = draftMaterial;
    this.data.local_material_id = draftMaterialData.id;
    this.data.name = draftMaterialData.extra_info;
    this.data.path = draftMaterialData.file_Path;
    this.data.duration = draftMaterialData.duration;
    this.data.type = "extract_music";
  }

  static get(selector: keyof typeof audios) {
    const data = audios[selector] as Partial<MaterialAudio>;
    return new AudioMaterial(data);
  }
}
