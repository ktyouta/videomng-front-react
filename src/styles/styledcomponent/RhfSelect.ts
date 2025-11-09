import styled from "styled-components";

// セレクトボックス(RHF)
export const RhfSelect = styled.select<{ width: string, height: string }>`
    text-align:center;
    border-radius: 5px;
    width: ${({ width }) => width};    
    height: ${({ height }) => height};
`;