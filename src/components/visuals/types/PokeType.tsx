import { typesTranslate } from "@/constants/config";

export interface PokeTypeProps {
    type: string;
}

export default function PokeType({ type }: PokeTypeProps) {
    return (
        <div className={`poke-type poke-type-${type}`}>
            <span className="type">{
                typesTranslate[type] || type
            }</span>
        </div>
    )
}
