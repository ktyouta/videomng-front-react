import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { FavoriteSearchWordResponseType } from "../types/videolist/FavoriteSearchWordResponseType";
import { SearchWordType } from "../types/videolist/SearchWordType";
import { videoKeys } from "./queryKey";

type PropsType = {
    enabled: boolean;
    select: (data: FavoriteSearchWordResponseType) => SearchWordType[]
}

export function getFavoriteSearchKeyWord(props: PropsType) {

    return useQuery({
        queryKey: videoKeys.favoriteSearchKeyWordLists(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.FAVORITE_SEARCH_WORD}`);
            return data;
        },
        select: props.select,
        enabled: props.enabled,
    });
}