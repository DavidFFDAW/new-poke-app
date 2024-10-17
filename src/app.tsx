import { StrictMode } from 'react';
import AppRouter from './app.router';
import { createRoot } from 'react-dom/client';
import './assets/css/styles.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppRouter />
    </StrictMode >
);
