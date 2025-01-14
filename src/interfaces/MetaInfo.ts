export interface ProjectMetaInfo {
  cloud_package_completed_time: string;
  draft_cloud_capcut_purchase_info: string;
  draft_cloud_last_action_download: boolean;
  draft_cloud_materials: unknown[];
  draft_cloud_package_type: string;
  draft_cloud_purchase_info: string;
  draft_cloud_template_id: string;
  draft_cloud_tutorial_info: string;
  draft_cloud_videocut_purchase_info: string;
  draft_cover: string;
  draft_deeplink_url: string;
  draft_enterprise_info: Draftenterpriseinfo;
  draft_fold_path: string;
  draft_id: string;
  draft_is_ai_packaging_used: boolean;
  draft_is_ai_shorts: boolean;
  draft_is_ai_translate: boolean;
  draft_is_article_video_draft: boolean;
  draft_is_from_deeplink: string;
  draft_is_invisible: boolean;
  draft_materials: Draftmaterial[];
  draft_materials_copied_info: Draftmaterialscopiedinfo[];
  draft_name: string;
  draft_need_rename_folder: boolean;
  draft_new_version: string;
  draft_removable_storage_device: string;
  draft_root_path: string;
  draft_segment_extra_info: unknown[];
  draft_timeline_materials_size_: number;
  draft_type: string;
  tm_draft_cloud_completed: string;
  tm_draft_cloud_modified: number;
  tm_draft_create: number;
  tm_draft_modified: number;
  tm_draft_removed: number;
  tm_duration: number;
}

export interface Draftmaterialscopiedinfo {
  dst_path: string;
  src_path: string;
}

export interface Draftmaterial {
  type: number;
  value: Value[];
}

export enum DraftMaterialType {
  MEDIA,
}

export type MeteType = "photo" | "video" | "music";

export interface Value {
  create_time: number;
  duration: number;
  extra_info: string;
  file_Path: string;
  height: number;
  id: string;
  import_time: number;
  import_time_ms: number;
  item_source: number;
  md5: string;
  metetype: MeteType;
  roughcut_time_range: Roughcuttimerange;
  sub_time_range: Roughcuttimerange;
  type: DraftMaterialType;
  width: number;
}

export interface Roughcuttimerange {
  duration: number;
  start: number;
}

export interface Draftenterpriseinfo {
  draft_enterprise_extra: string;
  draft_enterprise_id: string;
  draft_enterprise_name: string;
  enterprise_material: unknown[];
}
