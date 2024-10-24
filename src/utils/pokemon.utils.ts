import { Mfe } from "../@types/api.pokemon";
import { EvolutionChain } from "../@types/api.evolutions";
import { AppEvolution, ParsedMove } from "../@types/global.pokemon";
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

export function getPokemonEvolution(evolutions: EvolutionChain) {
    let evoChain: AppEvolution[] = [];
    let evoData = evolutions.chain;
    const details = evoData.evolution_details[0];

    do {
        let numberOfEvolutions = evoData.evolves_to.length;

        evoChain.push({
            name: evoData.species.name,
            level: !evoData ? 1 : details.min_level,
            trigger: !evoData ? null : details.trigger.name,
            item: details.item || null,
            affection: details.min_affection,
            happiness: details.min_happiness,
            is_baby: evoData.is_baby,
            id: Number(evoData.species.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].replace(/\\/g, '')),
        });

        if (numberOfEvolutions > 1) {
            for (let i = 1; i < numberOfEvolutions; i++) {
                const data = evoData.evolves_to[i];
                const evoDetails = evoData.evolves_to[i].evolution_details[0];

                evoChain.push({
                    name: data.species.name,
                    level: !data ? 1 : evoDetails.min_level,
                    trigger: !data ? null : evoDetails.trigger.name,
                    item: evoDetails.item || null,
                    affection: evoDetails.min_affection,
                    happiness: evoDetails.min_happiness,
                    is_baby: data.is_baby,
                    id: Number(data.species.url.split('https://pokeapi.co/api/v2/pokemon-species/')[1].replace(/\\/g, '')),
                });
            }
        }

        evoData = evoData.evolves_to[0];

    } while (evoData != undefined && evoData.hasOwnProperty('evolves_to'));

    return evoChain;
}

export function getTypeWeaknesses(types: string[]): string[] {
    const innerTypes = types.filter(Boolean); // Filtrar tipos nulos o undefined

    const weaknessModifiers = innerTypes.reduce((modifiers, type) => {
        if (!typesRelation[type]) return modifiers;

        // Procesar debilidades (x2)
        typesRelation[type].weakAgainst.forEach(weakness => {
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
        if (!typesRelation[type]) return acc;

        // Combinar las fortalezas (double_damage_to) de ambos tipos
        const strengths = typesRelation[type].strongAgainst;
        const weaknesses = typesRelation[type].notEffectiveAgainst;
        const immunities = typesRelation[type].immuneTo;

        // Filtrar fortalezas eliminando cualquier tipo que esté en las debilidades o inmunidades
        const filteredStrengths = strengths.filter(
            (t) => !weaknesses.includes(t) && !immunities.includes(t)
        );

        // Añadir los tipos fuertes al acumulador, eliminando duplicados
        return [...new Set([...acc, ...filteredStrengths])];
    }, []);

    return combinedStrengths;
}