import React from "react";
import { PokemonAPIDetails } from "../../../../@types/global.pokemon";

interface PokemonMovesProps {
    pokemon: PokemonAPIDetails;
}

const moveLearningMethods: Record<string, string> = {
    "level-up": "Nivel",
    tutor: "Tutor",
    machine: "Mt/Mo",
    egg: "Huevo",
    "form-change": "Cambio de forma",
};

export default function PokemonMoves({ pokemon }: PokemonMovesProps) {
    const [currentGame, setCurrentGame] = React.useState("diamond-pearl");

    return (
        <div className="pokemon-moves-whole-container">
            <div className="pokemon-moves-game-selector flex gap noverflow overflow-x">
                {pokemon.moveGames.map((game, indx) => (
                    <button
                        key={`game-${indx}`}
                        className={`tag default-tag pokemon-moves-game-selector-button ${
                            currentGame === game ? "active" : ""
                        }`}
                        onClick={() => setCurrentGame(game)}
                    >
                        {game}
                    </button>
                ))}
            </div>

            <div className="pokemon-moves-list">
                <ul className="pokemon-moves-list-inner flex gap-sm wrap">
                    {pokemon.parsedMoves.map((move, indx) => {
                        if (move.version !== currentGame) return null;
                        return (
                            <li
                                key={`move-${indx}`}
                                data-game={move.version}
                                data-move-name={move.move}
                                data-level-learned-at={move.level_learned_at}
                                className="pokemon-move-list-item tag default-tag"
                                data-move-learn-method={
                                    move.level_learning_method
                                }
                            >
                                <h4>{move.move}</h4>
                                <small className="level-way flex gap-sm">
                                    <span
                                        data-learning={
                                            move.level_learning_method
                                        }
                                    >
                                        {moveLearningMethods[
                                            move.level_learning_method
                                        ] || "Otro"}
                                    </span>

                                    {move.level_learning_method !==
                                    "level-up" ? (
                                        ""
                                    ) : (
                                        <span>{move.level_learned_at}</span>
                                    )}
                                </small>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <style>{`
                .pokemon-moves-list {
                    padding-top: 10px;
                    border-top: 2px solid #e64d4d
                }
            `}</style>
        </div>
    );
}
