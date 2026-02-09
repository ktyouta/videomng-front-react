import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from '../../../env.json';
import { api } from "../../../lib/apiClient";
import { useCreateFavoriteVideoListQuery } from "../hooks/useCreateFavoriteVideoListQuery";
import { FavoriteVideoListResponseDataType } from "../types/videolist/FavoriteVideoListResponseDataType";
import { FavoriteVideoListResponseType } from "../types/videolist/FavoriteVideoListResponseType";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    searchConditionObj: {
        selectedFavoriteVideoCategory: string;
        selectedFavoriteVideoViewStatus: string;
        selectedFavoriteVideoTag: string;
        selectedFavoriteVideoFavoriteLevel: string;
        selectedFavoriteVideoSortKey: string;
        selectedFavoriteVideoPage: string;
        selectedFavoriteVideoFolder: string;
        selectedFavoriteVideoMode: string;
    }
    select: (res: FavoriteVideoListResponseType) => FavoriteVideoListResponseDataType;
    onSuccess?: (response: FavoriteVideoListResponseDataType) => void;
    enabled?: boolean,
}

export function getFavoriteVideoList(props: PropsType) {

    const { query } = useCreateFavoriteVideoListQuery(props.searchConditionObj);

    return useQuery({
        queryKey: favoriteVideoKeys.list(props.searchConditionObj),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}${query}`);
            return data;
        },
        select: props.select,
        onSuccess: props.onSuccess,
        enabled: props.enabled ?? true,
    });
}