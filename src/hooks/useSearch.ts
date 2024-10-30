import { pokemonStorage } from "@/services/pokemon.storage.service";
import { useNavigate } from "react-router-dom";

export function useSearch() {
    const navigate = useNavigate();

    return {
        handleFormSearch: (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget;
            const datas = new FormData(form);
            const search = datas.get("search") as string;
            if (!search) return;

            const pokemonExistsInCache = pokemonStorage.isStoredPokemon(search);
            if (pokemonExistsInCache) return navigate(`/pokemon/${search}`);
            if (Number.isInteger(search)) return navigate(`/pokemon/${search}`);

            return navigate(`/pokemon/search/${search}`);
            // add logic to search by type, egg-group, move, etc.
        }
    }
}
