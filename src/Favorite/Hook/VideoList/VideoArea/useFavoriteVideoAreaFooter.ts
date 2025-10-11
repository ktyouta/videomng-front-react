import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { useReplaceQuery } from "../../../../Common/Hook/useReplaceQuery";
import { FavoriteVideoListMergedType } from "../../../Type/VideoList/FavoriteVideoListMergedType";
import { FavoriteVideoListResponseDataType } from "../../../Type/VideoList/FavoriteVideoListResponseDataType";
import { FavoriteVideoListResponseType } from "../../../Type/VideoList/FavoriteVideoListResponseType";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";
import { useFavoriteVideoListEndpoint } from "./useFavoriteVideoListEndpoint";

export function useFavoriteVideoAreaFooter() {

    // クエリ作成用
    const { create } = useCreateFavoriteVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // 検索条件
    const { selectedFavoriteVideoPage,
        setSelectedFavoriteVideoPage } = useFavoriteVideoSearchConditionValue();

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
        console.log(`page:${page}`);
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
        selectPage: parseInt(selectedFavoriteVideoPage),
    }
}