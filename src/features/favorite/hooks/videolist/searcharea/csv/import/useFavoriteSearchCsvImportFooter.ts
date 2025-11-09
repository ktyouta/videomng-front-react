import { VIDEO_MNG_PATH } from "../../../../../../../consts/CommonConst";
import { getNowDatetime } from "../../../../../../../utils/DateUtil";
import { downloadFile } from "../../../../../../../utils/downloadFile";
import ENV from "../../../../../../../env.json";


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