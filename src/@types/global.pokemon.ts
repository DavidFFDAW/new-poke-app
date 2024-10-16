import { APIPokemonDetails } from "./api.pokemon";

export type PokemonCache = {
    id: number | string;
    url: string;
    name: string;
    types?: string[];
};

export type PokemonDetailsPageState = {
    pokemon: APIPokemonDetails | null;
    loading: boolean;
    error: boolean;
};
