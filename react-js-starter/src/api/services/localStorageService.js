export const setSearchString = (searchString) => {
  return localStorage.setItem("lastQuery", searchString);
};

export const deleteSearchString = ({ searchString }) => {
  return localStorage.removeItem("lastQuery");
};

export const getSearchString = () => {
  return localStorage.getItem("lastQuery");
};

export const setSelectedPokemon = (url) => {
  return localStorage.setItem("selectedPokemon", url);
};

export const removeSelectedPokemon = () => {
  return localStorage.removeItem("selectedPokemon");
};

export const getSelectedPokemon = () => {
  return localStorage.getItem("selectedPokemon");
};

export const getMovieName = () => {
  return localStorage.getItem("movie");
};

export const setMovieName = (name) => {
  return localStorage.setItem("movie", name);
};

export const getMovieUrl = () => {
  return localStorage.getItem("movieUrl");
};

export const setMovieUrl = (url) => {
  return localStorage.setItem("movieUrl", url);
};

export const removeMovieName = () => {
  return localStorage.removeItem("movie");
};

export const removeMovieUrl = () => {
  return localStorage.removeItem("movieUrl");
};

export const localStorageService = {
  getMovieName,
  getMovieUrl,
  getSelectedPokemon,
  removeMovieName,
  removeMovieUrl,
  setMovieUrl,
  setMovieName,
  setSearchString,
  deleteSearchString,
  getSearchString,
  setSelectedPokemon,
};
