// import { lazy } from "react";
import AppLayout from "./pages/layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppRouter } from "./app.routes";
import "./assets/css/main.style.css";
import "./app.default.css";
import "./assets/css/media.queries.css";
import HomePage from "./pages/home/page";

// const HomePage = lazy(() => import("./pages/home/page"));

function App() {
    return (
        <BrowserRouter future={{ v7_startTransition: true }}>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} key={"home-page"} />
                    {AppRouter.routes.map((route) => (
                        <Route
                            key={route.key}
                            path={route.path}
                            element={<route.page />}
                        />
                    ))}
                    <Route path="*" element={<Navigate to={"/"} replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
