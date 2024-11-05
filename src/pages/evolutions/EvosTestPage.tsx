import { EvolutionChain, EvolvesTo } from "@/@types/api.evolutions"

interface Props {
    evolutions: EvolutionChain
}

export function PokeEvoCard({ pokemon }:
    { pokemon: { id: number, name: string } }
) {
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
        </div>
    );
}

export function RecursiveEvo({ chain }: { chain: EvolvesTo }) {
    console.log({ evochain: chain });
    if (chain.evolves_to.length > 0) {
        return (
            <>
                <div>
                    <h2>{chain.species.name}</h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${chain.species.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].replace(/\//g, '')}.png`} alt={chain.species.name} />

                    <table>
                        <thead>
                            <th>Modo</th>
                            <th>Item/Objeto</th>
                            <th>Nivel</th>
                        </thead>

                        <tbody>
                            {chain.evolution_details.map((detail) => (
                                <tr>
                                    <td>{detail.trigger.name}</td>
                                    <td>{detail.item?.name}</td>
                                    <td>{detail.min_level}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {chain.evolves_to.map((evo) => (
                    <RecursiveEvo chain={evo} />
                ))}
            </>
        );
    }

    return (
        <div>
            <h2>{chain.species.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${chain.species.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].replace(/\//g, '')}.png`} alt={chain.species.name} />

            <table>
                <thead>
                    <th>Modo</th>
                    <th>Item/Objeto</th>
                    <th>Nivel</th>
                    <th>Amistad</th>
                    <th>Tiempo día</th>
                    <th>Localización concreta</th>
                </thead>

                <tbody>
                    {chain.evolution_details.map((detail) => (
                        <tr>
                            <td>{detail.trigger.name}</td>
                            <td>{detail.item?.name}</td>
                            <td>{detail.min_level}</td>
                            <td>{detail.min_happiness}</td>
                            <td>{detail.time_of_day}</td>
                            <td>{detail.location?.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default function EvosTestPage({ evolutions }: Props) {
    const chain = evolutions.chain;
    const basePk = {
        id: Number(chain.species.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].replace(/\//g, '')),
        name: chain.species.name
    }

    return (
        <section className="w1 evos-page-section">
            <pre>
                {JSON.stringify(evolutions, null, 4)}
            </pre>

            <div className="w1 flex acenter center gap-sm">
                <PokeEvoCard pokemon={basePk} />

                {chain.evolves_to.map((evo) => (
                    <RecursiveEvo chain={evo} />
                ))}
            </div>
        </section>
    )
}
