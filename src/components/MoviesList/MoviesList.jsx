import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, filter }) => {
  function filterMovies(queries, movie) {
    const formattedQuery = queries.trim().toLowerCase();
    const formattedMovieTitle = movie.title.trim().toLowerCase();
    const formattedDescription = movie.description.trim().toLowerCase();

    if (
      formattedMovieTitle.includes(formattedQuery) ||
      formattedDescription.includes(formattedQuery)
    ) {
      return true;
    }

    return false;
  }

  return (
    <div className="movies">
      {movies.map(
        movie =>
          filterMovies(filter, movie) && (
            <MovieCard key={movie.imdbId} movie={movie} />
          ),
      )}
    </div>
  );
};
