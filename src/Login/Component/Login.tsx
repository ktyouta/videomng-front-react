import React from "react";
import styled from "styled-components";
import { useLogin } from "../Hook/useLogin";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { MEDIA } from "../../Common/Const/MediaConst";
import Loading from "../../Common/Component/Loading";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";
import { LoadingCenter } from "../../Common/Component/LoadingCenter";


const Parent = styled.div`
  width: 100%;
  background-color: #dcdcdc;
  min-height: 100vh;
`;

const LoginFormDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-top: 10%;
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
    box-sizing: border-box;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      width: 382px;
      padding-left: 0;
      padding-right: 0;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      width: 382px;
      padding-left: 0;
      padding-right: 0;
    }

    @media (min-width: ${MEDIA.PC}) {
      width: 382px;
      padding-left: 0;
      padding-right: 0;
    }
`;

const LoginButtonDiv = styled.div`
    text-align: center;
    margin-top: 6%;
`;

const TitleDiv = styled.div`
    text-align: center;
    font-size: 27px;
    margin-bottom: 6%;
`;

const ErrMessageDiv = styled.div`
    text-align: center;
    font-size: 15px;
    margin-bottom: 6%;
    color: red;
`;

const SignUpDiv = styled.div`
    text-align: center;
    margin-top: 7%;
`;

const SignUpSpan = styled.span`
    font-size: 15px;
    color: blue;
    cursor:pointer;
`;

const InputRowDiv = styled.div`
`;

const InputTitleDiv = styled.div`
`;


export function Login() {

  console.log("Login render");

  const {
    userNameRef,
    userPasswordRef,
    clickLoginBtn,
    handleKeyPress,
    clickSignup,
    errMessage,
    clickBack,
    isLoading } = useLogin();

  return (
    <Parent>
      {
        isLoading &&
        <React.Fragment>
          <LoadingCenter />
          <OverlayDiv
            bgColor="rgba(0, 0, 0, 0.1)"
          />
        </React.Fragment>
      }
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
        <InputRowDiv>
          <InputTitleDiv>
            ユーザー名
          </InputTitleDiv>
          <BaseTextbox
            value={""}
            length={100}
            disabled={false}
            ref={userNameRef}
            textWidth='100%'
            onKeyDown={handleKeyPress}
            placeholder='UserName'
            autoComplete={true}
            style={{
              marginBottom: "7%",
              boxSizing: "border-box",
              height: "37px",
            }}
          />
        </InputRowDiv>
        <InputRowDiv>
          <InputTitleDiv>
            パスワード
          </InputTitleDiv>
          <BaseTextbox
            type="password"
            value={""}
            length={100}
            disabled={false}
            ref={userPasswordRef}
            textWidth='100%'
            onKeyDown={handleKeyPress}
            placeholder='Password'
            style={{
              boxSizing: "border-box",
              height: "37px",
            }}
          />
        </InputRowDiv>
        <SignUpDiv
          onClick={clickSignup}
        >
          <SignUpSpan>
            アカウント作成はこちらから
          </SignUpSpan>
        </SignUpDiv>
        <LoginButtonDiv>
          <ButtonComponent
            styleTypeNumber="RUN"
            title={"戻る"}
            onclick={clickBack}
            style={{
              "borderRadius": "23px",
              "background": "black",
              "fontSize": "1rem",
            }}
          />
          <ButtonComponent
            styleTypeNumber="RUN"
            title={"ログイン"}
            onclick={clickLoginBtn}
            style={{
              "borderRadius": "23px",
              "background": "black",
              "fontSize": "1rem",
              "marginLeft": "5%",
            }}
          />
        </LoginButtonDiv>
      </LoginFormDiv>
    </Parent>
  );
}