import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json";

export function useFavoriteDetailSettingEndpoint(videoId: string) {

    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_CUSTOM}`.replace(`:videoId`, videoId) : ``;

    return endpoint;
}