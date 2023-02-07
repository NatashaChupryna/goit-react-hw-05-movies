import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';

export const getPopularMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export async function getMovieByName(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
}

export async function getMovieDetails(id) {
  try {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCredits(id) {
  try {
    const response = await axios.get(
      `movie/${id}/credits`,
      {
        params: {
          api_key: 'f983fc840eb543faba07dcbe6db19b0b',
          language: 'en-US',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const response = await axios.get(
      `movie/${id}/reviews`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      }
    );
    return response.data.results;

  } catch (error) {
    console.error(error);
  }
}