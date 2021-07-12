import { Store } from "../src/store";
describe("The Store class", () => {
  it("Should be a class (function)", () => {
    expect(typeof Store).toEqual("function");
  });

  describe("Constructor pattern", () => {
    it("Should contain a constructor", () => {
      // Given
      const reducers = {};
      const initialState = {};

      // When
      const store = new Store(reducers, initialState);

      // Then
      expect(store).toBeInstanceOf(Store);
    });
  });

  describe("state", () => {
    it("Should contain a property that represents the state of the Store", () => {
      // Given
      const reducers = {};
      const initialState = {};

      // When
      const store = new Store(reducers, initialState);

      // Then
      expect(store.value).toBeDefined();
    });

    xit("should have an initial state", () => {
      // Given
      const reducers = {};
      const initialState = { todos: [] };

      // When
      const store = new Store(reducers, initialState);

      // Then
      expect(store.value).toEqual(initialState);
    });
  });
  describe("Subscribe function", () => {
    it("Should be a function", () => {
      // Given
      const reducers = {};
      const initialState = { todos: [] };

      // When
      const store = new Store(reducers, initialState);

      // Then
      expect(store.subscribe).toBeDefined();
      expect(typeof store.subscribe).toEqual("function");
    });

    it("should take 1 argument of type function and return a function", () => {
      // Given
      const reducers = {};
      const initialState = { todos: [] };
      const fn = (state = initialState, action = { type: "Redux/Init" }) =>
        state;

      // When
      const store = new Store(reducers, initialState);
      const subscribeSpy = jest.spyOn(store, "subscribe");

      // Then
      expect(store.subscribe).toBeDefined();
      expect(typeof store.subscribe).toEqual("function");
    });
  });
});
