import { useSetAtom } from "jotai";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import ENV from "../../env.json";
import { videoCategoryAtom } from "../Atom/MainAtom";
import { VideoCategoryResponseType } from "../Type/VideoCategoryResponseType";
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { VideoCategoryItemType } from "../Type/VideoCategoryItemType";
import { useSetGlobalAtom } from "../../Common/Hook/useGlobalAtom";
import { SetIsLoginContext, SetLoginUserInfoContext } from "../../QueryApp";
import { toast } from "react-toastify";
import { LoginUserInfoType } from "../../Common/Type/LoginUserInfoType";
import { useState } from "react";


export function useMain() {

    // 動画カテゴリ
    const setVideoCategory = useSetGlobalAtom(videoCategoryAtom);

    // 動画カテゴリを取得
    useQueryWrapper<VideoCategoryResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.VIDEO_CATEGORY}`,
            afSuccessFn: (response: VideoCategoryResponseType) => {

                // カテゴリの先頭に「すべて」の選択肢を追加
                const selectAllItem: VideoCategoryItemType = {
                    kind: "",
                    etag: "",
                    id: "",
                    snippet: {
                        title: "すべて",
                        assignable: false
                    }
                };

                response.data.items.unshift(selectAllItem);

                setVideoCategory(response.data);
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