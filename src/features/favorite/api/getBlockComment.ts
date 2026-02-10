import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from '../../../env.json';
import { api } from "../../../lib/apiClient";
import { FavoriteVideoBlockCommentListResponseType } from "../types/videodetail/videocomment/videoblockcomment/FavoriteVideoBlockCommentListResponseType";
import { YouTubeDataApiCommentDetailResponseType } from "../types/videodetail/videocomment/YouTubeDataApiCommentDetailResponseType";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    select: (res: FavoriteVideoBlockCommentListResponseType) => YouTubeDataApiCommentDetailResponseType;
    videoId: string;
    onError: (res: unknown) => void;
}

export function getBlockComment(props: PropsType) {

    const endpoint = props.videoId ? `${VIDEO_MNG_PATH}${ENV.BLOCK_COMMENT}`.replace(`:videoId`, props.videoId) : ``;

    return useQuery({
        queryKey: favoriteVideoKeys.blockComment(props.videoId),
        queryFn: async () => {
            const { data } = await api.get(endpoint);
            return data;
        },
        select: props.select,
        onError: props.onError,
        enabled: !!props.videoId,
    });
}