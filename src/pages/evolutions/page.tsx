import ComponentSpinner from '@/components/visuals/loaders/ComponentSpinner';
import { apiService } from '@/services/api.service';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EvosTestPage from './EvosTestPage';
import { EvolutionChain } from '@/@types/api.evolutions';

export default function PokeEvolutionTestPage() {
    const { uuid } = useParams();
    if (!uuid) return <h1>Es necesario indicar un pokemon por nombre concreto o por id</h1>;

    const [evolutions, setEvolutions] = useState<EvolutionChain | null>(null);

    useEffect(() => {
        apiService.getPokemonDetails(uuid).then((data) => {
            setEvolutions(data.evolutions);
        });
    }, [uuid]);

    return (
        <div className='evos-page'>
            {!evolutions
                ? <ComponentSpinner />
                : <EvosTestPage evolutions={evolutions} />
            }
        </div>
    )
}
