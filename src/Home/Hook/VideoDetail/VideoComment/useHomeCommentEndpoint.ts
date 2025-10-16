import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";

type propsType = {
    videoId: string,
    nextPageToken?: string,
}

export function useHomeCommentEndpoint(props: propsType) {

    const nextPageTokenQuery = props.nextPageToken ? `?nextpagetoken=${props.nextPageToken}` : ``;

    const endpoint = props.videoId ? `${VIDEO_MNG_PATH}${ENV.VIDEO_COMMENT_ID}${nextPageTokenQuery}`.replace(`:videoId`, props.videoId) : ``;

    return endpoint;
}