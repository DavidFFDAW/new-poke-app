import { typesRelation } from "../constants/types.config";

interface TypeEffectiveness {
    weaknesses: string[];
    resistances: string[];
    immunities: string[];
    strengths: string[];
}

export const getTypeEffectiveness = (types: string[]): TypeEffectiveness => {
    const realTypes = types.filter(Boolean);

    const effectiveness = realTypes.reduce(
        (acc: TypeEffectiveness, type) => {
            if (!typesRelation[type]) return acc;

            // Debilidades: `double_damage_from`
            acc.weaknesses = [...new Set([...acc.weaknesses, ...typesRelation[type].weakAgainst])];

            // Resistencias: `half_damage_from`
            acc.resistances = [...new Set([...acc.resistances, ...typesRelation[type].resistTo])];

            // Inmunidades: `no_damage_from`
            acc.immunities = [...new Set([...acc.immunities, ...typesRelation[type].immuneFrom])];

            // Fortalezas: `double_damage_to`
            const filteredStrengths = typesRelation[type].strongAgainst.filter(
                (t) => !typesRelation[type].notEffectiveAgainst.includes(t) && !typesRelation[type].immuneTo.includes(t)
            );
            acc.strengths = [...new Set([...acc.strengths, ...filteredStrengths])];

            return acc;
        },
        {
            weaknesses: [],
            resistances: [],
            immunities: [],
            strengths: [],
        }
    );

    // Filtramos las debilidades que se ven mitigadas por resistencias o inmunidades
    effectiveness.weaknesses = effectiveness.weaknesses.filter(
        (t) => !effectiveness.resistances.includes(t) && !effectiveness.immunities.includes(t)
    );

    return effectiveness;
};