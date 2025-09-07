import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ViewStatusResponseType } from "../Type/VideoList/ViewStatusResponseType";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { useState } from "react";
import { comboType } from "../../Common/Component/ComboComponent";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { useFavoriteVideoSearchConditionValue } from "./VideoList/useFavoriteVideoSearchConditionValue";
import { useSyncFavoriteVideoListUrl } from "./VideoList/useSyncFavoriteVideoListUrl";


export function useViewStatusList() {


    // 視聴状況リストを取得
    return useQueryWrapper<ViewStatusResponseType, comboType[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.VIEW_STATUS}`,
            select: (res: ViewStatusResponseType) => {
                return res.data.map((e) => {
                    return {
                        value: e.id,
                        label: e.label,
                    }
                });
            },
            afErrorFn: (res) => {
            }
        }
    );
}