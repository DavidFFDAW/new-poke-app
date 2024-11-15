import { SimpleRoundBox } from "@/components/visuals/box/boxes";
import useMove from "./useMove";
import PokeImage from "@/components/visuals/images/PokeImage";
import SEOHead from "@/components/seo/head";

export default function MoveDetailPage() {
    const datas = useMove();
    if (!datas.uuid) return null;

    return (
        <section className="move-detail-page flex column gap">
            <SEOHead title={datas.moveDatas.name} />
            <h1>Movimiento {datas.moveDatas.name}</h1>

            <SimpleRoundBox title="Datos del movimiento">
                <p>
                    <strong>Nombre:</strong> {datas.moveDatas.name}
                </p>
                <p>
                    <strong>PP:</strong> {datas.moveDatas.pp}
                </p>
                <p>
                    <strong>Poder:</strong> {datas.moveDatas.power}
                </p>
                <p>
                    <strong>Precisión:</strong> {datas.moveDatas.accuracy}
                </p>
                <p>
                    <strong>Efecto:</strong> {datas.moveDatas.effect}
                </p>
            </SimpleRoundBox>

            <SimpleRoundBox title="Pokémon que pueden aprender este movimiento">
                <div className="pokemon-list flex center acenter wrap gap-sm">
                    {datas.learntBy && datas.learntBy.length > 0 ? (
                        datas.learntBy.map((pokemon) => (
                            <div
                                key={pokemon.name}
                                className="pokemon-item card flex column gap-sm"
                                data-url={pokemon.url}
                                data-id={pokemon.id}
                            >
                                <PokeImage
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                    alt={pokemon.name}
                                />
                                <h3>{pokemon.name}</h3>
                            </div>
                        ))
                    ) : (
                        <p>
                            No hay pokémon que puedan aprender este movimiento
                        </p>
                    )}
                </div>
            </SimpleRoundBox>
        </section>
    );
}
