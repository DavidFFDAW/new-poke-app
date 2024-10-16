import { PokemonCache } from "../@types/global.pokemon";
import { storageService } from "./storage.service";

export const pokemonStorage = {
    getPokemonCache: (): PokemonCache[] | null => {
        return storageService.get("pokemon_cache");
    },
    savePokemonCache: (cache: PokemonCache[]) => {
        console.log({ savePokemonCache: cache });

        if (cache.length > 0) storageService.save("pokemon_cache", cache);
    },
    getFilteredPokemons: (uuid: string) => {
        const cache = pokemonStorage.getPokemonCache();
        if (!cache) return [];

        return cache.filter(pokemon => pokemon.name.toLowerCase().includes(uuid.toLowerCase()));
    },
    isStoredPokemon(uuid: string | number) { 
        const cache = pokemonStorage.getPokemonCache();
        if (!cache) return false;

        return cache.some(pokemon => (pokemon.id === uuid || pokemon.name === uuid));
    },

    // TODO: refactor this function to work better
    savePokemonDatas: (data: PokemonCache & { types: string[] }) => { 
        const cache = pokemonStorage.getPokemonCache();
        if (!cache) return;

        const index = cache.findIndex(pokemon => pokemon.id === data.id);
        if (index === -1) return;

        cache[index] = {
            ...cache[index],
            types: data.types,
        };
        storageService.save("pokemon_cache", cache);
    },
};
