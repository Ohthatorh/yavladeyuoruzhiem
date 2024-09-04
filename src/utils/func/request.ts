import { checkResponse } from "./check-response";
import { checkSuccess } from "./check-success";

const API = "https://api.ohotaktiv.ru/api/v2";

export async function request(endpoint: string, options?: any) {
  const fetchUrl = `${API}${endpoint}`;
  console.log(fetchUrl);
  return await fetch(fetchUrl, {
    ...options,
    headers: {
      ...options?.headers,
    },
    next: {
      revalidate: 3000,
    },
  })
    .then(checkResponse)
    .then(checkSuccess);
}
