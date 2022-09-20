import "./App.scss";
import Form from "./components/form";
import PokemonPage from "./components/pokemonPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PokemonProvider } from "./store/pokemonContext";
import React from "react";

function App() {
  return (
    <PokemonProvider>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Form Link={Link} />}></Route>
        <Route path="/pokemon-list" element={<PokemonPage />}></Route>
      </Routes>
    </div>
    </PokemonProvider>
  );
}

export default React.memo(App);
