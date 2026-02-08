import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from '../../../env.json';
import { api } from "../../../lib/apiClient";
import { ChannelVideoListResponseType } from "../../../types/channel/ChannelVideoListResponseType";
import { videoKeys } from "./queryKey";

type PropsType = {
    onSuccess: (res: ChannelVideoListResponseType) => void;
    channelId: string;
    nextPageToken: string;
    onError: (res: unknown) => void;
}

export function getChannelVideo(props: PropsType) {

    const query = props.nextPageToken ? `?nextpagetoken=${props.nextPageToken}` : ``;
    const endpoint = props.channelId ? `${VIDEO_MNG_PATH}${ENV.CHANNEL_VIDEO_INFO}/${props.channelId}` : ``;

    return useQuery({
        queryKey: videoKeys.channel({
            channelId: props.channelId,
            nextPageToken: props.nextPageToken,
        }),
        queryFn: async () => {
            const { data } = await api.get(`${endpoint}${query}`);
            return data;
        },
        onSuccess: props.onSuccess,
        onError: props.onError,
        enabled: !!props.channelId,
    });
}