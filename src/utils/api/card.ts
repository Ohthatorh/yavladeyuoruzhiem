import { request } from "../func/request";

export async function getCardInfo(id: number) {
  return request(`/card/get_info.php?id=${id}`);
}
