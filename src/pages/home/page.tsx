import SEOHead from '../../components/seo/head';
import Home from '../../components/visuals/pages/home';
import useHome from './useHome';

export default function HomePage() {
    useHome();

    return (
        <>
            <SEOHead title='Home' />
            <Home />
        </>
    );
}
