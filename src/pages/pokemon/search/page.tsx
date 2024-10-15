import { useParams } from 'react-router-dom';
import usePokemonSearch from './usePokemonSearch';
import { apiService } from '../../../services/api.service';

export default function PokemonSearchPage() {
    const { uuid } = useParams<{ uuid: string }>();
    if (!uuid) return null;
    const results = apiService.getFilteredPokemons(uuid);
    console.log('Polllll search page', results);

    return <h1>Pokemon Search Page</h1>;
}
