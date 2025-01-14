import { assertEquals } from "@std/assert";
import { ImageMetadata } from "./ImageMetadata.ts";
import { join } from "@std/path";

const jpg_file_path = join("src", "mock", "image_jpg_320x240.jpg");
const png_file_path = join("src", "mock", "image_png_200x200.png");

Deno.test(
  "ImageMetadata.get_metadata should return correct width and height for JPG",
  async () => {
    const imageMetadata = new ImageMetadata();
    const metadata = await imageMetadata.get_metadata(jpg_file_path);

    assertEquals(metadata.width, 320);
    assertEquals(metadata.height, 240);
  }
);

Deno.test(
  "ImageMetadata.get_metadata should return correct width and height for PNG",
  async () => {
    const imageMetadata = new ImageMetadata();
    const metadata = await imageMetadata.get_metadata(png_file_path);

    assertEquals(metadata.width, 200);
    assertEquals(metadata.height, 200);
  }
);
