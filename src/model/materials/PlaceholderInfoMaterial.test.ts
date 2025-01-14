import { assertEquals } from "@std/assert";
import { PlaceholderInfoMaterial } from "./PlaceholderInfoMaterial.ts";

Deno.test("PlaceholderInfoMaterial initializes with default values", () => {
  const placeholderInfoMaterial = new PlaceholderInfoMaterial();
  const data = placeholderInfoMaterial.getDataValues();

  assertEquals(data.error_path, "");
  assertEquals(data.error_text, "");
  assertEquals(data.meta_type, "none");
  assertEquals(data.res_path, "");
  assertEquals(data.res_text, "");
  assertEquals(data.type, "placeholder_info");
});

Deno.test("PlaceholderInfoMaterial initializes with provided values", () => {
  const initValues: ConstructorParameters<typeof PlaceholderInfoMaterial>[0] = {
    error_path: "error_path_value",
    error_text: "error_text_value",
    meta_type: "custom_meta_type",
    res_path: "res_path_value",
    res_text: "res_text_value",
    type: "placeholder_info",
  };

  const placeholderInfoMaterial = new PlaceholderInfoMaterial(initValues);
  const data = placeholderInfoMaterial.getDataValues();

  assertEquals(data.error_path, "error_path_value");
  assertEquals(data.error_text, "error_text_value");
  assertEquals(data.meta_type, "custom_meta_type");
  assertEquals(data.res_path, "res_path_value");
  assertEquals(data.res_text, "res_text_value");
  assertEquals(data.type, "placeholder_info");
});
