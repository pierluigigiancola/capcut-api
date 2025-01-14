import { MaterialBeat } from "../../interfaces/Content.ts";
import { Root } from "../Root.ts";

export class BeatMaterial extends Root<MaterialBeat, BeatMaterial> {
  constructor(content?: Partial<BeatMaterial["data"]>) {
    super(content);

    Object.assign(this.data, {
      ai_beats: {
        beat_speed_infos: [],
        beats_path: "",
        // ⚠️ don't know wtf is this
        beats_url:
          "https://sf19-web-music.capcutstatic.com/obj/tos-alisg-v-2774/okAAxIB1iAbGkmnQAslxBAQWtyYEEhAfQz8Nzi",
        melody_path: "",
        melody_percents: [0.6000000238418579],
        melody_url: "",
      },
      enable_ai_beats: false,
      gear: 404,
      gear_count: 0,
      mode: 404,
      type: "beats",
      user_beats: [],
      user_delete_ai_beats: null,
    });
    Object.assign(this.data, content);
  }
}
