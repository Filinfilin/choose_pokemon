import { createContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [settings, setSettings] = useState(null);
  const state = {
    setMovies,
    movies,
    settings,
    setSettings,
  };

  return (
    <PokemonContext.Provider value={{ ...state }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext;
