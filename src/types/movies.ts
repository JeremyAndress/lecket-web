import { Category } from './category';

export type Link = {
  id: number;
  linkId: string;
  origin: string;
  url: string;
};

export type Movies = {
  id: number;
  movieId: string;
  name: string;
  description: string;
  linkImage?: string;
  createAt: string;
  user?: any;
  links: Array<Link>;
  categories?: Array<Category>;
};
