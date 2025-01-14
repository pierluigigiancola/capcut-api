import { generateId } from "../generateId.ts";

export type WithId<T> = T & { id: string };

// Default T to any to don't force to provide a type if there is no need to add properties to `data`
// deno-lint-ignore no-explicit-any
export class Root<TData = any, TClass = any> {
  // I want to initialize the empty object always and then each class can add its own properties
  // deno-lint-ignore no-explicit-any
  protected data: WithId<TData> = {} as any;

  get id() {
    return this.data.id;
  }

  constructor(init?: Partial<Root<TData>["data"]>) {
    this.data.id = init?.id ?? generateId();
  }

  public clone(): TClass {
    const newObj = Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      this
    );
    newObj.data = JSON.parse(JSON.stringify(this.data));
    newObj.data.id = generateId();
    return newObj;
  }

  protected toJSON(): WithId<TData> {
    return this.data;
  }

  public getDataValues(): WithId<TData> {
    return JSON.parse(JSON.stringify(this));
  }
}
