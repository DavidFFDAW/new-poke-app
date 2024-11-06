import { getPokemonItem, getPokemonMove } from '@/utils/pokemon.translate';
import { EvolutionDetail } from "@/@types/api.evolutions";

const dayTime = {
    day: 'el día',
    night: 'la noche',
    evening: 'la tarde'
}

const getInitialEvoText = (detail: EvolutionDetail): string => {
    const trigger = detail.trigger.name;
    if (trigger === 'level-up') return detail.min_level ? `nivel ${detail.min_level}` : 'subir 1 nivel';
    if (trigger === 'use-item') {
        const item = getPokemonItem(detail.item.name);
        return `usando ${item.name}`;
    }
    if (trigger === 'trade') return detail.trade_species
        ? `intercambio con ${detail.trade_species.name}`
        : 'intercambio';
    if (trigger === 'shed') return 'muda de piel';
    if (trigger === 'spin') return 'giro';

    return 'metodo desconocido';
};

export function getSingleEvolutionDetails(detail: EvolutionDetail): string {
    const initialEvoText = getInitialEvoText(detail);
    const friendship = detail.min_happiness || detail.min_affection;
    const heldItem = detail.held_item ? getPokemonItem(detail.held_item.name).name : null;
    const timeOfDay = detail.time_of_day ? dayTime[detail.time_of_day] : null;
    const location = detail.location?.name;
    const known_move = detail.known_move ? getPokemonMove(detail.known_move) : null;
    const knownMoveType = detail.known_move_type;

    const texts = [
        initialEvoText,
        heldItem ? `equipado con ${heldItem}` : '',
        friendship ? 'con amistad' : '',
        timeOfDay ? `durante ${timeOfDay}` : '',
        location ? `en ${location}` : '',
        known_move ? `conociendo el movimiento conocido ${known_move.name}` : '',
        knownMoveType ? `con movimiento de tipo ${knownMoveType.name}` : ''
    ];

    return texts.filter((text) => text).join(' ');
}