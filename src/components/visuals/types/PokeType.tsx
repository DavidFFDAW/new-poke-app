import { Link } from "react-router-dom";
import { typesTranslate } from "@/constants/config";

export interface PokeTypeProps {
    type: string;
}

export default function PokeType({ type }: PokeTypeProps) {
    return (
        <Link to={`/pokemon/type/${type}`} className={`poke-type poke-type-${type}`} title={type}>
            <span className="type">{typesTranslate[type] || type}</span>
        </Link>
    )
}
