import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { VideoListDataType } from "../../../../../../types/videolist/VideoListDataType";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";


type propsType = {
    videoListData: VideoListDataType,
    isLoading: boolean,
}

export function useHomeVideoListResult(props: propsType) {

    // 現在の動画検索条件
    const { setNowSearchCondition } = useHomeVideoNowSearchConditionValue();
    // 無限スクロール用
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    /**
     * 次データ取得
     * @param nextPageToken 
     */
    function getNextData(nextPageToken: string) {

        // 現在の検索条件を更新する
        setNowSearchCondition((e) => {

            return {
                ...e,
                nextPageToken
            };
        });
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
    }
}