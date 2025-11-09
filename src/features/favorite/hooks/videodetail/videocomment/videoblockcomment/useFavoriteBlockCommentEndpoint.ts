import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";

export function useFavoriteBlockCommentEndpoint(videoId: string) {

    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.BLOCK_COMMENT}`.replace(`:videoId`, videoId) : ``;

    return endpoint;
}