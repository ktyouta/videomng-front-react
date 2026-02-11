import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../consts/CommonConst";
import ENV from '../../env.json';
import { api } from "../../lib/apiClient";
import { QUERY_KEY_SEARCH_COMMENT } from "../home/const/HomeConst";
import { SearchKeywordCommentResponseDataType } from "../home/types/videodetail/videosearchkeywordcomment/SearchKeywordCommentResponseDataType";
import { SearchKeywordCommentResponseType } from "../home/types/videodetail/videosearchkeywordcomment/SearchKeywordCommentResponseType";
import { videoKeys } from "./queryKey";

type PropsType = {
    select: ((res: SearchKeywordCommentResponseType) => SearchKeywordCommentResponseDataType);
    videoId: string;
    keyword: string;
    onError: (res: unknown) => void;
}

export function getSearchComment(props: PropsType) {

    const endpoint = props.videoId ? `${VIDEO_MNG_PATH}${ENV.SEARCH_COMMENT_BY_KEYWORD}`.replace(`:videoId`, props.videoId) : ``;
    const queryParam = `?${QUERY_KEY_SEARCH_COMMENT}=${props.keyword}`;

    return useQuery({
        queryKey: videoKeys.searchComment({
            videoId: props.videoId,
            keyword: props.keyword,
        }),
        queryFn: async () => {
            const { data } = await api.get(`${endpoint}${queryParam}`);
            return data;
        },
        select: props.select,
        onError: props.onError,
        enabled: !!props.videoId && !!props.keyword,
    });
}