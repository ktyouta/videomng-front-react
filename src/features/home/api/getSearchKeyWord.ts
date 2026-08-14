import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { SearchWordResponseType } from "../types/videolist/SearchWordResponseType";
import { SearchWordType } from "../types/videolist/SearchWordType";
import { videoKeys } from "./queryKey";

type PropsType = {
    enabled: boolean;
    select: (data: SearchWordResponseType) => SearchWordType[]
}

export function getSearchKeyWord(props: PropsType) {

    return useQuery({
        queryKey: videoKeys.searchKeyWordLists(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.SEARCH_WORD}`);
            return data;
        },
        select: props.select,
        enabled: props.enabled,
    });
}