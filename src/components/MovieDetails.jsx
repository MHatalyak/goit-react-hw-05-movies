import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [showCast, setShowCast] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleClick = () => {
    window.history.back();
  };

  const handleLinkCastClick = () => {
    setShowCast(!showCast);
    if (!showCast) {
      navigate('cast', { state: { from: location.pathname } });
    } else {
      navigate(cameBack);
    }
  };

  const handleLinkReviewClick = () => {
    setShowCast(!showCast);
    if (!showCast) {
      navigate('reviews', { state: { from: location.pathname } });
    } else {
      navigate(cameBack);
    }
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary mb-3" onClick={handleClick}>
        Go back
      </button>
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
      <button
        style={{ cursor: 'pointer' }}
        onClick={handleLinkCastClick}
        className="btn btn-primary mb-3 me-3"
      >
        Cast
      </button>
      <button
        style={{ cursor: 'pointer' }}
        onClick={handleLinkReviewClick}
        className="btn btn-primary mb-3"
      >
        Review
      </button>
    </div>
  );
};

export default MovieDetails;
