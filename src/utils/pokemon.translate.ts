import abilities from "../lang/abilities.json";
import moves from "../lang/moves.json";
import items from "../lang/objects.json";
import eggGroups from "../lang/egg-groups.json";

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

interface ItemReturn {
    name: string;
    image: string;
    generation: string;
    effect: string;
}

export function getSearchEggGroup(eggGroup: string) {
    return Object.entries(eggGroups).find(
        ([key, value]) =>
            key.toLowerCase() === eggGroup.toLowerCase() ||
            value.toLowerCase() === eggGroup.toLowerCase()
    );
}

export function getSearchAbility(ability: string) {
    return Object.entries(abilities).find(
        ([key, value]) =>
            key.toLowerCase() === ability.toLowerCase() ||
            value.name.toLowerCase() === ability.toLowerCase()
    );
}

export function getSearchMove(move: string) {
    return Object.entries(moves).find(
        ([key, value]) =>
            key.toLowerCase() === move.toLowerCase() ||
            value.name.toLowerCase() === move.toLowerCase()
    );
}

export function getSearchItem(item: string) {
    return Object.entries(items).find(
        ([key, value]) =>
            key.toLowerCase() === item.toLowerCase() ||
            value.name.toLowerCase() === item.toLowerCase()
    );
}

export function getPokemonAbility(ability: string): AbilityReturn {
    const foundAbility = abilities[ability];
    if (!foundAbility)
        return {
            id: 0,
            name: ability,
            effect: "",
            en: ability,
        };
    return foundAbility;
}

export function getPokemonEggGroup(eggGroup: string): string {
    return eggGroups[eggGroup] || eggGroup;
}

export function getItems() {
    return Object.entries(items).map(([key, value]) => {
        return {
            ...value,
            en: key,
        };
    });
}

export function getMoves() {
    return Object.entries(moves).map(([key, value]) => {
        return {
            ...value,
            en: key,
        };
    });
}

export function getPokemonItem(key: string): ItemReturn {
    const foundItem = items[key];
    if (foundItem) return foundItem;

    return {
        name: key,
        image: "",
        generation: "",
        effect: "",
    };
}

export function getPokemonMove(move: string): MoveReturn {
    if (!move) {
        return {
            name: "",
            type: "",
            power: "",
            attackType: "",
            pp: "",
            accuracy: "",
            effect: "",
        };
    }
    const foundMove = moves[move];
    if (foundMove) return foundMove;

    return {
        name: move,
        type: "",
        power: "",
        attackType: "",
        pp: "",
        accuracy: "",
        effect: "",
    };
}
