import { apiService } from "@/services/api.service";
import { getPokemonMove } from "@/utils";
import React from "react";
import { useParams } from "react-router-dom";

export default function useMove() {
    const { uuid } = useParams<{ uuid: string }>();
    const moveDatas = getPokemonMove(uuid || "");
    const [move, setMove] = React.useState<any>(null);

    React.useEffect(() => {
        if (!uuid) return;
        apiService.getMoveDatas(uuid).then((response) => {
            console.log({ response });

            setMove(response);
        });
    }, [uuid]);

    return {
        uuid,
        moveDatas,
        learntBy: move,
    };
}
