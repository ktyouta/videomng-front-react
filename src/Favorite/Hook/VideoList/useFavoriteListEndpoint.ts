import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import ENV from "../../../env.json";


// 動画一覧取得エンドポイント
const VIDEO_INFO_PATH = `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO}`;
// クエリパラメータのキー(視聴状況)
const QUERY_KEY_VIEW_STATUS = `viewstatus`;
// クエリパラメータのキー(カテゴリ)
const QUERY_KEY_CATEGORY = `videocategory`;
// クエリパラメータのキー(タグ)
const QUERY_KEY_TAG = `videotag`;
// クエリパラメータのキー(ソート)
const QUERY_KEY_SORT = `sortkey`;
// クエリパラメータのキー(お気に入り度)
const QUERY_KEY_FAVORITE_LEVEL = `favoritelevel`;

export function useFavoriteListEndpoint() {

    const {
        selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey
    } = useFavoriteVideoSearchConditionValue();

    function createQuery() {
        let queryParam = ``;

        queryParam = appendQuery(queryParam, QUERY_KEY_VIEW_STATUS, selectedFavoriteVideoViewStatus);
        queryParam = appendQuery(queryParam, QUERY_KEY_CATEGORY, selectedFavoriteVideoCategory);
        queryParam = appendQuery(queryParam, QUERY_KEY_TAG, selectedFavoriteVideoTag);
        queryParam = appendQuery(queryParam, QUERY_KEY_SORT, selectedFavoriteVideoSortKey);
        queryParam = appendQuery(queryParam, QUERY_KEY_FAVORITE_LEVEL, selectedFavoriteVideoFavoriteLevel);

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        return queryParam;
    }

    function appendQuery(
        query: string,
        key: string,
        value: string,
    ) {

        return value ? `${query}&${key}=${value}` : query;
    }

    return {
        endpoint: `${VIDEO_INFO_PATH}${createQuery()}`,
        query: createQuery()
    };
}