import { useEffect, useState } from 'react';
import genres from '../../services/genre.service';
import searchById from '../../services/searchById.service.js';

export default function Genre() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    genres =  (async(data) => {
      const fetchedMovies = [];

      for (const movie of data.results) {
        const imdbId = movie.imdbId;
        console.log(imdbId);

        await searchById(imdbId, (tmdbResults) => {
          if (tmdbResults.length > 0) {
            const posterUrl = `https://image.tmdb.org/t/p/w500${tmdbResults[0].poster_path}`;

            fetchedMovies.push({
              ...movie,
              posterUrl,
            });
          } else {
            fetchedMovies.push({
              ...movie,
              posterUrl: null,
            });
          }
        });
      }

      setMovies(fetchedMovies);
    });

  }, []);

  return (
    <div>
      <h1>Genre</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {movies.map((movie, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            {movie.posterUrl ? (
              <img
                src={movie.posterUrl}
                alt={movie.title}
                style={{ width: '200px', height: '300px', objectFit: 'cover' }}
              />
            ) : (
              <div style={{ width: '200px', height: '300px', backgroundColor: '#ccc' }}>
                No Image
              </div>
            )}
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
