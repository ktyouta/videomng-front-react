import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { comboType } from "../../../../../Common/Component/ComboComponent";
import { objectDeepCopy } from "../../../../../Common/Function/CommonFunction";
import useQueryWrapper from "../../../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../../../../Type/VideoDetail/VideoTag/FavoriteVideoTagResponseType";
import { VIDEO_MNG_PATH } from "../../../../../Common/Const/CommonConst";
import { tagType } from "../../../../../Common/Component/TagsComponent";
import ENV from "../../../../../env.json";
import { FavoriteVideoTagType } from "../../../../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
import { errResType } from "../../../../../Common/Hook/useMutationWrapperBase";
import { useGlobalAtomValue } from "../../../../../Common/Hook/useGlobalAtom";
import { useNavigate } from "react-router-dom";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../../../Const/FavoriteConst";
import { useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";
import { useViewStatusList } from "../../../useViewStatusList";
import { useVideoCategory } from "../../../../../Main/Hook/useVideoCategory";


type propsType = {
    close: () => void;
}

export function useFavoriteSearchConditionMain(props: propsType) {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 視聴状況リストを取得
    const { data: viewStatusList } = useViewStatusList();
    // 検索条件
    const {
        selectedFavoriteVideoCategory,
        setSelectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        setSelectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        setSelectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        setSelectedFavoriteVideoFavoriteLevel, } = useFavoriteVideoSearchConditionValue();


    // お気に入り度リスト
    const favoriteLevelList = useMemo(() => {

        const favoriteLevelList: comboType[] = [...Array(FAVORITE_LEVEL_SETTING_LIST + 1)].map((_, index) => {

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


    // タグマスタリストを取得
    const { data: tagMasterList } = useQueryWrapper<FavoriteVideoTagResponseType, comboType[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
            select: (res: FavoriteVideoTagResponseType) => {

                const tagComboList = res.data;

                return [
                    {
                        value: ``,
                        label: `すべて`,
                    },
                    ...tagComboList.map((e) => {
                        return {
                            value: e.tagName,
                            label: e.tagName,
                        }
                    })
                ]
            },
            afErrorFn: (res) => {
            }
        }
    );


    /**
     * カテゴリ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoCategory(selectedCategory: string,) {

        setSelectedFavoriteVideoCategory(selectedCategory);
        props.close();
    }

    /**
     * 視聴状況選択イベント
     * @param selectedcCategory 
     */
    function changeViewStatus(selectedViewStatus: string,) {

        setSelectedFavoriteVideoViewStatus(selectedViewStatus);
        props.close();
    }

    /**
     * タグ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoTag(selectedVideoTag: string,) {

        setSelectedFavoriteVideoTag(selectedVideoTag);
        props.close();
    }

    /**
     * お気に入り度選択イベント
     * @param selectedcCategory 
     */
    function changeFavoriteLevel(selectedFavoriteLevel: string,) {

        setSelectedFavoriteVideoFavoriteLevel(selectedFavoriteLevel);
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