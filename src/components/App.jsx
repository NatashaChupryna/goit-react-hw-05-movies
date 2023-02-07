import { Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import { Toaster } from 'react-hot-toast';
// працює :
import SharedLayout  from './SharedLayout/SharedLayout';
// import { NotFound } from './NotFound/NotFound';
// import { Home } from '../Pages/Home';
// import { Movies } from '../Pages/Movies';
// import { MovieDetails } from '../Pages/MovieDetails';
// import { Cast } from '../components/Cast/Cast';
// import { Reviews } from '../components/Rewievs/Reviews';




const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Rewievs/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'))

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews></Reviews>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Toaster position="top-right"></Toaster>
    </div>
  );
};

export default App