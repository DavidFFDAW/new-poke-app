import { PokemonCache } from "../../../@types/global.pokemon";
import PokeSimpleCard from "./poke-simple-card";
import PokemonRequestCard from "./pokemon-request-card";

interface Props {
    pokemon: PokemonCache;
}

export default function PokeCard({ pokemon }: Props) {
    const types = pokemon.types;

    if (!types) return <PokemonRequestCard pokemon={pokemon} />;
    if (types && types.length === 0)
        return <PokemonRequestCard pokemon={pokemon} />;

    return <PokeSimpleCard pokemon={pokemon as any} />;
}
