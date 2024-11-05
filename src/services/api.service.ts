import { http } from "./http.service";
import { endpoint, maxLimit } from "../constants/config";
import {
    // getPokemonEvolution,
    getTransformedPokemonMoveDatas,
    getUniqueGamesFromMoves,
} from "../utils";
import { PokemonAPIDetails } from "../@types/global.pokemon";
import { APIPokemonDetails } from "../@types/api.pokemon";
import { EvolutionChain, PokemonSpecie } from "../@types/api.specie";
import { APIEggGroupResponse } from "@/@types/api.egggroup";

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
    getEggGroupDatas: async (
        uuid: string | number
    ): Promise<APIEggGroupResponse> => {
        return http.get(`${endpoint}/egg-group/${uuid}`);
    },
    getPokemonDetails: async (
        uuid: string | number
    ): Promise<PokemonAPIDetails> => {
        const pokemon = await await http.get(`${endpoint}/pokemon/${uuid}`);
        const specie = (await http.get(
            `${endpoint}/pokemon-species/${uuid}`
        )) as PokemonSpecie;
        const evolutions = await http.get(specie.evolution_chain.url) as EvolutionChain;
        const types = pokemon.types.map((type: any) => type.type.name);
        const parsedMoves = getTransformedPokemonMoveDatas(pokemon.moves);

        return {
            ...pokemon,
            specie: specie,
            games: pokemon.game_indices.map((game: any) => game.version.name),
            parsedMoves,
            moveGames: getUniqueGamesFromMoves(pokemon.moves),
            evolutions: evolutions,
            ctypes: types,
        };
    },
};
