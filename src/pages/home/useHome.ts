import { useEffect } from "react";
import { pokemonStorage } from "../../services/pokemon.storage.service";
import { apiService } from "../../services/api.service";
import { PokemonCache } from "../../@types/global.pokemon";

export default function useHome() {
    const cache = pokemonStorage.getPokemonCache();

    useEffect(() => {
        if (!cache || cache.length === 0) {
            apiService.getPokemons().then((pokemons: PokemonCache[]) => {
                pokemonStorage.savePokemonCache(pokemons);
            });
        }
    }, []);

    return {};
}
