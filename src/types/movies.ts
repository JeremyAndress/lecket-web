import { Category } from './category';

export type Link = {
  id: number;
  linkId: string;
  origin: string;
  url: string;
};

export type BasicMovie = {
  id: number;
  movieId: string;
  name: string;
};

export type Movies = BasicMovie & {
  description: string;
  linkImage?: string;
  createAt: string;
  user?: any;
  links: Array<Link>;
  categories?: Array<Category>;
};
