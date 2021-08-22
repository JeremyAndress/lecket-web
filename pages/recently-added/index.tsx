import CustomHead from "../../components/customHead";
import getMovies from "../../api/movies/get";
import { Movies as MovieType } from "../../types/movies";
import MovieItem from "./movie-item";

type Props = {
  movies?: Array<MovieType>;
  error?: any;
};

const Movies = ({ movies, error }: Props) => (
  <>
    <CustomHead title="Lecket - Recently Added" />
    <h2 className="primary-color">Recently Added</h2>
    <div className="most-watches-gallery">
      {!error && movies?.map((movie) => <MovieItem movie={movie} />)}
    </div>
  </>
);

export const getServerSideProps = async () => {
  try {
    const data = await getMovies(0, 10);
    console.log(data);
    return {
      props: {
        movies: data.content,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: error.message,
      },
    };
  }
};

export default Movies;
