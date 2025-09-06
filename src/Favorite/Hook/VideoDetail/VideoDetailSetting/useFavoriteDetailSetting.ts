import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { EDIT_MODE } from "../../../Const/FavoriteConst";
import { FavoriteVideoDetailDataType } from "../../../Type/VideoDetail/FavoriteVideoDetailDataType";
import { useGlobalAtomValue } from "../../../../Common/Hook/useGlobalAtom";
import { useVideoCategory } from "../../../../Main/Hook/useVideoCategory";


type propsType = {
    videoDetail: FavoriteVideoDetailDataType,
}

export function useFavoriteDetailSetting(props: propsType) {

    // 動画詳細情報
    const videDetail = props.videoDetail;
    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 編集モード
    const [editMode, setEditMode] = useState(EDIT_MODE.VIEW);
    // 要約
    const [summary, setSummary] = useState(videDetail.detail.summary);
    // カテゴリ
    const [categorys, setCategorys] = useState(videDetail.categorys);
    // 視聴状況
    const [viewStatus, setViewStatus] = useState(videDetail.detail.viewStatus);
    // お気に入り度
    const [favoriteLevel, setFavoriteLevel] = useState(videDetail.detail.favoriteLevel);


    /**
     * 編集画面遷移
     */
    function changeEdit() {
        setEditMode(EDIT_MODE.EDIT);
    }

    /**
     * 閲覧画面遷移
     */
    function changeView() {
        setEditMode(EDIT_MODE.VIEW);
    }

    return {
        videoCategory,
        editMode,
        changeEdit,
        changeView,
        summary,
        setSummary,
        categorys,
        setCategorys,
        viewStatus,
        setViewStatus,
        favoriteLevel,
        setFavoriteLevel,
    };
}