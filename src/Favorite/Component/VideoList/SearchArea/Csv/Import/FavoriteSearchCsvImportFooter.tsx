import styled from "styled-components";
import { IconComponent } from "../../../../../../Common/Component/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { FlexSpaceDiv } from "../../../../../../Common/StyledComponent/FlexSpaceDiv";
import ButtonComponent from "../../../../../../Common/Component/ButtonComponent";
import { useFavoriteSearchCsvImportFooter } from "../../../../../Hook/VideoList/SearchArea/Csv/Import/useFavoriteSearchCsvImportFooter";


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

    const { download } = useFavoriteSearchCsvImportFooter();

    return (
        <Parent
            height={props.height}
        >
            <ButtonComponent
                styleTypeNumber="RUN"
                title={"キャンセル"}
                onclick={props.close}
                style={{
                    borderRadius: "23px",
                    background: "#3a3d42",
                    fontSize: "1rem",
                }}
            />
            <ButtonComponent
                styleTypeNumber="RUN"
                title={"ダウンロード"}
                onclick={download}
                style={{
                    borderRadius: "23px",
                    background: "#3a3d42",
                    fontSize: "1rem",
                    marginLeft: "5%",
                }}
            />
        </Parent>
    );
}