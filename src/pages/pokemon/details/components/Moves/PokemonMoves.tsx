import React from "react";
import { PokemonAPIDetails } from "../../../../../@types/global.pokemon";
import LearnWay from "./LearnWay";
import MoveItem from "./MoveItem";

interface PokemonMovesProps {
    pokemon: PokemonAPIDetails;
}


export default function PokemonMoves({ pokemon }: PokemonMovesProps) {
    const [currentGame, setCurrentGame] = React.useState("diamond-pearl");
    const levelMoves = pokemon.parsedMoves.filter(move => move.level_learning_method === "level-up");
    const otherMoves = pokemon.parsedMoves.filter(move => move.level_learning_method !== "level-up");

    return (
        <div className="pokemon-moves-whole-container">
            <div className="pokemon-moves-game-selector w1">
                <label htmlFor="game">Juego</label>
                <select className="w1 game-select" name="game" id="game" onChange={(e) => setCurrentGame(e.target.value)}>
                    {pokemon.moveGames.map((game, indx) => (
                        <option key={`${game}-game-${indx}`}>
                            {game}
                        </option>
                    ))}
                </select>
            </div>

            <div className="pokemon-moves-list">
                {/* <ul className="pokemon-moves-list-inner flex gap-sm wrap"> */}
                <table>
                    <thead>
                        <tr>
                            <th>Movimiento</th>
                            <th>Método</th>
                            <th>Nivel</th>
                        </tr>
                    </thead>

                    <tbody>
                        {levelMoves.map((move, indx) => {
                            if (move.version !== currentGame) return null;
                            return <MoveItem key={`${move.move}-${indx}`} move={move} />;
                        })}
                        {otherMoves.map((move, indx) => {
                            if (move.version !== currentGame) return null;
                            return <MoveItem key={`${move.move}-${indx + levelMoves.length + 1}`} move={move} />;
                        })}
                    </tbody>
                </table>
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
