import { ParsedMove } from '../../../../../@types/global.pokemon';
import { moveLearningMethods } from '.';

interface Props {
    move: ParsedMove;
}

const MOs = ['cut', 'fly', 'surf', 'strength', 'flash', 'rock-smash', 'waterfall', 'dive', 'rock-climb', 'defog', 'whirlpool'];
export default function LearnWay({ move }: Props) {
    const learningWay = moveLearningMethods[move.level_learning_method] || "Otro";
    const isEggLearning = move.level_learning_method === "egg";
    const machineType = move.level_learning_method === "machine"
        ? (MOs.includes(move.move) ? "MO" : "MT")
        : learningWay;

    return (
        <span data-learning={move.level_learning_method} translate='no'>
            {isEggLearning ? "Huevo" : machineType}
        </span>
    )
}
