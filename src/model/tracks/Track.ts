import { Root, WithId } from "../Root.ts";
import { Segment } from "../segments/Segments.ts";

export enum TrackAttribute {
  NONE,
  MUTE,
  HIDDEN,
  MUTE_HIDDEN,
  LOCKED,
  MUTE_LOCKED,
  HIDDEN_LOCKED,
  ALL,
}

// Allow String to get suggestion in the IDE but also accepting string values
// This is better for deserialize JSON since the type is inferred as string
// can introduce runtime errors though
// deno-lint-ignore ban-types
export type TrackType = "video" | "audio" | "text" | String;

export interface ITrack {
  attribute: TrackAttribute;
  flag: number;
  id: string;
  is_default_name: boolean;
  name: string;
  segments: ISegment[];
  type: TrackType;
}

export interface ISegment {
  caption_info?: unknown;
  cartoon: boolean;
  clip: Clip;
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
  source_timerange: Sourcetimerange;
  speed: number;
  state: number;
  target_timerange: Sourcetimerange;
  template_id: string;
  template_scene: string;
  track_attribute: TrackAttribute;
  track_render_index: number;
  uniform_scale: Uniformscale;
  visible: boolean;
  volume: number;
}

export interface Uniformscale {
  on: boolean;
  value: number;
}

export interface Sourcetimerange {
  duration: number;
  start: number;
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

export interface Clip {
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

export class Track extends Root<ITrack, Track> {
  segment_instances: Segment[] = [];

  constructor(init?: Partial<Track["data"]>) {
    super(init);

    Object.assign(this.data, {
      attribute: 0,
      flag: 2,
      is_default_name: true,
      name: "",
      segments: [],
      type: "video",
    });

    Object.assign(this.data, init);
  }

  public setSegments(segments: Segment[]) {
    this.data.segments = [];
    this.segment_instances = [];
    segments.forEach((segment) => {
      this.addSegment(segment);
    });
  }

  public addSegment(segment: Segment) {
    const segmentData = segment.getDataValues();
    if (this.segment_instances.length === 0) {
      segmentData.target_timerange.start = 0;
    } else {
      const lastSegmentData =
        this.segment_instances[
          this.segment_instances.length - 1
        ].getDataValues();
      segmentData.target_timerange.start =
        lastSegmentData.target_timerange.start +
        lastSegmentData.target_timerange.duration;
    }

    if (
      this.data.attribute === TrackAttribute.MUTE ||
      this.data.attribute === TrackAttribute.MUTE_HIDDEN ||
      this.data.attribute === TrackAttribute.MUTE_LOCKED
    ) {
      segment.setVolume(0);
    }

    segment.setTargetTimerange(segmentData.target_timerange);
    this.segment_instances.push(segment);
    segment.setTrack(this);
  }

  public removeEmptyTrackSpace() {
    for (let i = 0; i < this.segment_instances.length; i++) {
      const previousSegmentData =
        this.segment_instances[i - 1]?.getDataValues();
      let previousSegmentStart = 0;
      let previousSegmentDuration = 0;
      if (previousSegmentData) {
        previousSegmentStart = previousSegmentData.target_timerange.start;
        previousSegmentDuration = previousSegmentData.target_timerange.duration;
      }
      const segment = this.segment_instances[i];
      segment.mergeTargetTimerange({
        start: previousSegmentStart + previousSegmentDuration,
      });
    }
  }

  public override clone() {
    const newObj = super.clone();
    newObj.segment_instances = this.segment_instances.map((segment) =>
      segment.clone()
    );
    return newObj;
  }

  public override toJSON(): WithId<ITrack> {
    return {
      ...super.toJSON(),
      // @ts-ignore
      segments: this.segment_instances,
    };
  }
}
