import { assertEquals, assertMatch } from "@std/assert";
import { generateId } from "./generateId.ts";

Deno.test("generateId returns a valid UUID", () => {
  const id = generateId();
  const uuidRegex =
    /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/;
  assertMatch(id, uuidRegex);
});

Deno.test("generateId returns an uppercase string", () => {
  const id = generateId();
  assertEquals(id, id.toUpperCase());
});
