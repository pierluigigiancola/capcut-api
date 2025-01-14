import { MaterialVocalSeparation } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";

export class VocalSeparationMaterial extends Root<
  MaterialVocalSeparation,
  VocalSeparationMaterial
> {
  constructor(init?: Partial<VocalSeparationMaterial["data"]>) {
    super(init);
    this.data.type = "vocal_separation";
    this.data.choice = 0;
    this.data.production_path = "";
    this.data.removed_sounds = [];
    this.data.time_range = null;

    Object.assign(this.data, init);
  }
}
