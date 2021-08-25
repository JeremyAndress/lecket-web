import { useRouter } from 'next/router';

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h2 className="primary-color">Movie {id}</h2>
      <iframe
        height="500px"
        width="80%"
        src="https://www.youtube.com/embed/LUk73pUe9i4"
        frameBorder="0"
      />
    </>
  );
};

export default Movie;
