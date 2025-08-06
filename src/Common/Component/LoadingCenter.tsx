import styled from "styled-components";
import Loading from "./Loading";

const LoadingParent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

export function LoadingCenter() {

    return (
        <LoadingParent>
            <Loading />
        </LoadingParent>
    );
}