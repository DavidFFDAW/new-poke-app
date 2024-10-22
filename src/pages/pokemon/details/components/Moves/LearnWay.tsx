import { ParsedMove } from '../../../../../@types/global.pokemon';
import { moveLearningMethods } from '.';

interface Props {
    move: ParsedMove;
}

export default function LearnWay({ move }: Props) {
    const learningWay = moveLearningMethods[move.level_learning_method] || "Otro";
    const isEggLearning = move.level_learning_method === "egg" && move.level_learned_at === 0;

    return (
        <span data-learning={move.level_learning_method} translate='no'>
            {isEggLearning ? "Huevo" : learningWay}
        </span>
    )
}
