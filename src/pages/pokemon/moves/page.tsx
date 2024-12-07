import React from "react";
import { getMoves } from "@/utils";
import { Link } from "react-router-dom";
import PokeType from "@/components/visuals/types/PokeType";
import SEOHead from "@/components/seo/head";

interface MoveDatas {
    list: {
        name: string;
        en: string;
        type: string;
        power: string;
        attackType: string;
        pp: string;
        accuracy: string;
        effect: string;
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
        <section className="moves-page">
            <SEOHead title="Lista de movimientos" />
            <h1>Listado de movimientos</h1>

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
                        to={`/pokemon/moves/move/${move.en}`}
                        className={`w1 move-item flex column gap-sm poke-move poke-move-type-${move.type} type-${move.type} ${move.type}`}
                        // style={{
                        //     backgroundImage: `url(/images/types/${move.type}.svg)`,
                        // }}
                        key={move.en}
                    >
                        <h2 className="w1 tcenter move-title">{move.name}</h2>
                        <div className="w1 poke-move-inner flex">
                            <div className="poke-move-inner-effects">
                                <div className="poke-move-power-accuraccy-pp flex">
                                    <div className="w1 poke-move-power-item flex column">
                                        <span className="violet">
                                            Poder base
                                        </span>
                                        <span>{move.power}</span>
                                    </div>
                                    <div className="w1 poke-move-power-item flex column">
                                        <span className="violet">
                                            Presición
                                        </span>
                                        <span>{move.accuracy}</span>
                                    </div>
                                    <div className="w1 poke-move-power-item flex column">
                                        <span className="violet">PP</span>
                                        <span>{move.pp}</span>
                                    </div>
                                </div>

                                <p className="w1 tcenter">{move.effect}</p>
                            </div>
                            <div className="flex column move-type-and-attack-type">
                                <PokeType type={move.type} />
                            </div>
                        </div>
                    </Link>
                ))}

                <span>...</span>
            </div>
        </section>
    );
}
