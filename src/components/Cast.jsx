import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
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
  });
  return (
    <div className="container mt-4">
      <div className="row">
        {cast.map(actor => (
          <div className="col-md-3 mb-3" key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
              className="img-fluid"
            />
            <p className="mt-2">{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
