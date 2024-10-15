import { lazy } from 'react';
import AppLayout from './pages/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/main.style.css';
import './app.default.css';

const HomePage = lazy(() => import('./pages/home/page'));
const PokemonPage = lazy(() => import('./pages/pokemon/page'));
const PokemonSearchPage = lazy(() => import('./pages/pokemon/search/page'));
const MoveInfoPage = () => null;
const ErrorPage = lazy(() => import('./pages/error/page'));
// set router and routes -> using react-router-dom

function App() {
    return (
        <BrowserRouter future={{ v7_startTransition: true }}>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/pokemon/:uuid" element={<PokemonPage />} />
                    <Route path="/pokemon/search/:uuid" element={<PokemonSearchPage />} />
                    <Route path="/pokemon/move/info/:move" element={<MoveInfoPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
