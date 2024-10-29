import SEOHead from "../../components/seo/head";
import Home from "../../components/visuals/pages/home";
import HomeBackgroundPokemons from "./components/HomeBackground";
import useHome from "./useHome";

export default function HomePage() {
    const { homePokemons } = useHome();

    return (
        <>
            <SEOHead title="Home" />
            <HomeBackgroundPokemons pokemons={homePokemons} />
            <Home />
        </>
    );
}
