import Router from 'next/router';
import debounce from 'lodash/debounce';
import { useEffect, useState, useCallback } from 'react';
import { searchMovie } from '../api/movies/get';
import { BasicMovie } from '../types/movies';

const SearchInput = () => {
  const [movies, setMovie] = useState<BasicMovie[]>([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const [name, setName] = useState('');

  const handleOnChange = (event: { target: HTMLInputElement }) => {
    setName(event.target.value);
    setActiveSearch(true);
  };

  const searchMovieFunc = async (target: string) => {
    const data: BasicMovie[] = await searchMovie(target);
    // const data: BasicMovie[] = [
    //   { id: 7, movieId: '8f091f2c', name: 'Terminator 1.2' },
    // ];
    setMovie(data);
    console.log(movies);
  };

  const searchMovieDebounce = useCallback(
    debounce(() => searchMovieFunc(name), 600),
    [name]
  );

  useEffect(() => {
    if (name.length > 1) {
      searchMovieDebounce();
    }
  }, [name]);
  return (
    <div className="header-input">
      <input
        className="secondary-color header-search"
        type="text"
        name="search"
        id=""
        onBlur={() => setActiveSearch(false)}
        onChange={handleOnChange}
        value={name}
        placeholder="Search"
      />
      {movies?.length > 0 && activeSearch && (
        <div className="search-result">
          <ul>
            {movies.map((movie: BasicMovie) => (
              <li
                onMouseDown={() => Router.push(`/movie/${movie.movieId}`)}
                key={movie.id}
              >
                <b>{movie.name}</b>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
