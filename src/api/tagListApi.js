import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/tag";

export function getTagList() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
