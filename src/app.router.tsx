import { lazy } from 'react';
import AppLayout from './pages/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/main.style.css';
import './app.default.css';
import './assets/css/media.queries.css';

const HomePage = lazy(() => import('./pages/home/page'));
const PokemonPage = lazy(() => import('./pages/pokemon/details/page'));
const PokemonEggGroupPage = lazy(() => import('./pages/pokemon/egg-group/page'));
const PokemonTypePage = lazy(() => import('./pages/pokemon/type/page'));
const PokemonSearchPage = lazy(() => import('./pages/pokemon/search/page'));
const EvolutionsTestPage = lazy(() => import('./pages/evolutions/page'));
const MoveInfoPage = () => null;
const ErrorPage = lazy(() => import('./pages/error/page'));
// set router and routes -> using react-router-dom

function App() {
    return (
        <BrowserRouter future={{ v7_startTransition: true }}>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} key={'home-page'} />
                    <Route path="/pokemon/:uuid" element={<PokemonPage />} key={'pokemon-details-page'} />
                    <Route path="/pokemon/search/:uuid" element={<PokemonSearchPage />} key={'pokemon-search-page'} />
                    <Route
                        path="/pokemon/egg-group/:uuid"
                        element={<PokemonEggGroupPage />}
                        key={'pokemon-egg-group-page'}
                    />
                    <Route path="/pokemon/type/:uuid" element={<PokemonTypePage />} key={'pokemon-type-page'} />
                    <Route
                        path="/pokemon/move/info/:move"
                        element={<MoveInfoPage />}
                        key="pokemon-move-info-details-page"
                    />

                    <Route path='/evos/:uuid' element={<EvolutionsTestPage />} key={'pokemon-evolution-test-page'} />

                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
