import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { useReplaceQuery } from "../../../../Common/Hook/useReplaceQuery";
import { FavoriteVideoListMergedType } from "../../../Type/VideoList/FavoriteVideoListMergedType";
import { FavoriteVideoListResponseDataType } from "../../../Type/VideoList/FavoriteVideoListResponseDataType";
import { FavoriteVideoListResponseType } from "../../../Type/VideoList/FavoriteVideoListResponseType";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";

export function useFavoriteVideoAreaFooter() {

    // クエリ作成用
    const { create } = useCreateFavoriteVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();

    // 動画一覧
    const { data } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListResponseDataType>(
        {
            url: useFavoriteVideoListEndpoint(),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            options: {
                enabled: false
            }
        }
    );

    /**
     * ページリンク選択
     */
    function changePage(page: number) {

        const newQuery = create({
            page: page.toString()
        });

        // クエリパラメータを更新
        replace(newQuery);
    }

    return {
        changePage
    }
}