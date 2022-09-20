import React, { useEffect, useRef, useState, useId, useContext } from "react";
import { PokemonService } from "../../api/services/Pokemon";
import Header from "../header";
import PokemonCard from "../pokemonCard";
import $ from "./index.module.scss";
import PokemonContext from "../../store/pokemonContext";
import { localStorageService } from "../../api/services/localStorageService";
import Loader from '../loader'
const PokemonPage = () => {
  const {
    names,
    setNames,
    result,
    showSearchResult,
    setMovies,
    setAbilities,
    link,
    setLink,
  } = useContext(PokemonContext);
  const [cardsToShow, setCardsToShow] = useState([]);
  const [notification, setNotification] = useState(false);
  const messagesEndRef = useRef();
  const itemKey = useId();
  useEffect(() => {
    setCardsToShow(showSearchResult ? result : names);
  }, [names, result]);


  useEffect(() => {
    PokemonService.getAllmovies().then(({ results }) =>
      setMovies([...results])
    );
    PokemonService.getAllPokemons().then(({ results }) => setNames(results));
    PokemonService.getAllAbilities().then(({ results }) =>
      setAbilities(results)
    );
  }, []);

  const showNotification = () => {
    setNotification(true);
    setTimeout(function () {
      setNotification(false);
    }, 2000);
  };

  const setSelectedPokemon = (url) => {
    localStorageService.setSelectedPokemon(url);
    showNotification();
  };

  return (
    <div className={$.PokemonPageComponent}>
      <div className={$.header}>
        <Header />
      </div>
      <div className={$.pokemonPageContainer}>
        <div className={$.pokemonPage} ref={messagesEndRef}>
          {!!cardsToShow.length ? (
            cardsToShow.map((item, index) => {
              return (
                <div className={$.pokemonName} key={`${itemKey}-${index}`}>
                  <h1>{item.name}</h1>
                  <div>
                    <button
                      className={$.button}
                      onClick={() => setLink(item.url)}
                    >
                      Show Pokemon Card
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={$.nothing}>Nothing found</div>
          )}
        </div>
        <div className={$.pokemonCard}>
          <div className={notification ? $.notification : $.notificationHidden}>You choose new pokemon!!</div>
          {!!link ? (
            <PokemonCard link={link} setSelectedPokemon={setSelectedPokemon} Loader={Loader}/>
          ) : (
            <div className={$.nothing}>
              Please use filters to find your pokemon
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(PokemonPage);
