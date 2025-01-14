import { MaterialSoundChannelMapping } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";

export class SoundChannelMappingMaterial extends Root<
  MaterialSoundChannelMapping,
  SoundChannelMappingMaterial
> {
  constructor(init?: Partial<SoundChannelMappingMaterial["data"]>) {
    super(init);
    this.data.type = "";
    this.data.audio_channel_mapping = 0;
    this.data.is_config_open = false;

    Object.assign(this.data, init);
  }
}
