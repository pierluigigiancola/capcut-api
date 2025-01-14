export interface ProjectContent {
  canvas_config: Canvasconfig;
  color_space: number;
  config: Config;
  cover?: unknown;
  create_time: number;
  duration: number;
  extra_info?: unknown;
  fps: number;
  free_render_index_mode_on: boolean;
  group_container?: unknown;
  id: string;
  is_drop_frame_timecode: boolean;
  keyframe_graph_list: unknown[];
  keyframes: Keyframes;
  last_modified_platform: Lastmodifiedplatform;
  lyrics_effects: unknown[];
  materials: Materials;
  mutable_config?: unknown;
  name: string;
  new_version: string;
  path: string;
  platform: Lastmodifiedplatform;
  relationships: unknown[];
  render_index_track_mode_on: boolean;
  retouch_cover?: unknown;
  source: string;
  static_cover_image_path: string;
  time_marks?: unknown;
  tracks: Track[];
  update_time: number;
  version: number;
}

export interface Track {
  attribute: number;
  flag: number;
  id: string;
  is_default_name: boolean;
  name: string;
  segments: ISegment[];
  type: string;
}

export interface ISegment {
  caption_info?: unknown;
  cartoon: boolean;
  clip: IClip;
  common_keyframes: unknown[];
  desc: string;
  enable_adjust: boolean;
  enable_adjust_mask: boolean;
  enable_color_correct_adjust: boolean;
  enable_color_curves: boolean;
  enable_color_match_adjust: boolean;
  enable_color_wheels: boolean;
  enable_hsl: boolean;
  enable_lut: boolean;
  enable_smart_color_adjust: boolean;
  enable_video_mask: boolean;
  extra_material_refs: string[];
  group_id: string;
  hdr_settings: Hdrsettings;
  id: string;
  intensifies_audio: boolean;
  is_loop: boolean;
  is_placeholder: boolean;
  is_tone_modify: boolean;
  keyframe_refs: unknown[];
  last_nonzero_volume: number;
  lyric_keyframes?: unknown;
  material_id: string;
  raw_segment_id: string;
  render_index: number;
  responsive_layout: Responsivelayout;
  reverse: boolean;
  source_timerange: Timerange;
  speed: number;
  state: number;
  target_timerange: Timerange;
  template_id: string;
  template_scene: string;
  track_attribute: number;
  track_render_index: number;
  uniform_scale: Uniformscale;
  visible: boolean;
  volume: number;
}

export interface Uniformscale {
  on: boolean;
  value: number;
}

export interface Responsivelayout {
  enable: boolean;
  horizontal_pos_layout: number;
  size_layout: number;
  target_follow: string;
  vertical_pos_layout: number;
}

export interface Hdrsettings {
  intensity: number;
  mode: number;
  nits: number;
}

export interface IClip {
  alpha: number;
  flip: Flip;
  rotation: number;
  scale: Scale;
  transform: Scale;
}

export interface Scale {
  x: number;
  y: number;
}

export interface Flip {
  horizontal: boolean;
  vertical: boolean;
}

export interface Materials {
  ai_translates: unknown[];
  audio_balances: unknown[];
  audio_effects: unknown[];
  audio_fades: MaterialAudioFade[];
  audio_track_indexes: unknown[];
  audios: MaterialAudio[];
  beats: MaterialBeat[];
  canvases: MaterialCanvas[];
  chromas: unknown[];
  color_curves: unknown[];
  common_mask: unknown[];
  digital_humans: unknown[];
  drafts: unknown[];
  effects: MaterialEffect[];
  flowers: unknown[];
  green_screens: unknown[];
  handwrites: unknown[];
  hsl: unknown[];
  images: unknown[];
  log_color_wheels: unknown[];
  loudnesses: unknown[];
  manual_deformations: unknown[];
  material_animations: MaterialAnimation[];
  material_colors: unknown[];
  multi_language_refs: unknown[];
  placeholder_infos: MaterialPlaceholderinfo[];
  placeholders: unknown[];
  plugin_effects: unknown[];
  primary_color_wheels: unknown[];
  realtime_denoises: unknown[];
  shapes: unknown[];
  smart_crops: unknown[];
  smart_relights: unknown[];
  sound_channel_mappings: MaterialSoundChannelMapping[];
  speeds: MaterialSpeed[];
  stickers: unknown[];
  tail_leaders: unknown[];
  text_templates: MaterialTextTemplate[];
  texts: MaterialText[];
  time_marks: unknown[];
  transitions: unknown[];
  video_effects: unknown[];
  video_trackings: unknown[];
  videos: MaterialVideo[];
  vocal_beautifys: unknown[];
  vocal_separations: MaterialVocalSeparation[];
}

export interface MaterialEffect {
  adjust_params: unknown[];
  algorithm_artifact_path: string;
  apply_target_type: number;
  bloom_params?: unknown;
  category_id: string;
  category_name: string;
  color_match_info: Colormatchinfo;
  covering_relation_change: number;
  effect_id: string;
  enable_skin_tone_correction: boolean;
  exclusion_group: unknown[];
  face_adjust_params: unknown[];
  formula_id: string;
  id: string;
  intensity_key: string;
  item_effect_type: number;
  lumi_hub_path: string;
  multi_language_current: string;
  name: string;
  panel_id: string;
  path: string;
  platform: string;
  request_id: string;
  resource_id: string;
  source_platform: number;
  sub_type: string;
  third_resource_id: string;
  time_range?: unknown;
  type: "text_effect";
  value: number;
  version: string;
}

export interface Colormatchinfo {
  source_feature_path: string;
  target_feature_path: string;
  target_image_path: string;
}

export interface MaterialAudioFade {
  fade_in_duration: number;
  fade_out_duration: number;
  fade_type: number;
  id: string;
  type: "audio_fade";
}

export interface MaterialBeat {
  ai_beats: Aibeats;
  enable_ai_beats: boolean;
  gear: number;
  gear_count: number;
  id: string;
  mode: number;
  type: "beats";
  user_beats: unknown[];
  user_delete_ai_beats?: unknown;
}

export interface Aibeats {
  beat_speed_infos: unknown[];
  beats_path: string;
  beats_url: string;
  melody_path: string;
  melody_percents: number[];
  melody_url: string;
}

export interface MaterialAudio {
  app_id: number;
  category_id: string;
  category_name: string;
  check_flag: number;
  duration: number;
  effect_id: string;
  formula_id: string;
  id: string;
  intensifies_path: string;
  local_material_id: string;
  music_id: string;
  name: string;
  path: string;
  request_id: string;
  resource_id: string;
  source_platform: number;
  team_id: string;
  text_id: string;
  tone_category_id: string;
  tone_category_name: string;
  tone_effect_id: string;
  tone_effect_name: string;
  tone_speaker: string;
  tone_type: string;
  type: "music" | "extract_music";
  video_id: string;
  wave_points: never[];
}

export interface Similiarmusicinfo {
  original_song_id: string;
  original_song_name: string;
}

export interface MaterialAnimation {
  animations: MaterialAnimationInstance[];
  id: string;
  multi_language_current: string;
  type: "sticker_animation";
}

export interface MaterialAnimationInstance {
  anim_adjust_params?: unknown;
  category_id: string;
  category_name: string;
  duration: number;
  id: string;
  material_type: string;
  name: string;
  panel: string;
  path: string;
  platform: string;
  resource_id: string;
  start: number;
  type: string;
}

export interface MaterialTextTemplate {
  aigc_config?: unknown;
  aigc_type: string;
  category_id: string;
  category_name: string;
  check_flag: number;
  effect_id: string;
  formula_id: string;
  id: string;
  is_3d: boolean;
  is_pre_rendered: boolean;
  name: string;
  non_text_info_resources: Nontextinforesource[];
  path: string;
  platform: string;
  request_id: string;
  resource_id: string;
  resources: Resource[];
  source_platform: number;
  text_info_resources: Textinforesource[];
  text_template_preset_resource_id: string;
  text_template_resource_type: string;
  text_to_audio_ids: unknown[];
  type: "text_template";
  version: string;
}

export interface Textinforesource {
  attach_info: Attachinfo;
  extra_material_refs: string[];
  text_material_id: string;
}

export interface Resource {
  panel: string;
  path: string;
  resource_id: string;
  source_platform: number;
}

export interface Nontextinforesource {
  attach_info: Attachinfo;
  name: string;
  shape_param: Shapeparam;
  type: string;
}

export interface Shapeparam {
  points: unknown[];
  shape_type: number;
}

export interface Attachinfo {
  clip: IClip;
  duration: number;
  original_size_height: number;
  original_size_width: number;
  start_time: number;
}

export interface MaterialText {
  add_type: number;
  alignment: number;
  background_alpha: number;
  background_color: string;
  background_fill: string;
  background_height: number;
  background_horizontal_offset: number;
  background_round_radius: number;
  background_style: number;
  background_vertical_offset: number;
  background_width: number;
  base_content: string;
  bold_width: number;
  border_alpha: number;
  border_color: string;
  border_width: number;
  caption_template_info: Captiontemplateinfo;
  check_flag: number;
  combo_info: Comboinfo;
  content: string;
  cutoff_postfix: string;
  fixed_height: number;
  fixed_width: number;
  font_category_id: string;
  font_category_name: string;
  font_id: string;
  font_name: string;
  font_path: string;
  font_resource_id: string;
  font_size: number;
  font_source_platform: number;
  font_team_id: string;
  font_third_resource_id: string;
  font_title: string;
  font_url: string;
  fonts: Font[];
  force_apply_line_max_width: boolean;
  global_alpha: number;
  group_id: string;
  has_shadow: boolean;
  id: string;
  initial_scale: number;
  inner_padding: number;
  is_lyric_effect: boolean;
  is_rich_text: boolean;
  is_words_linear: boolean;
  italic_degree: number;
  ktv_color: string;
  language: string;
  layer_weight: number;
  letter_spacing: number;
  line_feed: number;
  line_max_width: number;
  line_spacing: number;
  lyric_group_id: string;
  lyrics_template: Lyricstemplate;
  multi_language_current: string;
  name: string;
  oneline_cutoff: boolean;
  original_size: unknown[];
  preset_category: string;
  preset_category_id: string;
  preset_has_set_alignment: boolean;
  preset_id: string;
  preset_index: number;
  preset_name: string;
  recognize_task_id: string;
  recognize_type: number;
  relevance_segment: unknown[];
  shadow_alpha: number;
  shadow_angle: number;
  shadow_color: string;
  shadow_distance: number;
  shadow_point: Shadowpoint;
  shadow_smoothing: number;
  shape_clip_x: boolean;
  shape_clip_y: boolean;
  source_from: string;
  style_name: string;
  sub_type: number;
  subtitle_keywords?: unknown;
  subtitle_template_original_fontsize: number;
  text_alpha: number;
  text_color: string;
  text_curve?: unknown;
  text_preset_resource_id: string;
  text_size: number;
  text_to_audio_ids: unknown[];
  tts_auto_update: boolean;
  type: "text";
  typesetting: number;
  underline: boolean;
  underline_offset: number;
  underline_width: number;
  use_effect_default_color: boolean;
  words: Words;
}

export interface Words {
  end_time: unknown[];
  start_time: unknown[];
  text: unknown[];
}

export interface Shadowpoint {
  x: number;
  y: number;
}

export interface Lyricstemplate {
  category_id: string;
  category_name: string;
  effect_id: string;
  panel: string;
  path: string;
  request_id: string;
  resource_id: string;
  resource_name: string;
}

export interface Font {
  category_id: string;
  category_name: string;
  effect_id: string;
  id: string;
  path: string;
  resource_id: string;
  source_platform: number;
  team_id: string;
  title: string;
}

export interface Comboinfo {
  text_templates: unknown[];
}

export interface Captiontemplateinfo {
  category_id: string;
  category_name: string;
  effect_id: string;
  is_new: boolean;
  path: string;
  request_id: string;
  resource_id: string;
  resource_name: string;
  source_platform: number;
}

export interface MaterialVocalSeparation {
  choice: number;
  id: string;
  production_path: string;
  removed_sounds: unknown[];
  time_range?: unknown;
  type: "vocal_separation";
}

export interface MaterialVideo {
  aigc_history_id: string;
  aigc_item_id: string;
  aigc_type: string;
  audio_fade?: unknown;
  beauty_body_preset_id: string;
  beauty_face_preset_infos: unknown[];
  cartoon_path: string;
  category_id: string;
  category_name: string;
  check_flag: number;
  crop: Crop;
  crop_ratio: string;
  crop_scale: number;
  duration: number;
  extra_type_option: number;
  formula_id: string;
  freeze?: unknown;
  has_audio: boolean;
  has_sound_separated: boolean;
  height: number;
  id: string;
  intensifies_audio_path: string;
  intensifies_path: string;
  is_ai_generate_content: boolean;
  is_copyright: boolean;
  is_text_edit_overdub: boolean;
  is_unified_beauty_mode: boolean;
  local_id: string;
  local_material_from: string;
  local_material_id: string;
  material_id: string;
  material_name: string;
  material_url: string;
  matting: Matting;
  media_path: string;
  multi_camera_info?: unknown;
  object_locked?: unknown;
  origin_material_id: string;
  path: string;
  picture_from: string;
  picture_set_category_id: string;
  picture_set_category_name: string;
  request_id: string;
  reverse_intensifies_path: string;
  reverse_path: string;
  smart_match_info?: unknown;
  smart_motion?: unknown;
  source: number;
  source_platform: number;
  stable: Stable;
  team_id: string;
  type: "photo" | "video";
  video_algorithm: Videoalgorithm;
  width: number;
}

export interface Videoalgorithm {
  ai_background_configs: unknown[];
  aigc_generate?: unknown;
  algorithms: unknown[];
  complement_frame_config?: unknown;
  deflicker?: unknown;
  gameplay_configs: unknown[];
  motion_blur_config?: unknown;
  mouth_shape_driver?: unknown;
  noise_reduction?: unknown;
  path: string;
  quality_enhance?: unknown;
  smart_complement_frame?: unknown;
  super_resolution?: unknown;
  time_range?: unknown;
}

export interface Stable {
  matrix_path: string;
  stable_level: number;
  time_range: Timerange;
}

export interface Timerange {
  duration: number;
  start: number;
}

export interface Matting {
  custom_matting_id: string;
  expansion: number;
  feather: number;
  flag: number;
  has_use_quick_brush: boolean;
  has_use_quick_eraser: boolean;
  interactiveTime: unknown[];
  path: string;
  reverse: boolean;
  strokes: unknown[];
}

export interface Crop {
  lower_left_x: number;
  lower_left_y: number;
  lower_right_x: number;
  lower_right_y: number;
  upper_left_x: number;
  upper_left_y: number;
  upper_right_x: number;
  upper_right_y: number;
}

export interface MaterialSpeed {
  curve_speed?: unknown;
  id: string;
  mode: number;
  speed: number;
  type: "speed";
}

export interface MaterialSoundChannelMapping {
  audio_channel_mapping: number;
  id: string;
  is_config_open: boolean;
  type: string;
}

export interface MaterialPlaceholderinfo {
  error_path: string;
  error_text: string;
  id: string;
  meta_type: string;
  res_path: string;
  res_text: string;
  type: "placeholder_info";
}

export interface MaterialCanvas {
  album_image: string;
  blur: number;
  color: string;
  id: string;
  image: string;
  image_id: string;
  image_name: string;
  source_platform: number;
  team_id: string;
  type: "canvas_color";
}

export interface Lastmodifiedplatform {
  app_id: number;
  app_source: string;
  app_version: string;
  device_id: string;
  hard_disk_id: string;
  mac_address: string;
  os: string;
  os_version: string;
}

export interface Keyframes {
  adjusts: unknown[];
  audios: unknown[];
  effects: unknown[];
  filters: unknown[];
  handwrites: unknown[];
  stickers: unknown[];
  texts: unknown[];
  videos: unknown[];
}

export interface Config {
  adjust_max_index: number;
  attachment_info: unknown[];
  combination_max_index: number;
  export_range?: unknown;
  extract_audio_last_index: number;
  lyrics_recognition_id: string;
  lyrics_sync: boolean;
  lyrics_taskinfo: unknown[];
  maintrack_adsorb: boolean;
  material_save_mode: number;
  multi_language_current: string;
  multi_language_list: unknown[];
  multi_language_main: string;
  multi_language_mode: string;
  original_sound_last_index: number;
  record_audio_last_index: number;
  sticker_max_index: number;
  subtitle_keywords_config?: unknown;
  subtitle_recognition_id: string;
  subtitle_sync: boolean;
  subtitle_taskinfo: unknown[];
  system_font_list: unknown[];
  video_mute: boolean;
  zoom_info_params?: unknown;
}

export interface Canvasconfig {
  background?: unknown;
  height: number;
  ratio: string;
  width: number;
}
