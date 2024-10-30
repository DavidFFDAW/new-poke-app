import { SimpleRoundBox } from '../../../../../components/visuals/box/boxes';
import PokemonMoves from '../Moves/PokemonMoves';
import { PokemonAPIDetails } from '../../../../../@types/global.pokemon';
import usePokemonDatas from './usePokemonDatas';
import PokeAbilities from '../Abilities/abilities';
import PokemonTypeRelations from '../Types/PokemonTypeRelations';
import { Link } from 'react-router-dom';
import { getPokemonEggGroup } from '../../../../../utils/pokemon.translate';
import PokeImage from '@/components/visuals/images/PokeImage';
import PokeType from '@/components/visuals/types/PokeType';

interface PokemonProps {
    pokemon: PokemonAPIDetails;
}

export default function PokemonDatas({ pokemon }: PokemonProps) {
    const pageDatas = usePokemonDatas();
    const image = pageDatas.isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default;
    const backImage = pageDatas.isShiny ? pokemon.sprites.back_shiny : pokemon.sprites.back_default;

    const eggGroups = pokemon.specie.egg_groups.map(egg => ({
        ...egg, original: egg.name, name: getPokemonEggGroup(egg.name)
    }));

    return (
        <>
            <div className="pokemon-datas-page">
                <div
                    className="flex between"
                    style={{
                        padding: '5px 50px',
                        marginBottom: '20px',
                    }}
                >
                    {/* <button type="button" className="btn btn-download" onClick={pageDatas.toggleShiny}>
                        {pageDatas.isShiny ? "Normal" : "Shiny"}
                    </button> */}
                    {/* { details.id !== 1 ? <CenteredButton text={ 'Pokemon anterior' } onclick={ _ => getNextOrPrevPokemon('prev') }></CenteredButton> : <div/> } */}
                    {/* <CenteredButton text={ 'Siguiente pokemon' } onclick={ _ => getNextOrPrevPokemon('next') }></CenteredButton> */}
                </div>
                <div className="w1 flex-start between">
                    <div className="w1 details-card flex-not-align center">
                        <div className="w1 details-card-image-shiny-container">
                            <div className="w1 details-card-img flex center gap">
                                <PokeImage src={image} alt={`${pokemon.name} front view`} />
                                <PokeImage src={backImage} alt={`${pokemon.name} back view`} />
                            </div>

                            <div className="w1 flex center">
                                <button type="button" className="btn btn-download" onClick={pageDatas.toggleShiny}>
                                    {pageDatas.isShiny ? 'Normal' : 'Shiny'}
                                </button>
                            </div>
                        </div>

                        <div className="w1 abilities">
                            <PokeAbilities abilities={pokemon.abilities} />
                        </div>

                        <div className="w1 down poke-egg-group poke-egg-group-block egg-groups flex start column gap-sm">
                            <h3 className="w1">Grupo huevo</h3>
                            <ul className="w1 poke-egg-group-list flex start gap-sm">
                                {eggGroups.map((eggGroup, index) => (
                                    <li key={index} className="egg-group-item">
                                        <Link to={`/pokemon/egg-group/${eggGroup.original}`} className="block tag default-tag">
                                            {eggGroup.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w1 types poke-types flex column gap-sm">
                            <h3 className="w1">Tipos</h3>
                            <ul className="flex center gap">
                                {pokemon.types.map((type, index) => (
                                    <li key={index} className="poke-type-item">
                                        <PokeType type={type.type.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w1 details-text flex column gap">
                        <SimpleRoundBox title="Información">
                            <div className="flex start astart column gap-sm">
                                <p><strong>Id: </strong> {pokemon.id}</p>
                                <p><strong>Nombre: </strong> {pokemon.name}</p>
                                <p><strong>Orden: </strong> {pokemon.order}</p>
                                <p><strong>Altura: </strong> {pokemon.height / 10} m</p>
                                <p><strong>Peso: </strong> {pokemon.weight / 10} kg</p>
                                <p><strong>Experiencia base: </strong> {pokemon.base_experience}</p>
                                <p><strong>Ratio de captura: </strong> {pokemon.specie.capture_rate}</p>
                                <p><strong>Generación: </strong> {pokemon.specie.generation.name}</p>
                                <p><strong>Habitat: </strong> {pokemon.specie.habitat?.name || 'Desconocido'}</p>
                                <p><strong>Color: </strong> {pokemon.specie.color.name}</p>
                                <p><strong>Forma: </strong> {pokemon.specie.shape.name}</p>
                                <p><strong>¿Puede criar?</strong> {pokemon.specie.hatch_counter}</p>
                                <p><strong>¿Es legendario?</strong> {pokemon.specie.is_legendary ? 'Sí' : 'No'}</p>
                                <p><strong>¿Es mítico?</strong> {pokemon.specie.is_mythical ? 'Sí' : 'No'}</p>
                            </div>
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
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Volver arriba
                    </button>
                )}
            </div>
        </>
    );
}
