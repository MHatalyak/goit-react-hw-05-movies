import React from 'react';
import MovieDetails from './MovieDetails';
import { Outlet } from 'react-router-dom';

const MovieAllDetails = () => {
  return (
    <>
      <MovieDetails />

      <Outlet />
      <Outlet />
    </>
  );
};

export default MovieAllDetails;
