import { request } from "../func/request";

export async function getCategories() {
  return await request(`/menu/get_list_tree.php`);
}

export async function getCatalogInfo(section: string) {
  return request(`/catalog/get_section_info.php?section=${section}`);
}

export async function getCatalogItems(code: string) {
  return request(
    `/catalog/get_items_list.php?section=${code}&price_check=true`
  );
}

export async function getCatalogFilters(code: string) {
  return request(`/catalog/get_filter_section.php?section=${code}`);
}

export async function getProductsWithUnavailable(ids: string) {
  return await request(
    `/catalog/get_items_list.php?${ids
      .split(",")
      .map((id) => `id[]=${id}`)
      .join("&")}&stock=not_now&price_check=true`
  );
}

export async function getProductsForCart(ids: string) {
  return await request(
    `/catalog/get_items_list.php?${ids
      .split(",")
      .map((id) => `id[]=${id}`)
      .join("&")}&stock=not_now&price_check=true&for_cart=true`
  );
}
