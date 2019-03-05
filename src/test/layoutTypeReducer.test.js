import reducer from "../reducers/layoutType";
import { UPDATE_LAYOUT } from "../constants/ActionTypes";

describe("Layout Type Reducer", () => {

  it('should return the initial state', () => {
    expect(reducer("", {})).toEqual("");
  });

  it('should change state to "z-shape" ', () => {
    expect( 
      reducer("", { 
        type: UPDATE_LAYOUT, 
        payload:"z-shape"
      })
    ).toEqual("z-shape");
  });
});