import SEOHead from "../../../components/seo/head";
import PokemonDatas from "./components/PokemonDatas/PokemonDatas";
import usePokemonDetails from "./usePokemonDetails";
import "./poke.details.css";

export default function PokemonPage() {
    const { uuid, pokemon, loading } = usePokemonDetails();
    console.log({ pokemon });

    return (
        <>
            {pokemon ? (
                <SEOHead
                    title={`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
                        1
                    )}`}
                />
            ) : null}

            <article className="pokemon-page pokemon-details-page">
                <div
                    className="flex center details-title-name bg-top"
                    translate="no"
                >
                    <h1 translate="no">{uuid}</h1>
                </div>

                <div className="pokemon-details-content-wrapper-container">
                    {pokemon ? <PokemonDatas pokemon={pokemon} /> : null}
                    {loading && <p>Loading...</p>}
                </div>
            </article>
        </>
    );
}
