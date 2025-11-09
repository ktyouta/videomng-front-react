import useSwitch from "../../../../../hooks/useSwitch";
import { useNavigate } from "react-router-dom";
import { useFrequentKeywords } from "../videoarea/default/useFrequentKeywords";
import { useRecentKeyword } from "../videoarea/default/useRecentKeyword";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "../useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../../useHomeVideoNowSearchConditionValue";
import { toast } from "react-toastify";


export function useHomeSearchConditionModal() {

    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    return {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        isMobile,
    }
}