import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../Common/Hook/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../Type/FavoriteVideoListResponseType";
import { favoriteVideoListAtom, selectedFavoriteVideoCategoryAtom, selectedFavoriteVideoTagAtom, selectedFavoriteVideoviewStatusAtom } from "../Atom/FavoriteAtom";
import { errResType } from "../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import ENV from "../../env.json"
import { useEffect, useState } from "react";
import { FavoriteVideoListApiUrlModel } from "../Model/FavoriteVideoListApiUrlModel";
import { useFavoriteListApiUrl } from "./useFavoriteListApiUrl";


export function useFavoriteVideoArea() {

    // 動画リスト
    const [videoListItem, setVideoListItemAtom] = useAtom(favoriteVideoListAtom);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画リスト取得URL
    const { favoriteVideoUrl } = useFavoriteListApiUrl();
    // 動画一覧API呼び出し済みフラグ
    const [isCalledListApi, setIsCalledListApi] = useState(false);
    // お気に入り動画一覧取得用フック
    const { changeUrl } = useFavoriteListApiUrl();


    // URL直打ち対応
    useEffect(() => {

        const query = window.location.search;

        let videoCategory = ``;
        let viewStatus = ``;
        let videoTag = ``;
        let sortKey = ``;
        let favoriteLevel = ``;

        // クエリパラメータが設定されている場合
        if (query && query.length > 0 && query.charAt(0) === `?`) {

            const params = new URLSearchParams(query);
            const videoCategoryValue = params.get(`videocategory`);
            const viewStatusValue = params.get(`viewstatus`);
            const videoTagValue = params.get(`videotag`);
            const sortKeyValue = params.get(`sortkey`);
            const favoriteLevelValue = params.get(`favoritelevel`);

            videoCategory = videoCategoryValue !== null ? videoCategoryValue : ``;
            viewStatus = viewStatusValue !== null ? viewStatusValue : ``;
            videoTag = videoTagValue !== null ? videoTagValue : ``;
            sortKey = sortKeyValue !== null ? sortKeyValue : ``;
            favoriteLevel = favoriteLevelValue !== null ? favoriteLevelValue : ``;
        }

        changeUrl({
            viewStatus,
            videoCategory,
            videoTag,
            sortKey,
            favoriteLevel,
        });
    }, []);

    // 動画一覧を取得
    const { isLoading, isFetching } = useQueryWrapper<FavoriteVideoListResponseType>(
        {
            url: favoriteVideoUrl,
            afSuccessFn: (response: FavoriteVideoListResponseType) => {
                setIsCalledListApi(true);
                setVideoListItemAtom(response.data);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setIsCalledListApi(true);
                setErrMessage(`動画情報の取得に失敗しました`);
            }
        }
    );

    return {
        videoListItem,
        isLoading,
        errMessage,
        isFetching,
        isCalledListApi,
    }
}