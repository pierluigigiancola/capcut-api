import { join, SEPARATOR } from "@std/path";
import { DraftMaterial, MetadataExtractor } from "./DraftMaterial.ts";
import { DraftMaterialType } from "../../interfaces/MetaInfo.ts";
import { VideoMetadata } from "./reader/VideoMetadata.ts";
import { ImageMetadata } from "./reader/ImageMetadata.ts";
import { AudioMetadata } from "./reader/AudioMetadata.ts";

const assetsDir = join("src", "assets");

const assets = {
  blackScreen: join(assetsDir, "1s_black_screen.mp4"),
  FDN: join(assetsDir, "sets", "FDN.png"),
} as const;

export class DraftMaterialFactory {
  static async create(
    data: ConstructorParameters<typeof DraftMaterial>["0"]
  ): Promise<DraftMaterial> {
    const { file_Path: file_path } = data;
    const path = file_path.split(SEPARATOR);
    const file_name = path[path.length - 1];
    const file_extension = file_name.split(".")[1];

    let draftMaterial: DraftMaterial;
    let metadataReader: MetadataExtractor;

    switch (file_extension) {
      case "jpg":
      case "jpeg":
      case "png":
        metadataReader = new ImageMetadata();
        draftMaterial = new DraftMaterial({
          metetype: "photo",
          type: DraftMaterialType.MEDIA,
          ...data,
        });
        break;
      case "mp4":
        metadataReader = new VideoMetadata();
        draftMaterial = new DraftMaterial({
          metetype: "video",
          type: DraftMaterialType.MEDIA,
          ...data,
        });
        break;
      case "mp3":
        metadataReader = new AudioMetadata();
        draftMaterial = new DraftMaterial({
          metetype: "music",
          type: DraftMaterialType.MEDIA,
          ...data,
        });
        break;
      default:
        throw new Error(
          `Unsupported file type: received ${file_path} and read the extension as ${file_extension}`
        );
    }
    await draftMaterial.init_file_metadata(metadataReader);
    return draftMaterial;
  }

  static get(file: keyof typeof assets): Promise<DraftMaterial> {
    return this.create({
      file_Path: assets[file],
    });
  }
}
