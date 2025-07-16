import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

type propsType = {
    videoId: string,
    commentId: string,
}

export function useFavoriteFavoriteCommentIdEndpoint(props: propsType) {

    const endpoint = props.videoId && props.commentId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_COMMENT_ID}`.replace(`:videoId`, props.videoId).replace(`:commentId`, props.commentId) : ``;

    return endpoint;
}