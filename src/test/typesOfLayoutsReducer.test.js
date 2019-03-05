import reducer from "../reducers/typesOfLayouts";
import { UPDATE_LAYOUT } from "../constants/ActionTypes";

describe("Layout Type Reducer", () => {

  it('should return the initial state of all 5 Layout Types', () => {
    const layoutTypes =  ["Single Column", "Grid of Cards", "Boxes", "F-Shape", "Z-Shape"];
    expect(reducer(layoutTypes, {})).toEqual(layoutTypes);
  });

});