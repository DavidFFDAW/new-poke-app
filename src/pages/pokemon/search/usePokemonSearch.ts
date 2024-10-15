// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { PokemonCache } from '../../../@types/global.pokemon';
// import { apiService } from '../../../services/api.service';

// interface State {
//     results: PokemonCache[];
//     loading: boolean;
// }

// export default function usePokemonSearch() {
//     const { uuid } = useParams<{ uuid: string }>();
//     const [state, setState] = useState<State>({
//         results: [],
//         loading: true,
//     });

//     useEffect(() => {
//         apiService.getFilteredPokemons(uuid)
//     }, []);

//     return {
//         search: state.results,
//         loading: state.loading,
//     };
// }
