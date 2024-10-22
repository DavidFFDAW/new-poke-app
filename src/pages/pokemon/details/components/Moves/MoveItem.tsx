import { LearnWay } from ".";
import { ParsedMove } from "../../../../../@types/global.pokemon";
import NullableComponent from "../../../../../components/visuals/loaders/Nullable";

export default function MoveItem({ move }: { move: ParsedMove }) {
    return (
        <tr className="pokemon-move-list-item tag default-tag">
            <td>
                <h4 lang="en" translate="yes">{move.move}</h4>
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