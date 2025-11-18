import { CSSProperties } from 'react';


//引数の型
type propsType = {
    value: string,
    htmlForId: string,
    disabled?: boolean,
    onChange: (e: string) => void,
    key?: string,
    style?: CSSProperties,
    isChecked: boolean,
}

export function Checkbox(props: propsType) {

    function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(e.target.value);
    };

    return (
        <input
            type="checkbox"
            onChange={changeInput}
            value={props.value}
            checked={props.isChecked}
            id={props.htmlForId}
            disabled={props.disabled}
            key={props.key}
            style={props.style}
        />
    );
}