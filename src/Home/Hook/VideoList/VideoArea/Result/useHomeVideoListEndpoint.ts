import { VIDEO_MNG_PATH } from "../../../../../Common/Const/CommonConst";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";
import ENV from "../../../../../env.json";


const VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}`;

export function useHomeVideoListEndpoint() {

    const { create } = useCreateHomeVideoListQuery();

    return `${VIDEO_INFO_PATH}${create({})}`;
}