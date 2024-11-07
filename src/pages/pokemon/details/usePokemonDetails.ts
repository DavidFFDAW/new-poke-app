import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "../../../services/api.service";
import {
    PokemonAPIDetails,
    PokemonDetailsPageState,
} from "../../../@types/global.pokemon";
import { NavigationCache } from "@/services/navigation.cache";

export default function usePokemonDetails() {
    const { uuid } = useParams();
    const cached = NavigationCache.get(uuid as string);
    const [datas, setDatas] = useState<PokemonDetailsPageState>({
        pokemon: null,
        loading: true,
        error: false,
    });

    useEffect(() => {
        if (uuid) {
            apiService
                .getPokemonDetails(uuid as string)
                .then((pokemon: PokemonAPIDetails) => {
                    setDatas((pr) => ({
                        ...pr,
                        pokemon,
                        loading: false,
                    }));
                    NavigationCache.save(pokemon.name.toLowerCase(), datas);
                });
        }
    }, [uuid]);

    return {
        uuid: uuid as string,
        pokemon: datas.pokemon,
        loading: datas.loading,
        error: datas.error,
    };
}
