import abilities from '../lang/abilities.json';
import moves from '../lang/moves.json';
import eggGroups from '../lang/egg-groups.json';

interface AbilityReturn {
    id: number;
    name: string;
    effect: string;
    en: string;
}

interface MoveReturn {
    name: string;
    type: string;
    power: string;
    attackType: string;
    pp: string;
    accuracy: string;
    effect: string;
}

export function getPokemonAbility(ability: string): AbilityReturn {
    const foundAbility = abilities[ability];
    if (!foundAbility) return {
        id: 0,
        name: ability,
        effect: '',
        en: ability
    }
    return foundAbility;
}

export function getPokemonEggGroup(eggGroup: string): string {
    return eggGroups[eggGroup] || eggGroup;
}

export function getPokemonMove(move: string): MoveReturn {
    const foundMove = moves[move];
    if (foundMove) return foundMove;

    return {
        name: move,
        type: '',
        power: '',
        attackType: '',
        pp: '',
        accuracy: '',
        effect: ''
    };
}
