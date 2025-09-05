import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom, videoListDataAtom } from "../Atom/HomeAtom";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { useHomeVideoSearchConditionValue } from "./VideoList/useFavoriteVideoSearchConditionValue";

export function useHome() {

    // 動画取得用URL
    const [videoApiUrl, setVideoApiUrl] = useState(``);
    // ページ読み込み完了フラグ
    const [isLoadingComp, setIsLoadingComp] = useState(false);
    // 動画リスト
    const setVideoListData = useSetAtom(videoListDataAtom);


    useEffect(() => {

        setIsLoadingComp(true);

        // アンマウント時に動画一覧をリセット
        return () => {
            setVideoListData(undefined);
        }
    }, []);

    return {
        videoApiUrl,
        setVideoApiUrl,
        isLoadingComp,
    }
}