import { QueryKey, useQuery, UseQueryOptions, useInfiniteQuery, InfiniteData, UseInfiniteQueryOptions } from 'react-query';
import axios from "axios";


//引数の型
type propsType<TData, RData> = {
    url: string;
    queryKey?: [string, (Record<string, unknown> | string)?];
    options?: Omit<
        UseInfiniteQueryOptions<TData, unknown, RData, TData, QueryKey>,
        "queryKey" | "queryFn" | "enabled" | "notifyOnChangeProps" | "select" | "initialData"
    >;
    init?: InfiniteData<TData>;
    select?: (data: InfiniteData<TData>) => InfiniteData<RData>;
    afSuccessFn?: (data: InfiniteData<RData>) => void;
    afErrorFn?: (res: unknown) => void;
}

const useInfiniteQueryWrapper = <
    TData = unknown,
    RData = TData,
>(props: propsType<TData, RData>) => {

    //GET
    const getQuery = async () => {
        const { data } = await axios.get(props.url, { withCredentials: true });
        return data;
    }

    return useInfiniteQuery<TData, unknown, RData>(
        props.queryKey ?? [props.url],
        getQuery,
        {
            enabled: !!props.url,
            notifyOnChangeProps: "tracked",
            select: props.select,
            initialData: props.init,
            onSuccess: props.afSuccessFn,
            onError: props.afErrorFn,
            ...props.options
        }
    );
}

export default useInfiniteQueryWrapper;