import { createContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [link, setLink] = useState(null);
  const [movies, setMovies] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [movieFilter, setMovieFilter] = useState({
    name: "",
    url: "",
    result: [],
  });
  const [abilityFilter, setAbilityFilter] = useState({
    name: "",
    url: "",
    result: [],
  });
  const [names, setNames] = useState({
    results: [],
  });
  const [openDropdown, setOpendropdown] = useState({
    movie: false,
    ability: false,
  });
  const [settings, setSettings] = useState(null);
  const [result, setResult] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);

  const state = {
    setMovies,
    movies,
    settings,
    setSettings,
    names,
    setNames,
    result,
    setResult,
    abilities,
    setAbilities,
    showSearchResult,
    setShowSearchResult,
    openDropdown,
    setOpendropdown,
    abilityFilter,
    setAbilityFilter,
    movieFilter,
    setMovieFilter,
    link,
    setLink,
  };

  return (
    <PokemonContext.Provider value={{ ...state }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext;
