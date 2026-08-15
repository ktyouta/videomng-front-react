import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../../../app/components/QueryApp";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";
import { errResType } from "../../../../../../hooks/useMutationWrapperBase";
import { useReplaceQuery } from "../../../../../../hooks/useReplaceQuery";
import { api } from "../../../../../../lib/apiClient";
import { getFrequentSearchKeyWord } from "../../../../api/getFrequentSearchKeyWord";
import { videoKeys } from "../../../../api/queryKey";
import { FREQUENT_KEYWORD } from "../../../../const/HomeConst";
import { FrequentWordType } from "../../../../types/videolist/FrequentWordType";
import { SearchWordType } from "../../../../types/videolist/SearchWordType";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";
import { useHomeVideoSearchConditionValue } from "../../useHomeVideoSearchConditionValue";
import { useFrequentKeywords } from "./useFrequentKeywords";
import { useRecentKeyword } from "./useRecentKeyword";

export function useHomeFrequentKeywords() {

    // よく検索するワードリスト
    const [frequentWordList, setFrequentWordList] = useState<SearchWordType[]>([]);
    // 最近の検索ワード保存用
    const { saveRecentKeyword } = useRecentKeyword();
    // あなたがよく検索するワード保存用
    const { saveFrequentKeyword } = useFrequentKeywords();
    // 動画検索条件
    const { setInputKeyword,
        selectedVideoCategory,
        selectedVideoType } = useHomeVideoSearchConditionValue();
    // 現在の検索条件
    const { nowSearchCondition, setNowSearchCondition } = useHomeVideoNowSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateHomeVideoListQuery({ nowSearchCondition });
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // 検索実績再取得用
    const queryClient = useQueryClient();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // よく検索するワード(API取得)
    const { data } = getFrequentSearchKeyWord({
        enabled: isLogin,
        select: (data) => {
            return data.data;
        }
    });

    /**
     * 検索実績削除
     */
    const deleteKeyWordMutation = useMutation({
        mutationFn: async (id: number) => {
            await api.delete(`${VIDEO_MNG_PATH}${ENV.FREQUENT_SEARCH_WORD}/${id}`);
        },
        onSettled: () => {
            // よく検索するワードを再取得
            queryClient.invalidateQueries(videoKeys.searchFrequentKeyWordLists());
        },
        onError: (res: errResType) => {
            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        }
    });

    useEffect(() => {
        if (isLogin) {
            return;
        }

        // キーワードリストを取得
        const wordList = JSON.parse(localStorage.getItem(FREQUENT_KEYWORD) || "[]") as FrequentWordType[];
        // 検索回数でソート
        const sortedWordList = wordList.sort((a, b) => {
            return b.count - a.count;
        });
        setFrequentWordList(sortedWordList.map((e) => {
            return { id: 0, word: e.keyword };
        }));
    }, [isLogin]);

    /**
     * キーワードクリックイベント
     */
    function clickKeyWord(keyword: string,) {

        setInputKeyword(keyword);

        // 現在の検索条件を更新
        setNowSearchCondition((e) => {

            const newCondition = {
                ...e,
                keyword,
                type: selectedVideoType,
                catetory: selectedVideoCategory,
            }

            return newCondition;
        });

        const newQuery = create({
            q: keyword,
            videoCategory: selectedVideoCategory,
            videoType: selectedVideoType
        });

        // クエリパラメータを更新
        replace(newQuery);

        // ローカルストレージの検索ワード(最近の検索)を保存
        saveRecentKeyword(keyword);

        // ローカルストレージの検索ワード(あなたがよく検索するワード)を保存
        saveFrequentKeyword(keyword);
    }

    /**
     * キーワード削除イベント
     */
    function deleteKeyWord(keyword: SearchWordType) {

        // ログイン中は削除APIをコール
        if (isLogin) {
            deleteKeyWordMutation.mutate(keyword.id);
            return;
        }

        const word = keyword.word;
        // ローカルストレージから検索ワードを取得
        const nowWordList = JSON.parse(localStorage.getItem(FREQUENT_KEYWORD) || "[]") as FrequentWordType[];

        // ローカルストレージに検索ワードを保存
        const newWordList = [...nowWordList.filter((e: FrequentWordType) => e.keyword !== word.trim())];
        localStorage.setItem(FREQUENT_KEYWORD, JSON.stringify(newWordList));

        setFrequentWordList(newWordList.map((e) => {
            return { id: 0, word: e.keyword };
        }));
    }

    return {
        frequentWordList: isLogin ? data : frequentWordList,
        clickKeyWord,
        deleteKeyWord,
    }
}