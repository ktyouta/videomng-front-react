import { useQuery } from "react-query";
import { Option } from "../../components/Selectbox";
import { VIDEO_MNG_PATH } from "../../consts/CommonConst";
import ENV from "../../env.json";
import { api } from "../../lib/apiClient";
import { FavoriteVideoSortListResponseType } from "../favorite/types/videolist/FavoriteVideoSortListResponseType";
import { masterKeys } from "./queryKey";

type PropsType = {
    select: (res: FavoriteVideoSortListResponseType) => Option[];
    onError?: (res: unknown) => void;
    enabled?: boolean;
}

export function getSortList(props: PropsType) {

    return useQuery({
        queryKey: masterKeys.sortList(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_SORT}`);
            return data;
        },
        select: props.select,
        onError: props.onError,
        enabled: props.enabled,
    });
}
