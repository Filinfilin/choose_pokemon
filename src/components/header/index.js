import React, { useEffect, useContext, useMemo, useRef, useState } from "react";
import { UserService } from "../../api/services/User";
import { useInput } from "../../hooks/useFormInput";
import PokemonContext from "../../store/pokemonContext";
import $ from "./index.module.scss";
import { stringFilter } from "../../utils/stringFilter";
import Dropdown from "../dropdown";
import useOutsideClick from "../../hooks/useClickOutside";
import { PokemonService } from "../../api/services/Pokemon";
import { localStorageService } from "../../api/services/localStorageService";

const Header = () => {
  const refName = useRef();
  const refMovie = useRef();
  const refAbilities = useRef();
  const {
    movies,
    names,
    setResult,
    setShowSearchResult,
    openDropdown,
    setOpendropdown,
    movieFilter,
    setMovieFilter,
    setLink,
  } = useContext(PokemonContext);
  const nameStringInput = useInput("", false);
  const movieString = useInput("", false);
  const [lastSearchString, setLastSearchString] = useState("");

  useEffect(() => {
    setLastSearchString(localStorageService.getSearchString());
  }, []);

  const nameResult = useMemo(() => {
    localStorageService.setSearchString(nameStringInput?.value);
    if (movieFilter?.name) {
      setResult(stringFilter(movieFilter.result, nameStringInput?.value));
    } else {
      setResult(stringFilter(names, nameStringInput?.value));
    }
    setShowSearchResult(true);
  }, [nameStringInput.value, names, movieFilter]);

  const moviesSearchResult = useMemo(() => {
    return stringFilter(movies, movieString?.value);
  }, [movieString.value, movies]);

  const dropDownOnClick = (data) => {
    setOpendropdown({ ...openDropdown, ...data });
  };

  const closeDropdown = () => {
    setOpendropdown();
  };

  useOutsideClick(refName || refMovie || refAbilities, () => closeDropdown());

  const removeFilter = () => {
    setMovieFilter();
    localStorageService.removeMovieName();
    localStorageService.removeMovieUrl();
  };

  const setFilter = (data) => {
    localStorageService.setMovieUrl(data.url);
    localStorageService.setMovieName(data.selection);
    PokemonService.getDataFromFilterLink(data.url).then(
      ({ learned_by_pokemon }) => {
        setResult(learned_by_pokemon);
        setMovieFilter({
          name: data.selection,
          url: data.url,
          result: learned_by_pokemon,
        });
      }
    );
  };

  return (
    <div className={$.filterContainer} ref={refName}>
      <div key="name-dropdown">
        <input
          type="text"
          className={$.input}
          placeholder="Search by name"
          {...nameStringInput}
          value={nameStringInput.value || lastSearchString}
        />
      </div>
      <div className={$.filter} ref={refMovie}>
        <Dropdown
          searchResult={moviesSearchResult}
          openDropdown={openDropdown?.movie}
          dropDownOnClick={dropDownOnClick}
          inputData={movieString}
          setOpendropdown={setOpendropdown}
          setFilter={setFilter}
        />
        {localStorage.getItem("movie") !== null && (
          <div className={$.filterSelection}>
            {localStorage.getItem("movie")}
            <span onClick={() => removeFilter()}>&#x2715;</span>
          </div>
        )}
      </div>
      <div className={$.filter} ref={refAbilities}>
        {(!!localStorageService.getSelectedPokemon()) && <div>
          <button
            className={$.button}
            onClick={() => setLink(localStorageService.getSelectedPokemon())}
          >
            Show My Previous Choice
          </button>
        </div>}
      </div>
    </div>
  );
};

export default React.memo(Header);
