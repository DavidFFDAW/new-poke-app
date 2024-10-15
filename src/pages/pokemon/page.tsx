import PokemonDatas from "./PokemonDatas";
import usePokemonDetails from "./usePokemonDetails";

export default function PokemonPage() {
    const { pokemon, loading } = usePokemonDetails();
    console.log({ pokemon });

    return (
        <article className="pokemon-page">
            {pokemon ? <PokemonDatas pokemon={pokemon} /> : null}
            {loading && <p>Loading...</p>}
        </article>
    );
}
