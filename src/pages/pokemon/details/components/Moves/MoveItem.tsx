import { LearnWay } from ".";
import { getPokemonMove } from "@/utils/pokemon.translate";
import { ParsedMove } from "@/@types/global.pokemon";
import NullableComponent from "@/components/visuals/loaders/Nullable";
import PokeType from "@/components/visuals/types/PokeType";

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

            <NullableComponent condition={move.level_learning_method === "level-up"}>
                <td className="level">
                    <p className="level-way" translate="no" title="Nivel">
                        <span>{move.level_learned_at}</span>
                    </p>
                </td>
            </NullableComponent>

            <td data-item="type" className="tcenter">
                <PokeType type={moveDatas.type} />
            </td>

            <td data-item="potencia" className="tcenter" title="Potencia">
                <p>{moveDatas.power || "--"}</p>
            </td>

            <td data-item="precision" className="tcenter" title="Precisión">
                <p>{moveDatas.accuracy || "--"}</p>
            </td>

            <td data-item="pp" className="tcenter" title="PP">
                <p>{moveDatas.pp}</p>
            </td>

            <td data-item="clase" className="tcenter">
                <p>{moveDatas.attackType}</p>
            </td>


        </tr>
    );
}