import Cast from "components/Cast/Cast";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import Home from 'pages/Home'
import { Routes, Route} from "react-router-dom";
import Layout from "components/Layout/Layout";
import Reviews from "components/Reviews/Reviews";


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<MovieDetails />} >
          <Route path='/movies/:movieId/cast' element={<Cast />} />
          <Route path='/movies/:movieId/reviews' element={<Reviews />} />
          </Route>
        </Route>
    </Routes>
  );
};
