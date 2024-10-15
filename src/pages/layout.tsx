import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../assets/css/header.css";
import HeaderSearchForm from "../components/visuals/header/search-form";

export default function AppLayout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

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

            <section className="pokeViewport" style={{ marginTop: 80 }}>
                <Outlet />
            </section>
        </>
    );
}
