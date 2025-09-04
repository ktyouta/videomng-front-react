import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useCreateFavoriteVideoListQuery } from "./useCreateFavoriteVideoListQuery";


export function useSyncFavoriteVideoListUrl() {

    const {
        selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey
    } = useFavoriteVideoSearchConditionValue();

    const { query } = useCreateFavoriteVideoListQuery();

    //ルーティング用
    const navigate = useNavigate();

    // 検索条件の変更時にURLを切り替える
    useEffect(() => {
        navigate(query);
    }, [
        selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey
    ]);
}