export interface NamedAPIResource {
    name: string
    url: string
}
export interface EvolutionChain {
    baby_trigger_item: NamedAPIResource
    chain: Chain
    id: number
}

export interface Chain {
    evolution_details: EvolutionDetail[]
    evolves_to: EvolvesTo[]
    is_baby: boolean
    species: Species
}

export interface EvolvesTo {
    evolution_details: EvolutionDetail[]
    evolves_to: EvolvesTo[]
    is_baby: boolean
    species: Species
}

export interface EvolutionDetail {
    gender: any
    held_item: any
    item: any
    known_move: any
    known_move_type: any
    location: any
    min_affection: any
    min_beauty: any
    min_happiness: number
    min_level: any
    needs_overworld_rain: boolean
    party_species: any
    party_type: any
    relative_physical_stats: any
    time_of_day: string
    trade_species: any
    trigger: Trigger
    turn_upside_down: boolean
}

export interface Trigger {
    name: string
    url: string
}

export interface Item {
    name: string
    url: string
}

export interface Species {
    name: string
    url: string
}