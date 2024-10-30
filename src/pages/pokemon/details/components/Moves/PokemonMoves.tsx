import React from "react";
import { PokemonAPIDetails } from "../../../../../@types/global.pokemon";
import MoveItem from "./MoveItem";
import NullableComponent from "@/components/visuals/loaders/Nullable";

interface PokemonMovesProps {
    pokemon: PokemonAPIDetails;
}


export default function PokemonMoves({ pokemon }: PokemonMovesProps) {
    const [currentGame, setCurrentGame] = React.useState(pokemon.moveGames[0]);
    const [tableTab, setTableTab] = React.useState<string>("level");
    const eggMoves = pokemon.parsedMoves.filter(move => move.level_learning_method === "egg");
    const levelMoves = pokemon.parsedMoves.filter(move => move.level_learning_method === "level-up");
    const machineMoves = pokemon.parsedMoves.filter(move => move.level_learning_method === "machine");

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
                <div className="flex gap-sm">
                    <button className={`btn btn-tab ${tableTab === "level" ? "active" : ""}`} onClick={() => setTableTab("level")}>
                        Nivel
                    </button>
                    <button className={`btn btn-tab ${tableTab === "machine" ? "active" : ""}`} onClick={() => setTableTab("machine")}>
                        Máquina
                    </button>
                    <button className={`btn btn-tab ${tableTab === "egg" ? "active" : ""}`} onClick={() => setTableTab("egg")}>
                        Huevo
                    </button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Movimiento</th>
                            <th>Método</th>
                            <th>Poder</th>
                            <th>Precisión</th>
                            <th>PP</th>
                            <th>Clase</th>
                            <NullableComponent condition={tableTab === "level"}>
                                <th>Nivel</th>
                            </NullableComponent>
                        </tr>
                    </thead>

                    <tbody>
                        <NullableComponent condition={tableTab === "level"}>
                            {levelMoves.map((move, indx) => {
                                if (move.version !== currentGame) return null;
                                return <MoveItem key={`${move.move}-${indx}`} move={move} />;
                            })}
                        </NullableComponent>

                        <NullableComponent condition={tableTab === "machine"}>
                            {machineMoves.map((move, indx) => {
                                if (move.version !== currentGame) return null;
                                return <MoveItem key={`${move.move}-${indx + levelMoves.length + 1}`} move={move} />;
                            })}
                        </NullableComponent>

                        <NullableComponent condition={tableTab === "egg"}>
                            {eggMoves.map((move, indx) => {
                                if (move.version !== currentGame) return null;
                                return <MoveItem key={`${move.move}-${indx + levelMoves.length + machineMoves.length + 1}`} move={move} />;
                            })}
                        </NullableComponent>
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
