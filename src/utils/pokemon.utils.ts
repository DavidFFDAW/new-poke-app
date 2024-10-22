import { Mfe } from "../@types/api.pokemon";
import { ParsedMove } from "../@types/global.pokemon";
import { typesRelation } from "../constants/types.config";

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

export function getTypeWeaknesses(types: string[]): string[] {
    const innerTypes = types.filter(Boolean); // Filtrar tipos nulos o undefined

    const weaknessModifiers = innerTypes.reduce((modifiers, type) => {
        if (!typesRelation[type]) return modifiers;

        // Procesar debilidades (x2)
        typesRelation[type].weakTo.forEach(weakness => {
            modifiers[weakness] = (modifiers[weakness] || 1) * 2;
        });

        // Procesar resistencias (x0.5)
        typesRelation[type].resistTo.forEach(resistance => {
            modifiers[resistance] = (modifiers[resistance] || 1) * 0.5;
        });

        // Procesar inmunidades (x0)
        typesRelation[type].immuneTo.forEach(immunity => {
            modifiers[immunity] = 0;
        });

        return modifiers;
    }, {}); // Empezar con un objeto vacío para almacenar modificadores

    // Filtrar las debilidades reales (donde el multiplicador es mayor que 1)
    return Object.keys(weaknessModifiers).filter(type => weaknessModifiers[type] > 1);
}

export function getTypeStrengths(types: string[]): string[] {
    const attackTypes = types.filter(Boolean); // Filtrar tipos nulos o undefined

    const combinedStrengths = attackTypes.reduce((acc: string[], type) => {
        if (!typesRelation[type]) return acc; // Si el tipo no existe en el attackChart, devolvemos el acumulador actual

        // Combinar las fortalezas de cada tipo sin duplicados
        return [...new Set([...acc, ...typesRelation[type].strongAgainst])];
    }, []);

    return combinedStrengths;
}