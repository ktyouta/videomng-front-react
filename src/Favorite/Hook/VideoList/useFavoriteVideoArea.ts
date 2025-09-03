import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { FavoriteVideoListResponseType } from "../../Type/VideoList/FavoriteVideoListResponseType";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json"
import { useEffect, useState } from "react";
import { FavoriteVideoListApiUrlModel } from "../../Model/FavoriteVideoListApiUrlModel";
import { FavoriteVideoListMergedType } from "../../Type/VideoList/FavoriteVideoListMergedType";
import { useCreateFavoriteVideoListQuery } from "./useCreateFavoriteVideoListQuery";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";


export function useFavoriteVideoArea() {

    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画リスト取得URL
    //const { favoriteVideoUrl } = useFavoriteListApiUrl();
    //const { endpoint } = useCreateFavoriteVideoListQuery();
    // 動画一覧API呼び出し済みフラグ
    const [isCalledListApi, setIsCalledListApi] = useState(false);
    // お気に入り動画一覧取得用フック
    //const { changeUrl } = useFavoriteListApiUrl();
    const {
        setSelectedFavoriteVideoCategory,
        setSelectedFavoriteVideoViewStatus,
        setSelectedFavoriteVideoTag,
        setSelectedFavoriteVideoFavoriteLevel,
        setSelectedFavoriteVideoSortKey, } = useFavoriteVideoSearchConditionValue();

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

        setSelectedFavoriteVideoCategory(videoCategory);
        setSelectedFavoriteVideoViewStatus(viewStatus);
        setSelectedFavoriteVideoTag(videoTag);
        setSelectedFavoriteVideoSortKey(sortKey);
        setSelectedFavoriteVideoFavoriteLevel(favoriteLevel);
        // changeUrl({
        //     viewStatus,
        //     videoCategory,
        //     videoTag,
        //     sortKey,
        //     favoriteLevel,
        // });
    }, []);

    // 動画一覧を取得
    const { data: videoListItem, isLoading } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListMergedType[]>(
        {
            url: useFavoriteVideoListEndpoint(),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            afSuccessFn: () => {
                setIsCalledListApi(true);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setIsCalledListApi(true);
                setErrMessage(`お気に入り動画の取得に失敗しました`);
            }
        }
    );

    return {
        videoListItem,
        isLoading,
        errMessage,
        isCalledListApi,
    }
}