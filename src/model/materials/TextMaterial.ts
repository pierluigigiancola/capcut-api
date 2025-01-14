import { pick } from "@std/collections";
import { MaterialText } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";
import { EffectMaterial } from "./EffectMaterial.ts";
import { assertEquals } from "@std/assert";
import { join } from "@std/path";
import { PATHS } from "../../../capcutPaths.ts";

export interface TextContentInstance {
  text: string;
  styles: Style;
}

export interface Style {
  font: ExtraResource;
  size: number;
  color: number[];
  outline?: Outline;
  effectStyle?: ExtraResource;
  useLetterColor?: boolean;
  bold?: boolean;
}

export interface Outline {
  color: number[];
  width: number;
}

export interface ExtraResource {
  path: string;
  id: string;
}

const fonts = {
  ZYFervent: {
    category_id: "",
    category_name: "",
    effect_id: "7325315777014272514",
    id: "8B37E4A7-1021-4ed8-875B-6CA1B34D1DC1",
    path:join(PATHS.CACHE_EFFECT, "178890802", "edb351323c1814bbb13fdc1149817b88", "ZY Fervent.ttf"),
    resource_id: "7325315777014272514",
    source_platform: 0,
    team_id: "",
    title: "ZY Fervent",
  },
};

Deno.test("convertToHex", () => {
  assertEquals(convertToHex([1, 1, 1]), "#ffffff");
  assertEquals(convertToHex([0, 0, 0]), "#000000");
});

export function convertToHex(color: number[]) {
  // stroke.content.solid.color is normalized to 0-1
  const numberTo256 = (num: number) => Math.round(num * 255);
  return `#${color
    .map(numberTo256)
    .map((n) => n.toString(16).padEnd(2, "0"))
    .join("")}`;
}

Deno.test("toXML fully", () => {
  const data: TextContentInstance = {
    text: "Hello, World!",
    styles: {
      color: [1, 1, 1],
      font: { id: "", path: "" },
      size: 15,
      useLetterColor: true,
      outline: { color: [0, 0, 0], width: 0 },
    },
  };

  assertEquals(
    toXML(data),
    '<font id="" path=""><size=15><color=(1,1,1,1)><outline color=(0,0,0,1) width=0><useLetterColor>[Hello, World!]</useLetterColor></outline></color></size></font>'
  );
});

Deno.test("toXML without some properties", () => {
  const data: TextContentInstance = {
    text: "Hello, World!",
    styles: {
      color: [1, 1, 1],
      font: { id: "", path: "" },
      size: 15,
    },
  };

  assertEquals(
    toXML(data),
    '<font id="" path=""><size=15><color=(1,1,1,1)>[Hello, World!]</color></size></font>'
  );
});

Deno.test("toXML ignore useLetterColor when false", () => {
  const data: TextContentInstance = {
    text: "Hello, World!",
    styles: {
      color: [1, 1, 1],
      font: { id: "", path: "" },
      size: 15,
      useLetterColor: false,
    },
  };

  assertEquals(
    toXML(data),
    '<font id="" path=""><size=15><color=(1,1,1,1)>[Hello, World!]</color></size></font>'
  );
});

function toXML(data: TextContentInstance): string {
  const { text, styles } = data;
  const { color, font, size, useLetterColor, outline, effectStyle, bold } =
    styles;

  let xml = `<font id=\"${font.id}\" path=\"${
    font.path
  }\"><size=${size}><color=(${color.join(",")},1)>`;

  if (bold) {
    xml += `<b>`;
  }

  if (effectStyle) {
    xml += `<effectStyle id=\"${effectStyle.id}\" path=\"${effectStyle.path}\">`;
  }

  if (outline) {
    xml += `<outline color=(${outline.color.join(",")},1) width=${
      outline.width
    }>`;
  }

  if (useLetterColor) {
    xml += `<useLetterColor>`;
  }

  xml += `[${text}]`;

  if (useLetterColor) {
    xml += `</useLetterColor>`;
  }

  if (outline) {
    xml += `</outline>`;
  }

  if (effectStyle) {
    xml += `</effectStyle>`;
  }

  if (bold) {
    xml += `</b>`;
  }

  xml += `</color></size></font>`;

  return xml;
}
export class TextMaterial extends Root<MaterialText, TextMaterial> {
  contentInstance: TextContentInstance;

  constructor(init?: Partial<TextMaterial["data"]>) {
    super(init);

    this.data.type = "text";
    this.data.text_size = 30;
    this.data.text_color = "#FFFFFF";
    this.data.text_alpha = 1.0;
    this.data.alignment = 1;
    this.data.background_alpha = 1.0;
    this.data.background_color = "";
    this.data.background_fill = "";
    this.data.background_height = 0.14;
    this.data.background_horizontal_offset = 0.0;
    this.data.background_round_radius = 0.0;
    this.data.background_style = 0;
    this.data.background_vertical_offset = 0.0;
    this.data.background_width = 0.14;
    this.data.base_content = "";
    this.data.bold_width = 0.0;
    this.data.border_alpha = 1.0;
    this.data.border_color = "";
    this.data.border_width = 0.08;
    this.data.caption_template_info = {
      category_id: "",
      category_name: "",
      effect_id: "",
      is_new: false,
      path: "",
      request_id: "",
      resource_id: "",
      resource_name: "",
      source_platform: 0,
    };
    this.data.check_flag = 7;
    this.data.combo_info = { text_templates: [] };
    this.data.cutoff_postfix = "";
    this.data.fixed_height = -1.0;
    this.data.fixed_width = -1.0;
    this.data.font_category_id = "";
    this.data.font_category_name = "";
    this.data.font_id = "";
    this.data.font_name = "";
    this.data.font_path = PATHS.SYSTEM_FONT;
    this.data.font_resource_id = "";
    this.data.font_size = 15.0;
    this.data.font_source_platform = 0;
    this.data.font_team_id = "";
    this.data.font_third_resource_id = "";
    this.data.font_title = "none";
    this.data.font_url = "";
    this.data.fonts = [];
    this.data.force_apply_line_max_width = false;
    this.data.global_alpha = 1.0;
    this.data.group_id = "";
    this.data.has_shadow = false;
    this.data.initial_scale = 1.0;
    this.data.inner_padding = -1.0;
    this.data.is_lyric_effect = false;
    this.data.is_rich_text = false;
    this.data.is_words_linear = false;
    this.data.italic_degree = 0;
    this.data.ktv_color = "";
    this.data.language = "";
    this.data.layer_weight = 1;
    this.data.letter_spacing = 0.0;
    this.data.line_feed = 1;
    this.data.line_max_width = 0.82;
    this.data.line_spacing = 0.02;
    this.data.lyric_group_id = "";
    this.data.lyrics_template = {
      category_id: "",
      category_name: "",
      effect_id: "",
      panel: "",
      path: "",
      request_id: "",
      resource_id: "",
      resource_name: "",
    };
    this.data.multi_language_current = "none";
    this.data.name = "";
    this.data.oneline_cutoff = false;
    this.data.original_size = [];
    this.data.preset_category = "";
    this.data.preset_category_id = "";
    this.data.preset_has_set_alignment = false;
    this.data.preset_id = "";
    this.data.preset_index = 0;
    this.data.preset_name = "";
    this.data.recognize_task_id = "";
    this.data.recognize_type = 0;
    this.data.relevance_segment = [];
    this.data.shadow_alpha = 0.9;
    this.data.shadow_angle = -45.0;
    this.data.shadow_color = "";
    this.data.shadow_distance = 5.0;
    this.data.shadow_point = { x: 0.6363961030678928, y: -0.6363961030678928 };
    this.data.shadow_smoothing = 0.45;
    this.data.shape_clip_x = false;
    this.data.shape_clip_y = false;
    this.data.source_from = "";
    this.data.style_name = "";
    this.data.sub_type = 0;
    this.data.subtitle_keywords = null;
    this.data.subtitle_template_original_fontsize = 0.0;
    this.data.text_curve = null;
    this.data.text_preset_resource_id = "";
    this.data.text_to_audio_ids = [];
    this.data.tts_auto_update = false;
    this.data.typesetting = 0;
    this.data.underline = false;
    this.data.underline_offset = 0.22;
    this.data.underline_width = 0.05;
    this.data.use_effect_default_color = true;
    this.data.words = { end_time: [], start_time: [], text: [] };

    this.contentInstance = {
      text: "Default text",
      styles: {
        color: [1, 1, 1],
        font: {
          id: "",
          path: PATHS.SYSTEM_FONT,
        },
        size: 15,
      },
    };
    this.data.content = toXML(this.contentInstance);
    Object.assign(this.data, init);
  }

  public setText(value: string) {
    this.contentInstance.text = value;
    this.data.content = toXML(this.contentInstance);
  }

  public setFont(font: keyof typeof fonts) {
    this.contentInstance.styles.font.path = fonts[font].path;
    this.contentInstance.styles.font.id = fonts[font].id;
    this.data.fonts = [fonts[font]];
    this.data.font_path = fonts[font].path;
    this.data.font_resource_id = fonts[font].id;
    this.data.content = toXML(this.contentInstance);
  }

  public setFontSize(value: number) {
    this.contentInstance.styles.size = value;
    this.data.font_size = value;
    this.data.content = toXML(this.contentInstance);
  }

  public setEffect(effect: EffectMaterial) {
    const effectData = effect.getDataValues();
    this.contentInstance.styles.effectStyle = pick(effectData, ["path", "id"]);

    // When applying an effect, the text color and the stroke resets
    delete this.contentInstance.styles.useLetterColor;
    delete this.contentInstance.styles.outline;

    this.data.content = toXML(this.contentInstance);
  }

  public setStroke(stroke: Outline) {
    this.contentInstance.styles.outline = stroke;
    this.data.border_color = convertToHex(stroke.color);
    this.data.border_width = stroke.width;
    // DON'T KNOW EXACTLY HOW THIS IS CALCULATED
    this.data.check_flag = 15;
    this.data.content = toXML(this.contentInstance);
  }

  public setColor(color: number[]) {
    this.data.text_color = convertToHex(color);
    this.data.use_effect_default_color = false;
    this.contentInstance.styles.useLetterColor = true;
    this.contentInstance.styles.color = color;

    this.data.content = toXML(this.contentInstance);
  }

  static cardTextPreset(cardName: string) {
    const returnText = new TextMaterial();
    // This is a trick to set the position of the text without changing its center
    // the padding before the card name is the space between the text and the rarity frame
    // the line of spaces is enough to span the whole canvas making the center of the segment x=0
    // ⚠️ If the font size or the font changes, this will need to be recalculated
    returnText.contentInstance.text = `              ${cardName}\n                                                                           `;
    returnText.contentInstance.styles.bold = true;
    // grabbed directly from the save file
    returnText.data.bold_width = 0.00800000037997961;
    // 0 is align left
    returnText.data.alignment = 0;
    returnText.setFontSize(8);
    return returnText;
  }

  static cardPricePreset(price: string) {
    const returnText = new TextMaterial();
    returnText.contentInstance.text = `                  ${price}\n                                                                                                    `;
    returnText.contentInstance.styles.bold = true;
    returnText.data.bold_width = 0.00800000037997961;
    // 0 is align left
    returnText.data.alignment = 0;
    returnText.setFontSize(6);
    returnText.setColor([0, 0, 0]);
    return returnText;
  }

  public override clone() {
    const newObj = super.clone();
    newObj.contentInstance = JSON.parse(JSON.stringify(newObj.data.content));
    return newObj;
  }
}
