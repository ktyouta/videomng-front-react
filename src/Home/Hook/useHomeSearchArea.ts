import { useAtom, useSetAtom } from "jotai";
import { keywordAtom, videoApiUrlAtom } from "../Atom/HomeAtom";
import { VideoApiUrlModel } from "../Model/VideoApiUrlModel";

export function useHomeSearchArea() {

    // 検索キーワード
    const [keyword, setKeyword] = useAtom(keywordAtom);
    // 動画取得用URL
    const setVideoApiUrl = useSetAtom(videoApiUrlAtom);

    /**
     * 検索ボタン押下イベント
     */
    function clickSearchBtn() {

        if (!keyword) {
            alert(`キーワードを入力してください。`);
            return;
        }

        const videoApiUrlModel = new VideoApiUrlModel(keyword);
        const videoApiUrl = videoApiUrlModel.videoMngApiPath;
        setVideoApiUrl(`${videoApiUrl}`);
    }

    return {
        keyword,
        setKeyword,
        clickSearchBtn,
    }
}