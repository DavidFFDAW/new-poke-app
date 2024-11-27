import { useSearch } from '@/hooks/useSearch';
import SEOHead from '../../components/seo/head';
import HomeBackgroundPokemons from './components/HomeBackground';
import useHome from './useHome';
import { getSearcherDatalist } from '@/utils';

export default function HomePage() {
    const { homePokemons } = useHome();
    const searchDatas = getSearcherDatalist();
    const { handleFormSearch } = useSearch();

    return (
        <section className="poke-home home-page page">
            <SEOHead title="Home" />

            <HomeBackgroundPokemons pokemons={homePokemons} />

            <div className="input-div center-fix">
                <div className="flex center poke-home-form">
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
                        width="100"
                        height="100"
                        alt="pikachu animated"
                    />

                    <div>
                        <form className="flex column gap-sm" action="/" onSubmit={handleFormSearch}>
                            <datalist id="pokemon-list">
                                {searchDatas.map((item, indx) => (
                                    <option key={indx} value={item.name}>
                                        {item.type}
                                    </option>
                                ))}
                            </datalist>
                            <input
                                type="text"
                                name="search"
                                className="general-input inpt-pad"
                                defaultValue=""
                                list="pokemon-list"
                            />
                            <div className="btn-group">
                                <button formAction="pokemon" className="btn btn-download" type="submit">
                                    Pokemon
                                </button>

                                <button formAction="move" className="btn btn-download" type="submit">
                                    Movimiento
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
