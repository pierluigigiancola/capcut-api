import { assertEquals } from "@std/assert";
import { AnimationMaterial } from "./AnimationMaterial.ts";
import { Segment } from "../segments/Segments.ts";
import { VideoMaterial } from "./VideoMaterial.ts";

Deno.test("AnimationMaterial initializes with default values", () => {
  const animationMaterial = new AnimationMaterial();
  const data = animationMaterial.getDataValues();

  assertEquals(data.animations.length, 0);
  assertEquals(data.multi_language_current, "none");
  assertEquals(data.type, "sticker_animation");
});

Deno.test("AnimationMaterial initializes with provided values", () => {
  const animationMaterial = new AnimationMaterial({
    multi_language_current: "en",
    type: "sticker_animation",
  });
  const data = animationMaterial.getDataValues();

  assertEquals(data.multi_language_current, "en");
  assertEquals(data.type, "sticker_animation");
});

Deno.test("AnimationMaterial add Fade in", () => {
  const animationMaterial = new AnimationMaterial();
  const segment = new Segment();
  const material = new VideoMaterial();
  segment.setMaterial(material);
  animationMaterial.setSegment(segment);

  animationMaterial.addFadeIn({ duration: 5000 });

  const data = animationMaterial.getDataValues();
  assertEquals(data.animations.length, 1);
  assertEquals(data.animations[0].type, "in");
  assertEquals(data.animations[0].duration, 5000);
  // Not really a relevant test, but I don't know how to test it
  assertEquals(data.animations[0].name, "Fade In");
});

Deno.test("AnimationMaterial add Fade out", () => {
  const animationMaterial = new AnimationMaterial();
  const segment = new Segment();
  const material = new VideoMaterial();
  segment.setMaterial(material);
  animationMaterial.setSegment(segment);

  animationMaterial.addFadeOut({ duration: 5000 });

  const data = animationMaterial.getDataValues();
  assertEquals(data.animations.length, 1);
  assertEquals(data.animations[0].type, "out");
  assertEquals(data.animations[0].duration, 5000);
  // Not really a relevant test, but I don't know how to test it
  assertEquals(data.animations[0].name, "Fade Out");
});

Deno.test("AnimationMaterial set Fade out start based on segment", () => {
  const animationMaterial = new AnimationMaterial();
  const segment = new Segment({
    target_timerange: { start: 1000000, duration: 11000000 },
  });
  const material = new VideoMaterial({ duration: 11000000 });
  segment.setMaterial(material);
  animationMaterial.setSegment(segment);

  animationMaterial.setSegment(segment);
  animationMaterial.addFadeOut({ duration: 500000 });
  const data = animationMaterial.getDataValues();
  assertEquals(data.animations[0].start, 10500000);
});
