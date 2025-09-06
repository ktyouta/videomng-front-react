import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "./useCreateHomeVideoListQuery";
import ENV from "../../../env.json";


const VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}`;

export function useHomeVideoListEndpoint() {

    const { query } = useCreateHomeVideoListQuery();

    return query ? `${VIDEO_INFO_PATH}${query}` : ``;
}