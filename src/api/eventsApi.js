import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/upcoming_webinar";

export function getUpcomingWebinars() {
  return fetch(baseUrl, {
    headers: {
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxMmgiLCJpZCI6IjVlZTVlNjQ0ZTBiNTViMTY0YzgwNjBlYiIsImVtYWlsIjoiYW1hbi5hc3Nlc3NtZW50Zm9vdHByaW50QGdtYWlsLmNvbSIsImlhdCI6MTU5MjkyODkzOH0.z8PwDdlyXPw-23O_9nMmxUfQUxbvgYEmBARBKHDIz90",
    },
  })
    .then(handleResponse)
    .catch(handleError);
}
