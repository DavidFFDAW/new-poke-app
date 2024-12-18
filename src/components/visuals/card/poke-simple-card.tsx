import React from "react";
import { PokemonCache } from "../../../@types/global.pokemon";
import { Link } from "react-router-dom";
import { typesTranslate } from "../../../constants/config";
import NullableComponent from "../loaders/Nullable";

interface Props {
    pokemon: PokemonCache;
}

export default function PokeSimpleCard({ pokemon }: Props) {
    // very low chance of a shiny pokemon appearing
    const shiny = Math.random().toFixed(2) == "0.99";

    const changeImg =
        (id: number | string) => (e: React.MouseEvent<HTMLImageElement>) => {
            const target = e.target as HTMLImageElement;
            const newImage = shiny
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            const isImg = target.src === newImage;

            if (!isImg) {
                target.src = shiny
                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
                    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/%{id}.png`;
                target.className = "poke-sprite-image";
                return false;
            }

            target.src =
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
            target.className = "poke-unknown-image";
        };
    const originalImg = shiny
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
        : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    const hasTypes = pokemon.types && pokemon.types.length > 0;
    const firstType = pokemon.types ? pokemon.types[0] : "unknown";

    return (
        <Link
            to={`/pokemon/${pokemon.name}`}
            data-pokemon-id={pokemon.id}
            data-pokemon-name={pokemon.name}
            data-pokemon-types={
                pokemon.types ? pokemon.types.join(",") : "unknown"
            }
            className={`poke-card pokemon-card poke-single-card poke-card-type-${firstType} ${
                hasTypes
                    ? "poke-double-type-" + firstType
                    : "pokemon-simple-type"
            }`}
        >
            <header className={`pokemon-card__header poke-type-${firstType}`}>
                <h2 className="pokemon-card__title" translate="no">
                    {pokemon.name
                        .replace(/^\w/, (c) => c.toUpperCase())
                        .replace(/(-|_)/g, " ")}
                </h2>
                <p className="pokemon-card__subtitle" translate="no">
                    #{pokemon.id}
                </p>
            </header>

            <div className="pokemon-card__body">
                <div className="pokemon-card__image">
                    <picture>
                        <img
                            className="poke-home-image"
                            src={originalImg}
                            alt={pokemon.name}
                            onError={changeImg(pokemon.id)}
                        />
                    </picture>
                </div>

                <div className="pokemon-card-types">
                    {pokemon.types && pokemon.types.length > 0
                        ? pokemon.types.map((type) => (
                              <span
                                  key={type}
                                  className={`pokemon-card__type poke-type poke-type-${type}`}
                                  lang="es"
                                  translate="yes"
                              >
                                  {typesTranslate[type]}
                              </span>
                          ))
                        : null}
                </div>

                <NullableComponent condition={shiny}>
                    <span className="pokemon-card__shiny">Shiny</span>
                </NullableComponent>
            </div>
        </Link>
    );
}

export function PokeCardLoading() {
    return (
        <div className="poke-card pokemon-card poke-single-card">
            <div className="pokemon-card__header">
                <h2 className="pokemon-card__title">Loading...</h2>
                <p className="pokemon-card__subtitle">Loading...</p>
            </div>
            <div className="pokemon-card__body">
                <div className="pokemon-card__image">
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/0.png"
                        alt="imagen de una interrogación porque desconocemos qué pokemon es el que se está cargando"
                    />
                </div>
                <div className="pokemon-card__types">
                    <span
                        className={`pokemon-card__type pokemon-card__type--loading`}
                    >
                        Loading...
                    </span>
                </div>
            </div>
        </div>
    );
}
