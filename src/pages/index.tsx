import Link from 'next/link';
import CustomHead from '../components/customHead';
import MovieItem from './recently-added/movie-item';
import { getMovies } from '../api/movies/get';
import { Movies as MovieType } from '../types/movies';

type Props = {
  movies?: Array<MovieType>;
  error?: any;
};

export default function Home({ movies, error }: Props) {
  return (
    <>
      <CustomHead />
      <h2 className="primary-color">Discover</h2>
      <div className="discover-gallery">
        <div className="discover-item">
          <img
            className="card-img"
            src="https://picsum.photos/500/300"
            alt=""
          />
        </div>
        <div className="discover-item">
          <img
            className="card-img"
            src="https://picsum.photos/500/300"
            alt=""
          />
        </div>
      </div>
      <br />
      <h2 className="primary-color">Most Watches</h2>
      <div className="most-watches-gallery">
        {!error && movies?.map((movie) => <MovieItem movie={movie} />)}
        <div className="most-watches-item">
          <Link href="/recently-added">
            <a className="card-click">
              <div
                className="card size-width-s background-card-color"
                style={{ height: 290 }}
              >
                <div className="card-content">
                  <h4 className="primary-color">Show More</h4>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = await getMovies(0, 7);
    return {
      props: {
        movies: data.content,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};
