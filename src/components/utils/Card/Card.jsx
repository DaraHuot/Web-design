import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({
  id,
  title,
  overview,
  release_date,
  backdropPath,
  voteAverage,
  voteCount,
}) => {
  const fallbackImage =
    "https://via.placeholder.com/400x300?text=No+Image+Available";

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg"
          src={backdropPath || fallbackImage}
          alt={title || "Movie Poster"}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/movie/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {title || "Untitled"}
          </h5>
          <p className="text-lg text-gray-700 dark:text-gray-300 line-clamp-2">
            {overview || "No overview available."}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {release_date || "Release date not available."}
          </p>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-yellow-300 text-white text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-yellow-400 ms-3">
            {voteAverage || "N/A"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-gray-900 dark:text-white">
            {voteCount ? `${voteCount} votes` : "No votes yet"}
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  backdropPath: PropTypes.string,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
};

Card.defaultProps = {
  title: "No Title",
  overview: "No overview available.",
  release_date: "Unknown release date",
  backdropPath: "",
  voteAverage: 0,
  voteCount: 0,
};

export default Card;
