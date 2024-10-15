import { APIPokemonDetails } from "./api.pokemon";

export type PokemonCache = {
    url: string;
    name: string;
};

export type PokemonDetailsPageState = {
    pokemon: APIPokemonDetails | null;
    loading: boolean;
    error: boolean;
};
