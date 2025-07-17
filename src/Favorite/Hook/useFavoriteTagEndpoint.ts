import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";

export function useFavoriteTagEndpoint(videoId: string) {

    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_TAG}`.replace(`:videoId`, videoId) : ``;

    return endpoint;
}