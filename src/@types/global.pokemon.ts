import { APIPokemonDetails } from "./api.pokemon";

export type PokeType = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy';

export type PokemonCache = {
    id: number | string;
    url: string;
    name: string;
    types?: string[];
};

export type PokemonDetails = APIPokemonDetails & {
    specie: any;
    evolutions: any;
    types: string[];
    games: string[];
}

export type PokemonDetailsPageState = {
    pokemon: PokemonDetails | null;
    loading: boolean;
    error: boolean;
};
