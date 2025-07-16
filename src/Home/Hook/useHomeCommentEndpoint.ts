import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export function useHomeCommentEndpoint(videoId: string) {

    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.VIDEO_COMMENT_ID}`.replace(`:videoId`, videoId) : ``;

    return endpoint;
}