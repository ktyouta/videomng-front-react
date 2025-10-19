import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { useViewStatusList } from "../../useViewStatusList";
import { useVideoId } from "../useVideoId";
import { errResType } from "../../../../Common/Hook/useMutationWrapperBase";
import { FavoriteVideoCustomResponseType } from "../../../Type/VideoDetail/VideoDetailSetting/FavoriteVideoCustomResponseType";
import { FavoriteVideoCustomDataType } from "../../../Type/VideoDetail/VideoDetailSetting/FavoriteVideoCustomDataType";
import { useFavoriteDetailSettingEndpoint } from "./useFavoriteDetailSettingEndpoint";
import { useVideoCategory } from "../../../../Main/Hook/useVideoCategory";


export function useFavoriteDetailSettingView() {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 視聴状況リストを取得
    const { data: viewStatusList } = useViewStatusList({ isExcludeAll: true });
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();

    // カスタム情報を取得
    const { data, isLoading } = useQueryWrapper<FavoriteVideoCustomResponseType, FavoriteVideoCustomDataType>(
        {
            url: useFavoriteDetailSettingEndpoint(videoId),
            select: (res: FavoriteVideoCustomResponseType) => {
                return res.data;
            },
            afErrorFn: (res) => {
                setErrMessage(`カスタム情報の取得に失敗しました`);
            }
        }
    );

    return {
        viewStatusList,
        data,
        isLoading,
        errMessage,
        videoCategory,
    };
}