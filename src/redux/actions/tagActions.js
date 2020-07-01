import * as types from "./actionTypes";
import * as TagList from "../../api/tagListApi";

export function tagListSuccess(tags) {
    return { type: types.TAGLIST_SUCCESS, tags };
}
  
export function loadAllTags() {
    return function (dispatch) {
      return TagList
        .getTagList()
        .then((tags) => {
          dispatch(tagListSuccess(tags));
        })
        .catch((error) => {
          throw error;
        });
    };
}
  