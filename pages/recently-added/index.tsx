import CustomHead from '../../components/customHead';
import getMovies from '../../api/movies/get';
import { Movies as MovieType } from '../../types/movies';
import MovieItem from './movie-item';
// import Link from "next/link";

type Props = {
  movies?: Array<MovieType>;
  error?: any;
};

const Movies = ({ movies, error }: Props) => (
  <>
    <CustomHead title="Lecket - Recently Added" />
    <h2 className="primary-color">Recently Added</h2>
    <div className="most-watches-gallery">
      {!error &&
        movies?.map((movie) => <MovieItem movie={movie} key={movie.movieId} />)}
    </div>
  </>
);

export const getServerSideProps = async ({ query: { page = 0 } }) => {
  try {
    const data = await getMovies(page, 12);
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

export default Movies;
