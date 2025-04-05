import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { videoCategoryAtom } from "../../Main/Atom/MainAtom";
import { useMemo, useState } from "react";
import { EDIT_MODE } from "../Const/FavoriteConst";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import { comboType } from "../../Common/Component/ComboComponent";
import { FavoriteVideoDetailCategoryType } from "../Type/FavoriteVideoDetailCategoryType";


type propsType = {
    categoryList: comboType[] | undefined,
    summary: string,
    categorys: FavoriteVideoDetailCategoryType[],
    viewStatus: string,
    changeView: () => void,
    setSummary: React.Dispatch<React.SetStateAction<string>>,
    setCategorys: React.Dispatch<React.SetStateAction<FavoriteVideoDetailCategoryType[]>>,
    setViewStatus: React.Dispatch<React.SetStateAction<string>>,
}


export function useFavoriteDetailSettingEdit(props: propsType) {

    // 要約
    const [summary, setSummary] = useState(props.summary);
    // カテゴリ
    const [categorys, setCategorys] = useState(props.categorys);
    // 視聴状況
    const [viewStatus, setViewStatus] = useState(props.viewStatus);

    return {
        summary,
        setSummary,
        categorys,
        setCategorys,
        viewStatus,
        setViewStatus,
    };
}