import { APIPokemonDetails } from "../../@types/api.pokemon";

interface PokemonProps {
    pokemon: APIPokemonDetails;
}

export default function PokemonDatas({ pokemon }: PokemonProps) {
    return (
        <div className="pokemon-datas-page">
            <h1>{pokemon.name}</h1>
            <p lang="en" translate="yes">
                Height: {pokemon.height}
            </p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Weight: {pokemon.weight}</p>
            <p>Base experience: {pokemon.base_experience}</p>
        </div>
    );
}
