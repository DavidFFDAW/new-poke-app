import Home from '../../components/visuals/pages/home';
import useHome from './useHome';

export default function HomePage() {
    useHome();

    return (
        <>
            <Home />
        </>
    );
}
