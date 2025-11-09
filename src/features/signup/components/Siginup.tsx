import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../../components/BaseTextbox";
import ButtonComponent from "../../../components/ButtonComponent";
import { useSiginup } from "../hooks/useSiginup";
import ComboComponent from "../../../components/ComboComponent";
import { DAY_LIST, MONTH_LIST, } from "../../../consts/CommonConst";
import { MEDIA } from "../../../consts/MediaConst";
import { LoadingCenter } from "../../../components/LoadingCenter";
import { OverlayDiv } from "../../../styles/styledcomponent/OverlayDiv";
import { RhfTextbox } from "../../../styles/styledcomponent/RhfTextbox";
import { ErrorMessageField } from "../../../components/ErrorMessageField";
import { RhfSelect } from "../../../styles/styledcomponent/RhfSelect";
import { ModalPortalConfirm } from "../../../components/ModalPortalConfirm";


const Parent = styled.div`
  width: 100%;
  background-color: #dcdcdc;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 3%;
  padding-top: 5%;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        padding-left: 10%;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        padding-left: 10%;
    }

    @media (min-width: ${MEDIA.PC}) {
        padding-left: 10%;
    }
`;

const SiginupFormDiv = styled.div`
    box-sizing: border-box;
    width: 382px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        margin-left: 0;
        margin-right: 0;
        width: 550px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        margin-left: 0;
        margin-right: 0;
        width: 550px;
    }

    @media (min-width: ${MEDIA.PC}) {
        margin-left: 0;
        margin-right: 0;
        width: 550px;
    }
`;

const SiginupButtonDiv = styled.div`
    margin-top: 8%;
`;

const TitleDiv = styled.div`
    font-size: 30px;
    margin-bottom: 8%;
`;

const ErrMessageDiv = styled.div`
    font-size: 15px;
    margin-bottom: 6%;
    color: red;
    white-space: pre-line;
`;

const BirthDayDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BirthDayLabelDiv = styled.div`
  margin-right:2px;
`;

const InputRowDiv = styled.div`
  margin-bottom: 8%;
`;

const InputTitleDiv = styled.div`
`;



export function Siginup() {

  console.log("Siginup render");

  const {
    errMessage,
    yearCoomboList,
    clickBack,
    isOpenModal,
    closeModal,
    isLoading,
    register,
    errors,
    handleSiginupClick,
    handleConfirm } = useSiginup();

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
      <SiginupFormDiv>
        <TitleDiv>
          アカウント作成
        </TitleDiv>
        {
          errMessage &&
          <ErrMessageDiv>
            {errMessage}
          </ErrMessageDiv>
        }
        <InputRowDiv>
          <InputTitleDiv>
            ユーザー名(3～30文字)
          </InputTitleDiv>
          <RhfTextbox
            width="98%"
            height="33px"
            type="text"
            maxLength={30}
            placeholder='UserName'
            autoComplete="off"
            {...register("userName")}
          />
          <ErrorMessageField
            message={errors.userName?.message}
            style={{
              marginBottom: `6%`,
              marginTop: `3%`,
            }}
          />
        </InputRowDiv>
        <InputRowDiv>
          <InputTitleDiv>
            生年月日
          </InputTitleDiv>
          <BirthDayDiv>
            <RhfSelect
              width="68%"
              height="39px"
              {...register("birthday.year")}
            >
              {yearCoomboList.map((e) => {
                return (
                  <option
                    key={e.value}
                    value={e.value}
                  >
                    {e.label}
                  </option>
                );
              })}
            </RhfSelect>
            <BirthDayLabelDiv>
              年
            </BirthDayLabelDiv>
            <RhfSelect
              width="68%"
              height="39px"
              {...register("birthday.month")}
            >
              {MONTH_LIST.map((e) => {
                return (
                  <option
                    key={e.value}
                    value={e.value}
                  >
                    {e.label}
                  </option>
                );
              })}
            </RhfSelect>
            <BirthDayLabelDiv>
              月
            </BirthDayLabelDiv>
            <RhfSelect
              width="68%"
              height="39px"
              {...register("birthday.day")}
            >
              {DAY_LIST.map((e) => {
                return (
                  <option
                    key={e.value}
                    value={e.value}
                  >
                    {e.label}
                  </option>
                );
              })}
            </RhfSelect>
            日
          </BirthDayDiv>
          <ErrorMessageField
            message={errors.birthday?.message}
            style={{
              marginBottom: `6%`,
              marginTop: `3%`,
            }}
          />
        </InputRowDiv>
        <InputRowDiv>
          <InputTitleDiv>
            パスワード
          </InputTitleDiv>
          <RhfTextbox
            width="98%"
            height="33px"
            type="password"
            maxLength={30}
            autoComplete="off"
            {...register("password")}
          />
          <ErrorMessageField
            message={errors.password?.message}
            style={{
              marginBottom: `6%`,
              marginTop: `3%`,
            }}
          />
        </InputRowDiv>
        <InputRowDiv>
          <InputTitleDiv>
            確認用パスワード
          </InputTitleDiv>
          <RhfTextbox
            width="98%"
            height="33px"
            type="password"
            maxLength={30}
            autoComplete="off"
            {...register("confirmPassword")}
          />
          <ErrorMessageField
            message={errors.confirmPassword?.message}
            style={{
              marginBottom: `6%`,
              marginTop: `3%`,
            }}
          />
        </InputRowDiv>
        <SiginupButtonDiv>
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
            title={"登録"}
            onclick={handleSiginupClick}
            style={{
              "borderRadius": "23px",
              "background": "black",
              "fontSize": "1rem",
              "marginLeft": "5%",
            }}
          />
        </SiginupButtonDiv>
      </SiginupFormDiv>
      <ModalPortalConfirm
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        titleMessage={`入力した内容でアカウントを作成しますか？`}
        clickOk={handleConfirm}
      />
    </Parent>
  );
}