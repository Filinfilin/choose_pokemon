import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";

const getAllPokemons = async (url = `${baseUrl}pokemon/?limit=1154`) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((result) => result.json())
      .catch((err) => console.log(err));

    return response;
  } catch (error) {
    console.log(error);
  }
};

const loadPokemonInfoWithLink = async (url = `${baseUrl}pokemon/23`) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).catch((err) => console.log(err));
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const  getDataFromFilterLink= async (url) => {
  try {
    console.log(url, "url")
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).catch((err) => console.log(err));
    return response.json();
  } catch (error) {
    console.log(error);
  }  
};

const getAllAbilities = async () => {
  try {
    const response = await fetch(`${baseUrl}ability/?limit=327`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).catch((err) => console.log(err));
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const getAllmovies = async () => {
  try {
    const response = await fetch(`${baseUrl}move/?&limit=844`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).catch((err) => console.log(err));
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const getPokemonByMovieName = async (movieName) => {};

export const PokemonService = {
  getAllAbilities,
  getDataFromFilterLink,
  getAllmovies,
  loadPokemonInfoWithLink,
  getAllPokemons,
  getPokemonByMovieName,
};
