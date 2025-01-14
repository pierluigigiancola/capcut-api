import { ISegment, Timerange } from "../../interfaces/Content.ts";
import { Root, WithId } from "../Root.ts";
import { AudioMaterial } from "../materials/AudioMaterial.ts";
import { TextMaterial } from "../materials/TextMaterial.ts";
import { TextTemplateMaterial } from "../materials/TextTemplateMaterial.ts";
import { VideoMaterial } from "../materials/VideoMaterial.ts";
import { MaterialInstance } from "../project/Content.ts";
import { Track } from "../tracks/Track.ts";


export class Segment extends Root<ISegment, Segment> {
  // As we encounter more Material types this need to be handle correctly
  // Probably there will be Text and Audio materials
  material?:
    | VideoMaterial
    | TextMaterial
    | AudioMaterial
    | TextTemplateMaterial;
  extra_materials: Partial<MaterialInstance> =
    // deno-lint-ignore no-explicit-any
    {} as any;

  track?: Track;

  constructor(init?: Partial<Segment["data"]>) {
    super(init);
    this.data.material_id = "";
    this.data.raw_segment_id = "";
    this.data.caption_info = null;
    this.data.cartoon = false;
    this.data.clip = {
      alpha: 1.0,
      flip: { horizontal: false, vertical: false },
      rotation: 0.0,
      scale: { x: 1.0, y: 1.0 },
      transform: { x: 0.0, y: 0.0 },
    };
    this.data.common_keyframes = [];
    this.data.desc = "";
    this.data.enable_adjust = true;
    this.data.enable_adjust_mask = false;
    this.data.enable_color_correct_adjust = false;
    this.data.enable_color_curves = true;
    this.data.enable_color_match_adjust = false;
    this.data.enable_color_wheels = true;
    this.data.enable_hsl = false;
    this.data.enable_lut = true;
    this.data.enable_smart_color_adjust = false;
    this.data.enable_video_mask = true;
    this.data.extra_material_refs = [];
    this.data.group_id = "";
    this.data.hdr_settings = { intensity: 1.0, mode: 1, nits: 1000 };
    this.data.intensifies_audio = false;
    this.data.is_loop = false;
    this.data.is_placeholder = false;
    this.data.is_tone_modify = false;
    this.data.keyframe_refs = [];
    this.data.last_nonzero_volume = 1.0;

    this.data.render_index = 1;
    this.data.responsive_layout = {
      enable: false,
      horizontal_pos_layout: 0,
      size_layout: 0,
      target_follow: "",
      vertical_pos_layout: 0,
    };
    this.data.reverse = false;
    this.data.speed = 1.0;
    this.data.state = 0;
    this.data.template_id = "";
    this.data.template_scene = "default";
    this.data.track_attribute = 0;
    this.data.track_render_index = 0;
    this.data.uniform_scale = { on: true, value: 1.0 };
    this.data.visible = true;
    this.data.volume = 1.0;

    this.data.source_timerange = { duration: 5000000, start: 0 };
    this.data.target_timerange = { duration: 5000000, start: 0 };

    Object.assign(this.data, init);
  }

  setTrack(track: Track) {
    this.track = track;
    this.data.raw_segment_id = track.id;
  }

  setTargetTimerange(timerange: Timerange) {
    this.data.target_timerange = timerange;
  }

  mergeTargetTimerange(timerange: Partial<Timerange>) {
    this.data.target_timerange = {
      ...this.data.target_timerange,
      ...timerange,
    };
  }

  setSourceTimerange(timerange: Timerange) {
    this.data.source_timerange = timerange;
  }

  mergeSourceTimerange(timerange: Partial<Timerange>) {
    this.data.source_timerange = {
      ...this.data.source_timerange,
      ...timerange,
    };
  }

  setVolume(volume: number) {
    this.data.volume = volume;
  }

  mergeClip(clip: Partial<Segment["data"]["clip"]>) {
    this.data.clip = { ...this.data.clip, ...clip };
  }

  setMaterial(
    material:
      | VideoMaterial
      | TextMaterial
      | AudioMaterial
      | TextTemplateMaterial
  ) {
    this.material = material;
    const materialData = material.getDataValues();
    this.data.material_id = materialData.id;
    if (materialData.type === "text" || materialData.type === "text_template") {
      this.data.source_timerange = { duration: 3000000, start: 0 };
      this.data.target_timerange = { duration: 3000000, start: 0 };
    } else {
      this.data.source_timerange = {
        duration: materialData.duration,
        start: 0,
      };
      this.data.target_timerange = {
        duration: materialData.duration,
        start: 0,
      };
    }
  }

  setExtraMaterials(extra_materials: NonNullable<Segment["extra_materials"]>) {
    Object.assign(this.extra_materials ?? {}, extra_materials);
    this.data.extra_material_refs = Object.values(extra_materials).map(
      (material) => material?.id
    );
  }

  setSpeed(speed: number) {
    this.data.speed = speed;
    this.extra_materials.speeds?.setSpeed(speed);
    this.mergeSourceTimerange({
      duration: this.data.source_timerange.duration / speed,
    });
    this.mergeTargetTimerange({
      duration: this.data.target_timerange.duration / speed,
    });
  }

  speedToDuration(duration: number) {
    const newSpeed = this.data.target_timerange.duration / duration;
    this.data.speed = newSpeed;
    this.extra_materials.speeds?.setSpeed(newSpeed);
    this.data.target_timerange.duration = duration;
  }

  public override clone() {
    const newObj = super.clone();
    newObj.material = this.material?.clone();
    newObj.extra_materials = Object.fromEntries(
      Object.entries(this.extra_materials).map(([key, material]) => [
        key,
        material?.clone(),
      ])
    );
    return newObj;
  }

  public override toJSON(): WithId<ISegment> {
    // Update references before saving
    // kinda bad to have this side effect on the JSON.stringify
    this.data.extra_material_refs = Object.values(this.extra_materials).map(
      (material) => material?.id
    );
    this.data.material_id = this.material?.id ?? "";
    return super.toJSON();
  }
}
