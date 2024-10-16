import { useParams } from 'react-router-dom';
import PokeCard from '../../../components/visuals/card/poke-card';
import { pokemonStorage } from '../../../services/pokemon.storage.service';

export default function PokemonSearchPage() {
    const { uuid } = useParams<{ uuid: string }>();
    if (!uuid) return null;

    const results = pokemonStorage.getFilteredPokemons(uuid);

    return (
        <>
            <h1>Search for {uuid}</h1>
            
            <div className='w1 flex' style={{ flexWrap: 'wrap', gap: 12 }}>
                {results.map((pokemon) => {
                    if (!pokemon) return null;
                    return <PokeCard key={pokemon.id} pokemon={pokemon} />
                })}
            </div>
        </>
    );
}
