import styled from "styled-components";

const Parent = styled.div<{ height: string }>`
    width: 100%;
    height: ${({ height }) => (height)};
    box-sizing: border-box;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    padding: 0 5%;
    line-height: 2.0;
`;

type propsType = {
    height: string
}

export function FavoriteSearchCsvImportMain(props: propsType) {

    console.log("FavoriteSearchCsvImportMain render");

    return (
        <Parent
            height={props.height}
        >
            ダウンロードボタンを押下すると、現在登録されているお気に入り動画のデータをCSVファイルとしてダウンロードできます。<br />
            ダウンロードしたファイルを使うと、お気に入りに一括登録することができます。<br />
            ダウンロードしたCSVには動画タイトルなどの情報は含まれず、動画IDのみが保存されます。<br />
            アップロードはお気に入り画面の取込からできます。
        </Parent>
    );
}