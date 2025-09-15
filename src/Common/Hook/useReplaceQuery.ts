export function useReplaceQuery() {

    function replace(query: string) {
        window.history.replaceState(null, ``, query);
    }

    return {
        replace
    }
}