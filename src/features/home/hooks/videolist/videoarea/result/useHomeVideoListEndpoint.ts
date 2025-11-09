import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";
import ENV from "../../../../../../env.json";


const VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.VIDEO_INFO}`;

export function useHomeVideoListEndpoint() {

    const { create } = useCreateHomeVideoListQuery();

    const newQuery = create({});

    return newQuery ? `${VIDEO_INFO_PATH}${newQuery}` : ``;
}