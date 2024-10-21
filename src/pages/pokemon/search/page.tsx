import { useParams } from "react-router-dom";
import PokeCard from "../../../components/visuals/card/poke-card";
import { pokemonStorage } from "../../../services/pokemon.storage.service";
import SEOHead from "../../../components/seo/head";

export default function PokemonSearchPage() {
    const { uuid } = useParams<{ uuid: string }>();
    if (!uuid) return null;

    const results = pokemonStorage.getFilteredPokemons(uuid);

    return (
        <>
            <SEOHead
                title={`Search "${uuid[0].toUpperCase()}${uuid.slice(1)}"`}
            />
            <h1>Search for {uuid}</h1>

            <section className="poke-search-results">
                {results.map((pokemon) => {
                    if (!pokemon) return null;
                    return <PokeCard key={pokemon.id} pokemon={pokemon} />;
                })}
            </section>
        </>
    );
}
