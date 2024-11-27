import PokeImage from '@/components/visuals/images/PokeImage';
import ComponentSpinner from '@/components/visuals/loaders/ComponentSpinner';
import PokeType from '@/components/visuals/types/PokeType';
import { useEffect, useState } from 'react';

export default function PokemonRandomPage() {
    const [pokemon, setPokemon] = useState<any>({
        pokemon: null,
        random: Math.floor(Math.random() * 898) + 1,
    });

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.random}`)
            .then(response => response.json())
            .then(data => setPokemon(p => ({ ...p, pokemon: data })));
    }, [pokemon.random]);

    return (
        <section className="w1 page random-pokemon-page">
            <h1>Random pokemon</h1>
            <div className="pokemon-container" data-random={pokemon.random}>
                {pokemon.pokemon ? (
                    <div
                        className="flex center acenter pokemon-card card column gap-1"
                        data-pokemon={pokemon.pokemon.name}
                    >
                        <PokeImage src={pokemon.pokemon.sprites.front_default} alt={pokemon.pokemon.name} />
                        <h2>{pokemon.pokemon.name}</h2>
                        <ul className="flex gap-small">
                            {pokemon.pokemon.types.map((type: any) => (
                                <li key={type.slot}>
                                    <PokeType type={type.type.name} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <ComponentSpinner />
                )}
            </div>
        </section>
    );
}
