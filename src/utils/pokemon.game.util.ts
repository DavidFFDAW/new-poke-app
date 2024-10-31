export const gameNames: { [key: string]: string } = {
    "red-blue": "Pokemon Rojo y Azul",
    "yellow": "Pokemon Amarillo",
    "gold-silver": "Pokemon Oro y Plata",
    "black-2-white-2": "Pokemon Blanco & Negro (2)",
    "black-white": "Pokemon Blanco & Negro",
    "brilliant-diamond-and-shining-pearl": "Pokemon Diamante brillante & perla reluciente",
    "colosseum": "Pokemon Coliseo",
    "crystal": "Pokemon Cristal",
    "diamond-pearl": "Pokemon Diamante & Perla",
    "emerald": "Pokemon Esmeralda",
    "firered-leafgreen": "Pokemon Verde hoja y rojo fuego",
    "heartgold-soulsilver": "Pokemon Heartgold & Soulsilver",
    "legends-arceus": "Pokemon Leyendas Arceus",
    "lets-go-pikachu-lets-go-eevee": "Pokemon Lets Go Pikachu & Eevee",
    "omega-ruby-alpha-sapphire": "Pokemon Rubi omega & Zafiro alfa",
    "platinum": "Pokemon platino",
    "ruby-sapphire": "Pokemon Rubí & Zafiro",
    "scarlet-violet": "Pokemon Escarlata y Púrpura",
    "sun-moon": "Pokemon Sol & Luna",
    "sword-shield": "Pokemon Espada & Escudo",
    "ultra-sun-ultra-moon": "Pokemon Ultra sol & Ultra luna",
    "x-y": "Pokemon X & Pokemon Y",
    "xd": "Pokemon XD: Tempestad oscura"
};

export function getGameName(name: string): string {
    return gameNames[name] || name;
}