import { TypeRelations } from "../@types/global.pokemon";

export const typesRelation: TypeRelations = {
    dark: {
        name: "Siniestro",
        weakAgainst: [
            "fighting",
            "bug",
            "fairy"
        ],
        strongAgainst: [
            "ghost",
            "psychic"
        ],
        resistTo: [
            "ghost",
            "dark"
        ],
        notEffectiveAgainst: [
            "fighting",
            "dark",
            "fairy"
        ],
        immuneFrom: [
            "psychic"
        ],
        immuneTo: []
    },
    ice: {
        name: "Hielo",
        weakAgainst: [
            "fighting",
            "rock",
            "steel",
            "fire"
        ],
        strongAgainst: [
            "flying",
            "ground",
            "grass",
            "dragon"
        ],
        resistTo: [
            "ice"
        ],
        notEffectiveAgainst: [
            "steel",
            "fire",
            "water",
            "ice"
        ],
        immuneFrom: [],
        immuneTo: []
    },
    fire: {
        name: "Fuego",
        weakAgainst: [
            "ground",
            "rock",
            "water"
        ],
        strongAgainst: [
            "bug",
            "steel",
            "grass",
            "ice"
        ],
        resistTo: [
            "bug",
            "steel",
            "fire",
            "grass",
            "ice",
            "fairy"
        ],
        notEffectiveAgainst: [
            "rock",
            "fire",
            "water",
            "dragon"
        ],
        immuneFrom: [],
        immuneTo: []
    },
    fighting: {
        name: "Lucha",
        weakAgainst: [
            "flying",
            "psychic",
            "fairy"
        ],
        strongAgainst: [
            "normal",
            "rock",
            "steel",
            "ice",
            "dark"
        ],
        resistTo: [
            "rock",
            "bug",
            "dark"
        ],
        notEffectiveAgainst: [
            "flying",
            "poison",
            "bug",
            "psychic",
            "fairy"
        ],
        immuneFrom: [],
        immuneTo: [
            "ghost"
        ]
    },
    psychic: {
        name: "Psíquico",
        weakAgainst: [
            "bug",
            "ghost",
            "dark"
        ],
        strongAgainst: [
            "fighting",
            "poison"
        ],
        resistTo: [
            "fighting",
            "psychic"
        ],
        notEffectiveAgainst: [
            "steel",
            "psychic"
        ],
        immuneFrom: [],
        immuneTo: [
            "dark"
        ]
    },
    steel: {
        name: "Acero",
        weakAgainst: [
            "fighting",
            "ground",
            "fire"
        ],
        strongAgainst: [
            "rock",
            "ice",
            "fairy"
        ],
        resistTo: [
            "normal",
            "flying",
            "rock",
            "bug",
            "steel",
            "grass",
            "psychic",
            "ice",
            "dragon",
            "fairy"
        ],
        notEffectiveAgainst: [
            "steel",
            "fire",
            "water",
            "electric"
        ],
        immuneFrom: [
            "poison"
        ],
        immuneTo: []
    },
    flying: {
        name: "Volador",
        weakAgainst: [
            "rock",
            "electric",
            "ice"
        ],
        strongAgainst: [
            "fighting",
            "bug",
            "grass"
        ],
        resistTo: [
            "fighting",
            "bug",
            "grass"
        ],
        notEffectiveAgainst: [
            "rock",
            "steel",
            "electric"
        ],
        immuneFrom: [
            "ground"
        ],
        immuneTo: []
    },
    ground: {
        name: "Tierra",
        weakAgainst: [
            "water",
            "grass",
            "ice"
        ],
        strongAgainst: [
            "poison",
            "rock",
            "steel",
            "fire",
            "electric"
        ],
        resistTo: [
            "poison",
            "rock"
        ],
        notEffectiveAgainst: [
            "bug",
            "grass"
        ],
        immuneFrom: [
            "electric"
        ],
        immuneTo: [
            "flying"
        ]
    },
    normal: {
        name: "Normal",
        weakAgainst: [
            "fighting"
        ],
        strongAgainst: [],
        resistTo: [],
        notEffectiveAgainst: [
            "rock",
            "steel"
        ],
        immuneFrom: [
            "ghost"
        ],
        immuneTo: [
            "ghost"
        ]
    },
    fairy: {
        name: "Hada",
        weakAgainst: [
            "poison",
            "steel"
        ],
        strongAgainst: [
            "fighting",
            "dragon",
            "dark"
        ],
        resistTo: [
            "fighting",
            "bug",
            "dark"
        ],
        notEffectiveAgainst: [
            "poison",
            "steel",
            "fire"
        ],
        immuneFrom: [
            "dragon"
        ],
        immuneTo: []
    },
    poison: {
        name: "Veneno",
        weakAgainst: [
            "ground",
            "psychic"
        ],
        strongAgainst: [
            "grass",
            "fairy"
        ],
        resistTo: [
            "fighting",
            "poison",
            "bug",
            "grass",
            "fairy"
        ],
        notEffectiveAgainst: [
            "poison",
            "ground",
            "rock",
            "ghost"
        ],
        immuneFrom: [],
        immuneTo: [
            "steel"
        ]
    },
    water: {
        name: "Agua",
        weakAgainst: [
            "grass",
            "electric"
        ],
        strongAgainst: [
            "ground",
            "rock",
            "fire"
        ],
        resistTo: [
            "steel",
            "fire",
            "water",
            "ice"
        ],
        notEffectiveAgainst: [
            "water",
            "grass",
            "dragon"
        ],
        immuneFrom: [],
        immuneTo: []
    },
    rock: {
        name: "Roca",
        weakAgainst: [
            "fighting",
            "ground",
            "steel",
            "water",
            "grass"
        ],
        strongAgainst: [
            "flying",
            "bug",
            "fire",
            "ice"
        ],
        resistTo: [
            "normal",
            "flying",
            "poison",
            "fire"
        ],
        notEffectiveAgainst: [
            "fighting",
            "ground",
            "steel"
        ],
        immuneFrom: [],
        immuneTo: []
    },
    electric: {
        name: "Eléctrico",
        weakAgainst: [
            "ground"
        ],
        strongAgainst: [
            "flying",
            "water"
        ],
        resistTo: [
            "flying",
            "steel",
            "electric"
        ],
        notEffectiveAgainst: [
            "grass",
            "electric",
            "dragon"
        ],
        immuneFrom: [],
        immuneTo: [
            "ground"
        ]
    },
    grass: {
        name: "Planta",
        weakAgainst: [
            "flying",
            "poison",
            "bug",
            "fire",
            "ice"
        ],
        strongAgainst: [
            "ground",
            "rock",
            "water"
        ],
        resistTo: [
            "ground",
            "water",
            "grass",
            "electric"
        ],
        notEffectiveAgainst: [
            "flying",
            "poison",
            "bug",
            "steel",
            "fire",
            "grass",
            "dragon"
        ],
        immuneFrom: [],
        immuneTo: []
    },
    ghost: {
        name: "Fantasma",
        weakAgainst: [
            "ghost",
            "dark"
        ],
        strongAgainst: [
            "ghost",
            "psychic"
        ],
        resistTo: [
            "poison",
            "bug"
        ],
        notEffectiveAgainst: [
            "dark"
        ],
        immuneFrom: [
            "normal",
            "fighting"
        ],
        immuneTo: [
            "normal"
        ]
    },
    dragon: {
        name: "Dragón",
        weakAgainst: [
            "ice",
            "dragon",
            "fairy"
        ],
        strongAgainst: [
            "dragon"
        ],
        resistTo: [
            "fire",
            "water",
            "grass",
            "electric"
        ],
        notEffectiveAgainst: [
            "steel"
        ],
        immuneFrom: [],
        immuneTo: [
            "fairy"
        ]
    },
    bug: {
        name: "Bicho",
        weakAgainst: [
            "flying",
            "rock",
            "fire"
        ],
        strongAgainst: [
            "grass",
            "psychic",
            "dark"
        ],
        resistTo: [
            "fighting",
            "ground",
            "grass"
        ],
        notEffectiveAgainst: [
            "fighting",
            "flying",
            "poison",
            "ghost",
            "steel",
            "fire",
            "fairy"
        ],
        immuneFrom: [],
        immuneTo: []
    }
}