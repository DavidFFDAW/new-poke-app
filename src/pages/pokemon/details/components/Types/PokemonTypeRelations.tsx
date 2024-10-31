import PokeType from '@/components/visuals/types/PokeType';
import NullableComponent from '../../../../../components/visuals/loaders/Nullable';
import { getTypeEffectiveness } from '../../../../../utils/pokemon.type.utils';

interface Props {
    types: string[];
}

function TypeList({ list }: { list: string[] }) {
    return (
        <ul className='w1 grid type-relation-list'>
            {list.map((type, index) => {
                return (
                    <li key={index} className="poke-type-relation-inner">
                        <PokeType type={type} />
                    </li>
                )
            })}
        </ul>
    )

}

export default function PokemonTypeRelations({ types }: Props) {
    const relations = getTypeEffectiveness(types);

    return (
        <div className='w1 type-relations flex center astart gap'>
            <NullableComponent condition={relations.strengths.length > 0}>
                <div className='w1 single-type-relation type-strenghts flex column gap'>
                    <h3 className='w1 tcenter'>Fortalezas</h3>
                    <TypeList list={relations.strengths} />
                </div>
            </NullableComponent>

            <NullableComponent condition={relations.weaknesses.length > 0}>
                <div className='w1 single-type-relation type-weaknesses flex column gap'>
                    <h3 className='w1 tcenter'>Debilidades</h3>
                    <TypeList list={relations.weaknesses} />
                </div>
            </NullableComponent>

            <NullableComponent condition={relations.immunities.length > 0}>
                <div className='w1 single-type-relation type-immunities flex column gap'>
                    <h3 className='w1 tcenter'>Inmunidades</h3>
                    <TypeList list={relations.immunities} />
                </div>
            </NullableComponent>
        </div>
    )
}
