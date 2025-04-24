import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom, showMoreDataAtom, videoListDataAtom } from "../Atom/HomeAtom";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { comboType } from "../../Common/Component/ComboComponent";
import { Label } from "recharts";
import { ShowMoreDataType } from "../Type/ShowMoreDataType";
import { isEqual } from "lodash";
import useSwitch from "../../Common/Hook/useSwitch";
import { useNavigate } from "react-router-dom";
import { SetVideoApiUrlContext } from "../Component/Home";


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


    /**
     * 検索ボタン押下イベント
     */
    function clickSearchBtn() {

        if (!keyword) {
            alert(`キーワードを入力してください。`);
            return;
        }

        const videoListApiUrlModel = VideoListApiUrlModel.create({
            keyword,
            videoType: selectedVideoType,
            videoCategory: selectedVideoCategory,
        });

        setVideoApiUrl(videoListApiUrlModel.url);
        navigate(videoListApiUrlModel.query);
    }

    return {
        keyword,
        setKeyword,
        clickSearchBtn,
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
    }
}