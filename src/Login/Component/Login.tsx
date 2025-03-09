import React from "react";
import styled from "styled-components";
import { useLogin } from "../Hook/useLogin";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";


const Parent = styled.div`
  width: 100vw;
  background-color: #dcdcdc;
  height: 100vh;
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

const TitleDiv = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 6%;
`;

const ErrMessageDiv = styled.div`
    text-align: center;
    font-size: 15px;
    margin-bottom: 6%;
    color: red;
`;


export function Login() {

  console.log("Login render");

  const {
    userIdRef,
    userPasswordRef,
    clickLoginBtn,
    handleKeyPress,
    errMessage } = useLogin();

  return (
    <Parent>
      <LoginFormDiv>
        <TitleDiv>
          ログイン
        </TitleDiv>
        {
          errMessage &&
          <ErrMessageDiv>
            {errMessage}
          </ErrMessageDiv>
        }
        <BaseTextbox
          value={""}
          length={100}
          disabled={false}
          ref={userIdRef}
          textWidth='100%'
          onKeyDown={handleKeyPress}
          placeholder='UserID'
          autoComplete={true}
          style={{ marginBottom: "8%" }}
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
            title={"ログイン"}
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