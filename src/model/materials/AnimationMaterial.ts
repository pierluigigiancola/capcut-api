import { join } from "@std/path";
import {
  MaterialAnimation,
  MaterialAnimationInstance,
} from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";
import { Segment } from "../segments/Segments.ts";
import { PATHS } from "../../../capcutPaths.ts";

type Animations = "fadeIn" | "fadeOut" | "slideRightIn" | "slideRightOut";

const animations: Partial<
  Record<
    NonNullable<Segment["material"]>["data"]["type"],
    Record<Animations, MaterialAnimationInstance>
  >
> = {
  text: {
    fadeIn: {
      anim_adjust_params: null,
      category_id: "ruchang",
      category_name: "In",
      duration: 500000,
      id: "3440918",
      material_type: "sticker",
      name: "Fade In",
      panel: "",
      path: join(PATHS.CACHE_EFFECT, "3440918", "3ed092e2c06abae5644f5f12014e3020"),
      platform: "all",
      resource_id: "6724916044072227332",
      start: 0,
      type: "in",
    },
    fadeOut: {
      anim_adjust_params: { anim_mode: "all", direction: "" },
      category_id: "chuchang",
      category_name: "Out",
      duration: 500000,
      id: "3440936",
      material_type: "sticker",
      name: "Fade Out",
      panel: "",
      path: join(PATHS.CACHE_EFFECT, "3440936", "6ecc8fa1d956c3e14c84cdc0679982a9"),
      platform: "all",
      resource_id: "6724919382104871427",
      start: 0,
      type: "out",
    },
    slideRightIn: {
      anim_adjust_params: null,
      category_id: "ruchang",
      category_name: "In",
      duration: 500000,
      id: "3440924",
      material_type: "sticker",
      name: "Slide Right",
      panel: "",
      path: join(PATHS.CACHE_EFFECT, "3440924", "c49f75ef6e0f886e570f68a00f7c1312"),
      platform: "all",
      resource_id: "6724920136056181256",
      start: 0,
      type: "in",
    },
    slideRightOut: {
      anim_adjust_params: null,
      category_id: "chuchang",
      category_name: "Out",
      duration: 500000,
      id: "3440958",
      material_type: "sticker",
      name: "Slide Right",
      panel: "",
      path: join(PATHS.CACHE_EFFECT, "3440958", "4026a211f18b0fc6ab9e10d09c8922ba"),
      platform: "all",
      resource_id: "6724920744431587853",
      start: 0,
      type: "out",
    },
  },
  video: {
    fadeIn: {
      anim_adjust_params: null,
      category_id: "25147",
      category_name: "In",
      duration: 500000,
      id: "3440029",
      material_type: "video",
      name: "Fade In",
      panel: "video",
      path: join(PATHS.CACHE_EFFECT, "3440029", "883ad04bd79b502aaa55b5d9b87175ea"),
      platform: "all",
      resource_id: "6798320778182922760",
      start: 0,
      type: "in",
    },
    fadeOut: {
      anim_adjust_params: { anim_mode: "all", direction: "" },
      category_id: "25148",
      category_name: "Out",
      duration: 500000,
      id: "3440030",
      material_type: "video",
      name: "Fade Out",
      panel: "video",
      path: join(PATHS.CACHE_EFFECT, "3440030", "c6f05ce62355b537be762550040bfc08"),
      platform: "all",
      resource_id: "6798320902548230669",
      start: 0,
      type: "out",
    },
    // TODO: map video effect slideRightIn and slideRightOut
    slideRightIn: {} as any,
    slideRightOut: {} as any,
  },
};

animations.photo = animations.video;

export class AnimationMaterial extends Root<
  MaterialAnimation,
  AnimationMaterial
> {
  segment_instance?: Segment;

  constructor(content?: Partial<AnimationMaterial["data"]>) {
    super(content);
    Object.assign(this.data, {
      animations: [],
      multi_language_current: "none",
      type: "sticker_animation",
    });

    Object.assign(this.data, content);
  }

  setSegment(segment: Segment) {
    this.segment_instance = segment;
  }

  addFadeIn(overrides?: Pick<MaterialAnimationInstance, "duration">) {
    const animationData = this.addAnimation("fadeIn", overrides);
    this.data.animations.push(animationData);
  }

  addFadeOut(overrides?: Pick<MaterialAnimationInstance, "duration">) {
    const segment_timerange =
      this.segment_instance?.getDataValues().target_timerange;
    let start = 0;
    const duration = overrides?.duration || 500000;
    if (segment_timerange?.duration !== undefined) {
      start = segment_timerange.duration - duration;
    }

    const animationData = this.addAnimation("fadeOut", {
      start,
      duration,
      ...overrides,
    });
    this.data.animations.push(animationData);
  }

  addSlideRightIn(overrides?: Pick<MaterialAnimationInstance, "duration">) {
    const animationData = this.addAnimation("slideRightIn", overrides);
    this.data.animations.push(animationData);
  }

  addSlideRightOut(overrides?: Pick<MaterialAnimationInstance, "duration">) {
    const animationData = this.addAnimation("slideRightOut", overrides);
    this.data.animations.push(animationData);
  }

  private addAnimation(
    animation: keyof NonNullable<(typeof animations)[keyof typeof animations]>,
    overrides?: Partial<MaterialAnimationInstance>
  ) {
    if (this.segment_instance === undefined) {
      throw new Error(
        "Segment is not set, before applying an animation you need to set the segment"
      );
    }
    const material = this.segment_instance.material;
    if (material === undefined) {
      throw new Error(
        "Segment material is not set, before applying an animation the Segment must have a material"
      );
    }
    // @ts-expect-error deno-ts(2532) don't know why deno keep complaining about material being undefined
    const animationData = animations[material.getDataValues().type][animation];
    if (animationData === undefined) {
      throw new Error(
        `Animation ${animation} is not available for material type ${
          material.getDataValues().type
        }`
      );
    }
    return {
      ...animationData,
      ...overrides,
    };
  }

  public override clone() {
    const newObj = super.clone();
    // ⚠️ this goes infinite when cloning Segment
    // newObj.segment_instance = this.segment_instance?.clone();
    return newObj;
  }
}
