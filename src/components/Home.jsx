import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/movie/day', {
        params: {
          api_key: '488a10199f756ebd19425cffe6e22e26',
        },
      })
      .then(response => {
        setTrendingMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Trending Movies</h2>
      <div className="row">
        {trendingMovies.map(movie => (
          <div className="col-md-3 mb-3" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid"
              />
              <p className="mt-2">{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
