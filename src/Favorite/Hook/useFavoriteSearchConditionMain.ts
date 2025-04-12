import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { videoCategoryAtom } from "../../Main/Atom/MainAtom";
import { selectedFavoriteVideoCategoryAtom, selectedFavoriteVideoviewStatusAtom, viewStatusListAtom } from "../Atom/FavoriteAtom";
import { useEffect, useState } from "react";
import { comboType } from "../../Common/Component/ComboComponent";
import { objectDeepCopy } from "../../Common/Function/CommonFunction";


type propsType = {
    close: () => void;
}

export function useFavoriteSearchConditionMain(props: propsType) {

    // 動画カテゴリ
    const videoCategory = useAtomValue(videoCategoryAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const [selectedFavoriteVideoCategory, setSelectedFavoriteVideoCategory] = useAtom(selectedFavoriteVideoCategoryAtom);
    // 視聴状況
    const [selectedFavoriteVideoviewStatus, setSelectedFavoriteVideoviewStatus] = useAtom(selectedFavoriteVideoviewStatusAtom);
    // 視聴状況リスト
    const viewStatusList = useAtomValue(viewStatusListAtom);
    // 視聴状況選択リスト
    const [viewStatusSelectList, setViewStatusSelectList] = useState<comboType[]>();


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
        setSelectedFavoriteVideoviewStatus(selectedViewStatus);
        props.close();
    }

    return {
        videoCategory,
        selectedFavoriteVideoCategory,
        viewStatusSelectList,
        selectedFavoriteVideoviewStatus,
        changeVideoCategory,
        changeViewStatus,
    };
}