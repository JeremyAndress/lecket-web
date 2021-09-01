import { instance } from "../index";

export async function getCategories() {
  const { data } = await instance.get("category");
  return data;
}
