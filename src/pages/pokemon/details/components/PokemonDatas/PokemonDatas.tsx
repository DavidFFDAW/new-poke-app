import { SimpleRoundBox } from '@/components/visuals/box/boxes';
import PokemonMoves from '../Moves/PokemonMoves';
import { PokemonAPIDetails } from '@/@types/global.pokemon';
import usePokemonDatas from './usePokemonDatas';
import PokeAbilities from '../Abilities/abilities';
import PokemonTypeRelations from '../Types/PokemonTypeRelations';
import { Link } from 'react-router-dom';
import PokeImage from '@/components/visuals/images/PokeImage';
import PokeType from '@/components/visuals/types/PokeType';
import NullableComponent from '@/components/visuals/loaders/Nullable';
import { getPokemonEggGroup, getGenderPercentages } from '@/utils';
import PokemonEvolutions from '../Evolution/PokeEvolutionCard';

interface PokemonProps {
    pokemon: PokemonAPIDetails;
}

export default function PokemonDatas({ pokemon }: PokemonProps) {
    const pageDatas = usePokemonDatas();
    const images = {
        sprite: {
            front: pageDatas.isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default,
            back: pageDatas.isShiny ? pokemon.sprites.back_shiny : pokemon.sprites.back_default
        },
        home: {
            male: {
                front: pageDatas.isShiny ? pokemon.sprites.other.home.front_shiny : pokemon.sprites.other.home.front_default,
            },
            female: {
                front: pageDatas.isShiny ? pokemon.sprites.other.home.front_shiny_female : pokemon.sprites.other.home.front_female,
            }
        }
    }

    const eggGroups = pokemon.specie.egg_groups.map(egg => ({
        ...egg, original: egg.name, name: getPokemonEggGroup(egg.name)
    }));
    const canBreed = eggGroups.filter(egg => egg.name === 'Desconocido').length === 0;
    const genderRatios = getGenderPercentages(pokemon.specie.gender_rate);

    return (
        <>
            <div className="pokemon-datas-page">
                <div className="w1 flex-start between">
                    <div className="w1 details-card flex-not-align center">
                        <div className="w1 details-card-image-shiny-container">
                            <div className="w1 details-card-img flex center gap">
                                <PokeImage src={images.sprite.front} alt={`${pokemon.name} front view`} shiny={pageDatas.isShiny} />
                                <PokeImage src={images.sprite.back} alt={`${pokemon.name} back view`} shiny={pageDatas.isShiny} />
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
                                <p><strong>¿Es legendario?</strong> {pokemon.specie.is_legendary ? 'Sí' : 'No'}</p>
                                <p><strong>¿Es mítico?</strong> {pokemon.specie.is_mythical ? 'Sí' : 'No'}</p>
                                {canBreed
                                    ? <a href="#breedability" className='btn button btn-download'>Capacidad para crianza</a>
                                    : 'No puede criar'
                                }
                            </div>
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Debilidades y fortalezas">
                            <PokemonTypeRelations types={pokemon.ctypes} />
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Diferencias de sexo">
                            <h3 className='w1 tcenter'>{pokemon.name} {pokemon.specie.has_gender_differences ? 'tiene' : 'no tiene'} diferencias de género.</h3>
                            <div className='flex center gender-sex-differences'>
                                <div className='card'>
                                    <PokeImage width={300} className="gender" data-src={images.home.male.front} src={images.home.male.front} alt={`${pokemon.name} male front image`} shiny={pageDatas.isShiny} />
                                    {pokemon.specie.has_gender_differences ? <p className='tcenter'>Masculino</p> : null}
                                </div>

                                <NullableComponent condition={pokemon.specie.has_gender_differences}>
                                    <div className='card'>
                                        <PokeImage width={300} className="gender" data-src={images.home.female.front} src={images.home.female.front} alt={`${pokemon.name} female front image`} shiny={pageDatas.isShiny} />
                                        <p className='tcenter'>Femenino</p>
                                    </div>
                                </NullableComponent>
                            </div>

                            <div className="flex center">
                                <button className='btn btn-download' onClick={pageDatas.toggleShiny}>
                                    Ver versión shiny
                                </button>
                            </div>
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Evoluciones">
                            <PokemonEvolutions evolutions={pokemon.evolutions} />
                            <pre style={{ display: 'none' }}>
                                {JSON.stringify(pokemon.evolutions, null, 4)}
                            </pre>
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Crianza" id='breedability'>
                            <NullableComponent condition={!canBreed}>
                                {pokemon.name} no puede criar.
                            </NullableComponent>

                            <NullableComponent condition={canBreed}>
                                <div className="flex start astart column gap-sm">
                                    <p className='flex gap-sm'><strong>Porcentaje de género: </strong>
                                        <span className='flex gap'>
                                            <span title='femenino'>{genderRatios.female} (♀)</span>
                                            <span> - </span>
                                            <span title='masculino'>{genderRatios.male} (♂)</span>
                                        </span>
                                    </p>
                                    <p><strong>Porcentaje de captura: </strong> {((pokemon.specie.capture_rate / 255) * 100).toFixed(2)}%</p>
                                    <p><strong>Pasos para eclosión de huevo: </strong> {pokemon.specie.hatch_counter * 255}</p>
                                </div>
                            </NullableComponent>
                        </SimpleRoundBox>

                        <SimpleRoundBox title="Movimientos">
                            <PokemonMoves pokemon={pokemon} />
                        </SimpleRoundBox>
                    </div >
                </div >

                {
                    pageDatas.isBottomPage && (
                        <button
                            className="btn btn-download rd fix"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Volver arriba
                        </button>
                    )
                }
            </div >
        </>
    );
}
