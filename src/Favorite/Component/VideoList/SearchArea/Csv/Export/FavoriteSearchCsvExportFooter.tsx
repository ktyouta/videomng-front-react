import styled from "styled-components";
import { IconComponent } from "../../../../../../Common/Component/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { FlexSpaceDiv } from "../../../../../../Common/StyledComponent/FlexSpaceDiv";
import ButtonComponent from "../../../../../../Common/Component/ButtonComponent";
import { useFavoriteSearchCsvExportFooter } from "../../../../../Hook/VideoList/SearchArea/Csv/Export/useFavoriteSearchCsvExportFooter";


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
    close: () => void,
    height: string,
    selectedFile: File | null
}

export function FavoriteSearchCsvExportFooter(props: propsType) {

    console.log("FavoriteSearchCsvExportFooter render");

    const { upload } = useFavoriteSearchCsvExportFooter({ ...props });

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
                title={"アップロード"}
                onclick={upload}
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