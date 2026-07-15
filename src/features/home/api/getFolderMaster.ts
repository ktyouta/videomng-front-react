import { useQuery } from "react-query";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import ENV from "../../../env.json";
import { api } from "../../../lib/apiClient";
import { FolderMasterType } from "../types/videodetail/FolderMasterType";
import { videoKeys } from "./queryKey";

type PropsType = {
    enabled: boolean;
    select: (data: { data: FolderMasterType[] }) => FolderMasterType[];
}

export function getFolderMaster(props: PropsType) {

    return useQuery({
        queryKey: videoKeys.folderList({}),
        queryFn: async () => {
            const { data } = await api.get(`${VIDEO_MNG_PATH}${ENV.FOLDER}`);
            return data;
        },
        select: props.select,
        enabled: props.enabled,
    });
}