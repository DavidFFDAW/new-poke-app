import { LearnWay } from ".";
import { getPokemonMove } from "@/utils/pokemon.translate";
import { ParsedMove } from "@/@types/global.pokemon";
import NullableComponent from "@/components/visuals/loaders/Nullable";

export default function MoveItem({ move }: { move: ParsedMove }) {
    const moveDatas = getPokemonMove(move.move);

    return (
        <tr className="pokemon-move-list-item tag default-tag" data-learn={move.level_learning_method} data-level={move.level_learned_at}>
            <td>
                <h4 title={moveDatas.effect} lang="es" translate="no" data-original-name={move.move}>{moveDatas.name}</h4>
            </td>

            <td colSpan={move.level_learning_method === "level-up" ? 1 : 2} className="learning-method">
                <LearnWay move={move} />
            </td>

            <NullableComponent condition={move.level_learning_method === "level-up"}>
                <td className="level">
                    <p className="level-way" translate="no">
                        <span>{move.level_learned_at}</span>
                    </p>
                </td>
            </NullableComponent>
        </tr>
    );
}