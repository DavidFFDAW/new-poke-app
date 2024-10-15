async function request(url: string, method: string) {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        return {
            ok: false,
            status: 500,
            response: error,
        };
    }
}

export const http = {
    get: (url: string) => request(url, "GET"),
    post: (url: string) => request(url, "POST"),
    put: (url: string) => request(url, "PUT"),
    delete: (url: string) => request(url, "DELETE"),
};
