import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from '../../../env.json';
import { api } from "../../../lib/apiClient";
import { HomeVideoCommentThreadResponseType } from "../types/videodetail/videocomment/HomeVideoCommentThreadResponseType";
import { HomeVideoCommentThreadType } from "../types/videodetail/videocomment/HomeVideoCommentThreadType";
import { videoKeys } from "./queryKey";

type PropsType = {
    select: ((res: HomeVideoCommentThreadResponseType) => HomeVideoCommentThreadType);
    onSuccess: (res: HomeVideoCommentThreadType) => void;
    videoId: string;
    nextPageToken: string;
    onError: (res: unknown) => void;
}

export function getVideoComment(props: PropsType) {

    const nextPageTokenQuery = props.nextPageToken ? `?nextpagetoken=${props.nextPageToken}` : ``;
    const endpoint = props.videoId ? `${VIDEO_MNG_PATH}${ENV.VIDEO_COMMENT_ID}${nextPageTokenQuery}`.replace(`:videoId`, props.videoId) : ``;

    return useQuery({
        queryKey: videoKeys.comment({
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