import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { getFolderVideo } from "../../../api/getFolderVideo";
import { FavoriteVideoListResponseType } from "../../../types/videolist/FavoriteVideoListResponseType";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";
import { useFavoriteVideoFolderSearchConditionValue } from "../useFavoriteVideoFolderSearchConditionValue";
import { useFolderId } from "../useFolderId";

export function useFavoriteVideoFolderAreaFooter() {

    // 検索条件
    const searchConditionObj = useFavoriteVideoFolderSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoFolderVideoListQuery(searchConditionObj);
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // フォルダID
    const folderId = useFolderId();
    // 動画一覧
    const { data } = getFolderVideo({
        folderId,
        searchConditionObj,
        select: (res: FavoriteVideoListResponseType) => {
            return res.data;
        },
        enabled: false
    });
    // 選択中のページ
    const selectPage = parseInt(searchConditionObj.selectedFavoriteVideoPage);

    /**
     * ページリンク選択
     */
    function changePage(page: number) {

        const newQuery = create({
            folderPage: page.toString()
        });

        // クエリパラメータを更新
        replace(newQuery);

        searchConditionObj.setSelectedFavoriteVideoPage(page.toString());
    }

    return {
        changePage,
        totalPage: data?.page ?? 0,
        selectPage: Number.isNaN(selectPage) ? 1 : selectPage,
    }
}