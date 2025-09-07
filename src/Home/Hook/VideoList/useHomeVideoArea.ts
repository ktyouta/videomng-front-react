import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { VideoListResponseType } from "../../Type/VideoList/VideoListResponseType";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { VideoListDataType } from "../../Type/VideoList/VideoListDataType";
import { isEqual } from "lodash";
import { ShowMoreDataType } from "../../Type/VideoList/ShowMoreDataType";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useFavoriteKeyword } from "./useFavoriteKeyword";
import { FAVORITE_KEYWORD } from "../../Const/HomeConst";
import { useLocation } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "./useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";
import { useHomeVideoListEndpoint } from "./useHomeVideoListEndpoint";


export function useHomeVideoArea() {

    // 動画リスト
    const [videoListData, setVideoListData] = useState<VideoListDataType>();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入りワード保存用
    const { saveFavoriteKeyword } = useFavoriteKeyword();
    // お気に入りワードリスト
    const [favoriteWordList, setFavoriteWordList] = useState<string[]>([]);
    // URL情報
    const location = useLocation();
    // 前回のクエリパラメータを保持用
    const prevSearch = useRef(location.search);
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 現在の動画検索条件
    const {
        nowSearchCondition,
        setNowSearchCondition,
        reset: resetNowCondition } = useHomeVideoNowSearchConditionValue();


    // ローカルストレージからお気に入りワードリストを取得
    useEffect(() => {

        const wordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];

        setFavoriteWordList(wordList);
    }, [videoListData]);

    // 動画一覧を取得
    const { isLoading, isFetching } = useQueryWrapper<VideoListResponseType>(
        {
            url: useHomeVideoListEndpoint(),
            afSuccessFn: (response: VideoListResponseType) => {

                // 動画リスト追加読み込み情報変更チェック
                const isEqualShowMoreData = !!nowSearchCondition.nextPageToken;

                setVideoListData((e) => {

                    const videoListData = response.data;
                    // 現在画面表示されている動画リスト
                    const nowVideoItems = e?.items ?? [];
                    // 新たに取得した動画リスト
                    const newVideoItems = videoListData.items;
                    // 次に画面に表示する動画リスト
                    const latestVideoItems = isEqualShowMoreData ? [...nowVideoItems, ...newVideoItems] : newVideoItems;

                    const latestResponse: VideoListDataType = {
                        ...videoListData,
                        items: latestVideoItems
                    }

                    return latestResponse;
                });

                setErrMessage(``);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                setErrMessage(`動画情報の取得に失敗しました`);
            }
        }
    );

    /**
     * もっと見るボタン押下
     */
    function clickShowMore(nextPageToken: string) {

        // 現在の検索条件を更新する
        setNowSearchCondition((e) => {

            return {
                ...e,
                nextPageToken
            };
        });
    }

    /**
     * お気に入りワード追加
     */
    function addFavoriteWord(keyword: string) {

        saveFavoriteKeyword(keyword);

        // ローカルストレージから検索ワードを取得
        const nowWordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];
        setFavoriteWordList(nowWordList);

        toast.success(`お気に入りワードに登録しました。`);
    }

    // クエリパラメータが存在しない場合はホーム画面を初期化する
    useEffect(() => {

        if (prevSearch.current && !location.search) {

            resetNowCondition();
            setVideoListData(undefined);
        }

        prevSearch.current = location.search;
    }, [location.search]);

    return {
        videoListData,
        isLoading,
        clickShowMore,
        errMessage,
        addFavoriteWord,
        favoriteWordList,
        isMobile,
        nowSearchCondition,
        isFetching,
    }
}