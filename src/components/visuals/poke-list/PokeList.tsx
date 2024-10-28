import { TypePokeList } from "@/@types/global.pokemon";
import PokeCard from "../card/poke-card";
import PokeSimpleCard from "../card/poke-simple-card";

export default function PokeList(resource: TypePokeList) {
    return (
        <section className="poke-search-results">
            {resource.list.map((pokemon) => {
                if (!pokemon) return null;
                if (!resource.showTypes)
                    return (
                        <PokeSimpleCard key={pokemon.id} pokemon={pokemon} />
                    );
                return <PokeCard key={pokemon.id} pokemon={pokemon} />;
            })}
        </section>
    );
}
