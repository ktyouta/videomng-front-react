import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { FrequentSearchWordResponseType } from "../types/videolist/FrequentSearchWordResponseType";
import { SearchWordType } from "../types/videolist/SearchWordType";
import { videoKeys } from "./queryKey";

type PropsType = {
    enabled: boolean;
    select: (data: FrequentSearchWordResponseType) => SearchWordType[]
}

export function getFrequentSearchKeyWord(props: PropsType) {

    return useQuery({
        queryKey: videoKeys.searchFrequentKeyWordLists(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.FREQUENT_SEARCH_WORD}`);
            return data;
        },
        select: props.select,
        enabled: props.enabled,
    });
}