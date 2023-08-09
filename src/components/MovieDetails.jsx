import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Cast from './Cast'; // Import the Cast component
import Reviews from './Review'; // Import the Reviews component

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

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

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
          api_key: '488a10199f756ebd19425cffe6e22e26',
        },
      })
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Error fetching movie cast:', error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
        params: {
          api_key: '488a10199f756ebd19425cffe6e22e26',
        },
      })
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movie reviews:', error);
      });
  }, [movieId]);

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-primary mb-3">
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
      <h3
        onClick={() => setShowCast(!showCast)}
        style={{ cursor: 'pointer' }}
        className="btn btn-primary mb-3 me-3"
      >
        Cast
      </h3>
      {showCast && <Cast cast={cast} />} {/* Use the Cast component */}
      <h3
        onClick={() => setShowReviews(!showReviews)}
        style={{ cursor: 'pointer' }}
        className="btn btn-primary mb-3"
      >
        Reviews
      </h3>
      {showReviews && <Reviews reviews={reviews} />}{' '}
      {/* Use the Reviews component */}
    </div>
  );
};

export default MovieDetails;
