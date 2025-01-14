import { assertEquals } from "@std/assert";
import { VocalSeparationMaterial } from "./VocalSeparationMaterial.ts";

Deno.test("VocalSeparation initializes with default values", () => {
  const vocalSeparation = new VocalSeparationMaterial();
  const data = vocalSeparation.getDataValues();

  assertEquals(data.type, "vocal_separation");
  assertEquals(data.choice, 0);
  assertEquals(data.production_path, "");
  assertEquals(data.removed_sounds.length, 0);
  assertEquals(data.time_range, null);
});

Deno.test("VocalSeparation initializes with provided values", () => {
  const initValues: ConstructorParameters<typeof VocalSeparationMaterial>[0] = {
    type: "vocal_separation",
    choice: 1,
    production_path: "custom_production_path",
    removed_sounds: ["sound1", "sound2"],
    time_range: { start: 0, end: 10 },
  };

  const vocalSeparation = new VocalSeparationMaterial(initValues);
  const data = vocalSeparation.getDataValues();

  assertEquals(data.type, "vocal_separation");
  assertEquals(data.choice, 1);
  assertEquals(data.production_path, "custom_production_path");
  assertEquals(data.removed_sounds, ["sound1", "sound2"]);
  assertEquals(data.time_range, { start: 0, end: 10 });
});
