import { SimpleRoundBox } from "../../../../../components/visuals/box/boxes";
import PokemonMoves from "../Moves/PokemonMoves";
import { PokemonAPIDetails } from "../../../../../@types/global.pokemon";
import usePokemonDatas from "./usePokemonDatas";
import PokeAbilities from "../Abilities/abilities";
import PokemonTypeRelations from "../Types/PokemonTypeRelations";
import { Link } from "react-router-dom";

interface PokemonProps {
    pokemon: PokemonAPIDetails;
}

export default function PokemonDatas({ pokemon }: PokemonProps) {
    const pageDatas = usePokemonDatas();
    const image = pageDatas.isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default;
    const backImage = pageDatas.isShiny ? pokemon.sprites.back_shiny : pokemon.sprites.back_default;

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
                        <div className="w1 details-card-image-shiny-container">
                            <div className="w1 details-card-img flex center gap">
                                <img
                                    src={image}
                                    alt={`${pokemon.name} front view`}
                                />
                                <img
                                    src={backImage}
                                    alt={`${pokemon.name} back view`}
                                />
                            </div>

                            <div className="w1 flex center">
                                <button type="button" className="btn btn-download" onClick={pageDatas.toggleShiny}>
                                    {pageDatas.isShiny ? "Normal" : "Shiny"}
                                </button>
                            </div>
                        </div>

                        <div className="abilities">
                            <PokeAbilities abilities={pokemon.abilities} />
                        </div>

                        <div className="w1 poke-egg-group poke-egg-group-block egg-groups flex center">
                            <ul className="poke-egg-group-list flex column gap-sm">
                                {pokemon.specie.egg_groups.map((eggGroup, index) => (
                                    <li key={index} className="egg-group-item">
                                        <Link to={`/pokemon/egg-group/${eggGroup.name}`} className="tag default-tag">
                                            {eggGroup.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w1 types poke-types">
                            <ul className="flex center gap">
                                {pokemon.types.map((type, index) => (
                                    <li key={index} className={`poke-type poke-type-${type.type.name}`}>
                                        {type.type.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="details-text flex column gap">
                        <SimpleRoundBox title="Información">
                            {pokemon.weight}
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Debilidades y fortalezas">
                            <PokemonTypeRelations types={pokemon.ctypes} />
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
