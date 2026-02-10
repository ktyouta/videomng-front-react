import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from '../../../env.json';
import { api } from "../../../lib/apiClient";
import { VideoDetailItemType } from "../../../types/videodetail/VideoDetailItemType";
import { VideoDetailResponseType } from "../../../types/videodetail/VideoDetailResponseType";
import { videoKeys } from "./queryKey";

type PropsType = {
    select: ((data: VideoDetailResponseType) => VideoDetailItemType) | undefined
    videoId: string;
}

export function getVideoDetail(props: PropsType) {

    return useQuery({
        queryKey: videoKeys.detail(props.videoId),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}/${props.videoId}`);
            return data;
        },
        select: props.select,
        enabled: !!props.videoId,
    });
}