import { MaterialTextTemplate } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";

export class TextTemplateMaterial extends Root<
  MaterialTextTemplate,
  TextTemplateMaterial
> {
  constructor(init?: Partial<TextTemplateMaterial["data"]>) {
    super(init);
    Object.assign(this.data, init);
  }
}
