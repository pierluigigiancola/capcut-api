import { assertEquals, assertNotEquals } from "@std/assert";
import { ITrack, Track, TrackAttribute } from "./Track.ts";
import { Segment } from "../segments/Segments.ts";
import { VideoMaterial } from "../materials/VideoMaterial.ts";

Deno.test("Track initializes with default values", () => {
  const track = new Track();
  const data = track.getDataValues();

  assertEquals(data.attribute, 0);
  assertEquals(data.flag, 2);
  assertEquals(data.is_default_name, true);
  assertEquals(data.name, "");
  assertEquals(data.type, "video");
  assertEquals(data.segments.length, 0);
});

Deno.test("Track initializes with provided values", () => {
  const initValues: Partial<ITrack> = {
    attribute: TrackAttribute.NONE,
    flag: 3,
    is_default_name: false,
    name: "custom_name",
    type: "audio",
    segments: [],
  };

  const track = new Track(initValues);
  const data = track.getDataValues();

  assertEquals(data.attribute, 0);
  assertEquals(data.flag, 3);
  assertEquals(data.is_default_name, false);
  assertEquals(data.name, "custom_name");
  assertEquals(data.type, "audio");
  assertEquals(data.segments.length, 0);
});

Deno.test("Track addSegment adds a segment with correct initial values", () => {
  const track = new Track();
  const videoMaterial = new VideoMaterial({ duration: 1000000 });
  const segment = new Segment();
  segment.setMaterial(videoMaterial);

  track.addSegment(segment);
  const data = track.getDataValues();

  assertEquals(data.segments.length, 1);
  assertEquals(data.segments[0].source_timerange.start, 0);
  assertEquals(data.segments[0].source_timerange.duration, 1000000);

  assertEquals(data.segments[0].target_timerange.start, 0);
  assertEquals(data.segments[0].target_timerange.duration, 1000000);

  assertEquals(track.segment_instances.length, 1);
  assertEquals(track.segment_instances[0], segment);
});

Deno.test(
  "Track addSegment adds a segment with correct values after existing segments",
  () => {
    const track = new Track();
    const videoMaterial = new VideoMaterial({ duration: 1000000 });
    const segment1 = new Segment();
    const segment2 = new Segment();

    segment1.setMaterial(videoMaterial);
    segment2.setMaterial(videoMaterial);

    track.addSegment(segment1);
    track.addSegment(segment2);
    const data = track.getDataValues();

    assertEquals(data.segments.length, 2);
    assertEquals(data.segments[1].target_timerange.start, 1000000);
    assertEquals(track.segment_instances.length, 2);
    assertEquals(track.segment_instances[1], segment2);
  }
);

Deno.test(
  "Track addSegment adds a segment on a MUTED track set the volume to 0 on each segment",
  () => {
    const track = new Track({ attribute: TrackAttribute.MUTE });
    const segment = new Segment();

    assertEquals(segment.getDataValues().volume, 1);

    track.addSegment(segment);

    assertEquals(segment.getDataValues().volume, 0);
  }
);

Deno.test("Track setSegments updates values correctly", () => {
  const track = new Track();
  const videoMaterial = new VideoMaterial({ duration: 1000000 });
  const segment1 = new Segment();
  const segment2 = new Segment();

  segment1.setMaterial(videoMaterial);
  segment2.setMaterial(videoMaterial);

  track.setSegments([segment1, segment2]);
  const data = track.getDataValues();

  assertEquals(data.segments.length, 2);
  assertEquals(data.segments[0].target_timerange.start, 0);
  assertEquals(data.segments[0].target_timerange.duration, 1000000);
  assertEquals(data.segments[1].target_timerange.start, 1000000);
  assertEquals(data.segments[1].target_timerange.duration, 1000000);
  assertEquals(track.segment_instances.length, 2);
  assertEquals(track.segment_instances[1], segment2);
});

Deno.test("Track clone its segments", () => {
  const track = new Track();
  const segment1 = new Segment();
  const segment2 = new Segment();

  track.addSegment(segment1);
  track.addSegment(segment2);
  const clonedSegment = track.clone();

  assertNotEquals(
    track.segment_instances[0],
    clonedSegment.segment_instances[0]
  );
  assertNotEquals(
    track.segment_instances[0].id,
    clonedSegment.segment_instances[0].id
  );
  assertNotEquals(
    track.segment_instances[1],
    clonedSegment.segment_instances[1]
  );
  assertNotEquals(
    track.segment_instances[1].id,
    clonedSegment.segment_instances[1].id
  );
});
