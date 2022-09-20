import React, { useEffect, useState, useId } from "react";
import { PokemonService } from "../../api/services/Pokemon";
import $ from "./index.module.scss";

const PokemonCard = ({ link, setSelectedPokemon, Loader }) => {
  const [card, setCard] = useState({});
  const Id = useId();

  useEffect(() => {
    PokemonService.loadPokemonInfoWithLink(link).then((data) => {
      setCard({ ...data });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link]);

  const PokemonCard = (card) => {
    const { weight, sprites, name, moves, height, base_experience, abilities } =
      card;

    const images = [
      "back_default",
      "back_female",
      "back_shiny",
      "back_shiny_female",
      "front_default",
      "front_female",
      "front_shiny",
      "front_shiny_female",
    ];

    return (
      <div className={$.cardComponent}>
        <div className={$.card}>
          <div>
            {sprites ? (
              images.map((item) => <img src={sprites[item]}></img>)
            ) : (
              <Loader />
            )}
          </div>
          <div className={$.mainInfo}>
            <div className={$.detail}>
              Name: <b>{name}</b>
            </div>
            <div className={$.detail}>
              Weight: <b>{weight}</b>
            </div>
            <div className={$.detail}>
              height: <b>{height}</b>
            </div>
            <div className={$.detail}>
              Base Experince:<b>{base_experience}</b>
            </div>
            <div className={$.detail}>
              Abilities:
              {abilities?.map((item, index) => (
                <span key={`${Id + index}-ability`}>
                  <b>{item.ability["name"]}</b>
                </span>
              ))}
            </div>
          </div>
          <div className={$.movies}>
            {moves?.map(({ move }, index) => (
              <div className={$.button} key={`${Id + index}-movie`}>
                {move["name"]}
              </div>
            ))}
          </div>
          <button className={$.button} onClick={() => setSelectedPokemon(link)}>
            Choose Pokemon
          </button>
        </div>
      </div>
    );
  };

  return <div>{card && PokemonCard(card)}</div>;
};

export default React.memo(PokemonCard);
