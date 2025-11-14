import { CSSProperties } from "react";
import Select, { defaultTheme, SingleValue } from "react-select";
import styled from "styled-components";

const Parent = styled.div<{ width: string, minWidth?: string, height: string }>`
  width: ${({ width }) => (width)};
  minWidth: ${({ minWidth }) => (minWidth)};
  height: ${({ height }) => (height)};
`;

// コンボボックスの型
export type Option = {
    value: string,
    label: string,
};

type Props = {
    options: Option[],
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    disabled?: boolean,
    width: string,
    minWidth?: string,
    height: string,
    separatorColor?: string,
    color?: string,
    fontSize?: string,
    backgroundColor?: string,
    outerStyle?: CSSProperties,
};

export function Selectbox(props: Props) {

    const selectedOption = props.options.find((opt) => opt.value === props.value) ?? null;

    const handleChange = (newValue: SingleValue<Option>) => {
        if (props.onChange) {
            props.onChange(newValue?.value ?? "");
        }
    };

    return (
        <Parent
            width={props.width}
            minWidth={props.minWidth}
            height={props.height}
            style={props.outerStyle}
        >
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={props.options}
                placeholder={props.placeholder}
                isDisabled={props.disabled}
                menuPlacement="auto"
                menuPosition="fixed"
                styles={{
                    control: (base) => ({
                        ...base,
                        boxShadow: `none`,
                        textAlign: `center`,
                        backgroundColor: props.backgroundColor || `white`,
                    }),
                    menu: (base) => ({
                        ...base,
                        textAlign: `center`,
                        zIndex: 9999,
                        backgroundColor: props.backgroundColor || `white`,
                    }),
                    option: (base, state) => ({
                        ...base,
                        color: props.color || `black`,
                        textAlign: `center`,
                        fontSize: props.fontSize || `14px`,
                        backgroundColor: state.isFocused ? defaultTheme.colors.primary75 : props.backgroundColor || "white",
                    }),
                    dropdownIndicator: (base) => ({
                        ...base,
                        color: props.color || `black`,
                    }),
                    indicatorSeparator: (base) => ({
                        ...base,
                        backgroundColor: props.separatorColor || `#999`,
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: props.color || `black`,
                        fontSize: props.fontSize || `14px`,
                        textAlign: `center`,
                    }),
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
            />
        </Parent>
    );
};