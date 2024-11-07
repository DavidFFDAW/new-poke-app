import {
    EvolutionChain,
    EvolutionDetail,
    EvolvesTo,
} from "@/@types/api.evolutions";
import NullableComponent from "@/components/visuals/loaders/Nullable";
import { getSingleEvolutionDetails } from "@/utils/pokemon.evolution.util";
import { Link } from "react-router-dom";

interface Props {
    evolutions: EvolutionChain;
}

interface CardProps {
    pokemon: { id: number; name: string };
    details: any[];
}

export function PokeEvolutionCard({ pokemon, details }: CardProps) {
    return (
        <Link
            to={`/pokemon/${pokemon.name}`}
            className="single-evolution-card flex column gap-sm"
        >
            <div className="image-name-container flex center acenter column gap-sm">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt={pokemon.name}
                />
                <p className="poke-evolution-name">{pokemon.name}</p>
            </div>

            <NullableComponent condition={details.length > 0}>
                <PokeEvolutionDetails details={details} />
            </NullableComponent>
        </Link>
    );
}

export function PokeEvolutionDetails({
    details,
}: {
    details: EvolutionDetail[];
}) {
    if (details.length === 0) return null;
    const parsedDetails = details.map((detail) =>
        getSingleEvolutionDetails(detail)
    );

    return (
        <div className="w1 evolution-details-group flex column astart gap-sm">
            {parsedDetails.map((detail, i) => (
                <p key={i} className="w1 block tcenter lowercase">
                    {detail}
                </p>
            ))}
        </div>
    );
}

export function RecursiveEvo({ chain }: { chain: EvolvesTo }) {
    if (chain.evolves_to.length > 0) {
        return (
            <>
                <PokeEvolutionCard
                    pokemon={{
                        id: Number(
                            chain.species.url
                                .split(
                                    "https://pokeapi.co/api/v2/pokemon-species/"
                                )[1]
                                .replace(/\//g, "")
                        ),
                        name: chain.species.name,
                    }}
                    details={chain.evolution_details}
                />

                {chain.evolves_to.map((evo) => (
                    <RecursiveEvo chain={evo} key={chain.species.name} />
                ))}
            </>
        );
    }

    return (
        <PokeEvolutionCard
            pokemon={{
                id: Number(
                    chain.species.url
                        .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
                        .replace(/\//g, "")
                ),
                name: chain.species.name,
            }}
            details={chain.evolution_details}
        />
    );
}

export default function PokemonEvolutions({ evolutions }: Props) {
    const chain = evolutions.chain;
    const basePk = {
        id: Number(
            chain.species.url
                .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
                .replace(/\//g, "")
        ),
        name: chain.species.name,
    };

    return (
        <section className="w1 evos-page-section evolutions-wrapper-container">
            <div className="w1 flex center astart gap flex-responsive">
                <PokeEvolutionCard pokemon={basePk} details={[]} />

                {chain.evolves_to.map((evo, index) => (
                    <RecursiveEvo
                        chain={evo}
                        key={evo.species.name.concat("-", index.toString())}
                    />
                ))}
            </div>
        </section>
    );
}
