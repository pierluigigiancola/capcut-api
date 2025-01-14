import { assertEquals } from "@std/assert";
import { VideoMetadata } from "./VideoMetadata.ts";
import { join } from "@std/path";

// TODO: eventually we should have a class that give back the path of various mock files
const video_file_path = join("src", "mock", "video_1280x720.mp4");

Deno.test(
  "VideoMetadata.get_file_metadata resolves with correct metadata",
  async () => {
    const videoMetadata = new VideoMetadata();
    const metadata = await videoMetadata.get_metadata(video_file_path);

    assertEquals(metadata.width, 1280);
    assertEquals(metadata.height, 720);
    assertEquals(metadata.duration, 10 * 1000 * 1000);
    assertEquals(metadata.sub_time_range, {
      duration: 10 * 1000 * 1000,
      start: 0,
    });
  }
);
