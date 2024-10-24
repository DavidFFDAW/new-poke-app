import abilities from '../lang/abilities.json';
import moves from '../lang/moves.json';

interface AbilityReturn {
    id: number;
    name: string;
    effect: string;
    en: string;
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

export function getPokemonMove(move: string): string {
    return moves[move] || move;
}
