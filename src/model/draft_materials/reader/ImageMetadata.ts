import { decode } from "imagescript";
import { Value } from "../../../interfaces/MetaInfo.ts";
import { MetadataExtractor } from "../DraftMaterial.ts";

export class ImageMetadata implements MetadataExtractor {
  async get_metadata(file_Path: string): Promise<Partial<Value>> {
    const image = await decode(Deno.readFileSync(file_Path));
    return {
      width: image.width,
      height: image.height,
    };
  }
}
