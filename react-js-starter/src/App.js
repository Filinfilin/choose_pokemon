import "./App.scss";
import Form from "./components/form";
import PokemonPage from "./components/pokemonPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Form Link={Link} />}></Route>
        <Route path="/pokemon-list" element={<PokemonPage />}></Route>
      </Routes>
    </div>
  );
}

export default React.memo(App);
