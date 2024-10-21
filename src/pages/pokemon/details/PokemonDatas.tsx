import { useEffect, useState } from "react";
import { SimpleRoundBox } from "../../../components/visuals/box/boxes";
import PokemonMoves from "./components/PokemonMoves";
import { PokemonAPIDetails } from "../../../@types/global.pokemon";

interface PokemonProps {
    pokemon: PokemonAPIDetails;
}

export default function PokemonDatas({ pokemon }: PokemonProps) {
    const [isBottomPage, setIsBottomPage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setIsBottomPage(true);
            } else {
                setIsBottomPage(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="pokemon-datas-page">
                <div
                    className="flex between"
                    style={{
                        padding: "5px 50px",
                        marginBottom: "20px",
                    }}
                >
                    {/* { details.id !== 1 ? <CenteredButton text={ 'Pokemon anterior' } onclick={ _ => getNextOrPrevPokemon('prev') }></CenteredButton> : <div/> } */}
                    {/* <CenteredButton text={ 'Siguiente pokemon' } onclick={ _ => getNextOrPrevPokemon('next') }></CenteredButton> */}
                </div>
                <div className="flex-start between">
                    <div className="details-card flex-not-align center">
                        <div className="w-100">
                            <div className="details-card-img">
                                <img
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="details-text flex column gap">
                        <SimpleRoundBox title="Información">
                            {pokemon.weight}
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Movimientos">
                            <PokemonMoves pokemon={pokemon} />
                        </SimpleRoundBox>

                        {/* <RightPanel 
                        details={ details } 
                        pokemonStats={pokemonStats} 
                        isShiny={isShiny}
                        handleSetShiny={handleSetShiny}
                        maleSprite={maleSprite}
                        finalFemaleSprite={finalFemaleSprite}
                        information={information}
                    /> */}
                    </div>
                </div>

                {isBottomPage && (
                    <button
                        className="btn btn-download rd fix"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        Volver arriba{" "}
                    </button>
                )}
            </div>
        </>
    );
}
