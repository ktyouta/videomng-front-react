import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from '../../../env.json';
import { api } from "../../../lib/apiClient";
import { FavoriteVideoCustomDataType } from "../types/videodetail/videodetailsetting/FavoriteVideoCustomDataType";
import { FavoriteVideoCustomResponseType } from "../types/videodetail/videodetailsetting/FavoriteVideoCustomResponseType";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    videoId: string;
    select: (res: FavoriteVideoCustomResponseType) => FavoriteVideoCustomDataType;
    onSuccess?: (res: FavoriteVideoCustomDataType) => void;
    onError?: (res: unknown) => void;
}

export function getFavoriteVideoCustom(props: PropsType) {

    const endpoint = props.videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_CUSTOM}`.replace(`:videoId`, props.videoId) : ``;

    return useQuery({
        queryKey: favoriteVideoKeys.custom(props.videoId),
        queryFn: async () => {
            const { data } = await api.get(endpoint);
            return data;
        },
        select: props.select,
        onSuccess: props.onSuccess,
        onError: props.onError,
        enabled: !!props.videoId,
    });
}