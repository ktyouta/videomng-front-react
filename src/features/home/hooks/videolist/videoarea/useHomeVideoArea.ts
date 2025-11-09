import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { VideoListResponseType } from "../../../types/videolist/VideoListResponseType";
import { errResType } from "../../../../../hooks/useMutationWrapperBase";
import { VideoListDataType } from "../../../types/videolist/VideoListDataType";
import { isEqual } from "lodash";
import { ShowMoreDataType } from "../../../types/videolist/ShowMoreDataType";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useFavoriteKeyword } from "./default/useFavoriteKeyword";
import { FAVORITE_KEYWORD } from "../../../const/HomeConst";
import { useLocation } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "../useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../../useHomeVideoNowSearchConditionValue";
import { useHomeVideoListEndpoint } from "./result/useHomeVideoListEndpoint";


export function useHomeVideoArea() {

    // 現在の動画検索条件
    const { nowSearchCondition } = useHomeVideoNowSearchConditionValue();

    return {
        nowSearchCondition
    }
}