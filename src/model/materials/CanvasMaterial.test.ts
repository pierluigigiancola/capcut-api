import { assertEquals } from "@std/assert";
import { CanvasMaterial } from "./CanvasMaterial.ts";

Deno.test("CanvasMaterial initializes with default values", () => {
  const canvasMaterial = new CanvasMaterial();
  const data = canvasMaterial.getDataValues();
  assertEquals(data.type, "canvas_color");
  assertEquals(data.image, "");
  assertEquals(data.image_id, "");
  assertEquals(data.image_name, "");
  assertEquals(data.source_platform, 0);
  assertEquals(data.team_id, "");
  assertEquals(data.album_image, "");
  assertEquals(data.color, "");
  assertEquals(data.blur, 0);
});

Deno.test("CanvasMaterial initializes with provided values", () => {
  const initValues: ConstructorParameters<typeof CanvasMaterial>[0] = {
    type: "canvas_color",
    image: "image_path",
    image_id: "image_id_123",
    image_name: "image_name_123",
    source_platform: 1,
    team_id: "team_id_123",
    album_image: "album_image_path",
    color: "red",
    blur: 5,
  };

  const canvasMaterial = new CanvasMaterial(initValues);
  const data = canvasMaterial.getDataValues();

  assertEquals(data.type, "canvas_color");
  assertEquals(data.image, "image_path");
  assertEquals(data.image_id, "image_id_123");
  assertEquals(data.image_name, "image_name_123");
  assertEquals(data.source_platform, 1);
  assertEquals(data.team_id, "team_id_123");
  assertEquals(data.album_image, "album_image_path");
  assertEquals(data.color, "red");
  assertEquals(data.blur, 5);
});
