import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const location = useLocation();
  const cameBack = location.state?.from ?? '/';
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: '488a10199f756ebd19425cffe6e22e26',
        },
      })
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  });

  return (
    <div className="container mt-4">
      <Link to={cameBack} className="btn btn-primary mb-3">
        Go back
      </Link>
      <div className="row">
        <div>
          <h2>{movieDetails.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="img-fluid"
          />
        </div>
        <div>
          <p className="mt-2">Rating: {movieDetails.vote_average}</p>
          <p>Description: {movieDetails.overview}</p>
          <p>
            Genre:{' '}
            {movieDetails.genres &&
              movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
      <Link
        to="cast"
        state={{ from: cameBack }}
        className="btn btn-primary mb-3 me-3"
      >
        Cast
      </Link>
      <Link
        to="reviews"
        state={{ from: cameBack }}
        className="btn btn-primary mb-3 me-3"
      >
        Reviews
      </Link>
    </div>
  );
};

export default MovieDetails;
