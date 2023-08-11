import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchQuery(query);
      searchMovies(query);
    }
  }, [searchParams]);

  const searchMovies = query => {
    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '488a10199f756ebd19425cffe6e22e26',
          query: query,
        },
      })
      .then(response => {
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.error('Error searching movies:', error);
      });
  };

  const handleSearch = event => {
    event.preventDefault();
    searchParams.set('query', searchQuery);
    setSearchParams(searchParams);
    searchMovies(searchQuery);
  };

  return (
    <div className="container mt-4">
      <h2>Search Movies</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSearch}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control me-3"
                placeholder="Search for a movie..."
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        {searchResults.map(movie => (
          <div className="col-md-3 mb-3" key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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
