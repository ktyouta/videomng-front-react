import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCreateFavoriteVideoListQuery } from "./useCreateFavoriteVideoListQuery";


export function useFavoriteVideoListEndpoint() {

    const { query } = useCreateFavoriteVideoListQuery();

    return `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}${query}`;
}