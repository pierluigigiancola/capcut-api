import { assertEquals, assertNotEquals, assertObjectMatch } from "@std/assert";
import { Root } from "./Root.ts";

Deno.test("Root instance has an ID", () => {
  const root = new Root();
  assertNotEquals(root.id, undefined);
  assertNotEquals(root.id, null);
  assertEquals(typeof root.id, "string");
});

Deno.test("Root instance uses provided ID", () => {
  const customId = "CUSTOM-ID-1234";
  const root = new Root({ id: customId });
  assertEquals(root.id, customId);
});

Deno.test("Root instance generates a new ID when none is provided", () => {
  const root1 = new Root();
  const root2 = new Root();
  assertNotEquals(root1.id, root2.id);
});

Deno.test("Root stringify include only data values", () => {
  const root1 = new Root();
  const parsedJson = JSON.parse(JSON.stringify(root1));
  assertObjectMatch(parsedJson, root1.getDataValues());
});

Deno.test("Root duplicate creates a new instance with a new ID", () => {
  const root1 = new Root();
  const root2 = root1.clone();
  assertNotEquals(root1.id, root2.id);
});
