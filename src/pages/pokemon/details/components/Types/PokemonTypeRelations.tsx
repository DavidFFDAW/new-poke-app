import PokeType from '@/components/visuals/types/PokeType';
import NullableComponent from '../../../../../components/visuals/loaders/Nullable';
import { getTypeEffectiveness } from '../../../../../utils/pokemon.type.utils';

interface Props {
    types: string[];
}

export default function PokemonTypeRelations({ types }: Props) {
    const relations = getTypeEffectiveness(types);

    return (
        <div className='w1 type-relations flex center astart gap'>
            <div className='type-strenghts flex column gap'>
                <h3 className='w1'>Fortalezas</h3>
                <ul className='flex column gap-sm'>
                    {relations.strengths.map((type, index) => {
                        return (
                            <li key={index} className="poke-type-relation-inner">
                                <PokeType type={type} />
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className='type-weaknesses flex column gap'>
                <h3 className='w1'>Debilidades</h3>
                <ul className='flex column gap-sm'>
                    {relations.weaknesses.map((type, index) => {
                        return (
                            <li key={index} className="poke-type-relation-inner">
                                <PokeType type={type} />
                            </li>
                        )
                    })}
                </ul>
            </div>

            <NullableComponent condition={relations.immunities.length > 0}>
                <div className='type-immunities flex column gap'>
                    <h3 className='w1'>Inmunidades</h3>
                    <ul className='flex column gap-sm'>
                        {relations.immunities.map((type, index) => {
                            return (
                                <li key={index} className="poke-type-relation-inner">
                                    <PokeType type={type} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </NullableComponent>
        </div>
    )
}
