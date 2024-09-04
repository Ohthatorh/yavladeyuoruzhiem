import { request } from "../func/request";

export async function getPopularCategories() {
  return request(`/main/section.php`);
}
export async function getHits() {
  return request(`/main/hit.php`);
}
