import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { useSiginup } from "../Hook/useSiginup";
import ComboComponent from "../../Common/Component/ComboComponent";
import { DAY_LIST, MONTH_LIST, } from "../../Common/Const/CommonConst";
import { ConfirmModalComponent } from "../../Common/Component/ConfirmModalComponent";
import { MEDIA } from "../../Common/Const/MediaConst";
import { LoadingCenter } from "../../Common/Component/LoadingCenter";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";


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
  margin-bottom:6%;
`;

const BirthDayLabelDiv = styled.div`
  margin-right:2px;
`;

const InputRowDiv = styled.div`
`;

const InputTitleDiv = styled.div`
`;



export function Siginup() {

  console.log("Siginup render");

  const {
    userNameRef,
    userPasswordRef,
    clickSiginupBtn,
    handleKeyPress,
    errMessage,
    userBirthdayYearRef,
    userBirthdayMonthRef,
    userBirthdayDayRef,
    yearCoomboList,
    clickBack,
    isOpenModal,
    closeModal,
    executeSiginup,
    confirmPasswordRef,
    isLoading } = useSiginup();

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
          <BaseTextbox
            value={""}
            length={30}
            disabled={false}
            ref={userNameRef}
            textWidth='98%'
            onKeyDown={handleKeyPress}
            placeholder='UserName'
            autoComplete={true}
            style={{ marginBottom: "8%" }}
          />
        </InputRowDiv>
        {
          yearCoomboList && yearCoomboList.length > 0 &&
          <InputRowDiv>
            <InputTitleDiv>
              生年月日
            </InputTitleDiv>
            <BirthDayDiv>
              <ComboComponent
                combo={yearCoomboList}
                initValue={yearCoomboList[0].value}
                width="68%"
                minWidth="8%"
                height="39px"
                ref={userBirthdayYearRef}
              />
              <BirthDayLabelDiv>
                年
              </BirthDayLabelDiv>
              <ComboComponent
                combo={MONTH_LIST}
                initValue={MONTH_LIST && MONTH_LIST.length > 0 ? MONTH_LIST[0].value : ``}
                width="68%"
                minWidth="8%"
                height="39px"
                ref={userBirthdayMonthRef}
              />
              <BirthDayLabelDiv>
                月
              </BirthDayLabelDiv>
              <ComboComponent
                combo={DAY_LIST}
                initValue={DAY_LIST && DAY_LIST.length > 0 ? DAY_LIST[0].value : ``}
                width="68%"
                minWidth="8%"
                height="39px"
                ref={userBirthdayDayRef}
              />
              日
            </BirthDayDiv>
          </InputRowDiv>
        }
        <InputRowDiv>
          <InputTitleDiv>
            パスワード(3～30文字)
          </InputTitleDiv>
          <BaseTextbox
            type={"password"}
            value={""}
            length={30}
            disabled={false}
            ref={userPasswordRef}
            textWidth='98%'
            onKeyDown={handleKeyPress}
            placeholder='Password'
            style={{ marginBottom: "8%" }}
          />
        </InputRowDiv>
        <InputRowDiv>
          <InputTitleDiv>
            確認用パスワード
          </InputTitleDiv>
          <BaseTextbox
            value={``}
            type="password"
            length={30}
            disabled={false}
            ref={confirmPasswordRef}
            textWidth='98%'
            placeholder='UserName'
            autoComplete={true}
            style={{ marginBottom: "8%" }}
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
            onclick={clickSiginupBtn}
            style={{
              "borderRadius": "23px",
              "background": "black",
              "fontSize": "1rem",
              "marginLeft": "5%",
            }}
          />
        </SiginupButtonDiv>
      </SiginupFormDiv>
      <ConfirmModalComponent
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        titleMessage={`入力した内容でアカウントを作成しますか？`}
        clickOk={executeSiginup}
      />
    </Parent>
  );
}