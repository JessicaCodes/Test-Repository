import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.REACT_APP_TMDB_KEY;

export const searchRequest = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Jack+Reacher`)
  return response.json();
}

export const getMovieById = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
  return response.json();
}

export const getVideosById = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
  return response.json();
}

export const getPopularList = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  return response.json();
}

export const getNowPlayingList = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
  return response.json();
}

export const getTopRatedList = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
  return response.json();
}

export const getComingSoonList = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
  return response.json();
}

export const getTVShowList = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`)
  return response.json();
}

export const getKidsList = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${410751}`)
  return response.json();
 // const410751
}

export const getSearchList = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
  return response.json();
 // const410751
}


