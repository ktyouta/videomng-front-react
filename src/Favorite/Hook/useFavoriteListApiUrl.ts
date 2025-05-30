import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { favoriteVideoApiUrlAtom, selectedFavoriteVideoCategoryAtom, selectedFavoriteVideoFavoriteLevelAtom, selectedFavoriteVideoSortKeyAtom, selectedFavoriteVideoTagAtom, selectedFavoriteVideoviewStatusAtom } from "../Atom/FavoriteAtom";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

type CreateUrlPropsType = {
    viewStatus?: string,
    videoCategory?: string,
    videoTag?: string,
    sortKey?: string,
    favoriteLevel?: string,
    callback?: () => void,
}


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


/**
 * お気に入り動画一覧取得用フック
 */
export function useFavoriteListApiUrl() {

    // お気に入り動画リスト取得URL
    const setFavoriteVideoUrl = useSetAtom(favoriteVideoApiUrlAtom);
    //ルーティング用
    const navigate = useNavigate();
    // 動画一覧検索条件選択値(カテゴリ)
    const [selectedFavoriteVideoCategory, setSelectedFavoriteVideoCategory] = useAtom(selectedFavoriteVideoCategoryAtom);
    // 動画一覧検索条件選択値(視聴状況)
    const [selectedFavoriteVideoViewStatus, setSelectedFavoriteVideoViewStatus] = useAtom(selectedFavoriteVideoviewStatusAtom);
    // 動画一覧検索条件選択値(タグ)
    const [selectedFavoriteVideoTag, setSelectedFavoriteVideoTag] = useAtom(selectedFavoriteVideoTagAtom);
    // 動画一覧検索条件選択値(お気に入り度)
    const [selectedFavoriteVideoFavoriteLevel, setSelectedFavoriteVideoFavoriteLevel] = useAtom(selectedFavoriteVideoFavoriteLevelAtom);
    // 動画一覧検索ソートキー
    const [selectedFavoriteVideoSortKey, setSelectedFavoriteVideoSortKey] = useAtom(selectedFavoriteVideoSortKeyAtom);


    /**
     * お気に入り動画一覧取得URLの切り替え
     * @param props 
     */
    function changeUrl(props: CreateUrlPropsType) {

        let queryParam = ``;

        queryParam = appendQuery(queryParam, QUERY_KEY_VIEW_STATUS, props.viewStatus, selectedFavoriteVideoViewStatus, setSelectedFavoriteVideoViewStatus);
        queryParam = appendQuery(queryParam, QUERY_KEY_CATEGORY, props.videoCategory, selectedFavoriteVideoCategory, setSelectedFavoriteVideoCategory);
        queryParam = appendQuery(queryParam, QUERY_KEY_TAG, props.videoTag, selectedFavoriteVideoTag, setSelectedFavoriteVideoTag);
        queryParam = appendQuery(queryParam, QUERY_KEY_SORT, props.sortKey, selectedFavoriteVideoSortKey, setSelectedFavoriteVideoSortKey);
        queryParam = appendQuery(queryParam, QUERY_KEY_FAVORITE_LEVEL, props.favoriteLevel, selectedFavoriteVideoFavoriteLevel, setSelectedFavoriteVideoFavoriteLevel);

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        const url = `${VIDEO_INFO_PATH}${queryParam}`;
        const query = `${queryParam}`;

        setFavoriteVideoUrl(url);
        navigate(query);

        if (props.callback) {
            props.callback();
        }
    }

    /**
     * 検索条件をリセット
     */
    function resetCondition() {

        setSelectedFavoriteVideoCategory(``);
        setSelectedFavoriteVideoViewStatus(``);
        setSelectedFavoriteVideoTag(``);
        setSelectedFavoriteVideoSortKey(``);
        setSelectedFavoriteVideoFavoriteLevel(``);
    }

    /**
     * クエリパラメータ作成
     * @param query 
     * @param key 
     * @param value 
     * @param nowValue 
     * @param setValue 
     * @returns 
     */
    function appendQuery(
        query: string,
        key: string,
        value?: string,
        nowValue?: string,
        setValue?: (v: string) => void
    ) {

        let retQuery = ``;

        if (value !== undefined) {
            setValue?.(value);
            retQuery = value ? `${query}&${key}=${value}` : query;
        }
        else {
            retQuery = nowValue ? `${query}&${key}=${nowValue}` : query;
        }

        return retQuery;
    }

    return {
        changeUrl,
        resetCondition,
        selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey,
    }
}