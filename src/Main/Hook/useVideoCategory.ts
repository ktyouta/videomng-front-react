import { useSetAtom } from "jotai";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { VideoCategoryResponseType } from "../Type/VideoCategoryResponseType";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { VideoCategoryItemType } from "../Type/VideoCategoryItemType";
import { useSetGlobalAtom } from "../../Common/Hook/useGlobalAtom";
import { SetIsLoginContext, SetLoginUserInfoContext } from "../../QueryApp";
import { toast } from "react-toastify";
import { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import { useState } from "react";
import { VideoCategoryDataType } from "../Type/VideoCategoryDataType";
import { comboType } from "../../Common/Component/ComboComponent";


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
                const errRes = res as errResType;
                if (errRes.response.data.message) {
                    toast.error(errRes.response.data.message);
                }
            }
        }
    );

}