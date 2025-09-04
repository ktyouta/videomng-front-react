import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ViewStatusResponseType } from "../Type/VideoList/ViewStatusResponseType";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { useState } from "react";
import { comboType } from "../../Common/Component/ComboComponent";
import { VideoListApiUrlModel } from "../../Home/Model/VideoListApiUrlModel";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { useFavoriteVideoSearchConditionValue } from "./VideoList/useFavoriteVideoSearchConditionValue";
import { useSyncFavoriteVideoListUrl } from "./VideoList/useSyncFavoriteVideoListUrl";


export function useFavoriteMain() {

    // 視聴状況リスト
    const [viewStatusList, setViewStatusList] = useState<comboType[]>([]);
    // お気に入り動画ID
    const [favoriteVideoId, setFavoriteVideoId] = useState(``);

    // 視聴状況リストを取得
    useQueryWrapper<ViewStatusResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.VIEW_STATUS}`,
            afSuccessFn: (response: ViewStatusResponseType) => {
                setViewStatusList(response.data.map((e) => {
                    return {
                        value: e.id,
                        label: e.label,
                    }
                }));
            },
            afErrorFn: (res) => {
            }
        }
    );

    return {
        favoriteVideoId,
        setFavoriteVideoId,
        viewStatusList,
    }
}