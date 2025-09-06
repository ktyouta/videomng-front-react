import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import { comboType } from "../../../Common/Component/ComboComponent";
import { objectDeepCopy } from "../../../Common/Function/CommonFunction";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../../Type/VideoDetail/VideoTag/FavoriteVideoTagResponseType";
import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { tagType } from "../../../Common/Component/TagsComponent";
import ENV from "../../../env.json";
import { FavoriteVideoTagType } from "../../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { useGlobalAtomValue } from "../../../Common/Hook/useGlobalAtom";
import { useNavigate } from "react-router-dom";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../Const/FavoriteConst";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import { useViewStatusList } from "../useViewStatusList";
import { useVideoCategory } from "../../../Main/Hook/useVideoCategory";


type propsType = {
    close: () => void;
}

export function useFavoriteSearchConditionMain(props: propsType) {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 視聴状況リストを取得
    const { data: viewStatusList } = useViewStatusList();
    // 視聴状況選択リスト
    const [viewStatusSelectList, setViewStatusSelectList] = useState<comboType[]>();
    // タグマスタリスト
    const [tagMasterList, setTagMasterList] = useState<comboType[]>([
        {
            value: ``,
            label: `すべて`,
        }
    ]);
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

    /**
     * 画面表示用の視聴状況リストを作成
     */
    useEffect(() => {

        // 視聴状況選択リストが作成されている場合はスキップ
        if (viewStatusSelectList && viewStatusSelectList.length > 0) {
            return;
        }

        if (!viewStatusList || viewStatusList.length === 0) {
            return;
        }

        const copyViewStatusList = objectDeepCopy(viewStatusList);
        const newViewStatusSelectList = [{
            value: ``,
            label: `すべて`,
        }, ...copyViewStatusList];

        setViewStatusSelectList(newViewStatusSelectList);

    }, viewStatusList);


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
    useQueryWrapper<FavoriteVideoTagResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.TAG_INFO}`,
            afSuccessFn: (response: FavoriteVideoTagResponseType) => {

                const tagComboList = response.data.map((e: FavoriteVideoTagType) => {
                    return {
                        value: e.tagName,
                        label: e.tagName,
                    }
                });

                setTagMasterList((e) => {
                    return [
                        ...e,
                        ...tagComboList
                    ];
                })
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
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
        viewStatusSelectList,
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