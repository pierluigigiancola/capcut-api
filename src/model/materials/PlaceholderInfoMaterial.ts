import { MaterialPlaceholderinfo } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";

export class PlaceholderInfoMaterial extends Root<
  MaterialPlaceholderinfo,
  PlaceholderInfoMaterial
> {
  constructor(init?: Partial<PlaceholderInfoMaterial["data"]>) {
    super(init);
    this.data.error_path = "";
    this.data.error_text = "";
    this.data.meta_type = "none";
    this.data.res_path = "";
    this.data.res_text = "";
    this.data.type = "placeholder_info";

    Object.assign(this.data, init);
  }
}
