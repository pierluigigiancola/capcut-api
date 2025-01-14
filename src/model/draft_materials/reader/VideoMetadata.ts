import { pick } from "@std/collections";
import { MetadataExtractor } from "../DraftMaterial.ts";
import { Value } from "../../../interfaces/MetaInfo.ts";
import { ffmpeg } from "../../../lib/ffmpeg.ts";

export class VideoMetadata implements MetadataExtractor {
  get_metadata(file_Path: string): Promise<Partial<Value>> {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(file_Path, (err, metadata) => {
        if (err) {
          reject(err);
        } else {
          const { width, height, duration } = pick(metadata.streams[0], [
            "width",
            "height",
            "duration",
          ]);

          // NOTE: this is an elaboration of the metadata extracted from the video file
          // It's convienient to keep it here but should have been extracted to a separate function
          // As the code grows keep an eye for refactor this into a separate function
          const duration_ns = duration ? parseFloat(duration) * 1000 * 1000 : 0;
          resolve({
            width,
            height,
            duration: duration_ns,
            sub_time_range: { duration: duration_ns, start: 0 },
          });
        }
      });
    });
  }
}
