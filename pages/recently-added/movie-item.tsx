import { Movies as MovieType } from "../../types/movies";

type Props = {
  movie: MovieType 
};

const MovieItem = ({ movie }: Props) => (
  <div className="most-watches-item">
    <div className="card size-width-s background-card-color">
      <img className="card-img" src="https://picsum.photos/300/200" alt="" />
      <div className="card-content">
        <h4 className="primary-color">{movie.name}</h4>
        <p className="secondary-color">
          {movie.description}
        </p>
      </div>
    </div>
  </div>
);
export default MovieItem;
