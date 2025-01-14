import { resolve, SEPARATOR } from "@std/path";
import { Value, DraftMaterialType } from "../../interfaces/MetaInfo.ts";
import { Root } from "../Root.ts";
import { omit } from "@std/collections";

/**
 * Interfaces for classes that load metadata from files.
 */
export interface MetadataExtractor {
  get_metadata(file_Path: string): Promise<Partial<Value>>;
}

/**
 * Draft Material is a resource imported into the project but not yet used in the timeline.
 *
 * Kinda like classes in programming.
 */
export class DraftMaterial extends Root<Value, DraftMaterial> {
  // I would love to define a set of mandatory fields
  // so that anyone who's using this class can receive error in the IDE
  // BUT it's easier to use the init parameter which help with the deserialization of persisted DraftMaterials.
  constructor(
    init: Partial<Omit<DraftMaterial["data"], "file_Path">> &
      Pick<DraftMaterial["data"], "file_Path">
  ) {
    super();
    // Defaul Initialization
    const now = Date.now();
    const now_sec = Math.floor(now / 1000);
    const path = init.file_Path.split(SEPARATOR);

    // absolute path to the file
    this.data.file_Path = resolve(init.file_Path);
    this.data.create_time = now_sec;
    this.data.import_time = now_sec;
    this.data.import_time_ms = now;
    // default time is 5 seconds
    this.data.duration = 5000000;
    // The name shown in the app,
    // when the resource are pulled into the project CapCut rename them with UUID and place them in the Resource/local folder
    this.data.extra_info = path[path.length - 1];
    this.data.md5 = "";
    this.data.item_source = 1;
    this.data.height = 0;
    this.data.width = 0;
    this.data.sub_time_range = { duration: -1, start: -1 };
    this.data.roughcut_time_range = { duration: -1, start: -1 };
    this.data.type = DraftMaterialType.MEDIA;
    this.data.metetype = "photo";

    Object.assign(this.data, omit(init, ["file_Path"]));
  }

  async init_file_metadata(initializer: MetadataExtractor) {
    const metadata = await initializer.get_metadata(this.data.file_Path);
    this.data = { ...this.data, ...metadata };
  }
}
