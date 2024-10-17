export function getTransformedPokemonMoveDatas(moves) {
    return moves.map((move) => {
        return {
            name: move.move.name,
            game: move.version_group_details.flatMap((version) => {
                return version.version_group.name.split('-').map(game => {
                    return {
                        name: game,
                        level_learned_at: version.level_learned_at,
                        way_learned: version.move_learn_method.name
                    }
                });
            }),
        }
    });
}

export function getUniqueGamesFromMoves(parsedMoves) {
    const uniques = new Set(parsedMoves.reduce((acc, move) => {
        move.game.forEach(game => {
            acc.push(game.name);
        });
        return acc;
    }, []));
    return Array.from(uniques);
}