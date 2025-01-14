import { Materials, ProjectContent } from "../../interfaces/Content.ts";
import { AnimationMaterial } from "../materials/AnimationMaterial.ts";
import { AudioFadeMaterial } from "../materials/AudioFadeMaterial.ts";
import { AudioMaterial } from "../materials/AudioMaterial.ts";
import { BeatMaterial } from "../materials/BeatMaterial.ts";
import { CanvasMaterial } from "../materials/CanvasMaterial.ts";
import { EffectMaterial } from "../materials/EffectMaterial.ts";
import { PlaceholderInfoMaterial } from "../materials/PlaceholderInfoMaterial.ts";
import { SoundChannelMappingMaterial } from "../materials/SoundChannelMappingMaterial.ts";
import { SpeedMaterial } from "../materials/SpeedMaterial.ts";
import { TextMaterial } from "../materials/TextMaterial.ts";
import { TextTemplateMaterial } from "../materials/TextTemplateMaterial.ts";
import { VideoMaterial } from "../materials/VideoMaterial.ts";
import { VocalSeparationMaterial } from "../materials/VocalSeparationMaterial.ts";
import { Repository } from "../Repository.ts";
import { InMemoryRepository } from "../Repository.ts";
import { Root, WithId } from "../Root.ts";
import { Segment } from "../segments/Segments.ts";
import { Track } from "../tracks/Track.ts";

export type WithMaterialKeys<
  T extends Partial<Record<keyof Materials, unknown>>
> = T;

export type MaterialInstanceList = WithMaterialKeys<{
  audios: AudioMaterial[];
  audio_fades: AudioFadeMaterial[];
  beats: BeatMaterial[];
  canvases: CanvasMaterial[];
  effects: EffectMaterial[];
  placeholder_infos: PlaceholderInfoMaterial[];
  sound_channel_mappings: SoundChannelMappingMaterial[];
  videos: VideoMaterial[];
  vocal_separations: VocalSeparationMaterial[];
  speeds: SpeedMaterial[];
  material_animations: AnimationMaterial[];
  texts: TextMaterial[];
  text_templates: TextTemplateMaterial[];
}>;

export type MaterialInstance = {
  [key in keyof MaterialInstanceList]: MaterialInstanceList[key][0];
};

export class Content extends Root<ProjectContent> {
  material_instances: MaterialInstanceList = {
    audio_fades: [],
    audios: [],
    beats: [],
    canvases: [],
    effects: [],
    material_animations: [],
    placeholder_infos: [],
    sound_channel_mappings: [],
    speeds: [],
    text_templates: [],
    texts: [],
    videos: [],
    vocal_separations: [],
  };
  track_instances: Repository<Track>;

  constructor(init?: Partial<ProjectContent>) {
    super(init);
    Object.assign(this.data, {
      canvas_config: {
        background: null,
        height: 1920,
        ratio: "9:16",
        width: 1080,
      },
      color_space: -1,
      config: {
        adjust_max_index: 1,
        attachment_info: [],
        combination_max_index: 1,
        export_range: null,
        extract_audio_last_index: 1,
        lyrics_recognition_id: "",
        lyrics_sync: true,
        lyrics_taskinfo: [],
        maintrack_adsorb: true,
        material_save_mode: 0,
        multi_language_current: "none",
        multi_language_list: [],
        multi_language_main: "none",
        multi_language_mode: "none",
        original_sound_last_index: 1,
        record_audio_last_index: 1,
        sticker_max_index: 1,
        subtitle_keywords_config: null,
        subtitle_recognition_id: "",
        subtitle_sync: true,
        subtitle_taskinfo: [],
        system_font_list: [],
        video_mute: false,
        zoom_info_params: null,
      },
      cover: null,
      create_time: 0,
      duration: 0,
      extra_info: null,
      fps: 60.0,
      free_render_index_mode_on: false,
      group_container: null,
      is_drop_frame_timecode: false,
      keyframe_graph_list: [],
      keyframes: {
        adjusts: [],
        audios: [],
        effects: [],
        filters: [],
        handwrites: [],
        stickers: [],
        texts: [],
        videos: [],
      },
      last_modified_platform: {
        app_id: 359289,
        app_source: "cc",
        app_version: "2.2.0",
        device_id: "",
        hard_disk_id: "",
        mac_address: "",
        os: "windows",
        os_version: "10.0.19045",
      },
      lyrics_effects: [],
      materials: {
        ai_translates: [],
        audio_balances: [],
        audio_effects: [],
        audio_fades: [],
        audio_track_indexes: [],
        audios: [],
        beats: [],
        canvases: [],
        chromas: [],
        color_curves: [],
        common_mask: [],
        digital_humans: [],
        drafts: [],
        effects: [],
        flowers: [],
        green_screens: [],
        handwrites: [],
        hsl: [],
        images: [],
        log_color_wheels: [],
        loudnesses: [],
        manual_deformations: [],
        material_animations: [],
        material_colors: [],
        multi_language_refs: [],
        placeholder_infos: [],
        placeholders: [],
        plugin_effects: [],
        primary_color_wheels: [],
        realtime_denoises: [],
        shapes: [],
        smart_crops: [],
        smart_relights: [],
        sound_channel_mappings: [],
        speeds: [],
        stickers: [],
        tail_leaders: [],
        text_templates: [],
        texts: [],
        time_marks: [],
        transitions: [],
        video_effects: [],
        video_trackings: [],
        videos: [],
        vocal_beautifys: [],
        vocal_separations: [],
      },
      mutable_config: null,
      name: "",
      new_version: "75.0.0",
      path: "",
      platform: {
        app_id: 359289,
        app_source: "cc",
        app_version: "2.2.0",
        device_id: "",
        hard_disk_id: "",
        mac_address: "",
        os: "windows",
        os_version: "10.0.19045",
      },
      relationships: [],
      render_index_track_mode_on: true,
      retouch_cover: null,
      source: "default",
      static_cover_image_path: "",
      time_marks: null,
      tracks: [],
      update_time: 0,
      version: 360000,
    });
    this.track_instances = new InMemoryRepository<Track>();
  }

  public setMaterials(materials: MaterialInstanceList) {
    this.material_instances = materials;
  }

  public mergeMaterials(materials: Partial<MaterialInstanceList>) {
    this.material_instances = Object.fromEntries(
      Object.entries(this.material_instances).map(([key, value]) => {
        const k = key as keyof MaterialInstanceList;
        return [k, [...value, ...(materials[k] ? materials[k] : [])]];
      })
    ) as MaterialInstanceList;
  }

  public setTracks(tracks: Track[]) {
    this.track_instances = new InMemoryRepository(tracks);
  }

  /**
   * Split segment into 2 segments, the first segment will stay the same except its duration and source_timerange wich will be updated to `time`.
   * The second segment will be a new segment (with new materials and extra materials) with source_timerange starting at `time` and duration = old_duration - `time`, the target_timerange will be source_timerange.duration.
   *
   * @param time: the time in nanoseconds where the segment will be split, **the time is relative to the original video duration**.
   */
  splitSegment(segment: Segment, time: number) {
    if (segment.track === undefined) {
      throw new Error(
        "Segment is not in a track, the segment must be added to a Track before invoking split"
      );
    }
    if (!(segment.material instanceof VideoMaterial)) {
      throw new Error("Split is only supported for VideoMaterial");
    }
    if (!segment.material.draftMaterial) {
      throw new Error("Draft material is mandatory for splitting a segment");
    }

    const totalDuration =
      segment.material.draftMaterial?.getDataValues().duration;
    const segmentData = segment.getDataValues();
    segment.mergeSourceTimerange({
      duration: time - segmentData.source_timerange.start,
    });
    segment.mergeTargetTimerange({
      duration: time - segmentData.target_timerange.start,
    });
    const newSegment = segment.clone();
    newSegment.setSourceTimerange({
      start: time,
      duration: totalDuration - time,
    });
    newSegment.setTargetTimerange({
      start: time + segmentData.target_timerange.start,
      duration: totalDuration - time,
    });
    segment.track.addSegment(newSegment);
    this.material_instances = Object.fromEntries(
      Object.entries(this.material_instances).map(([key, value]) => {
        const k = key as keyof MaterialInstanceList;
        return [
          k,
          [
            ...value,
            ...(newSegment.extra_materials[k]
              ? [newSegment.extra_materials[k]]
              : []),
          ],
        ];
      })
    ) as MaterialInstanceList;

    // BAD
    if (newSegment.material !== undefined) {
      if (newSegment.material instanceof VideoMaterial) {
        this.material_instances.videos.push(newSegment.material);
      } else if (newSegment.material instanceof AudioMaterial) {
        this.material_instances.audios.push(newSegment.material);
      } else if (newSegment.material instanceof TextMaterial) {
        this.material_instances.texts.push(newSegment.material);
      } else {
        throw new Error("Unknown material type");
      }
    }
    newSegment.extra_materials.material_animations?.setSegment(newSegment);
    return newSegment;
  }

  applyEffect(effect: EffectMaterial, segment: Segment) {
    segment.extra_materials.effects = effect;
    this.material_instances.effects.push(effect);
    if (!(segment.material instanceof TextMaterial)) {
      throw new Error(
        "Applying effect to a non-text material is not supported"
      );
    }
    segment.material?.setEffect(effect);
  }

  public override toJSON(): WithId<ProjectContent> {
    return {
      ...super.toJSON(),
      // The instances doesn't respect the type of material but JSON.stringify will cascade
      // and call toJSON on the instances converting them into the correct type.
      // @ts-ignore
      materials: this.material_instances,
      // @ts-ignore
      tracks: this.track_instances.getAll(),
    };
  }
}
