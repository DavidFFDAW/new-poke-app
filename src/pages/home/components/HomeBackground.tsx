import { PokemonCache } from "@/@types/global.pokemon";
import PokeImage from "@/components/visuals/images/PokeImage";
import { getIsShinyProbability } from "@/utils/shiny.util";

interface Props {
    pokemons: PokemonCache[];
}
export default function HomeBackgroundPokemons({ pokemons }: Props) {
    const shuffledPokemons = pokemons.filter(pokemon => !pokemon.name.includes('-')).sort(() => Math.random() - 0.5);
    const randomPokemons = shuffledPokemons.slice(0, 9 * 5).map((pokemon) => {
        const shiny = getIsShinyProbability();
        return {
            id: pokemon.id,
            name: pokemon.name,
            shiny: shiny,
            image: shiny
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        };
    });

    return (
        <div className="poke-home-background animate">
            <div className="pokemons-wrapper">
                {randomPokemons.map((pokemon) => (
                    <PokeImage
                        key={pokemon.id}
                        width={200}
                        height={200}
                        shiny={pokemon.shiny}
                        src={pokemon.image}
                        alt={pokemon.name}
                    />
                ))}
            </div>
        </div>
    );
}
