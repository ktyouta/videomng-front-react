import React from "react";
import styled from "styled-components";
import { useLogin } from "../Hook/useLogin";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";


const Parent = styled.div`
  width: 100%;
  background-color: #dcdcdc;
`;

const LoginFormDiv = styled.div`
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10%;
`;

const LoginButtonDiv = styled.div`
    text-align: center;
    margin-top: 9%;
`;


export function Login() {

  console.log("Login render");

  const {
    userIdRef,
    userPasswordRef,
    clickLoginBtn,
    handleKeyPress, } = useLogin();

  return (
    <Parent>
      <LoginFormDiv>
        <BaseTextbox
          value={""}
          length={100}
          disabled={false}
          ref={userIdRef}
          textWidth='100%'
          onKeyDown={handleKeyPress}
          placeholder='UserID'
          autoComplete={true}
        />
        <BaseTextbox
          type={"password"}
          value={""}
          length={100}
          disabled={false}
          ref={userPasswordRef}
          textWidth='100%'
          onKeyDown={handleKeyPress}
          placeholder='Password'
        />
        <LoginButtonDiv>
          <ButtonComponent
            styleTypeNumber="RUN"
            title={"Login"}
            onclick={clickLoginBtn}
            style={{
              "borderRadius": "23px",
              "background": "black",
              "fontSize": "1rem",
            }}
          />
        </LoginButtonDiv>
      </LoginFormDiv>
    </Parent>
  );
}