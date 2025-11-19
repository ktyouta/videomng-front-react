import styled from "styled-components";
import { IconComponent } from "../../../../../../../components/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { FlexSpaceDiv } from "../../../../../../../styles/styledcomponent/FlexSpaceDiv";
import ButtonComponent from "../../../../../../../components/ButtonComponent";
import { useFavoriteSearchCsvImportFooter } from "../../../../../hooks/videolist/searcharea/csv/import/useFavoriteSearchCsvImportFooter";


const Parent = styled.div<{ height: string }>`
    width: 100%;
    height: ${({ height }) => (height)};
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:1%;
`;

type propsType = {
    close: () => void;
    height: string
}

export function FavoriteSearchCsvImportFooter(props: propsType) {

    console.log("FavoriteSearchCsvImportFooter render");

    const { download } = useFavoriteSearchCsvImportFooter({ ...props });

    return (
        <Parent
            height={props.height}
        >
            <ButtonComponent
                shape="rounded"
                onClick={props.close}
                style={{
                    background: "#3a3d42",
                    color: "white"
                }}
            >
                キャンセル
            </ButtonComponent>
            <ButtonComponent
                shape="rounded"
                onClick={download}
                style={{
                    background: "#3a3d42",
                    marginLeft: "5%",
                    color: "white"
                }}
            >
                ダウンロード
            </ButtonComponent>
        </Parent>
    );
}