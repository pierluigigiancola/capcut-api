import { MaterialSpeed } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";

export class SpeedMaterial extends Root<MaterialSpeed, SpeedMaterial> {
  constructor(init?: Partial<SpeedMaterial["data"]>) {
    super(init);
    this.data.type = "speed";
    this.data.speed = 1.0;
    this.data.mode = 0;
    this.data.curve_speed = null;

    Object.assign(this.data, init);
  }

  setSpeed(speed: number) {
    this.data.speed = speed;
  }
}
