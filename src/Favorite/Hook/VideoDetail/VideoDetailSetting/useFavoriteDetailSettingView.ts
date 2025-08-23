import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo, useState } from "react";
import { EDIT_MODE } from "../../../Const/FavoriteConst";
import { FavoriteVideoDetailDataType } from "../../../Type/VideoDetail/FavoriteVideoDetailDataType";
import { comboType } from "../../../../Common/Component/ComboComponent";
import { FavoriteVideoDetailCategoryType } from "../../../Type/VideoDetail/VideoDetailSetting/FavoriteVideoDetailCategoryType";
import useMutationWrapper from "../../../../Common/Hook/useMutationWrapper";
import { UpdateFavoriteVideoResponseDataType } from "../../../Type/VideoDetail/VideoDetailSetting/UpdateFavoriteVideoResponseDataType";
import { errResType, resType } from "../../../../Common/Hook/useMutationWrapperBase";
import ENV from "../../../../env.json";
import { UpdateToFavoriteVideoReqestType } from "../../../Type/VideoDetail/VideoDetailSetting/UpdateToFavoriteVideoReqestType";
import { ViewStatusListContext } from "../../../Component/Favorite";


export function useFavoriteDetailSettingView() {

    // 視聴状況リスト
    const viewStatusList = ViewStatusListContext.useCtx();

    return {
        viewStatusList
    };
}