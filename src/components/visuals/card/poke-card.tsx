import { PokemonCache } from "../../../@types/global.pokemon";
import PokeSimpleCard from "./poke-simple-card";
import PokemonRequestCard from "./pokemon-request-card";

interface Props {
  pokemon: PokemonCache;
}

export default function PokeCard({ pokemon }: Props) {
  if (pokemon.types && pokemon.types.length > 0) return <PokeSimpleCard pokemon={pokemon as any} />
  return <PokemonRequestCard pokemon={pokemon} />
}
