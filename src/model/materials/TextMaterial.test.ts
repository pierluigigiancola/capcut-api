import { assertEquals, assertNotEquals } from "@std/assert";
import { TextMaterial } from "./TextMaterial.ts";
import { PATHS } from "../../../capcutPaths.ts";

Deno.test("TextMaterial initializes with default values", () => {
  const textMaterial = new TextMaterial();
  const data = textMaterial.getDataValues();

  assertEquals(data.type, "text");
  assertEquals(data.text_size, 30);
  assertEquals(data.text_color, "#FFFFFF");
  assertEquals(data.text_alpha, 1.0);
  assertEquals(data.alignment, 1);
  assertEquals(data.background_alpha, 1.0);
  assertEquals(data.background_color, "");
  assertEquals(data.background_fill, "");
  assertEquals(data.background_height, 0.14);
  assertEquals(data.background_horizontal_offset, 0.0);
  assertEquals(data.background_round_radius, 0.0);
  assertEquals(data.background_style, 0);
  assertEquals(data.background_vertical_offset, 0.0);
  assertEquals(data.background_width, 0.14);
  assertEquals(data.base_content, "");
  assertEquals(data.bold_width, 0.0);
  assertEquals(data.border_alpha, 1.0);
  assertEquals(data.border_color, "");
  assertEquals(data.border_width, 0.08);
  assertEquals(data.caption_template_info.category_id, "");
  assertEquals(data.caption_template_info.category_name, "");
  assertEquals(data.caption_template_info.effect_id, "");
  assertEquals(data.caption_template_info.is_new, false);
  assertEquals(data.caption_template_info.path, "");
  assertEquals(data.caption_template_info.request_id, "");
  assertEquals(data.caption_template_info.resource_id, "");
  assertEquals(data.caption_template_info.resource_name, "");
  assertEquals(data.caption_template_info.source_platform, 0);
  assertEquals(data.check_flag, 7);
  assertEquals(data.combo_info.text_templates.length, 0);
  assertEquals(
    data.content, `<font id="" path=${PATHS.SYSTEM_FONT}><size=15><color=(1,1,1,1)>[Default text]</color></size></font>`
  );
  assertEquals(data.cutoff_postfix, "");
  assertEquals(data.fixed_height, -1.0);
  assertEquals(data.fixed_width, -1.0);
  assertEquals(data.font_category_id, "");
  assertEquals(data.font_category_name, "");
  assertEquals(data.font_id, "");
  assertEquals(data.font_name, "");
  assertEquals(
    data.font_path,
    PATHS.SYSTEM_FONT
  );
  assertEquals(data.font_resource_id, "");
  assertEquals(data.font_size, 15.0);
  assertEquals(data.font_source_platform, 0);
  assertEquals(data.font_team_id, "");
  assertEquals(data.font_third_resource_id, "");
  assertEquals(data.font_title, "none");
  assertEquals(data.font_url, "");
  assertEquals(data.fonts.length, 0);
  assertEquals(data.force_apply_line_max_width, false);
  assertEquals(data.global_alpha, 1.0);
  assertEquals(data.group_id, "");
  assertEquals(data.has_shadow, false);
  assertEquals(data.initial_scale, 1.0);
  assertEquals(data.inner_padding, -1.0);
  assertEquals(data.is_lyric_effect, false);
  assertEquals(data.is_rich_text, false);
  assertEquals(data.is_words_linear, false);
  assertEquals(data.italic_degree, 0);
  assertEquals(data.ktv_color, "");
  assertEquals(data.language, "");
  assertEquals(data.layer_weight, 1);
  assertEquals(data.letter_spacing, 0.0);
  assertEquals(data.line_feed, 1);
  assertEquals(data.line_max_width, 0.82);
  assertEquals(data.line_spacing, 0.02);
  assertEquals(data.lyric_group_id, "");
  assertEquals(data.lyrics_template.category_id, "");
  assertEquals(data.lyrics_template.category_name, "");
  assertEquals(data.lyrics_template.effect_id, "");
  assertEquals(data.lyrics_template.panel, "");
  assertEquals(data.lyrics_template.path, "");
  assertEquals(data.lyrics_template.request_id, "");
  assertEquals(data.lyrics_template.resource_id, "");
  assertEquals(data.lyrics_template.resource_name, "");
  assertEquals(data.multi_language_current, "none");
  assertEquals(data.name, "");
  assertEquals(data.oneline_cutoff, false);
  assertEquals(data.original_size.length, 0);
  assertEquals(data.preset_category, "");
  assertEquals(data.preset_category_id, "");
  assertEquals(data.preset_has_set_alignment, false);
  assertEquals(data.preset_id, "");
  assertEquals(data.preset_index, 0);
  assertEquals(data.preset_name, "");
  assertEquals(data.recognize_task_id, "");
  assertEquals(data.recognize_type, 0);
  assertEquals(data.relevance_segment.length, 0);
  assertEquals(data.shadow_alpha, 0.9);
  assertEquals(data.shadow_angle, -45.0);
  assertEquals(data.shadow_color, "");
  assertEquals(data.shadow_distance, 5.0);
  assertEquals(data.shadow_point.x, 0.6363961030678928);
  assertEquals(data.shadow_point.y, -0.6363961030678928);
  assertEquals(data.shadow_smoothing, 0.45);
  assertEquals(data.shape_clip_x, false);
  assertEquals(data.shape_clip_y, false);
  assertEquals(data.source_from, "");
  assertEquals(data.style_name, "");
  assertEquals(data.sub_type, 0);
  assertEquals(data.subtitle_keywords, null);
  assertEquals(data.subtitle_template_original_fontsize, 0.0);
  assertEquals(data.text_curve, null);
  assertEquals(data.text_preset_resource_id, "");
  assertEquals(data.text_to_audio_ids.length, 0);
  assertEquals(data.tts_auto_update, false);
  assertEquals(data.typesetting, 0);
  assertEquals(data.underline, false);
  assertEquals(data.underline_offset, 0.22);
  assertEquals(data.underline_width, 0.05);
  assertEquals(data.use_effect_default_color, true);
  assertEquals(data.words.end_time.length, 0);
  assertEquals(data.words.start_time.length, 0);
  assertEquals(data.words.text.length, 0);
});

Deno.test("TextMaterial clone", () => {
  const textMaterial = new TextMaterial({
    content: `<font id="" path=${PATHS.SYSTEM_FONT}><size=15><color=(1,1,1,1)>[Default text]</color></size></font>`
  });
  textMaterial.setText("Hello World");
  const clone = textMaterial.clone();

  assertNotEquals(textMaterial, clone);
  assertNotEquals(textMaterial.contentInstance, clone.contentInstance);
  assertEquals(textMaterial.contentInstance.text, 'Default text')
  assertEquals(clone.contentInstance.text, 'Hello World')
});
