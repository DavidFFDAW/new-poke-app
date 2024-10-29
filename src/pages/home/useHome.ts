import { useEffect, useState } from "react";
import { pokemonStorage } from "../../services/pokemon.storage.service";
import { apiService } from "../../services/api.service";
import { PokeList } from "../../@types/api.pokemon.ts";
import { PokemonCache } from "@/@types/global.pokemon.ts";

export default function useHome() {
    const [homePokemons, setHomePokemons] = useState<PokemonCache[]>([]);

    useEffect(() => {
        const cache = pokemonStorage.getPokemonCache();
        if (cache && cache.length > 0) {
            setHomePokemons(cache);
        }

        if (!cache || cache.length === 0) {
            apiService.getPokemons().then((pokemons: PokeList[]) => {
                const parsedPokemons = pokemons.map((pokemon) => ({
                    ...pokemon,
                    id: Number(
                        pokemon.url
                            .split("https://pokeapi.co/api/v2/pokemon/")[1]
                            .replace(/\//g, "")
                    ),
                }));
                pokemonStorage.savePokemonCache(parsedPokemons);
                setHomePokemons(parsedPokemons);
            });
        }
    }, []);

    return {
        homePokemons,
    };
}
