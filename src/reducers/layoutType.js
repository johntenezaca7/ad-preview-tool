import { UPDATE_LAYOUT } from "../constants/ActionTypes";

export default function reducer(state = "", action) {
  
  switch (action.type) {
    case UPDATE_LAYOUT:
      return state = action.payload;
  }

  return state;
}