import { VIDEO_MNG_PATH } from "../../../../../../Common/Const/CommonConst";
import { getNowDatetime } from "../../../../../../Common/Function/DateUtil";
import { downloadFile } from "../../../../../../Common/Function/downloadFile";
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
        const nowDate = getNowDatetime(`yyyyMMddHHmmss`);
        downloadFile(`${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_CSV_DOWNLOAD}`, `favorite_video_${nowDate}.csv`);

        props.close();
    }

    return {
        download
    }
}