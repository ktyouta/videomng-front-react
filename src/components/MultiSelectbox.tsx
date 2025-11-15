import { CSSProperties, useEffect, useState } from "react";
import Select, {
    MultiValue,
    defaultTheme,
    components,
    OptionProps,
} from "react-select";
import styled from "styled-components";

const Parent = styled.div<{ width: string, minWidth?: string, height: string }>`
  width: ${({ width }) => width};
  minWidth: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
`;

export type Option = {
    value: string,
    label: string,
};

type Props = {
    options: Option[],
    value: string[],
    onChange?: (value: MultiValue<Option>) => void,
    onMenuClose?: (value: MultiValue<Option>) => void,
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


const CheckboxOption = (props: OptionProps<Option>) => {

    return (
        <components.Option
            {...props}
        >
            <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => { }}
                id={`${props.selectProps.instanceId}-${props.data.value}`}
                style={{ marginRight: 8 }}
            />
            <label
                htmlFor={`${props.selectProps.instanceId}-${props.data.value}`}
            >
                {props.label}
            </label>
        </components.Option>
    );
};

export function MultiSelectbox(props: Props) {

    // 選択中の値
    const [selectedValues, setSelectedValues] = useState<MultiValue<Option>>([]);

    /**
     * チェックボックスの選択イベント
     * @param newValue 
     */
    const handleChange = (newValue: MultiValue<Option>) => {

        setSelectedValues(newValue);

        if (props.onChange) {
            props.onChange(newValue);
        }
    };

    /**
     * メニューのクローズイベント
     */
    const onMenuClose = () => {

        if (props.onMenuClose) {
            props.onMenuClose(selectedValues);
        }
    };

    /**
     * props.valueが更新されたら同期
     */
    useEffect(() => {

        const selectedOptions = props.options.filter((opt) =>
            props.value.includes(opt.value)
        );

        setSelectedValues(selectedOptions);
    }, [props.value, props.options]);

    return (
        <Parent
            width={props.width}
            minWidth={props.minWidth}
            height={props.height}
            style={props.outerStyle}
        >
            <Select
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{ Option: CheckboxOption }}
                value={selectedValues}
                onChange={handleChange}
                onMenuClose={onMenuClose}
                options={props.options}
                placeholder={props.placeholder}
                isDisabled={props.disabled}
                menuPlacement="auto"
                menuPosition="fixed"
                styles={{
                    control: (base) => ({
                        ...base,
                        boxShadow: "none",
                        textAlign: "center",
                        backgroundColor: props.backgroundColor || "white",
                    }),
                    menu: (base) => ({
                        ...base,
                        textAlign: "center",
                        zIndex: 9999,
                        backgroundColor: props.backgroundColor || "white",
                    }),
                    option: (base, state) => ({
                        ...base,
                        color: props.color || "black",
                        fontSize: props.fontSize || "14px",
                        backgroundColor: state.isFocused
                            ? defaultTheme.colors.primary75
                            : props.backgroundColor || "white",
                    }),
                    dropdownIndicator: (base) => ({
                        ...base,
                        color: props.color || "black",
                    }),
                    indicatorSeparator: (base) => ({
                        ...base,
                        backgroundColor: props.separatorColor || `#999`,
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: props.color || "black",
                        fontSize: props.fontSize || "14px",
                    }),
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
            />
        </Parent>
    );
}
