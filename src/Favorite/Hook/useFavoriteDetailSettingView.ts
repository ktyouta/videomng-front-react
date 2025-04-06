import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { videoCategoryAtom } from "../../Main/Atom/MainAtom";
import { useMemo, useState } from "react";
import { EDIT_MODE } from "../Const/FavoriteConst";
import { FavoriteVideoDetailDataType } from "../Type/FavoriteVideoDetailDataType";
import { comboType } from "../../Common/Component/ComboComponent";
import { FavoriteVideoDetailCategoryType } from "../Type/FavoriteVideoDetailCategoryType";
import { viewStatusListAtom } from "../Atom/FavoriteAtom";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import { UpdateFavoriteVideoResponseDataType } from "../Type/UpdateFavoriteVideoResponseDataType";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import ENV from "../../env.json";
import { UpdateToFavoriteVideoReqestType } from "../Type/UpdateToFavoriteVideoReqestType";


export function useFavoriteDetailSettingView() {

    // 視聴状況リスト
    const viewStatusList = useAtomValue(viewStatusListAtom);

    return {
        viewStatusList
    };
}