import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { VideoListResponseType } from "../../Type/VideoList/VideoListResponseType";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { VideoListDataType } from "../../Type/VideoList/VideoListDataType";
import { isEqual } from "lodash";
import { ShowMoreDataType } from "../../Type/VideoList/ShowMoreDataType";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useFavoriteKeyword } from "./useFavoriteKeyword";
import { FAVORITE_KEYWORD } from "../../Const/HomeConst";
import { useLocation } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useHomeVideoSearchConditionValue } from "./useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";
import { useHomeVideoListEndpoint } from "./useHomeVideoListEndpoint";


export function useHomeVideoArea() {

    // 現在の動画検索条件
    const { nowSearchCondition } = useHomeVideoNowSearchConditionValue();

    return {
        nowSearchCondition
    }
}