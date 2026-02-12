import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../../components/BaseTextbox";
import ButtonComponent from "../../../components/ButtonComponent";
import { LoadingCenter } from "../../../components/LoadingCenter";
import { MEDIA } from "../../../consts/MediaConst";
import { OverlayDiv } from "../../../styles/styledcomponent/OverlayDiv";
import { useLogin } from "../hooks/useLogin";

const Parent = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5% 4% 3%;

  @media (min-width: ${MEDIA.TABLET}) {
    align-items: center;
    padding-bottom: 12%;
  }
`;

const LoginFormDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 24px 24px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      width: 680px;
      padding: 32px 44px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      width: 680px;
      padding: 32px 44px;
    }

    @media (min-width: ${MEDIA.PC}) {
      width: 680px;
      padding: 32px 44px;
    }
`;

const LoginButtonDiv = styled.div`
    margin-top: 6%;
`;

const TitleDiv = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 6%;
`;

const ErrMessageDiv = styled.div`
    font-size: 15px;
    margin-top: 3%;
    margin-bottom: 6%;
    color: #ff6b6b;
`;

const SignUpDiv = styled.div`
    margin-top: 7%;
`;

const SignUpSpan = styled.span`
    font-size: 15px;
    color: #646cff;
    cursor: pointer;

    &:hover {
      color: #535bf2;
    }
`;

const InputRowDiv = styled.div`
  margin-bottom: 7%;
`;

const InputTitleDiv = styled.div`
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    margin-bottom: 8px;
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
                  height: "37px",
                  paddingLeft: "5px",
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
                  height: "37px",
                  paddingLeft: "5px",
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
            variant="grad-gray"
            onClick={clickBack}
            shape="rounded"
            style={{
              minWidth: "100px",
            }}
          >
            戻る
          </ButtonComponent>
          <ButtonComponent
            variant="blue"
            onClick={form.handleSubmit}
            shape="rounded"
            style={{
              marginLeft: "5%",
              minWidth: "100px",
            }}
          >
            ログイン
          </ButtonComponent>
        </LoginButtonDiv>
      </LoginFormDiv>
    </Parent>
  );
}