import { VIDEO_MNG_PATH } from "../../../../consts/CommonConst";
import ENV from "../../../../env.json"

type propsType = {
    channelId: string,
    nextPageToken: string,
}

export function useHomeChannelEndpoint(props: propsType) {

    const path = props.channelId ? `${VIDEO_MNG_PATH}${ENV.CHANNEL_VIDEO_INFO}/${props.channelId}` : ``;
    const query = props.nextPageToken ? `?nextpagetoken=${props.nextPageToken}` : ``;

    return `${path}${query}`;
}