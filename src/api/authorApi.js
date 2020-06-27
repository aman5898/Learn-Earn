import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/comments/event/5ef1c7e4c439970176d62fba/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
