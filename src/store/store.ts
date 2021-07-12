export class Store {
  private subscribers; // TODO: What would be the type of this?
  private reducers; // TODO: What would be the type of this?
  private state; // TODO: What would the type of this?

  constructor(reducers = {}, initialState = {}) {}

  get value() {
    return this.state;
  }

  subscribe(fn) {}

  dispatch(action) {}

  private notify() {}

  private reduce(state: any, action) {}
}
