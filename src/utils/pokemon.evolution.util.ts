import { EvolutionDetail } from "@/@types/api.evolutions";

const getInitialEvoText = (detail: EvolutionDetail): string => {
    const trigger = detail.trigger.name;
    if (trigger === 'level-up') return `nivel ${detail.min_level}`;
    if (trigger === 'use-item') return `usando ${detail.item.name}`;
    if (trigger === 'trade') {
        return detail.held_item ? `intercambio equipado con ${detail.held_item.name}` : 'intercambio';
    }
    if (trigger === 'shed') return 'muda de piel';
    if (trigger === 'spin') return 'giro';

    return 'metodo desconocido';
};

export function getSingleEvolutionDetails(detail: EvolutionDetail): string {
    const initialEvoText = getInitialEvoText(detail);
    const friendship = detail.min_happiness;
    const heldItem = detail.held_item ? detail.held_item.name : null;
    const timeOfDay = detail.time_of_day;
    const location = detail.location?.name;
    const known_move = detail.known_move;
    const knownMoveType = detail.known_move_type;

    return `${initialEvoText} ${friendship ? `con amistad ${friendship}` : ''} ${heldItem ? `equipado con ${heldItem}` : ''} ${timeOfDay ? `durante el día ${timeOfDay}` : ''} ${location ? `en ${location}` : ''} ${known_move ? `con movimiento conocido ${known_move}` : ''} ${knownMoveType ? `de tipo ${knownMoveType}` : ''}`;



}