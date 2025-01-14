import { assertEquals, assertExists } from "@std/assert";
import { DraftMaterial } from "./DraftMaterial.ts";
import { DraftMaterialType } from "../../interfaces/MetaInfo.ts";
import { join, resolve } from "@std/path";

Deno.test("DraftMaterial use absolute file path, not relative", () => {
  const file_Path = join("path", "to", "file");
  const draftMaterial = new DraftMaterial({ file_Path });

  const data = draftMaterial.getDataValues();
  assertEquals(data.file_Path, resolve(file_Path));
  assertEquals(data.extra_info, "file");
});

Deno.test("DraftMaterial initializes with default values", () => {
  const file_Path = join("path", "to", "file");
  const draftMaterial = new DraftMaterial({ file_Path });

  const data = draftMaterial.getDataValues();
  assertExists(data.create_time);
  assertExists(data.import_time);
  assertExists(data.import_time_ms);
  assertEquals(data.duration, 5000000);
  assertEquals(data.md5, "");
  assertEquals(data.item_source, 1);
  assertEquals(data.height, 0);
  assertEquals(data.width, 0);
  assertEquals(data.sub_time_range, { duration: -1, start: -1 });
  assertEquals(data.roughcut_time_range, { duration: -1, start: -1 });
  assertEquals(data.type, DraftMaterialType.MEDIA);
  assertEquals(data.metetype, "photo");
});

Deno.test("DraftMaterial initializes with provided init values", () => {
  const file_Path = join("path", "to", "file");
  const init = { file_Path: file_Path, duration: 1000000, md5: "testmd5" };
  const draftMaterial = new DraftMaterial(init);

  const data = draftMaterial.getDataValues();
  assertEquals(data.duration, 1000000);
  assertEquals(data.md5, "testmd5");
});

Deno.test("DraftMaterial merge data from initializer", async () => {
  const file_Path = join("path", "to", "file");
  const draftMaterial = new DraftMaterial({ file_Path });
  const metadata = { width: 1920, height: 1080, duration: 5000 };
  await draftMaterial.init_file_metadata({
    get_metadata: () => Promise.resolve(metadata),
  });

  const data = draftMaterial.getDataValues();
  assertEquals(data.width, 1920);
  assertEquals(data.height, 1080);
  assertEquals(data.duration, 5000);
});
