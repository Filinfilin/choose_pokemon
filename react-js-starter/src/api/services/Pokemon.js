import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";

const getAllPokemons = async (url = `${baseUrl}pokemon?offset=20&limit=20`) => {
  try {
    const response = await axios
      .get(`${url}`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => console.log(err));
    return response;
  } catch (error) {
    console.log(error);
  }
};

const loadInfoWithLink = async (link = `${baseUrl}pokemon/23/`) => {
  try {
    const response = await axios
      .get(`${link}`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => console.log(err));
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getPokemnByName = async (name) => {};


const getAllmovies = async () => {
try {
  const response = await axios
      .get(`${baseUrl}move/?&limit=844`)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => console.log(err));
    return response;
} catch (error) {
  console.log(error);
}
}

const getPokemonByType = async (pokeType) => {};

const getPokemonByMovieName = async (movieName) => {};

export const PokemonService = {
  loadInfoWithLink,
  getAllPokemons,
  getPokemnByName,
  getPokemonByType,
  getPokemonByMovieName,
};
