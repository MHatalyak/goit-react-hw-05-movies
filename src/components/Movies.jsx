import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '488a10199f756ebd19425cffe6e22e26',
          query: searchQuery,
        },
      })
      .then(response => {
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.error('Error searching movies:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Search Movies</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control me-3"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {searchResults.map(movie => (
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

export default Movies;
