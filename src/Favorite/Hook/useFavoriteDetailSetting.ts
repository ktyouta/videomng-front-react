import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { videoCategoryAtom } from "../../Main/Atom/MainAtom";
import { useMemo, useState } from "react";
import { EDIT_MODE } from "../Const/FavoriteConst";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import { useGlobalAtomValue } from "../../Common/Hook/useGlobalAtom";


type propsType = {
    videoDetail: FavoriteVideoDetailDataType,
}

export function useFavoriteDetailSetting(props: propsType) {

    // 動画詳細情報
    const videDetail = props.videoDetail;
    // 動画カテゴリ
    const videoCategory = useGlobalAtomValue(videoCategoryAtom);
    // 編集モード
    const [editMode, setEditMode] = useState(EDIT_MODE.VIEW);
    // 要約
    const [summary, setSummary] = useState(videDetail.detail.summary);
    // カテゴリ
    const [categorys, setCategorys] = useState(videDetail.categorys);
    // 視聴状況
    const [viewStatus, setViewStatus] = useState(videDetail.detail.viewStatus);

    // カテゴリリスト
    const categoryList = useMemo(() => {

        if (!videoCategory) {
            return;
        }

        const items = videoCategory.items.map((e) => {
            const label = e.snippet.title;
            const value = e.id;

            return {
                label: label,
                value: value,
            }
        });

        return items;

    }, [videoCategory]);


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
        categoryList,
        editMode,
        changeEdit,
        changeView,
        summary,
        setSummary,
        categorys,
        setCategorys,
        viewStatus,
        setViewStatus,
    };
}