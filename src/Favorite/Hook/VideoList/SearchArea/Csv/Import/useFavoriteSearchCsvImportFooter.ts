import { VIDEO_MNG_PATH } from "../../../../../../Common/Const/CommonConst";
import { getNowDatetime } from "../../../../../../Common/Function/DateUtil";
import { downloadCsv } from "../../../../../../Common/Function/downloadCsv";
import ENV from "../../../../../../env.json";


type propsType = {
    close: () => void;
}


export function useFavoriteSearchCsvImportFooter(props: propsType) {

    /**
     * CSVをダウンロードする
     */
    function download() {

        // 現在日付
        const nowDate = getNowDatetime(`yyyy-MM-dd HH:mm:ss`);
        downloadCsv(`${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_CSV}`, `favorite_video_${nowDate}.csv`);

        props.close();
    }

    return {
        download
    }
}