import { pick } from "@std/collections";
import { MetadataExtractor } from "../DraftMaterial.ts";
import { Value } from "../../../interfaces/MetaInfo.ts";
import { ffmpeg } from "../../../lib/ffmpeg.ts";

export class AudioMetadata implements MetadataExtractor {
  get_metadata(file_Path: string): Promise<Partial<Value>> {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(file_Path, (err, metadata) => {
        if (err) {
          reject(err);
        } else {
          const { duration } = pick(metadata.streams[0], ["duration"]);

          // @ts-expect-error: deno-ts(2362) duration in the case of audio is a number
          const duration_ns = duration ? duration * 1000 * 1000 : 0;
          resolve({
            duration: duration_ns,
            sub_time_range: { duration: duration_ns, start: 0 },
          });
        }
      });
    });
  }
}
