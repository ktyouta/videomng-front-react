import useSwitch from "../../../../Common/Hook/useSwitch";
import { useNavigate } from "react-router-dom";
import { useFrequentKeywords } from "../VideoArea/useFrequentKeywords";
import { useRecentKeyword } from "../VideoArea/useRecentKeyword";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "../useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../../useHomeVideoNowSearchConditionValue";
import { toast } from "react-toastify";


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
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 現在の検索条件
    const { setNowSearchCondition } = useHomeVideoNowSearchConditionValue();

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

    /**
     * エンターキー押下時イベント
     */
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            clickSearchBtn();
        }
    };

    return {
        clickSearchBtn,
        clearInput,
        isMobile,
        handleKeyPress,
        inputKeyword,
        setInputKeyword,
    }
}