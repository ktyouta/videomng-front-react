import { useMemo } from "react";
import { MultiValue } from "react-select";
import { Option } from "../../../../../../components/MultiSelectbox";
import { useReplaceQuery } from "../../../../../../hooks/useReplaceQuery";
import { useVideoCategory } from "../../../../../main/hooks/useVideoCategory";
import { FAVORITE_LEVEL_SETTING_LIST } from "../../../../const/FavoriteConst";
import { INIT_PAGE } from "../../../useFavoriteVideoSearchConditionValue";
import { useViewStatusList } from "../../../useViewStatusList";
import { useTagMasterList } from "../../../videolist/useTagMasterList";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../../useCreateFavoriteVideoFolderVideoListQuery";
import { useFavoriteVideoFolderSearchConditionValue } from "../../useFavoriteVideoFolderSearchConditionValue";


type propsType = {
    close: () => void;
}

export function useFavoriteVideoFolderSearchConditionMain(props: propsType) {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 視聴状況リストを取得
    const { data: viewStatusList } = useViewStatusList();
    // 検索条件
    const searchConditionObj = useFavoriteVideoFolderSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoFolderVideoListQuery(searchConditionObj);
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // タグマスタリストを取得
    const { data: tagMasterList } = useTagMasterList({
        isGetChache: false
    });

    // お気に入り度リスト
    const favoriteLevelList = useMemo(() => {

        const favoriteLevelList: Option[] = [...Array(FAVORITE_LEVEL_SETTING_LIST + 1)].map((_, index) => {

            const label = index === 0 ? `未設定` : index.toString();

            return {
                label,
                value: index.toString(),
            }
        });

        return favoriteLevelList;
    }, []);

    /**
     * カテゴリ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoCategory(selectedCategorys: MultiValue<Option>,) {

        const selectedValues = selectedCategorys.map((e) => e.value).join(`,`);

        if (!searchConditionObj.selectedFavoriteVideoCategory && !selectedValues) {
            return;
        }

        if (searchConditionObj.selectedFavoriteVideoCategory === selectedValues) {
            return;
        }

        const newQuery = create({
            folderVideoCategory: selectedValues,
            folderPage: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        searchConditionObj.setSelectedFavoriteVideoCategory(selectedValues);
        searchConditionObj.resetPage();

        props.close();
    }

    /**
     * 視聴状況選択イベント
     * @param selectedcCategory 
     */
    function changeViewStatus(selectedStatuses: MultiValue<Option>,) {

        const selectedValues = selectedStatuses.map((e) => e.value).join(`,`);

        if (!searchConditionObj.selectedFavoriteVideoViewStatus && !selectedValues) {
            return;
        }

        if (searchConditionObj.selectedFavoriteVideoViewStatus === selectedValues) {
            return;
        }

        const newQuery = create({
            folderViewStatus: selectedValues,
            folderPage: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        searchConditionObj.setSelectedFavoriteVideoViewStatus(selectedValues);
        searchConditionObj.resetPage();

        props.close();
    }

    /**
     * タグ選択イベント
     * @param selectedcCategory 
     */
    function changeVideoTag(selectedVideoTag: MultiValue<Option>,) {

        const selectedTagValues = selectedVideoTag.map((e) => e.value).join(`,`);

        if (!searchConditionObj.selectedFavoriteVideoTag && !selectedTagValues) {
            return;
        }

        if (searchConditionObj.selectedFavoriteVideoTag === selectedTagValues) {
            return;
        }

        const newQuery = create({
            folderVideoTag: selectedTagValues,
            folderPage: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        searchConditionObj.setSelectedFavoriteVideoTag(selectedTagValues);
        searchConditionObj.resetPage();
        props.close();
    }

    /**
     * お気に入り度選択イベント
     * @param selectedcCategory 
     */
    function changeFavoriteLevel(selectedFavoriteLevel: MultiValue<Option>,) {

        const selectedValues = selectedFavoriteLevel.map((e) => e.value).join(`,`);

        if (!searchConditionObj.selectedFavoriteVideoFavoriteLevel && !selectedValues) {
            return;
        }

        if (searchConditionObj.selectedFavoriteVideoFavoriteLevel === selectedValues) {
            return;
        }

        const newQuery = create({
            folderFavoriteLevel: selectedValues,
            folderPage: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        searchConditionObj.setSelectedFavoriteVideoFavoriteLevel(selectedValues);
        searchConditionObj.resetPage();
        props.close();
    }

    /**
     * フィルターのクリアイベント
     */
    function clearFilter() {

        // クエリパラメータをクリア
        replace(``);

        searchConditionObj.reset();
        props.close();
    }

    return {
        videoCategory,
        selectedFavoriteVideoCategory: searchConditionObj.selectedFavoriteVideoCategory,
        viewStatusList,
        selectedFavoriteVideoViewStatus: searchConditionObj.selectedFavoriteVideoViewStatus,
        changeVideoCategory,
        changeViewStatus,
        selectedFavoriteVideoTag: searchConditionObj.selectedFavoriteVideoTag,
        tagMasterList,
        changeVideoTag,
        favoriteLevelList,
        selectedFavoriteVideoFavoriteLevel: searchConditionObj.selectedFavoriteVideoFavoriteLevel,
        changeFavoriteLevel,
        clearFilter,
    };
}