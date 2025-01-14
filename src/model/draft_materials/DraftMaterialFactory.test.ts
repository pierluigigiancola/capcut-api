import { assert, assertEquals } from "@std/assert";
import { DraftMaterialFactory } from "./DraftMaterialFactory.ts";
import { DraftMaterialType } from "../../interfaces/MetaInfo.ts";
import { join } from "@std/path";

const video_file_path = join("src", "mock", "video_1280x720.mp4");
const jpg_file_path = join("src", "mock", "image_jpg_320x240.jpg");
const png_file_path = join("src", "mock", "image_png_200x200.png");

Deno.test(
  "DraftMaterialFactory.create should create DraftMaterial with ImageMetadata for jpg file",
  async () => {
    const draftMaterial = await DraftMaterialFactory.create({
      file_Path: jpg_file_path,
    });
    const data = draftMaterial.getDataValues();
    assertEquals(data.metetype, "photo");
    assertEquals(data.type, DraftMaterialType.MEDIA);
    assertEquals(data.width, 320);
    assertEquals(data.height, 240);
  }
);

Deno.test(
  "DraftMaterialFactory.create should create DraftMaterial with ImageMetadata for png file",
  async () => {
    const draftMaterial = await DraftMaterialFactory.create({
      file_Path: png_file_path,
    });
    const data = draftMaterial.getDataValues();
    assertEquals(data.metetype, "photo");
    assertEquals(data.type, DraftMaterialType.MEDIA);
    assertEquals(data.width, 200);
    assertEquals(data.height, 200);
  }
);

Deno.test(
  "DraftMaterialFactory.create should create DraftMaterial with VideoMetadata for mp4 file",
  async () => {
    const draftMaterial = await DraftMaterialFactory.create({
      file_Path: video_file_path,
    });
    const data = draftMaterial.getDataValues();
    assertEquals(data.metetype, "video");
    assertEquals(data.type, DraftMaterialType.MEDIA);
    assertEquals(data.width, 1280);
    assertEquals(data.height, 720);
    assertEquals(data.duration, 10 * 1000 * 1000);
    assertEquals(data.sub_time_range, {
      duration: 10 * 1000 * 1000,
      start: 0,
    });
  }
);

Deno.test(
  "DraftMaterialFactory.create should throw error for unsupported file type",
  async () => {
    const file_path = "path/to/unsupported.pqow";

    try {
      await DraftMaterialFactory.create({ file_Path: file_path });
    } catch {
      assert(true, "Error thrown on unsupported file type");
      return;
    }
    assert(false, "Expected error to be thrown");
  }
);
