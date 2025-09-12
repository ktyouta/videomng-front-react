import useSwitch from "../../../../Common/Hook/useSwitch";
import { useNavigate } from "react-router-dom";
import { useFrequentKeywords } from "../VideoArea/useFrequentKeywords";
import { useRecentKeyword } from "../VideoArea/useRecentKeyword";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";
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