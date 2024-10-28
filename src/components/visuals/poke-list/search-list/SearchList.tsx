import { TypePokeList } from "@/@types/global.pokemon";
import { useState } from "react";
import PokeSimpleCard from "../../card/poke-simple-card";
import PokeCard from "../../card/poke-card";

export default function PokeSearchList(resource: TypePokeList) {
    const [search, setSearch] = useState({
        search: "",
        list: resource.list,
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const list = resource.list.filter((pokemon) =>
            pokemon.name.includes(value)
        );
        setSearch({ search: value, list });
    };

    return (
        <div className="search-list-wrapper-container">
            <header className="search-list-component-header-wrapper flex between gap">
                <p>Search for {search.search}</p>
                <input
                    type="text"
                    value={search.search}
                    onChange={handleSearch}
                />
            </header>

            <section className="poke-search-results">
                {search.list.map((pokemon) => {
                    if (!pokemon) return null;
                    if (!resource.showTypes)
                        return (
                            <PokeSimpleCard
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        );
                    return <PokeCard key={pokemon.id} pokemon={pokemon} />;
                })}
            </section>
        </div>
    );
}
