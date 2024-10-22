import { SimpleRoundBox } from "../../../../../components/visuals/box/boxes";
import PokemonMoves from "../Moves/PokemonMoves";
import { PokemonAPIDetails } from "../../../../../@types/global.pokemon";
import usePokemonDatas from "./usePokemonDatas";

interface PokemonProps {
    pokemon: PokemonAPIDetails;
}

export default function PokemonDatas({ pokemon }: PokemonProps) {
    const pageDatas = usePokemonDatas();
    const image = pageDatas.isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default;

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
                    {/* <button type="button" className="btn btn-download" onClick={pageDatas.toggleShiny}>
                        {pageDatas.isShiny ? "Normal" : "Shiny"}
                    </button> */}
                    {/* { details.id !== 1 ? <CenteredButton text={ 'Pokemon anterior' } onclick={ _ => getNextOrPrevPokemon('prev') }></CenteredButton> : <div/> } */}
                    {/* <CenteredButton text={ 'Siguiente pokemon' } onclick={ _ => getNextOrPrevPokemon('next') }></CenteredButton> */}
                </div>
                <div className="flex-start between">
                    <div className="details-card flex-not-align center">
                        <div className="w-100">
                            <div className="details-card-img">
                                <img
                                    src={image}
                                    alt={pokemon.name}
                                />
                            </div>

                            <button type="button" className="btn btn-download" onClick={pageDatas.toggleShiny}>
                                {pageDatas.isShiny ? "Normal" : "Shiny"}
                            </button>
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

                {pageDatas.isBottomPage && (
                    <button
                        className="btn btn-download rd fix"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        Volver arriba
                    </button>
                )}
            </div>
        </>
    );
}
