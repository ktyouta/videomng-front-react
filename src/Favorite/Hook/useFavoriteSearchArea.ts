import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useSwitch from "../../Common/Hook/useSwitch";
import { favoriteVideoApiUrlAtom, selectedFavoriteVideoCategoryAtom, selectedFavoriteVideoSortKeyAtom, selectedFavoriteVideoTagAtom, selectedFavoriteVideoviewStatusAtom } from "../Atom/FavoriteAtom";
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


export function useFavoriteSearchArea() {

    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();
    // 動画一覧検索条件選択値(タグ)
    const selectedFavoriteVideoTag = useAtomValue(selectedFavoriteVideoTagAtom);
    // ソートリスト
    const [sortList, setSortList] = useState<comboType[]>([]);
    // 動画一覧検索ソートキー
    const [selectedFavoriteVideoSortKey, setSelectedFavoriteVideoSortKey] = useAtom(selectedFavoriteVideoSortKeyAtom);
    // お気に入り動画リスト取得URL
    const setFavoriteVideoUrl = useSetAtom(favoriteVideoApiUrlAtom);
    //ルーティング用
    const navigate = useNavigate();
    // 動画一覧検索条件選択値(カテゴリ)
    const selectedFavoriteVideoCategory = useAtomValue(selectedFavoriteVideoCategoryAtom);
    // 動画一覧検索条件選択値(視聴状況)
    const selectedFavoriteVideoviewStatus = useAtomValue(selectedFavoriteVideoviewStatusAtom);


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

        setSelectedFavoriteVideoSortKey(value);

        const favoriteVideoListApiUrlModel = new FavoriteVideoListApiUrlModel({
            videoTag: selectedFavoriteVideoTag,
            videoCategory: selectedFavoriteVideoCategory,
            viewStatus: selectedFavoriteVideoviewStatus,
            sortKey: value,
        });

        setFavoriteVideoUrl(favoriteVideoListApiUrlModel.url);
        navigate(favoriteVideoListApiUrlModel.query);
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