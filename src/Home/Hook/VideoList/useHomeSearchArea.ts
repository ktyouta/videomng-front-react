import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom, showMoreDataAtom } from "../../Atom/HomeAtom";
import { VideoListApiUrlModel } from "../../Model/VideoListApiUrlModel";
import { comboType } from "../../../Common/Component/ComboComponent";
import { Label } from "recharts";
import { ShowMoreDataType } from "../../Type/VideoList/ShowMoreDataType";
import { isEqual } from "lodash";
import useSwitch from "../../../Common/Hook/useSwitch";
import { useNavigate } from "react-router-dom";
import { SetVideoApiUrlContext } from "../../Component/Home";
import { toast } from "react-toastify";
import { FREQUENT_KEYWORD, FREQUENT_KEYWORD_MAX, FREQUENT_KEYWORD_MAX_SAVE_LIMIT, REACENT_KEYWORD, REACENT_KEYWORD_MAX } from "../../Const/HomeConst";
import { FrequentWordType } from "../../Type/VideoList/FrequentWordType";
import { useFrequentKeywords } from "./useFrequentKeywords";
import { useRecentKeyword } from "./useRecentKeyword";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";


export function useHomeSearchArea() {

    // 検索キーワード
    const [keyword, setKeyword] = useAtom(keywordAtom);
    // 動画取得用URL
    const setVideoApiUrl = SetVideoApiUrlContext.useCtx();
    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();
    // 動画一覧検索条件選択値(種別)
    const selectedVideoType = useAtomValue(selectedVideoTypeAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const selectedVideoCategory = useAtomValue(selectedVideoCategoryAtom);
    //ルーティング用
    const navigate = useNavigate();
    // 動画リスト追加読み込み用
    const setShowMoreData = useSetAtom(showMoreDataAtom);
    // 最近の検索ワード保存用
    const { saveRecentKeyword } = useRecentKeyword();
    // あなたがよく検索するワード保存用
    const { saveFrequentKeyword } = useFrequentKeywords();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 動画検索条件
    const {
        selectedVideoKeyword,
        setSelectedVideoKeyword } = useHomeVideoSearchConditionValue();

    /**
     * 検索ボタン押下イベント
     */
    function clickSearchBtn() {

        if (!selectedVideoKeyword) {
            toast.warn(`キーワードを入力してください。`);
            return;
        }

        const videoListApiUrlModel = VideoListApiUrlModel.create({
            keyword: selectedVideoKeyword,
            videoType: selectedVideoType,
            videoCategory: selectedVideoCategory,
        });

        setVideoApiUrl(videoListApiUrlModel.url);
        setShowMoreData(undefined);
        navigate(videoListApiUrlModel.query);

        // ローカルストレージの検索ワード(最近の検索)を保存
        saveRecentKeyword(selectedVideoKeyword);

        // ローカルストレージの検索ワード(あなたがよく検索するワード)を保存
        saveFrequentKeyword(selectedVideoKeyword);
    }

    /**
     * キーワードをクリアする
     */
    function clearInput() {
        setSelectedVideoKeyword(``);
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
        //keyword,
        //setKeyword,
        clickSearchBtn,
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        clearInput,
        isMobile,
        handleKeyPress,
        selectedVideoKeyword,
        setSelectedVideoKeyword
    }
}