import * as types from "./actionTypes";
import * as upcomingWebinarsApi from "../../api/eventsApi";

export function upcomingWebinarsSuccess(events) {
  return { type: types.UPCOMING_WEBINAR_SUCCESS, events };
}

export function loadUpcomingWebinars() {
  return function (dispatch) {
    return upcomingWebinarsApi
      .getUpcomingWebinars()
      .then((events) => {
        dispatch(upcomingWebinarsSuccess(events));
      })
      .catch((error) => {
        throw error;
      });
  };
}
