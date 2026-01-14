import { useState } from "react";
import { tagType } from "../../../../../components/TagsComponent";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { useVideoId } from "../useVideoId";
import { useFavoriteTagEndpoint } from "./useFavoriteTagEndpoint";


export function useFavoriteVideoTagEditListProvider() {

    // タグ編集リスト
    const [favoriteVideoTagEditList, setFavoriteVideoTagEditList] = useState<tagType[]>([]);
    // 動画ID
    const videoId = useVideoId();

    // 設定されたタグリストを取得
    useQueryWrapper<FavoriteVideoTagResponseType>(
        {
            url: useFavoriteTagEndpoint(videoId),
            afSuccessFn: (res: FavoriteVideoTagResponseType) => {

                const settingTagList = res.data

                // タグ編集リストに設定
                setFavoriteVideoTagEditList(settingTagList.map((e) => {
                    return {
                        label: e.tagName,
                        value: e.tagId,
                        tagColor: e.tagColor,
                    }
                }));
            },
            afErrorFn: () => { }
        }
    );

    return {
        favoriteVideoTagEditList,
        setFavoriteVideoTagEditList,
    }
}