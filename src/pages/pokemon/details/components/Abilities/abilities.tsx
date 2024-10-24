import { Ability } from '../../../../../@types/api.pokemon'
import NullableComponent from '../../../../../components/visuals/loaders/Nullable';
import { getPokemonAbility } from '../../../../../utils/pokemon.translate';

interface Props {
    abilities: Ability[]
}

export default function PokeAbilities({ abilities }: Props) {
    const abilitiesList = abilities.map((ability, index) => {
        return {
            ...ability,
            customDatas: getPokemonAbility(ability.ability.name),
        }
    });

    return (
        <div className='abilites-block abilities poke-abilities flex column gap-sm'>
            <h3 className='w1'>Habilidades</h3>
            <ul className='abilities flex column gap'>
                {abilitiesList.map((ability) => {
                    return (
                        <li key={ability.customDatas.id} className='ability flexc column gap-sm'>
                            <div className='tag default-tag ability-name'>{ability.customDatas.name}
                                <NullableComponent condition={ability.is_hidden}>
                                    <span className='ability-hidden'> (Oculta)</span>
                                </NullableComponent>
                            </div>
                            <p className='ability-effect-tooltip'>{ability.customDatas.effect}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
