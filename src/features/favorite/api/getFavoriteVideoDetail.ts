import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from '../../../env.json';
import { api } from "../../../lib/apiClient";
import { FavoriteVideoDetailDataType } from "../types/videodetail/FavoriteVideoDetailDataType";
import { FavoriteVideoDetailResponseType } from "../types/videodetail/FavoriteVideoDetailResponseType";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    videoId: string;
    select: (res: FavoriteVideoDetailResponseType) => FavoriteVideoDetailDataType;
    onError: (res: unknown) => void;
}

export function getFavoriteVideoDetail(props: PropsType) {

    return useQuery({
        queryKey: favoriteVideoKeys.detail(props.videoId),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}/${props.videoId}`);
            return data;
        },
        select: props.select,
        enabled: !!props.videoId,
    });
}