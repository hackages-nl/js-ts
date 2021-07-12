import { ADD_TODO, REMOVE_TODO } from "../src/store/actions";
import { reducer } from "../src/store/reducers";

describe("compose function", () => {
  it("It should be a function", () => {
    expect(typeof reducer).toEqual("function");
  });

  it("should return the initial state", () => {
    // Given
    const initialState = {
      loaded: false,
      loading: false,
      data: [
        { label: 'Learn TypeScript', complete: false },
      ],
    };
    const expectedState = initialState;
    const action = {
      type: 'UNKNOWN_ACTION',
      payload: null,
    };

    // When
    const returnedState = reducer(initialState, action);

    // Then
    expect(returnedState).toEqual(expectedState);
  });

  it('should handle ADD_TODO', () => {
    // Given
    const initialState = {
      loaded: false,
      loading: false,
      data: [],
    };
    const expectedState = {
      loaded: false,
      loading: false,
      data: [
        { label: 'Hello world', complete: false },
      ],
    };
    const action = {
      type: ADD_TODO,
      payload: {
        label: 'Hello world',
        complete: false,
      },
    };

    // When
    const returnedState = reducer(initialState, action);

    // Then
    expect(returnedState).toEqual(expectedState);
  });

  it("should handle REMOVE_TODO", () => {
    // Given
    const initialState = {
      loaded: false,
      loading: false,
      data: [
        { label: 'Hello world', complete: false },
      ],
    };
    const expectedState = {
      loaded: false,
      loading: false,
      data: [],
    };
    const action = {
      type: REMOVE_TODO,
      payload: {
        label: 'Hello world',
      },
    };

    // When
    const returnedState = reducer(initialState, action);

    // Then
    expect(returnedState).toEqual(expectedState);
  });
});
