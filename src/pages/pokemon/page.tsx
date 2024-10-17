import SEOHead from "../../components/seo/head";
import PokemonDatas from "./PokemonDatas";
import usePokemonDetails from "./usePokemonDetails";

export default function PokemonPage() {
    const { pokemon, loading } = usePokemonDetails();
    console.log({ pokemon });

    return (
        <>
            {pokemon ? <SEOHead title={`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`} /> : null}

            <article className="pokemon-page">
                {pokemon ? <PokemonDatas pokemon={pokemon} /> : null}
                {loading && <p>Loading...</p>}
            </article>
        </>
    );
}
