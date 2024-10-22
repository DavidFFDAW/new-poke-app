import { useEffect, useState } from "react";

interface State {
    isBottomPage: boolean;
    isShiny: boolean;
}

export default function usePokemonDatas() {
    const [datas, setDatas] = useState<State>({
        isBottomPage: false,
        isShiny: false,
    });

    const handleScroll = () => {
        setDatas((prev: State) => ({ ...prev, isBottomPage: window.scrollY > 1000 }));
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleShiny = () => {
        setDatas((prev: State) => ({ ...prev, isShiny: !prev.isShiny }));
    }

    return {
        isBottomPage: datas.isBottomPage,
        isShiny: datas.isShiny,
        toggleShiny,
    }
}
