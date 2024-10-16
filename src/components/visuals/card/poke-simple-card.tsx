import { PokemonCache } from "../../../@types/global.pokemon";

interface Props {
    pokemon: PokemonCache & { types: string[] };
}

export default function PokeSimpleCard({ pokemon }: Props) {

    const changeImg = (id) => (e) => {
        e.target.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
    }

  return (
      <div className="pokemon-card pokemon-card poke-single-card">
        <div className="pokemon-card__header">
          <h2 className="pokemon-card__title">{pokemon.name}</h2>
          <p className="pokemon-card__subtitle">#{pokemon.id}</p>
        </div>
        <div className="pokemon-card__body">
            <div className="pokemon-card__image">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`} alt={pokemon.name} onError={changeImg(pokemon.id)} />
            </div>
          <div className="pokemon-card__types flex" style={{gap:20}}>
            {pokemon.types.map((type) => (
              <span key={type} className={`pokemon-card__type pokemon-card__type--${type}`}>
                {type}
              </span>
            ))}
          </div>
        </div>
    </div>
  )
}

export function PokeCardLoading() {
    return (
        <div className="pokemon-card pokemon-card poke-single-card">
            <div className="pokemon-card__header">
                <h2 className="pokemon-card__title">Loading...</h2>
                <p className="pokemon-card__subtitle">Loading...</p>
            </div>
            <div className="pokemon-card__body">
                <div className="pokemon-card__image">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/0.png" alt="imagen de una interrogación porque desconocemos qué pokemon es el que se está cargando" />
                </div>
                <div className="pokemon-card__types">
                    <span className={`pokemon-card__type pokemon-card__type--loading`}>
                        Loading...
                    </span>
                </div>
            </div>
        </div>
    );
}