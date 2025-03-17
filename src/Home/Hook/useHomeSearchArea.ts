import { useAtom, useSetAtom } from "jotai";
import { keywordAtom, videoApiUrlAtom, videoTypeSelectValueAtom } from "../Atom/HomeAtom";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { comboType } from "../../Common/Component/ComboComponent";
import { Label } from "recharts";

export function useHomeSearchArea() {

    // 検索キーワード
    const [keyword, setKeyword] = useAtom(keywordAtom);
    // 動画取得用URL
    const setVideoApiUrl = useSetAtom(videoApiUrlAtom);
    // 動画種別選択値
    const [videoTypeSelectValue, setVideoTypeSelectValue] = useAtom(videoTypeSelectValueAtom);

    /**
     * 検索ボタン押下イベント
     */
    function clickSearchBtn() {

        if (!keyword) {
            alert(`キーワードを入力してください。`);
            return;
        }

        const videoListApiUrlModel = new VideoListApiUrlModel(keyword, videoTypeSelectValue);
        const videoApiUrl = videoListApiUrlModel.videoMngApiPath;
        setVideoApiUrl(`${videoApiUrl}`);
    }

    return {
        keyword,
        setKeyword,
        clickSearchBtn,
        setVideoTypeSelectValue,
    }
}