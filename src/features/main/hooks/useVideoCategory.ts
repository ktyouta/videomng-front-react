import { useSetAtom } from "jotai";
import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import useQueryWrapper from "../../../hooks/useQueryWrapper";
import ENV from "../../../env.json";
import { VideoCategoryResponseType } from "../types/VideoCategoryResponseType";
import { errResType, resType } from "../../../hooks/useMutationWrapperBase";
import { VideoCategoryItemType } from "../types/VideoCategoryItemType";
import { useSetGlobalAtom } from "../../../hooks/useGlobalAtom";
import { SetIsLoginContext, SetLoginUserInfoContext } from "../../../QueryApp";
import { toast } from "react-toastify";
import { LoginUserInfoType } from "../../../types/LoginUserInfoType";
import { useState } from "react";
import { VideoCategoryDataType } from "../types/VideoCategoryDataType";
import { comboType } from "../../../components/ComboComponent";


export function useVideoCategory() {

    // 動画カテゴリを取得
    return useQueryWrapper<VideoCategoryResponseType, comboType[]>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.VIDEO_CATEGORY}`,
            select: (res: VideoCategoryResponseType) => {

                const category = res.data.items;

                const items = category.map((e) => {
                    const label = e.snippet.title;
                    const value = e.id;

                    return {
                        label: label,
                        value: value,
                    }
                });

                return [
                    {
                        label: `すべて`,
                        value: ``,
                    },
                    ...items
                ]
            },
            afErrorFn: (res) => {
            },
            options: {
                // 初回に読み込んだカテゴリを使いまわす
                staleTime: Infinity
            }
        }
    );

}