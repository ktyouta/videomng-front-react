import { Autocomplete, TextField } from "@mui/material";

type propsType = {
    value: string,
    onChange: (value: string) => void,
    options: {
        value: string,
        label: string,
    }[],
    containerStyle?: CSSProperties,
    textboxStyle?: CSSProperties,
    dropdownStyle?: CSSProperties,
};

import { CSSProperties, useState } from "react";

export function SuggestTextbox(props: propsType) {

    // サジェスト開閉フラグ
    const [open, setOpen] = useState(false);

    return (
        <Autocomplete
            freeSolo
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            options={props.options}
            getOptionLabel={(option) => {
                if (typeof option === "string") {
                    return option;
                }
                return option.label ?? "";
            }}
            filterOptions={(options, state) => {
                if (state.inputValue === "") {
                    return options;
                }
                return options.filter((item) =>
                    item.label.toLowerCase().includes(state.inputValue.toLowerCase())
                );
            }}
            inputValue={props.value}
            onInputChange={(_, newInputValue) => {
                props.onChange(newInputValue);
                setOpen(newInputValue.length > 0);
            }}
            onChange={(_, newValue) => {
                const val = typeof newValue === "string" ? newValue : newValue?.value;
                props.onChange(val ?? "");
                setOpen(false);
            }}
            slotProps={{
                paper: {
                    sx: props.dropdownStyle,
                },
                popper: {
                    sx: {
                        zIndex: 9999,
                    },
                },
            }}
            sx={{
                ...props.containerStyle,
                "& .MuiOutlinedInput-root": {
                    ...props.textboxStyle,
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                />
            )}
        />
    );
}