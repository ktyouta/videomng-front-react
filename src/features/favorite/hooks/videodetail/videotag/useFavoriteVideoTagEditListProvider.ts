import { useState } from "react";
import { tagType } from "../../../../../components/TagsComponent";
import { getFavoriteVideoTag } from "../../../api/getFavoriteVideoTag";
import { FavoriteVideoTagResponseType } from "../../../types/videodetail/videotag/FavoriteVideoTagResponseType";
import { FavoriteVideoTagType } from "../../../types/videodetail/videotag/FavoriteVideoTagType";
import { useVideoId } from "../useVideoId";


export function useFavoriteVideoTagEditListProvider() {

    // タグ編集リスト
    const [favoriteVideoTagEditList, setFavoriteVideoTagEditList] = useState<tagType[]>([]);
    // 動画ID
    const videoId = useVideoId();

    // 設定されたタグリストを取得
    getFavoriteVideoTag({
        videoId,
        select: (res: FavoriteVideoTagResponseType) => {
            return res.data ?? [];
        },
        onSuccess: (res: FavoriteVideoTagType[]) => {

            // タグ編集リストに設定
            setFavoriteVideoTagEditList(res.map((e) => {
                return {
                    label: e.tagName,
                    value: e.tagId,
                    tagColor: e.tagColor,
                }
            }));
        },
    });

    return {
        favoriteVideoTagEditList,
        setFavoriteVideoTagEditList,
    }
}