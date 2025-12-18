import { toast } from "react-toastify";
import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { useHomeVideoNowSearchConditionValue } from "../../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "../useCreateHomeVideoListQuery";
import { useHomeVideoSearchConditionValue } from "../useHomeVideoSearchConditionValue";
import { useFrequentKeywords } from "../videoarea/default/useFrequentKeywords";
import { useRecentKeyword } from "../videoarea/default/useRecentKeyword";


export function useHomeSearchText() {

    // 入力中の検索条件
    const {
        inputKeyword,
        setInputKeyword,
        selectedVideoCategory,
        selectedVideoType } = useHomeVideoSearchConditionValue();
    // 最近の検索ワード保存用
    const { saveRecentKeyword } = useRecentKeyword();
    // あなたがよく検索するワード保存用
    const { saveFrequentKeyword } = useFrequentKeywords();
    // 現在の検索条件
    const { setNowSearchCondition } = useHomeVideoNowSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateHomeVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();

    /**
     * 検索ボタン押下イベント
     */
    function clickSearchBtn() {

        if (!inputKeyword) {
            toast.warn(`キーワードを入力してください。`);
            return;
        }

        // 現在の検索条件を更新
        setNowSearchCondition(() => {

            return {
                keyword: inputKeyword,
                category: selectedVideoCategory,
                type: selectedVideoType,
                nextPageToken: ``,
            };
        });

        const newQuery = create({
            q: inputKeyword,
            videoCategory: selectedVideoCategory,
            videoType: selectedVideoType,
            nextPageToken: ``,
        });

        // クエリパラメータを更新
        replace(newQuery);

        // ローカルストレージの検索ワード(最近の検索)を保存
        saveRecentKeyword(inputKeyword);

        // ローカルストレージの検索ワード(あなたがよく検索するワード)を保存
        saveFrequentKeyword(inputKeyword);
    }

    /**
     * キーワードをクリアする
     */
    function clearInput() {
        setInputKeyword(``);
    }

    return {
        clickSearchBtn,
        clearInput,
        inputKeyword,
        setInputKeyword,
    }
}