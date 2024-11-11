import React from "react";
import { getMoves } from "@/utils";
import { Link } from "react-router-dom";
import PokeType from "@/components/visuals/types/PokeType";

interface MoveDatas {
    list: {
        name: string;
        en: string;
        type: string;
    }[];
    search: string;
}

export default function MovesPage() {
    const moves = getMoves();
    const [state, setDatas] = React.useState<MoveDatas>({
        list: moves,
        search: "",
    });

    const searchMove = (ev: React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault();
        const search = ev.target.value;
        const list = moves.filter(
            (move) =>
                move.name.toLowerCase().includes(search.toLowerCase()) ||
                move.en.toLowerCase().includes(search.toLowerCase())
        );

        setDatas((previous: MoveDatas) => ({ ...previous, list, search }));
    };

    return (
        <div className="moves-page">
            <h1>Moves Page</h1>

            <form action="" method="get" className="w1 flex end acenter">
                <input
                    type="text"
                    name="search"
                    value={state.search}
                    onChange={searchMove}
                />
                <button type="submit" className="btn btn-download">
                    Search
                </button>
            </form>

            <div className="moves-list grid two-column gap down acenter">
                {state.list.slice(0, 50).map((move) => (
                    <Link
                        className="w1 move-item flex column gap-sm"
                        to={`/pokemon/moves/move/${move.en}`}
                        key={move.en}
                    >
                        <h2>{move.name}</h2>
                        <PokeType type={move.type} />
                    </Link>
                ))}

                <span>...</span>
            </div>
        </div>
    );
}
