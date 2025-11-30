import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { VideoListDataType } from "../../types/videolist/VideoListDataType";


type propsType = {
    isLoading: boolean,
    videoListData: VideoListDataType,
    setNextPageToken: React.Dispatch<React.SetStateAction<string>>
}


export function useHomeChannelVideoArea(props: propsType) {

    // 無限スクロール用
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    /**
     * 次データ取得
     * @param nextPageToken 
     * @returns 
     */
    function getNextData(nextPageToken: string) {
        props.setNextPageToken(nextPageToken);
    }

    /**
     * 画面下までスクロールしたら次データを取得する
     */
    useEffect(() => {

        if (!inView) {
            return;
        }

        if (props.isLoading) {
            return;
        }

        if (!props.videoListData.nextPageToken) {
            return;
        }

        getNextData(props.videoListData.nextPageToken);
    }, [inView]);

    return {
        ref,
    };
}