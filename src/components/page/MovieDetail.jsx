import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/&language=en-US`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl">Loading movie details...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold ">{movie.title}</h1>
      <p className="text-lg my-4">{movie.overview}</p>
      <p className="text-md">Release Date: {movie.release_date}</p>
      <p className="text-md">Rating: {movie.vote_average} / 10</p>
      <img
        className="w-full mt-4"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            : "https://via.placeholder.com/500x300?text=No+Image+Available"
        }
        alt={movie.title}
      />
    </div>
  );
};

export default MovieDetail;
