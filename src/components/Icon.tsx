import { IconType } from 'react-icons';
import { CSSProperties } from 'styled-components';

//引数の型
type propsType = {
    icon: IconType,
    onclick?: () => void,
    bgColor?: string,
    style?: CSSProperties,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    width?: string,
    height?: string,
}

export function Icon(props: propsType) {

    console.log("Icon render");

    const Icon = props.icon;

    return (
        <Icon
            onClick={props.onclick}
            style={{
                cursor: !!props.onclick ? 'pointer' : '',
                color: props.bgColor ?? '',
                width: props.width || 'auto',
                height: props.height || 'auto',
                ...props.style
            }}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        />
    );
}