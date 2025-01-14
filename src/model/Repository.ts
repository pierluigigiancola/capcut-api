import { Root } from "./Root.ts";

export type Repository<T> = {
  getAll: () => T[];
  getById: (id: string) => T | undefined;
  upsert: (item: T) => T;
  removeById: (id: string) => T | undefined;
};

export class InMemoryRepository<T extends Root> implements Repository<T> {
  private items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  getById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  upsert(item: T): T {
    const existingItem = this.getById(item.id);
    if (existingItem) {
      this.items = this.items.map((i) => (i.id === item.id ? item : i));
    } else {
      this.items.push(item);
    }
    return item;
  }

  removeById(id: string): T | undefined {
    const item = this.getById(id);
    if (item) {
      this.items = this.items.filter((i) => i.id !== id);
    }
    return item;
  }
}
