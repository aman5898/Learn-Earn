import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function tagsReducer(state = initialState.tags, action) {
  switch (action.type) {
    case types.TAGLIST_SUCCESS:
      return action.tags;
    default:
      return state;
  }
}
