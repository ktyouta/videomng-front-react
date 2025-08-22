import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import useQueryWrapper from "../../../../Common/Hook/useQueryWrapper";
import { VIDEO_MNG_PATH } from "../../../../Common/Const/CommonConst";
import ENV from "../../../../env.json";
import { HomeVideoCommentThreadResponseType } from "../../../Type/VideoDetail/VideoComment/HomeVideoCommentThreadResponseType";
import { homeVideoCommentListAtom, } from "../../../Atom/HomeAtom";
import { VideoIdContext } from "../../../Component/Home";
import { useHomeCommentEndpoint } from "./useHomeCommentEndpoint";
import { HomeVideoCommentThreadItemType } from "../../../Type/VideoDetail/VideoComment/HomeVideoCommentThreadItemType";


export function useHomeCommentList() {

    // コメント情報
    const [homeVideoCommentList, setHomeVideoCommentList] = useState<HomeVideoCommentThreadItemType[]>();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // お気に入り動画ID
    const videoId = VideoIdContext.useCtx();


    // コメント情報を取得
    const { isLoading } = useQueryWrapper<HomeVideoCommentThreadResponseType>(
        {
            url: useHomeCommentEndpoint(videoId),
            afSuccessFn: (response: HomeVideoCommentThreadResponseType) => {

                const items = response.data.items;
                setHomeVideoCommentList(items);
            },
            afErrorFn: (res) => {
                setErrMessage(`コメントの取得に失敗しました。`);
            }
        }
    );

    return {
        isLoading,
        errMessage,
        homeVideoCommentList,
    }
}