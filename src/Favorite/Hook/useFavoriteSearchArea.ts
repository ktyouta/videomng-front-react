import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../Common/Hook/useSwitch";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { FavoriteVideoSortListResponseType } from "../Type/FavoriteVideoSortListResponseType";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { useState } from "react";
import { FavoriteVideoSortType } from "../Type/FavoriteVideoSortType";
import { comboType } from "../../Common/Component/ComboComponent";
import { FavoriteVideoListApiUrlModel } from "../Model/FavoriteVideoListApiUrlModel";
import { useNavigate } from "react-router-dom";
import { useFavoriteListApiUrl } from "./useFavoriteListApiUrl";


export function useFavoriteSearchArea() {

    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();
    // ソートリスト
    const [sortList, setSortList] = useState<comboType[]>([]);
    // お気に入り動画一覧取得用フック
    const {
        changeUrl,
        selectedFavoriteVideoTag,
        selectedFavoriteVideoSortKey, } = useFavoriteListApiUrl();


    // ソートリストを取得
    const { isLoading, isFetching } = useQueryWrapper<FavoriteVideoSortListResponseType>(
        {
            url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_SORT}`,
            afSuccessFn: (response: FavoriteVideoSortListResponseType) => {
                setSortList(response.data.map((e: FavoriteVideoSortType) => {
                    return {
                        label: e.label,
                        value: e.id,
                    }
                }));
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
            }
        }
    );

    /**
     * ソートリスト選択
     * @param value 
     */
    function selectSort(value: string) {

        changeUrl({
            sortKey: value,
        });
    }

    return {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        selectedFavoriteVideoTag,
        isLoading,
        isFetching,
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey,
    }
}