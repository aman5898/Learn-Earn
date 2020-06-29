import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function eventsReducer(state = initialState.events, action) {
  switch (action.type) {
    case types.UPCOMING_WEBINAR_SUCCESS:
      return action.events;
    default:
      return state;
  }
}
