import { useRouter } from 'next/router';
import CustomHead from '../../components/customHead';
import { getOneMovie } from '../../api/movies/get';
import { Movies } from '../../types/movies';

type Props = {
  movie?: Movies;
  error?: any;
};

const Movie = ({ movie, error }: Props) => {
  if (error || !movie) return null;

  return (
    <>
      <CustomHead title={`${movie.name} Lecket`} />
      <iframe
        height="500px"
        width="80%"
        src="https://www.youtube.com/embed/LUk73pUe9i4?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
        frameBorder="0"
        allowFullScreen
      />
      <br />
      <h2 className="primary-color">{movie.name}</h2>
      <p className="primary-color">{movie.createAt}</p>
      <p className="primary-color">{movie.description}</p>
    </>
  );
};

export const getServerSideProps = async ({ query: { id = '' } }) => {
  try {
    const data = await getOneMovie(id);
    return {
      props: {
        movie: data.data,
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

export default Movie;
