
type propsType = {
    setNextPageToken: React.Dispatch<React.SetStateAction<string>>
}

export function useHomeChannelVideoArea(props: propsType) {

    /**
     * もっと見るボタン押下
     * @param nextPageToken 
     * @returns 
     */
    function clickShowMore(nextPageToken: string) {
        props.setNextPageToken(nextPageToken);
    }

    return {
        clickShowMore
    };
}