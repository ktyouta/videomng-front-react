import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from '../../../env.json';
import { api } from "../../../lib/apiClient";
import { nowSearchConditionType } from "../components/HomeVideoNowSearchConditionValueProvider";
import { VideoListResponseType } from "../types/videolist/VideoListResponseType";
import { videoKeys } from "./queryKey";

type PropsType = {
    onSuccess: (response: VideoListResponseType) => void;
    queryString: string;
    nowSearchCondition: nowSearchConditionType;
}

export function getVideoList(props: PropsType) {

    // クエリキー
    const queryKey = {
        q: props.nowSearchCondition.keyword,
        videoCategory: props.nowSearchCondition.category,
        videoType: props.nowSearchCondition.type,
        nextPageToken: props.nowSearchCondition.nextPageToken,
    }

    return useQuery({
        queryKey: videoKeys.list(queryKey),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}${props.queryString ? `${props.queryString}` : ``}`);
            return data;
        },
        onSuccess: props.onSuccess,
    });
}