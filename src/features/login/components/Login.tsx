import React from "react";
import styled from "styled-components";
import { useLogin } from "../hooks/useLogin";
import BaseTextbox from "../../../components/BaseTextbox";
import ButtonComponent from "../../../components/ButtonComponent";
import { MEDIA } from "../../../consts/MediaConst";
import Loading from "../../../components/Loading";
import { OverlayDiv } from "../../../styles/styledcomponent/OverlayDiv";
import { LoadingCenter } from "../../../components/LoadingCenter";
import { loginSchema } from "../schemas/loginSchema";

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
    margin-top:3%;
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
  margin-bottom:7%;
`;

const InputTitleDiv = styled.div`
`;


export function Login() {

  console.log("Login render");

  const {
    handleKeyPress,
    clickSignup,
    clickBack,
    isLoading,
    form,
    isError } = useLogin();

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
          isError &&
          <ErrMessageDiv>
            ログインに失敗しました。
          </ErrMessageDiv>
        }
        {/* ユーザー名 */}
        <form.Field
          name="userName"
          children={(field) => (
            <InputRowDiv>
              <InputTitleDiv>
                ユーザー名
              </InputTitleDiv>
              <BaseTextbox
                value={field.state.value}
                onChange={field.handleChange}
                placeholder="UserName"
                textWidth="100%"
                style={{
                  boxSizing: "border-box",
                  height: "37px"
                }}
                onKeyDown={handleKeyPress}
              />
              {!field.state.meta.isValid && (
                <ErrMessageDiv>
                  {field.state.meta.errors.map((e) => {
                    return e?.message
                  }).join(",")}
                </ErrMessageDiv>
              )}
            </InputRowDiv>
          )}
        />
        {/* パスワード */}
        <form.Field
          name="password"
          children={(field) => (
            <InputRowDiv>
              <InputTitleDiv>
                パスワード
              </InputTitleDiv>
              <BaseTextbox
                type="password"
                value={field.state.value}
                onChange={field.handleChange}
                placeholder="Password"
                textWidth="100%"
                style={{
                  boxSizing: "border-box",
                  height: "37px"
                }}
                onKeyDown={handleKeyPress}
              />
              {!field.state.meta.isValid && (
                <ErrMessageDiv>
                  {field.state.meta.errors.map((e) => {
                    return e?.message
                  }).join(",")}
                </ErrMessageDiv>
              )}
            </InputRowDiv>
          )}
        />
        <SignUpDiv onClick={clickSignup}>
          <SignUpSpan>
            アカウント作成はこちらから
          </SignUpSpan>
        </SignUpDiv>
        <LoginButtonDiv>
          <ButtonComponent
            styleTypeNumber="RUN"
            title="戻る"
            onclick={clickBack}
            style={{
              borderRadius: "23px",
              background: "black",
              fontSize: "1rem"
            }}
          />
          <ButtonComponent
            styleTypeNumber="RUN"
            title="ログイン"
            onclick={form.handleSubmit}
            style={{
              borderRadius: "23px",
              background: "black",
              fontSize: "1rem",
              marginLeft: "5%",
            }}
          />
        </LoginButtonDiv>
      </LoginFormDiv>
    </Parent>
  );
}