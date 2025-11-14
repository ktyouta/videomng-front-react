import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { Option } from "../../../../../../components/Selectbox";
import { objectDeepCopy } from "../../../../../../utils/CommonFunction";
import useQueryWrapper from "../../../../../../hooks/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import { tagType } from "../../../../../../components/TagsComponent";
import ENV from "../../../../../../env.json";
import { FavoriteVideoTagType } from "../../../../types/videodetail/videotag/FavoriteVideoTagType";
import { errResType } from "../../../../../../hooks/useMutationWrapperBase";
import { useGlobalAtomValue } from "../../../../../../hooks/useGlobalAtom";
import { useNavigate } from "react-router-dom";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../../../const/FavoriteConst";
import { INIT_PAGE, useFavoriteVideoSearchConditionValue } from "../../../useFavoriteVideoSearchConditionValue";
import { useViewStatusList } from "../../../useViewStatusList";
import { useVideoCategory } from "../../../../../main/hooks/useVideoCategory";
import { useCreateFavoriteVideoListQuery } from "../../../useCreateFavoriteVideoListQuery";
import { useReplaceQuery } from "../../../../../../hooks/useReplaceQuery";
import { useTagMasterList } from "../../useTagMasterList";


type propsType = {
    close: () => void;
}

export function useFavoriteSearchConditionMain(props: propsType) {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 視聴状況リストを取得
    const { data: viewStatusList } = useViewStatusList({});
    // 検索条件
    const {
        selectedFavoriteVideoCategory,
        setSelectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        setSelectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        setSelectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        setSelectedFavoriteVideoFavoriteLevel,
        resetPage, } = useFavoriteVideoSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // タグマスタリストを取得
    const { data: tagMasterList } = useTagMasterList({
        isGetChache: true
    });

    // お気に入り度リスト
    const favoriteLevelList = useMemo(() => {

        const favoriteLevelList: Option[] = [...Array(FAVORITE_LEVEL_SETTING_LIST + 1)].map((_, index) => {

            const label = index === 0 ? `未設定` : index.toString();

            return {
                label,
                value: index.toString(),
            }
        });

        return [{
            value: ``,
            label: `すべて`,
        }, ...favoriteLevelList];
    }, []);

    /**
     * カテゴリ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoCategory(selectedCategory: string,) {

        const newQuery = create({
            videocategory: selectedCategory,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoCategory(selectedCategory);
        resetPage();

        props.close();
    }

    /**
     * 視聴状況選択イベント
     * @param selectedcCategory 
     */
    function changeViewStatus(selectedViewStatus: string,) {

        const newQuery = create({
            viewstatus: selectedViewStatus,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoViewStatus(selectedViewStatus);
        resetPage();

        props.close();
    }

    /**
     * タグ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoTag(selectedVideoTag: string,) {

        const newQuery = create({
            videotag: selectedVideoTag,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoTag(selectedVideoTag);
        resetPage();

        props.close();
    }

    /**
     * お気に入り度選択イベント
     * @param selectedcCategory 
     */
    function changeFavoriteLevel(selectedFavoriteLevel: string,) {

        const newQuery = create({
            favoritelevel: selectedFavoriteLevel,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoFavoriteLevel(selectedFavoriteLevel);
        resetPage();

        props.close();
    }

    return {
        videoCategory,
        selectedFavoriteVideoCategory,
        viewStatusList,
        selectedFavoriteVideoViewStatus,
        changeVideoCategory,
        changeViewStatus,
        selectedFavoriteVideoTag,
        tagMasterList,
        changeVideoTag,
        favoriteLevelList,
        selectedFavoriteVideoFavoriteLevel,
        changeFavoriteLevel,
    };
}