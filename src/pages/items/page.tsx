import Paginated from '@/components/visuals/list/Paginated';
import { getItems } from '@/utils';
import { useSearchParams } from 'react-router-dom';

export default function ItemsPage() {
    const items = getItems();
    const [search] = useSearchParams();
    const page = search.has('page') ? Number(search.get('page')) : 1;

    return (
        <section className="items-page">
            <h1>Objetos</h1>

            <Paginated items={15} list={items} page={page} className="items-list-container down" />
        </section>
    );
}
