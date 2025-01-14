export interface Insertable {
  insert(project: string): Promise<void>;
}

export interface Saveable {
  // Save the object to the project
  save(saveContext: SaveContext): Promise<void>;
}

export interface SaveContext {
  draft_meta_info: Record<string, any>;
  draft_content: Record<string, any>;
  draft_virtual_store: Record<string, any>;
}
