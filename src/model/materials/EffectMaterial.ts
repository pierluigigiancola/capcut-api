import { join } from "@std/path";
import { MaterialEffect } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";
import { PATHS } from "../../../capcutPaths.ts";


const effects = {
  FOUNDATION: {
    adjust_params: [],
    algorithm_artifact_path: "",
    apply_target_type: 0,
    bloom_params: null,
    category_id: "panel-text-flower",
    category_name: "Effects",
    effect_id: "3434375",
    enable_skin_tone_correction: false,
    exclusion_group: [],
    face_adjust_params: [],
    formula_id: "",
    intensity_key: "",
    name: "037",
    panel_id: "",
    path: join(PATHS.CACHE_EFFECT,"6c050bb925095f3ad72f1ae21ab84cd3"),
    platform: "all",
    request_id: "202412301151162010FCD78AB37A9D7EE0",
    resource_id: "6745339809763430919",
    source_platform: 0,
    sub_type: "none",
    time_range: null,
    type: "text_effect",
    value: 1.0,
    version: "",
  },
};

export class EffectMaterial extends Root<MaterialEffect, EffectMaterial> {
  constructor(init?: Partial<EffectMaterial["data"]>) {
    super(init);
    Object.assign(this.data, init);
  }

  static get(effect: keyof typeof effects) {
    const data = effects[effect] as Partial<MaterialEffect>;
    return new EffectMaterial(data);
  }
}
