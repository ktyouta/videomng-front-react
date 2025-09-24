import Button from "@mui/material/Button";

export function FileUploadButton() {

    return (
        <Button
            variant="contained"
            component="label"
        >
            ファイルを選択
            <input type="file" hidden />
        </Button>
    );
}