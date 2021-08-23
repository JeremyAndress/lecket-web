import { instance } from "../index";

export default async function getMovies(
  page: number,
  quantity: number,
  order?: string
) {
  const params = { page: page, quantity: quantity, order: order };
  const { data } = await instance.get("movies/pagination", {
    params: params,
  });
  return data;
}
