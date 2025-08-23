import { VIDEO_MNG_PATH } from "../../../../../Common/Const/CommonConst";
import ENV from "../../../../../env.json";

export function useFavoriteFavoriteCommentEndpoint(videoId: string) {

    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_COMMENT}`.replace(`:videoId`, videoId) : ``;

    return endpoint;
}