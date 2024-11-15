import { pokemonStorage } from "@/services/pokemon.storage.service";
import {
    getSearchAbility,
    getSearchEggGroup,
    getSearchItem,
    getSearchMove,
} from "@/utils";
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

            const egg = getSearchEggGroup(search);
            if (egg) return navigate(`/pokemon/egg-group/${egg[0]}`);

            const ability = getSearchAbility(search);
            if (ability) return navigate(`/pokemon/ability/${ability[0]}`);

            const move = getSearchMove(search);
            if (move) return navigate(`/pokemon/moves/move/${move[0]}`);

            const item = getSearchItem(search);
            if (item) return navigate(`/items/item/${item[0]}`);

            return navigate(`/pokemon/search/${search}`);
        },
    };
}
