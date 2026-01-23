import { toast } from "react-toastify";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";


export function useHomeChannelVideoContent() {

    // ルーティング用
    const { appNavigate } = useAppNavigation();

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            toast.error(`動画情報を取得できませんでした。`);
            return;
        }

        appNavigate(`${ROUTER_PATH.HOME.ROOT}${ROUTER_PATH.HOME.DETAIL}/${id}`);
    }

    return {
        clickVideo,
    }
}