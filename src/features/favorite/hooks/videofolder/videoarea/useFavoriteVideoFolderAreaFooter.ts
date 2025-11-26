import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { FavoriteVideoListResponseDataType } from "../../../types/videolist/FavoriteVideoListResponseDataType";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";
import { useFavoriteVideoFolderSearchConditionValue } from "../useFavoriteVideoFolderSearchConditionValue";
import { useFolderId } from "../useFolderId";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";

export function useFavoriteVideoFolderAreaFooter() {

    // クエリ作成用
    const { create } = useCreateFavoriteVideoFolderVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // フォルダID
    const folderId = useFolderId();
    // 検索条件
    const { selectedFavoriteVideoPage,
        setSelectedFavoriteVideoPage } = useFavoriteVideoFolderSearchConditionValue();
    // 動画一覧
    const { data } = useQueryWrapper<FavoriteVideoListResponseType, FavoriteVideoListResponseDataType>(
        {
            url: useFavoriteVideoListEndpoint(folderId),
            select: (res: FavoriteVideoListResponseType) => {
                return res.data;
            },
            options: {
                enabled: false
            }
        }
    );
    // 選択中のページ
    const selectPage = parseInt(selectedFavoriteVideoPage);

    /**
     * ページリンク選択
     */
    function changePage(page: number) {

        const newQuery = create({
            page: page.toString()
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoPage(page.toString());
    }

    return {
        changePage,
        totalPage: data?.page ?? 0,
        selectPage: Number.isNaN(selectPage) ? 1 : selectPage,
    }
}