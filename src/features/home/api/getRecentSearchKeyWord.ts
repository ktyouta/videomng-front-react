import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { RecentSearchWordResponseType } from "../types/videolist/RecentSearchWordResponseType";
import { SearchWordType } from "../types/videolist/SearchWordType";
import { videoKeys } from "./queryKey";

type PropsType = {
    enabled: boolean;
    select: (data: RecentSearchWordResponseType) => SearchWordType[]
}

export function getRecentSearchKeyWord(props: PropsType) {

    return useQuery({
        queryKey: videoKeys.searchRecentKeyWordLists(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.RECENT_SEARCH_WORD}`);
            return data;
        },
        select: props.select,
        enabled: props.enabled,
    });
}