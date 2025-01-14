import { assertEquals } from "@std/assert";
import { SoundChannelMappingMaterial } from "./SoundChannelMappingMaterial.ts";

Deno.test("SoundChannelMappingMaterial initializes with default values", () => {
  const soundChannelMappingMaterial = new SoundChannelMappingMaterial();
  const data = soundChannelMappingMaterial.getDataValues();

  assertEquals(data.type, "");
  assertEquals(data.audio_channel_mapping, 0);
  assertEquals(data.is_config_open, false);
});

Deno.test(
  "SoundChannelMappingMaterial initializes with provided values",
  () => {
    const initValues = {
      type: "custom_type",
      audio_channel_mapping: 2,
      is_config_open: true,
    };

    const soundChannelMappingMaterial = new SoundChannelMappingMaterial(
      initValues
    );
    const data = soundChannelMappingMaterial.getDataValues();

    assertEquals(data.type, "custom_type");
    assertEquals(data.audio_channel_mapping, 2);
    assertEquals(data.is_config_open, true);
  }
);
