import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


//引数の型
type propsType = {
    defaultHeight: string,
    closeWord?: string,
    openWord?: string,
    children: ReactNode,
    outerStyle?: CSSProperties,
}

const Parent = styled.div`
    padding: 2% 1% 1% 1%;
`;

//続きを読むボタンのスタイル
const ShowMoreButton = styled.button`
    cursor: pointer;
    color: #696969;
    border: none;
    background: none;
    outline: none;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: none;
    }
`;

//テキスト表示エリアのスタイル
const AccordionTextAreaDiv = styled.div<{ isShowMore: boolean, defaultHeight: string, }>`
    height: ${({ isShowMore, defaultHeight }) => (isShowMore ? "100%" : defaultHeight)};
    overflow: hidden;
    transition: max-height 0.1s ease;
    margin-bottom: 10px;
`;

/**
 * アコーディオンコンポーネント
 * @param props 
 * @returns 
 */
export function AccordionComponent(props: propsType) {

    // 続きを読むボタン表示フラグ
    const [showMore, setShowMore] = useState(false);
    // ボタンテキスト
    const { closeWord = "閉じる", openWord = "続きを読む" } = props;
    // ボタンテキスト表示フラグ
    const [isOverflowing, setIsOverflowing] = useState(false);
    // 要素の高さ取得用
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = contentRef.current;

        if (element) {
            setIsOverflowing(element.scrollHeight > element.clientHeight);
        }

    }, [props.children, props.defaultHeight]);

    return (
        <Parent
            style={props.outerStyle}
        >
            <AccordionTextAreaDiv
                isShowMore={showMore}
                defaultHeight={props.defaultHeight}
                ref={contentRef}
            >
                <div>
                    {props.children}
                </div>
            </AccordionTextAreaDiv>
            {
                isOverflowing &&
                <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                    {showMore ? closeWord : openWord}
                </ShowMoreButton>
            }
        </Parent>
    );
};
