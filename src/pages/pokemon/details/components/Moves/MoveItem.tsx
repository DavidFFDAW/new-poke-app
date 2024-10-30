import { LearnWay } from ".";
import { getPokemonMove } from "@/utils/pokemon.translate";
import { ParsedMove } from "@/@types/global.pokemon";
import NullableComponent from "@/components/visuals/loaders/Nullable";

export default function MoveItem({ move }: { move: ParsedMove }) {
    const moveDatas = getPokemonMove(move.move);

    return (
        <tr title={moveDatas.effect} className="pokemon-move-list-item tag default-tag" data-learn={move.level_learning_method} data-level={move.level_learned_at}>
            <td>
                <h4 lang="es" translate="no" data-original-name={move.move}>{moveDatas.name}</h4>
            </td>

            <td className="learning-method">
                <LearnWay move={move} />
            </td>

            <td data-item="poder" className="tcenter">
                <p>{moveDatas.power || "--"}</p>
            </td>

            <td data-item="precision" className="tcenter">
                <p>{moveDatas.accuracy || "--"}</p>
            </td>

            <td data-item="pp" className="tcenter">
                <p>{moveDatas.pp}</p>
            </td>

            <td data-item="clase" className="tcenter">
                <p>{moveDatas.attackType}</p>
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