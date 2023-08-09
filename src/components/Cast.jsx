import React from 'react';
import PropTypes from 'prop-types';

const Cast = ({ cast }) => {
  return (
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
  );
};

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default Cast;
