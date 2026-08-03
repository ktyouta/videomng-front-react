import { IconType } from 'react-icons';
import styled, { CSSProperties } from 'styled-components';
import { ICON_CIRCLE_BG_COLOR, ICON_CIRCLE_DIAMETER_EM } from '../consts/ButtonInteractionConst';

//引数の型
type propsType = {
    icon: IconType,
    onclick?: () => void,
    bgColor?: string,
    size?: string,
    style?: CSSProperties,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    // タップ可能と分かるよう円形の背景を付けるか
    hasCircleBackground?: boolean,
}

// アイコンのサイズはstyleのfont-size（呼び出し元のラッパー要素からの継承）で決まる。react-iconsのデフォルトサイズ指定(1em)に委ねるため、ここではサイズを指定しない
// 円のサイズをfont-size基準(em)の絶対値にした上で、中の要素は絶対配置+transformで中心を固定する（flexboxの中央寄せをアイコン自身のサイズ計算に依存させないため）
const CircleWrapper = styled.span`
    position: relative;
    display: inline-block;
    width: ${ICON_CIRCLE_DIAMETER_EM};
    height: ${ICON_CIRCLE_DIAMETER_EM};
    border-radius: 50%;
    background-color: ${ICON_CIRCLE_BG_COLOR};
`;

export function IconComponent(props: propsType) {

    console.log("IconComponent render");

    const Icon = props.icon;

    if (props.hasCircleBackground) {
        return (
            <CircleWrapper
                onClick={props.onclick}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                style={{ cursor: !!props.onclick ? 'pointer' : '', ...props.style }}
            >
                <Icon
                    style={{
                        color: props.bgColor ?? '',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </CircleWrapper>
        );
    }

    return (
        <Icon
            onClick={props.onclick}
            style={{ cursor: !!props.onclick ? 'pointer' : '', color: props.bgColor ?? '', ...props.style }}
            size={props.size}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        />
    );
}