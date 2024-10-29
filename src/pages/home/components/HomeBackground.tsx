import { PokemonCache } from "@/@types/global.pokemon";

interface Props {
    pokemons: PokemonCache[];
}
export default function HomeBackgroundPokemons({ pokemons }: Props) {
    const shuffledPokemons = pokemons.sort(() => Math.random() - 0.5);
    const randomPokemons = shuffledPokemons.slice(0, 9 * 5);

    return (
        <div className="poke-home-background animate">
            <div className="pokemons-wrapper">
                {randomPokemons.map((pokemon) => (
                    <img
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                        alt={pokemon.name}
                        width={200}
                        height={200}
                        className="poke-home-background__pokemon"
                    />
                ))}
            </div>
        </div>
    );
}
