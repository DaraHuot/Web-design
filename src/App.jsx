import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "./components/utils/Card/Card";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    console.log("movird", movies
    )
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading movies...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-20 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-red-900">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <Card 
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            backdropPath={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : ""
            }
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
        </Link>
      ))}
    </div>
  );
};

export default App;
