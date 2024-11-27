import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import HeaderSearchForm from '../components/visuals/header/search-form';
import { storageService } from '@/services/storage.service';
import { STORAGE_VERSION } from '@/constants/config';
import { useState } from 'react';
import '../assets/css/header.css';

const storeCache = () => {
    const storageVersion = storageService.get('version');
    if (!storageVersion || storageVersion !== STORAGE_VERSION) {
        storageService.clear();
        storageService.save('version', STORAGE_VERSION);
    }
    storageService.save('lastConnection', new Date().toLocaleString());
};

export default function AppLayout() {
    const params = useParams();
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const parsed = Object.entries(params)
        .reduce((acc: string, [, value]) => {
            return acc.replace(`${value}`, '');
        }, pathname)
        .replace(/\//g, ' ')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase()
        .concat('-page');

    storeCache();

    return (
        <>
            <header className="flex between poke-header">
                <div className="menu menu-container">
                    <div className={`menu-container-content ${menuOpen ? 'active' : ''}`}>
                        <Link to="/items" className="violet link">
                            Items
                        </Link>

                        <Link to="/pokemon/moves" className="violet link">
                            Movimientos
                        </Link>

                        <Link to="/pokemon/teams" className="violet link">
                            Equipo
                        </Link>

                        <Link to="/pokemon/favourites" className="violet link">
                            Favoritos
                        </Link>
                    </div>

                    <button onClick={() => setMenuOpen(p => !p)} className="menu-button">
                        <div className={`menu-button-content ${menuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>

                {/* <div className="dropdown">
                    <button className="dropbtn">Búsquedas recientes</button>
                    <div className="dropdown-content">
                        {getRecentSearchs().map((poke, it) => {
                            return (
                                <Link
                                    className="boxed link"
                                    key={it}
                                    to={poke.url}
                                >
                                    <div>
                                        <img src={poke.img} alt={poke.name} />
                                    </div>
                                    <div>
                                        <div className="text">
                                            <h4 className="name">
                                                {poke.name}
                                            </h4>
                                            <p className="url">{poke.url}</p>
                                        </div>
                                        <p className="date">
                                            {poke.date ||
                                                new Date()
                                                    .toJSON()
                                                    .slice(0, 10)
                                                    .replace(/-/g, "/")}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div> */}

                <Link to="/" className="header-home-link flex between">
                    <img className="poke-logo" alt="pokeball-logo" src="/images/poke-ball.png" />
                    <span translate="no">PokeInfo App</span>
                </Link>

                <HeaderSearchForm />
            </header>

            <main id="page" className={`pokeViewport ${parsed.startsWith('/') ? parsed.slice(1) : parsed}`}>
                <Outlet />
            </main>
        </>
    );
}
