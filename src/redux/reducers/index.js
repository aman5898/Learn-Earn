import { combineReducers } from "redux";
import events from "./eventsReducer";
import tags from "./tagsReducer";

const rootReducer = combineReducers({
  events,
  tags
});

export default rootReducer;
