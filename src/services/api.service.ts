import { http } from './http.service';
import { endpoint, maxLimit } from '../constants/config';
import { pokemonStorage } from './pokemon.storage.service';

export const apiService = {
    getPokemons: () => {
        return http.get(`${endpoint}/pokemon?limit=${maxLimit}`).then(response => response.results);
    },
    getSinglePokemon: (uuid: string | number) => {
        return http.get(`${endpoint}/pokemon/${uuid}`);
    },
    getFilteredPokemons: (uuid: string) => {
        const cache = pokemonStorage.getPokemonCache();
        if (!cache) return [];

        return cache.filter(pokemon => pokemon.name.toLowerCase().includes(uuid.toLowerCase()));
    },
};
