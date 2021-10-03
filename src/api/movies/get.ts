import { instance, instanceAWS } from '../index';

export async function getMovies(
  page: number,
  quantity: number,
  order?: string
) {
  const params = { page, quantity, order };
  const { data } = await instance.get('movies/pagination', {
    params,
  });
  return data;
}

export async function getOneMovie(id: string) {
  const { data } = await instance.get(`movies/${id}`);
  return data;
}

export async function searchMovie(name: string) {
  const { data } = await instanceAWS.get(`lecket-search?target=${name}`);
  return data;
}
