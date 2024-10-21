import { Mfe } from "../@types/api.pokemon";
import { ParsedMove } from "../@types/global.pokemon";

export function getTransformedPokemonMoveDatas(moves: Mfe[]): ParsedMove[] {
    return moves
        .reduce((acc: ParsedMove[], move) => {
            const { version_group_details } = move;

            version_group_details.forEach((detail) => {
                acc.push({
                    move: move.move.name,
                    version: detail.version_group.name,
                    level_learned_at: detail.level_learned_at,
                    level_learning_method: detail.move_learn_method.name,
                });
            });

            return acc;
        }, [])
        .sort((a, b) => a.level_learned_at - b.level_learned_at);
}

export function getUniqueGamesFromMoves(moves: Mfe[]): string[] {
    const versions = moves.flatMap((move) =>
        move.version_group_details.map((detail) => detail.version_group.name)
    );

    return Array.from(new Set(versions));
}
