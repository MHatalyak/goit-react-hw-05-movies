import React, { lazy, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieAllDetails = lazy(() => import('./MovieAllDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Review'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieAllDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
