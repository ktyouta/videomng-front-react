import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useVideoCategory } from "../../../../main/hooks/useVideoCategory";
import { getFavoriteVideoCustom } from "../../../api/getFavoriteVideoCustom";
import { FavoriteVideoCustomResponseType } from "../../../types/videodetail/videodetailsetting/FavoriteVideoCustomResponseType";
import { useViewStatusList } from "../../useViewStatusList";
import { useVideoId } from "../useVideoId";


export function useFavoriteDetailSettingView() {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 視聴状況リストを取得
    const { data: viewStatusList } = useViewStatusList();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    // カスタム情報を取得
    const { data, isLoading } = getFavoriteVideoCustom({
        videoId,
        select: (res: FavoriteVideoCustomResponseType) => {
            return res.data;
        },
        onError: (res) => {
            setErrMessage(`動画情報の取得に失敗しました。`);
        }
    });

    return {
        viewStatusList,
        data,
        isLoading,
        errMessage,
        videoCategory,
        isMobile,
    };
}