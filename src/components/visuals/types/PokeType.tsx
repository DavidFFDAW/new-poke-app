import { Link } from "react-router-dom";
import { typesTranslate } from "@/constants/config";

export interface PokeTypeProps {
    type: string;
}

export default function PokeType({ type }: PokeTypeProps) {
    return (
        <Link to={`/pokemon/type/${type}`} className={`poke-type poke-type-${type}`} title={type}>
            <div className="inner-type-content">
                <img src={`/images/types/${type}.svg`} alt={type} />
                <p className="type">{typesTranslate[type] || type}</p>
            </div>
        </Link>
    )
}
