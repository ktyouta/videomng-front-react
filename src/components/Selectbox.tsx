import Select, { SingleValue } from "react-select";
import styled from "styled-components";

const Parent = styled.div<{ width: string, minWidth?: string, height: string, }>`
  width: ${({ width }) => (width)};
  minWidth: ${({ minWidth }) => (minWidth)};
  background:${({ height }) => (height)};
`;

export type Option = {
    value: string;
    label: string;
};

type Props = {
    options: Option[];
    value: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    width: string;
    minWidth: string;
    height: string;
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
        >
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={props.options}
                placeholder={props.placeholder}
                isDisabled={props.disabled}
                styles={{
                    control: (base) => ({
                        ...base,
                        boxShadow: `none`,
                        textAlign: `center`,
                    }),
                    menu: (base) => ({
                        ...base,
                        textAlign: `center`,
                        zIndex: 9999,
                    }),
                    option: (base) => ({
                        ...base,
                        color: `black`,
                        textAlign: `center`,
                        fontSize: `14px`,
                    }),
                    dropdownIndicator: (base) => ({
                        ...base,
                        color: `black`,
                    }),
                    indicatorSeparator: (base) => ({
                        ...base,
                        backgroundColor: `#999`,
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: `black`,
                        fontSize: `14px`,
                        textAlign: `center`,
                    }),
                }}
            />
        </Parent>
    );
};