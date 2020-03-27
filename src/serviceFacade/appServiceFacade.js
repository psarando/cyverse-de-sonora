import callApi from "../common/callApi";

function getApps(key, { rowsPerPage, orderBy, order, page }) {
    return callApi({
        endpoint: `/api/apps?limit=${rowsPerPage}&sort-field=${orderBy}&sort-dir=${order.toUpperCase()}&offset=${rowsPerPage *
            page}`,
        method: "GET",
    });
}

export { getApps };
