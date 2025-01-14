import ffmpegStatic from "ffmpeg-static";
import ffmprobeStatic from "ffprobe-static";
// @ts-types="@types/fluent-ffmpeg"
import ffmpeg from "fluent-ffmpeg";

ffmpeg.setFfmpegPath(ffmpegStatic as unknown as string);
ffmpeg.setFfprobePath(ffmprobeStatic.path as string);

const ffmpegInstance = ffmpeg;

export { ffmpegInstance as ffmpeg };
