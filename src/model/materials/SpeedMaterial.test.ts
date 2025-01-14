import { assertEquals } from "@std/assert";
import { SpeedMaterial } from "./SpeedMaterial.ts";

Deno.test("SpeedMaterial initializes with default values", () => {
  const speedMaterial = new SpeedMaterial();
  const data = speedMaterial.getDataValues();

  assertEquals(data.type, "speed");
  assertEquals(data.speed, 1.0);
  assertEquals(data.mode, 0);
  assertEquals(data.curve_speed, null);
});

Deno.test("SpeedMaterial initializes with provided values", () => {
  const initValues: ConstructorParameters<typeof SpeedMaterial>[0]= {
    type: "speed",
    speed: 2.0,
    mode: 1,
    curve_speed: [0.5, 1.5],
  };

  const speedMaterial = new SpeedMaterial(initValues);
  const data = speedMaterial.getDataValues();

  assertEquals(data.type, "custom_type");
  assertEquals(data.speed, 2.0);
  assertEquals(data.mode, 1);
  assertEquals(data.curve_speed, [0.5, 1.5]);
});
