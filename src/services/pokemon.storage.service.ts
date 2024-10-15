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
};
