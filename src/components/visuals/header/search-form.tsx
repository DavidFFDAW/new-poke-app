import { useSearch } from "@/hooks/useSearch";
import { useParams } from "react-router-dom";

export default function HeaderSearchForm() {
    const params = useParams();
    const { handleFormSearch } = useSearch();

    return (
        <form
            className="last input-div"
            action=""
            method="get"
            onSubmit={handleFormSearch}
        >
            <input
                className="text-search"
                type="text"
                name="search"
                defaultValue={params.uuid}
            />
            <button className="btn btn-search" type="submit">
                Search
            </button>
        </form>
    );
}
