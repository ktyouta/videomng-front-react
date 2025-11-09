import { QueryKey, useQueryClient } from "react-query";

export function useInvalidateQuery(key: QueryKey) {

    const queryClient = useQueryClient();

    /**
     * 再取得のトリガー
     */
    function invalidate() {
        queryClient.invalidateQueries({ queryKey: key });
    };

    return { invalidate };
}