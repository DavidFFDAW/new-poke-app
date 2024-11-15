import SEOHead from "@/components/seo/head";
import Paginated from "@/components/visuals/list/Paginated";
import { getItems } from "@/utils";
import { useSearchParams } from "react-router-dom";

export default function ItemsPage() {
    const items = getItems();
    const [search] = useSearchParams();
    const page = search.has("page") ? Number(search.get("page")) : 1;

    return (
        <section className="items-page">
            <SEOHead title="Lista de items" />

            <Paginated
                items={15}
                list={items}
                page={page}
                className="items-list-container down"
            />
        </section>
    );
}
