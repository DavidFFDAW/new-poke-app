import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "../../services/api.service";
import { APIPokemonDetails } from "../../@types/api.pokemon";
import { PokemonDetails, PokemonDetailsPageState } from "../../@types/global.pokemon";

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
                .getPokemonDetails(uuid as string)
                .then((pokemon: PokemonDetails) => {
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
