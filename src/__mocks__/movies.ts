import { Category } from '../types/category';
import { Movies, Link } from '../types/movies';

export const categoryMock: Array<Category> = [
  {
    id: 4,
    categoryId: '4',
    name: 'Aventuras',
    description: 'Category Description',
  },
  {
    id: 11,
    categoryId: '11',
    name: 'Suspenso',
    description: 'Category Description',
  },
];

export const linkMock: Array<Link> = [
  {
    id: 30,
    linkId: '7d858874-c1cb-436f-bbc5-a8144ddfd421',
    url: 'https://youtu.be/z7PSyWuArVQ',
    origin: 'youtube',
  },
  {
    id: 31,
    linkId: '1ea7cf75-9e4f-4913-b8aa-75f1c5f03f78',
    url: 'https://youtu.be/tNgZVVtA7yM',
    origin: 'youtube',
  },
];

export const moviesMock: Array<Movies> = [
  {
    id: 29,
    movieId: '9645fff5-d6ce-4865-aa2e-6c270e58dbab',
    name: 'Movie Test 1',
    description: 'This is a description',
    createAt: '2021-08-15T22:37:41.335+0000',
    links: [linkMock[0]],
    categories: [categoryMock[0]],
  },
  {
    id: 30,
    movieId: '9645fff4-d6c6-4c65-122e-6c250e5823ac',
    name: 'Movie Test 2',
    description: 'This is a description',
    createAt: '2021-08-15T22:37:41.335+0000',
    links: [linkMock[1]],
    categories: [categoryMock[0], categoryMock[1]],
  },
];
