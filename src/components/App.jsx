import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { StyledApp } from './App.styled';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from '../Pages/Home';
import { Movies } from '../Pages/Movies';
import { MovieDetails } from '../Pages/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import {Reviews} from '../components/Rewievs/Reviews'
import { NotFound } from '../components/NotFound';

export const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<SharedLayout />}>

          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />

          <Route path="movies/:id" element={<MovieDetails />}>

            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>

      <Toaster position="top-right"></Toaster>
    </StyledApp>
  );
};
