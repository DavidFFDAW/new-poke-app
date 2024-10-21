import { useEffect, useState } from "react";
import { PokemonCache } from "../../../@types/global.pokemon";
import { apiService } from "../../../services/api.service";
import { pokemonStorage } from "../../../services/pokemon.storage.service";

export default function useRequestPokeCard(pokemon: PokemonCache) {
    const [cardState, setCardState] = useState<any>({
        poke: null,
        loading: true,
    });

    useEffect(() => {
        apiService
            .getPokemonTypes(pokemon.name)
            .then((details) => {
                const data = {
                    id: details.id,
                    name: pokemon.name,
                    types: details.types.map((type: any) => type.type.name),
                    sprite: details.sprites.front_default,
                };
                pokemonStorage.savePokemonDatas(data as any);
                setCardState({
                    poke: data,
                    loading: false,
                });
            })
            .catch(() =>
                setCardState({
                    poke: null,
                    loading: false,
                })
            );
    }, [pokemon.id]);

    return {
        pokemon: cardState.poke,
        loading: cardState.loading,
    };
}
