import React from "react";
import { apiService } from "@/services/api.service";
import { APIEggGroupResponse } from "@/@types/api.egggroup";
import { useParams } from "react-router-dom";

export default function useEggGroup() {
    const { uuid } = useParams<{ uuid: string }>();
    const [eggGroup, setEggGroup] = React.useState<APIEggGroupResponse | null>(
        null
    );

    React.useEffect(() => {
        if (!uuid) return;
        apiService.getEggGroupDatas(uuid).then((data) => {
            console.log({ responseData: data });

            setEggGroup(data);
        });
    }, [uuid]);

    return {
        param: uuid,
        eggGroup,
    };
}
