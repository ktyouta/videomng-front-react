import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import ComboComponent from "../../Common/Component/ComboComponent";
import { DAY_LIST, MONTH_LIST, } from "../../Common/Const/CommonConst";
import { useUpdateUserInfo } from "../Hook/useUpdateUserInfo";
import { ConfirmModalComponent } from "../../Common/Component/ConfirmModalComponent";
import { MEDIA } from "../../Common/Const/MediaConst";


const Parent = styled.div`
  width: 100vw;
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

const UpdateUserInfoFormDiv = styled.div`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: 3%;
    padding-right: 3%;
    width: 382px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        margin-left: 0;
        margin-right: 0;
        padding-left: 0;
        padding-right: 0;
        width: 550px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        margin-left: 0;
        margin-right: 0;
        padding-left: 0;
        padding-right: 0;
        width: 550px;
    }

    @media (min-width: ${MEDIA.PC}) {
        margin-left: 0;
        margin-right: 0;
        padding-left: 0;
        padding-right: 0;
        width: 550px;
    }
`;

const UpdateUserInfoButtonDiv = styled.div`
    margin-top: 14%;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        margin-top: 9%;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        margin-top: 9%;
    }

    @media (min-width: ${MEDIA.PC}) {
        margin-top: 9%;
    }
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



export function UpdateUserInfo() {

    console.log("UpdateUserInfo render");

    const {
        userNameRef,
        clickUpdateUserInfoBtn,
        errMessage,
        userBirthdayYearRef,
        userBirthdayMonthRef,
        userBirthdayDayRef,
        yearCoomboList,
        loginUserInfo,
        clickCancel,
        isOpenModal,
        closeModal,
        executeUpdate, } = useUpdateUserInfo();

    return (
        <Parent>
            <UpdateUserInfoFormDiv>
                <TitleDiv>
                    ユーザー情報更新
                </TitleDiv>
                {
                    errMessage &&
                    <ErrMessageDiv>
                        {errMessage}
                    </ErrMessageDiv>
                }
                {
                    loginUserInfo.userName &&
                    <InputRowDiv>
                        <InputTitleDiv>
                            ユーザー名(3～30文字)
                        </InputTitleDiv>
                        <BaseTextbox
                            value={loginUserInfo.userName}
                            length={30}
                            disabled={false}
                            ref={userNameRef}
                            textWidth='98%'
                            placeholder='UserName'
                            autoComplete={true}
                            style={{ marginBottom: "8%" }}
                        />
                    </InputRowDiv>
                }
                {
                    yearCoomboList &&
                    yearCoomboList.length > 0 &&
                    loginUserInfo.birthday &&
                    <InputRowDiv>
                        <InputTitleDiv>
                            生年月日
                        </InputTitleDiv>
                        <BirthDayDiv>
                            <ComboComponent
                                combo={yearCoomboList}
                                initValue={loginUserInfo.birthday.slice(0, 4)}
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
                                initValue={loginUserInfo.birthday.slice(4, 6)}
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
                                initValue={loginUserInfo.birthday.slice(6, 8)}
                                width="68%"
                                minWidth="8%"
                                height="39px"
                                ref={userBirthdayDayRef}
                            />
                            日
                        </BirthDayDiv>
                    </InputRowDiv>
                }
                <UpdateUserInfoButtonDiv>
                    <ButtonComponent
                        styleTypeNumber="RUN"
                        title={"キャンセル"}
                        onclick={clickCancel}
                        style={{
                            "borderRadius": "23px",
                            "background": "black",
                            "fontSize": "1rem",
                        }}
                    />
                    <ButtonComponent
                        styleTypeNumber="RUN"
                        title={"保存"}
                        onclick={clickUpdateUserInfoBtn}
                        style={{
                            "borderRadius": "23px",
                            "background": "black",
                            "fontSize": "1rem",
                            "marginLeft": "5%",
                        }}
                    />
                </UpdateUserInfoButtonDiv>
            </UpdateUserInfoFormDiv>
            <ConfirmModalComponent
                isOpenModal={isOpenModal}
                closeModal={closeModal}
                titleMessage={`入力した内容でユーザー情報を更新しますか？`}
                clickOk={executeUpdate}
            />
        </Parent>
    );
}