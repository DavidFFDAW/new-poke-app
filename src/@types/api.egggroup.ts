import { PokeList } from "./api.pokemon";

export interface APIEggGroupName {
    language: {
        name: string;
        url: string;
    };
    name: string;
}

export interface APIEggGroupResponse {
    id: 10;
    name: string;
    names: APIEggGroupName[];
    pokemon_species: PokeList[];
}
