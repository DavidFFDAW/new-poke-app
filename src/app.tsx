import { StrictMode } from 'react';
import AppRouter from './app.router';
import { createRoot } from 'react-dom/client';
import './assets/css/styles.css';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <AppRouter />
        </HelmetProvider>
    </StrictMode >
);
