import React from "react";
import { useNavigate } from "react-router-dom";
import { pokemonStorage } from "../../../services/pokemon.storage.service";

export default function HeaderSearchForm() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const datas = new FormData(form);
        const search = datas.get("search") as string;
        if (!search) return;

        const pokemonExistsInCache = pokemonStorage.isStoredPokemon(search);
        if (pokemonExistsInCache) return navigate(`/pokemon/${search}`);

        if (Number.isInteger(search)) return navigate(`/pokemon/${search}`);

        return navigate(`/pokemon/search/${search}`);
    };

    return (
        <form
            className="last input-div"
            action=""
            method="get"
            onSubmit={handleSubmit}
        >
            <input
                className="text-search"
                type="text"
                name="search"
                defaultValue=""
            />
            <button className="btn btn-search" type="submit">
                Search
            </button>
        </form>
    );
}
