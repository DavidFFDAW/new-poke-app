import { PokemonCache } from '../../../@types/global.pokemon'
import PokeSimpleCard, { PokeCardLoading } from './poke-simple-card';
import useRequestPokeCard from './useRequestPokeCard';

interface Props {
    pokemon: PokemonCache;
}

export default function PokemonRequestCard({ pokemon }: Props) {
    const request = useRequestPokeCard(pokemon);
    
    if (request.loading) return <PokeCardLoading />
    return <PokeSimpleCard pokemon={request.pokemon} />
}
