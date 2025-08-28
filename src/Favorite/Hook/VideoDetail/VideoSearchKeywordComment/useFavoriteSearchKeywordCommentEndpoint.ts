import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";

const QUERY_KEY_KEYWORD = `q`;

type propsType = {
    videoId?: string,
    keyword?: string,
}

export function useFavoriteSearchKeywordCommentEndpoint(props: propsType) {

    if (!props.videoId) {
        return ``;
    }

    if (!props.keyword) {
        return ``;
    }

    const endpoint = props.videoId ? `${VIDEO_MNG_PATH}${ENV.SEARCH_COMMENT_BY_KEYWORD}`.replace(`:videoId`, props.videoId) : ``;
    const queryParam = `${QUERY_KEY_KEYWORD}=${props.keyword}`;

    return `${endpoint}?${queryParam}`;
}