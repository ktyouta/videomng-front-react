import { useSetAtom } from "jotai";
import { videoIdAtom } from "../Atom/HomeAtom";

export function useHomeVideoContent() {

    // 動画ID
    const setVideoId = useSetAtom(videoIdAtom);

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            alert(`画面遷移に失敗しました。`);
            return;
        }

        setVideoId(id);
    }

    return {
        clickVideo
    }
}