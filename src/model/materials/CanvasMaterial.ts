import { MaterialCanvas } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";

export class CanvasMaterial extends Root<MaterialCanvas, CanvasMaterial> {
  constructor(init?: Partial<CanvasMaterial["data"]>) {
    super(init);
    this.data.type = "canvas_color";
    this.data.image = "";
    this.data.image_id = "";
    this.data.image_name = "";
    this.data.source_platform = 0;
    this.data.team_id = "";
    this.data.album_image = "";
    this.data.color = "";
    this.data.blur = 0;

    Object.assign(this.data, init);
  }
}
