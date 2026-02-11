import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from '../../../env.json';
import { api } from "../../../lib/apiClient";
import { FavoriteVideoCommentThreadResponseType } from "../types/videodetail/videocomment/FavoriteVideoCommentThreadResponseType";
import { FavoriteVideoCommentThreadType } from "../types/videodetail/videocomment/FavoriteVideoCommentThreadType";
import { favoriteVideoKeys } from "./queryKey";

type PropsType = {
    select: ((res: FavoriteVideoCommentThreadResponseType) => FavoriteVideoCommentThreadType);
    onSuccess: (res: FavoriteVideoCommentThreadType) => void;
    videoId: string;
    nextPageToken: string;
    onError: (res: unknown) => void;
}

export function getFavoriteVideoComment(props: PropsType) {

    const nextPageTokenQuery = props.nextPageToken ? `?nextpagetoken=${props.nextPageToken}` : ``;
    const endpoint = props.videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_COMMENT}${nextPageTokenQuery}`.replace(`:videoId`, props.videoId) : ``;

    return useQuery({
        queryKey: favoriteVideoKeys.comment({
            videoId: props.videoId,
            nextPageToken: props.nextPageToken,
        }),
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