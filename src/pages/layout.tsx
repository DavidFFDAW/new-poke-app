import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderSearchForm from "../components/visuals/header/search-form";
import "../assets/css/header.css";

export default function AppLayout() {
    const navigate = useNavigate();
    const params = useParams();
    const { pathname } = useLocation();
    const parsed = Object.entries(params).reduce((acc: string, [_, value]) => {
        return acc.replace(`${value}`, "");
    }, pathname).replace(/\//g, ' ').trim().replace(/\s+/g, '-').toLowerCase().concat("-page");

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <header className="flex between poke-header">
                {pathname !== "/" && (
                    <div onClick={handleGoBack} className="back">
                        <div className="go-back">
                            <p>
                                <i className="arrow left"></i>
                            </p>
                        </div>
                    </div>
                )}

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
                    <img
                        className="poke-logo"
                        alt="pokeball-logo"
                        src="/images/pokeball.png"
                    />
                    <span translate="no">PokeInfo App</span>
                </Link>

                <HeaderSearchForm />
            </header>

            <main
                id="page"
                className={`pokeViewport ${parsed.startsWith('/') ? parsed.slice(1) : parsed}`}>
                <Outlet />
            </main >
        </>
    );
}
