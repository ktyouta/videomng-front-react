import { useState } from "react";
import { tagType } from "../../../../../components/TagsComponent";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { errResType } from "../../../../../hooks/useMutationWrapperBase";
import { useVideoId } from "../useVideoId";


export function useFavoriteVideoTagEditListProvider() {

    // タグ編集リスト
    const [favoriteVideoTagEditList, setFavoriteVideoTagEditList] = useState<tagType[]>([]);
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();

    // 設定されたタグリストを取得
    const { isLoading } = useQueryWrapper<FavoriteVideoTagResponseType>(
        {
            url: useFavoriteTagEndpoint(videoId),
            afSuccessFn: (res: FavoriteVideoTagResponseType) => {

                const settingTagList = res.data

                // タグ編集リストに設定
                setFavoriteVideoTagEditList(settingTagList.map((e) => {
                    return {
                        label: e.tagName,
                        value: e.tagId,
                    }
                }));
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`タグの取得に失敗しました`);
            }
        }
    );

    return {
        favoriteVideoTagEditList,
        setFavoriteVideoTagEditList,
    }
}