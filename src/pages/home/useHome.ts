import { useEffect } from "react";
import { pokemonStorage } from "../../services/pokemon.storage.service";
import { apiService } from "../../services/api.service";
import { PokeList } from "../../@types/api.pokemon.ts";

export default function useHome() {
    const cache = pokemonStorage.getPokemonCache();

    useEffect(() => {
        if (!cache || cache.length === 0) {
            apiService.getPokemons().then((pokemons: PokeList[]) => {
                pokemonStorage.savePokemonCache(pokemons.map((pokemon) => ({
                    ...pokemon,
                    id: pokemon.url.split('https://pokeapi.co/api/v2/pokemon/')[1].replace('/', '')
                })));
            });
        }
    }, []);

    return {};
}
