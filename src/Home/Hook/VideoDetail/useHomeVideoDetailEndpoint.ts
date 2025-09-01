import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json";


export function useHomeVideoDetailEndpoint(videoId: string) {

    const endpoint = videoId ? `${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}/${videoId}` : ``;

    return endpoint;
}