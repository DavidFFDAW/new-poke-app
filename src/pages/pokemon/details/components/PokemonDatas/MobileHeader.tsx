import { PokemonAPIDetails } from '@/@types/global.pokemon';
import HeaderSearchForm from '@/components/visuals/header/search-form';
import TypeIcon from '@/components/visuals/icons/Types';
import PokeType from '@/components/visuals/types/PokeType';

interface PokemonProps {
    pokemon: PokemonAPIDetails;
    isShiny: boolean;
}

export default function MobileHeader({ pokemon, isShiny }: PokemonProps) {
    const showdownSize = 120;
    const genus = pokemon.specie.genera.find(genus => genus.language.name === 'es');
    const showdownImage = isShiny
        ? `https://projectpokemon.org/images/shiny-sprite/${pokemon.name}.gif`
        : `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`;
    const firstType = pokemon.types[0].type.name;
    // import the svg image from the public folder with the name of the first type of the pokemon


    return (
        <header className='w1 mobile-details-pokemon-page-header'>
            <div className={`w1 relative poke-header-container flex center acenter ${firstType} `}>
                <img
                    width={showdownSize}
                    height={showdownSize}
                    src={showdownImage} alt={`${pokemon.name} gif animated`}
                />
                <div className='svg-icon-container'>
                    <TypeIcon type={firstType} />
                </div>
            </div>

            <div className='w1 down flex column start astart gap read-padding'>
                <div className="w1 form">
                    <HeaderSearchForm />
                </div>

                <div className='flex column gap-sm'>
                    <h1 className='uppercase'>{pokemon.name} <small>#{pokemon.id}</small></h1>
                    {genus ? <p className='genus'>{genus.genus}</p> : null}
                </div>

                <div className='w1 flex acenter start poke-types-list gap-sm'>
                    {pokemon.types.map((type, index) => (
                        <PokeType key={index} type={type.type.name} />
                    ))}
                </div>
            </div>
        </header >
    )
}
