import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import ComboComponent from "../../Common/Component/ComboComponent";
import { DAY_LIST, MONTH_LIST, } from "../../Common/Const/CommonConst";
import { useUpdateUserInfo } from "../Hook/useUpdateUserInfo";


const Parent = styled.div`
  width: 100vw;
  background-color: #dcdcdc;
  height: 100vh;
`;

const UpdateUserInfoFormDiv = styled.div`
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10%;
`;

const UpdateUserInfoButtonDiv = styled.div`
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
        clickCancel, } = useUpdateUserInfo();

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
                            ユーザー名
                        </InputTitleDiv>
                        <BaseTextbox
                            value={loginUserInfo.userName}
                            length={100}
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
                <UpdateUserInfoButtonDiv>
                    <ButtonComponent
                        styleTypeNumber="RUN"
                        title={"保存"}
                        onclick={clickUpdateUserInfoBtn}
                        style={{
                            "borderRadius": "23px",
                            "background": "black",
                            "fontSize": "1rem",
                        }}
                    />
                    <ButtonComponent
                        styleTypeNumber="RUN"
                        title={"キャンセル"}
                        onclick={clickCancel}
                        style={{
                            "borderRadius": "23px",
                            "background": "black",
                            "fontSize": "1rem",
                            "marginLeft": "5%",
                        }}
                    />
                </UpdateUserInfoButtonDiv>
            </UpdateUserInfoFormDiv>
        </Parent>
    );
}