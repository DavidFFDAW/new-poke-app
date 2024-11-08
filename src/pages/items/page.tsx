import { getItems } from '@/utils';

export default function ItemsPage() {
    const items = getItems();

    return (
        <section className="items-page">
            <h1>Items</h1>

            <div className="flex wrap center astart gap-sm">
                {items.map(item => (
                    <div key={item.name} className="w1 item-wrapper card pad">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.effect}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
