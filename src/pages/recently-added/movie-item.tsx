import { useState } from 'react';
import Link from 'next/link';
import { Movies as MovieType } from '../../types/movies';
import error from '../../public/error.png'

type Props = {
  movie: MovieType;
};

const MovieItem = ({ movie }: Props) => {
  const [srcImg, setSrcImg] = useState(
    movie.linkImage ? movie.linkImage : error.src
  );
  const handleErrorImg = () => setSrcImg(error.src);
  return (
    <div className="most-watches-item">
      <Link href={`/movie/${movie.movieId}`}>
        <a className="card-click">
          <div className="card size-width-s background-card-color">
            <img
              className="card-img"
              src={srcImg}
              alt=""
              onError={handleErrorImg}
            />
            <div className="card-content">
              <h4 className="primary-color">{movie.name}</h4>
              <p className="secondary-color">{movie.description}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default MovieItem;
