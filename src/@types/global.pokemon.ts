import { APIPokemonDetails } from "./api.pokemon";

export type PokeType =
    | "normal"
    | "fighting"
    | "flying"
    | "poison"
    | "ground"
    | "rock"
    | "bug"
    | "ghost"
    | "steel"
    | "fire"
    | "water"
    | "grass"
    | "electric"
    | "psychic"
    | "ice"
    | "dragon"
    | "dark"
    | "fairy";

export type PokemonCache = {
    id: number | string;
    url: string;
    name: string;
    types?: string[];
    sprite?: string;
};

export type PokemonDetails = APIPokemonDetails & {
    specie: any;
    evolutions: any;
    types: string[];
    games: string[];
};

export type PokemonDetailsPageState = {
    pokemon: PokemonAPIDetails | null;
    loading: boolean;
    error: boolean;
};

export interface ParsedMove {
    move: string;
    version: string;
    level_learned_at: number;
    level_learning_method: string;
}

export interface PokemonAPIDetails extends APIPokemonDetails {
    moveGames: string[];
    parsedMoves: ParsedMove[];
    evolutions: any;
    specie: any;
    ctypes: string[];
}

export interface AppEvolution {
    id: number;
    name: string;
    level: string | number | null;
    trigger: string | null;
    item: string | null;
    affection: string | number | null;
    happiness: string | number | null;
    is_baby: boolean;
}