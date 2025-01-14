import {
  DraftMaterialType,
  ProjectMetaInfo,
} from "../../interfaces/MetaInfo.ts";
import { DraftMaterial } from "../draft_materials/DraftMaterial.ts";
import { InMemoryRepository, Repository } from "../Repository.ts";
import { Root, WithId } from "../Root.ts";

export class MetaInfo extends Root<ProjectMetaInfo> {
  draft_material_instances: Repository<DraftMaterial>;

  constructor(init?: Partial<ProjectMetaInfo>) {
    super(init);
    Object.assign(this.data, init);
    this.draft_material_instances = new InMemoryRepository<DraftMaterial>();
  }

  public setDraftMaterials(draftMaterials: DraftMaterial[]) {
    this.draft_material_instances = new InMemoryRepository(draftMaterials);
  }

  public override toJSON(): WithId<ProjectMetaInfo> {
    return {
      ...super.toJSON(),
      draft_materials: [
        {
          type: DraftMaterialType.MEDIA,
          // @ts-ignore
          value: this.draft_material_instances.getAll(),
        },
      ],
    };
  }
}
