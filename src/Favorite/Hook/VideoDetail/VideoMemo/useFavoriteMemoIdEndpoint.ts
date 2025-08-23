import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";

type propsType = {
    videoId: string,
    memoId: number,
}

export function useFavoriteMemoIdEndpoint(props: propsType) {

    const endpoint = props.videoId && props.memoId ? `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_MEMO_ID}`.replace(`:videoId`, props.videoId).replace(`:memoId`, props.memoId.toString()) : ``;

    return endpoint;
}