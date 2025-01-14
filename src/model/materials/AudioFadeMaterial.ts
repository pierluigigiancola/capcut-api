import { MaterialAudioFade } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";

export class AudioFadeMaterial extends Root<
  MaterialAudioFade,
  AudioFadeMaterial
> {
  constructor(init?: Partial<MaterialAudioFade>) {
    super(init);
    Object.assign(this.data, init);
  }
}
