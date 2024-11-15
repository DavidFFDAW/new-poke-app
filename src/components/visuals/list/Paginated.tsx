import { Link } from "react-router-dom";

interface Props {
    items: number;
    list: any[];
    page: number;
    className: string;
}

export default function Paginated({ items, list, page, className }: Props) {
    const initialPage = page || 1;
    const start = (initialPage - 1) * items;
    const renderList = list.slice(start, start + items);
    const maxPages = Math.ceil(list.length / items);

    return (
        <div className="paginated paginated-module">
            <div
                data-items={items}
                data-page={initialPage}
                className={["paginated", className].join(" ")}
            >
                {renderList.map((item, indx) => (
                    <Link
                        to={`/items/item/${item.en}`}
                        key={indx}
                        data-item={item.en}
                        className="w1 item-wrapper item-card"
                    >
                        <img src={item.image} alt={item.name} />

                        <div className="item-text-block">
                            <h2 className="item-name">{item.name}</h2>
                            <p className="item-effect">{item.effect}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="paginated pagination">
                <div className="pagination-wrapper">
                    <Link
                        to={`?page=${initialPage - 1}`}
                        className="pagination-page"
                    >
                        &laquo;
                    </Link>

                    {initialPage > 1
                        ? Array.from({ length: 2 }, (_, i) => {
                              const page = initialPage - i - 1;
                              if (page < 1) return null;
                              return (
                                  <Link
                                      key={i}
                                      to={`?page=${page}`}
                                      className="pagination-page"
                                  >
                                      {page}
                                  </Link>
                              );
                          }).reverse()
                        : null}

                    <span className="pagination-page current-page">
                        {initialPage}
                    </span>

                    {initialPage < maxPages
                        ? Array.from({ length: 2 }, (_, i) => {
                              const page = initialPage + i + 1;
                              if (page >= maxPages) return null;
                              return (
                                  <Link
                                      key={i}
                                      to={`?page=${page}`}
                                      className="pagination-page"
                                  >
                                      {page}
                                  </Link>
                              );
                          })
                        : null}

                    <span className="pagination-page">...</span>

                    {initialPage !== maxPages ? (
                        <Link
                            to={`?page=${maxPages}`}
                            className="pagination-page"
                        >
                            {maxPages}
                        </Link>
                    ) : null}

                    <Link
                        to={`?page=${initialPage + 1}`}
                        className="pagination-page"
                    >
                        &raquo;
                    </Link>
                </div>
            </div>
        </div>
    );
}
