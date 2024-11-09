import { lazy } from "react";

interface Routes {
    id: string;
    path: string;
    page: any;
    key: string;
}

export class AppRouter {
    static routes: Routes[] = [
        {
            id: "details",
            path: "/pokemon/:uuid",
            page: lazy(() => import("./pages/pokemon/details/page")),
            key: "pokemon-details-page",
        },
        {
            id: "search",
            path: "/pokemon/search/:uuid",
            page: lazy(() => import("./pages/pokemon/search/page")),
            key: "pokemon-search-page",
        },
        {
            id: "egg",
            path: "/pokemon/egg-group/:uuid",
            page: lazy(() => import("./pages/pokemon/egg-group/page")),
            key: "pokemon-egg-group-page",
        },
        {
            id: "type",
            path: "/pokemon/type/:uuid",
            page: lazy(() => import("./pages/pokemon/type/page")),
            key: "pokemon-type-page",
        },
        {
            id: "favourites",
            path: "/pokemon/favourites",
            page: lazy(() => import("./pages/pokemon/favourites/page")),
            key: "pokemon-favourites-page",
        },
        {
            id: "moves",
            path: "/pokemon/moves",
            page: lazy(() => import("./pages/pokemon/moves/page")),
            key: "pokemon-moves-page",
        },
        {
            id: "move",
            path: "/pokemon/moves/move/:uuid",
            page: lazy(() => import("./pages/pokemon/moves/details/page")),
            key: "pokemon-moves-move-details-page",
        },
        {
            id: "teams",
            path: "/pokemon/teams",
            page: lazy(() => import("./pages/pokemon/teams/page")),
            key: "pokemon-teams-page",
        },
        {
            id: "team",
            path: "/pokemon/teams/team/:uuid",
            page: lazy(() => import("./pages/pokemon/teams/details/page")),
            key: "pokemon-teams-team-details-page",
        },
        {
            id: "items",
            path: "/items/",
            page: lazy(() => import("./pages/items/page")),
            key: "pokemon-items-page",
        },
        {
            id: "item",
            path: "/items/:uuid",
            page: lazy(() => import("./pages/items/details/page")),
            key: "pokemon-items-details-page",
        },
    ];

    static find(id: string) {
        return this.routes.find((route) => route.id === id);
    }

    static findPath(id: string) {
        const route = this.find(id);
        if (!route) return null;

        return route.path;
    }
}
