import styled from "styled-components";

// テキストボックス(RHF)
export const RhfTextbox = styled.input<{ width: string, height: string }>`
    border-radius: 5px;
    border: solid 1px rgb(118, 118, 118);
    width: ${({ width }) => width};    
    height: ${({ height }) => height};
`;