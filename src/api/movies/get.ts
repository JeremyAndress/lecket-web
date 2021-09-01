import { instance } from "../index";

export async function getMovies(
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

export async function getOneMovie(
  id: string
) {
  const { data } = await instance.get(`movies/${id}`);
  return data;
}
