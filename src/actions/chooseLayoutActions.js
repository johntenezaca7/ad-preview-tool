import { UPDATE_LAYOUT} from "../constants/ActionTypes";

export function updateLayout(payload) {
  console.log("Pa", payload)
  return {
    type: UPDATE_LAYOUT,
    payload: payload
  };
}
