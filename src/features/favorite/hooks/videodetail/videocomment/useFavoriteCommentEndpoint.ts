import { VIDEO_MNG_PATH } from "../../../../../consts/CommonConst";
import ENV from "../../../../../env.json";

type propsType = {
    videoId: string,
    nextPageToken?: string,
}

export function useFavoriteCommentEndpoint(props: propsType) {

    const nextPageTokenQuery = props.nextPageToken ? `?nextpagetoken=${props.nextPageToken}` : ``;

    const endpoint = props.videoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_COMMENT}${nextPageTokenQuery}`.replace(`:videoId`, props.videoId) : ``;

    return endpoint;
}