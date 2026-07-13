import { useQuery } from "react-query";
import { tagType } from "../../../components/TagsComponent";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { TagMasterType } from "../types/videodetail/TagMasterType";
import { videoKeys } from "./queryKey";

type PropsType = {
    enabled: boolean;
    select: (data: { data: TagMasterType[] }) => tagType[]
}

export function getTagMaster(props: PropsType) {

    return useQuery({
        queryKey: videoKeys.tagMasters(),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.TAG_INFO}`);
            return data;
        },
        select: props.select,
        enabled: props.enabled,
    });
}