import { http } from "./http.service";
import { endpoint, maxLimit } from "../constants/config";
import {
    getTransformedPokemonMoveDatas,
    getUniqueGamesFromMoves,
} from "../utils/pokemon.utils";
import { PokemonAPIDetails } from "../@types/global.pokemon";
import { APIPokemonDetails } from "../@types/api.pokemon";

export const apiService = {
    getPokemons: () => {
        return http
            .get(`${endpoint}/pokemon?limit=${maxLimit}`)
            .then((response) => response.results);
    },
    getSinglePokemon: (uuid: string | number) => {
        return http.get(`${endpoint}/pokemon/${uuid}`);
    },
    getPokemonTypes: (uuid: string | number): Promise<APIPokemonDetails> => {
        return http
            .get(`${endpoint}/pokemon/${uuid}`)
            .then((response) => response);
    },
    getPokemonDetails: async (
        uuid: string | number
    ): Promise<PokemonAPIDetails> => {
        const pokemon = await await http.get(`${endpoint}/pokemon/${uuid}`);
        const species = await http.get(`${endpoint}/pokemon-species/${uuid}`);
        const evolutions = await http.get(species.evolution_chain.url);
        const types = pokemon.types.map((type: any) => type.type.name);
        const parsedMoves = getTransformedPokemonMoveDatas(pokemon.moves);

        return {
            ...pokemon,
            specie: species,
            games: pokemon.game_indices.map((game: any) => game.version.name),
            parsedMoves,
            moveGames: getUniqueGamesFromMoves(pokemon.moves),
            evolutions,
            ctypes: types,
        };
    },
};
