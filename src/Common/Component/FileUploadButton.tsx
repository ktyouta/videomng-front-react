import Button from "@mui/material/Button";
import { CSSProperties } from "react";

type propsType = {
    onClick: (event: React.ChangeEvent<HTMLInputElement>) => void,
    selectFileType: `.csv`,
    style?: CSSProperties
}

export function FileUploadButton(props: propsType) {

    return (
        <Button
            variant="contained"
            component="label"
            style={props.style}
        >
            ファイルを選択
            <input
                type="file"
                hidden
                onChange={props.onClick}
                accept={props.selectFileType}
            />
        </Button>
    );
}