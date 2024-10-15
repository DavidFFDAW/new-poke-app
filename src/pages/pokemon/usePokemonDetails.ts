import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "../../services/api.service";
import { APIPokemonDetails } from "../../@types/api.pokemon";
import { PokemonDetailsPageState } from "../../@types/global.pokemon";

export default function usePokemonDetails() {
    const { uuid } = useParams();
    const [datas, setDatas] = useState<PokemonDetailsPageState>({
        pokemon: null,
        loading: true,
        error: false,
    });

    useEffect(() => {
        if (uuid) {
            apiService
                .getSinglePokemon(uuid as string)
                .then((pokemon: APIPokemonDetails) => {
                    setDatas((pr) => ({
                        ...pr,
                        pokemon,
                        loading: false,
                    }));
                });
        }
    }, [uuid]);

    return {
        pokemon: datas.pokemon,
        loading: datas.loading,
        error: datas.error,
    };
}
