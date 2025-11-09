export function useReplaceQuery() {

    function replace(query: string) {

        window.history.replaceState(null, ``, query || window.location.pathname);
        window.dispatchEvent(new PopStateEvent("popstate"));
    }

    return {
        replace
    }
}