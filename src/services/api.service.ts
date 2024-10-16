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
    getPokemonTypes: (uuid: string | number) => {
        return http.get(`${endpoint}/pokemon/${uuid}`).then(response => response.types);
    },
};
