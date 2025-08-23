import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { ViewStatusResponseType } from "../Type/VideoList/ViewStatusResponseType";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { useEffect, useState } from "react";
import { comboType } from "../../Common/Component/ComboComponent";
import { VideoListApiUrlModel } from "../../Home/Model/VideoListApiUrlModel";
import { FavoriteVideoListApiUrlModel } from "../Model/FavoriteVideoListApiUrlModel";
import { useFavoriteListApiUrl } from "./VideoList/useFavoriteListApiUrl";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";


export function useFavorite() {

    // 視聴状況リスト
    const [viewStatusList, setViewStatusList] = useState<comboType[]>([]);
    // お気に入り動画ID
    const [favoriteVideoId, setFavoriteVideoId] = useState(``);
    // お気に入り動画一覧取得用フック
    const { resetCondition } = useFavoriteListApiUrl();


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

    useEffect(() => {

        // アンマウント時に検索条件をリセット
        return (() => {
            resetCondition();
        });

    }, []);

    return {
        favoriteVideoId,
        setFavoriteVideoId,
        viewStatusList,
    }
}