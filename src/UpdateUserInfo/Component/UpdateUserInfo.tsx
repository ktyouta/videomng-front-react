import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import ComboComponent from "../../Common/Component/ComboComponent";
import { DAY_LIST, MONTH_LIST, } from "../../Common/Const/CommonConst";
import { useUpdateUserInfo } from "../Hook/useUpdateUserInfo";
import { ConfirmModalComponent } from "../../Common/Component/ConfirmModalComponent";
import { MEDIA } from "../../Common/Const/MediaConst";
import Loading from "../../Common/Component/Loading";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";
import { LoadingCenter } from "../../Common/Component/LoadingCenter";
import { Combobox } from "../../Common/Component/Combobox";


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
    margin-top:3%;
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
    margin-bottom: 8%;
`;

const InputTitleDiv = styled.div`
`;

const Select = styled.select`
  text-align:center;
  border-radius: 5px;
  width: 68%;
  height: 39px;
`;

const InputText = styled.input`
  height: 33px;
  border-radius: 5px;
  border: solid 1px rgb(118, 118, 118);
  width: 98%;
`;


export function UpdateUserInfo() {

    console.log("UpdateUserInfo render");

    const {
        errMessage,
        yearCoomboList,
        clickCancel,
        isOpenModal,
        closeModal,
        isLoading,
        register,
        handleSaveClick,
        handleConfirm,
        errors } = useUpdateUserInfo();

    return (
        <form>
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
                    <InputRowDiv>
                        <InputTitleDiv>
                            ユーザー名(3～30文字)
                        </InputTitleDiv>
                        <InputText
                            type="text"
                            maxLength={30}
                            placeholder='UserName'
                            autoComplete="off"
                            {...register("userName")}
                        />
                        {
                            errors.userName &&
                            <ErrMessageDiv>
                                {errors.userName.message}
                            </ErrMessageDiv>
                        }
                    </InputRowDiv>
                    <InputRowDiv>
                        <InputTitleDiv>
                            生年月日
                        </InputTitleDiv>
                        <BirthDayDiv>
                            <Select
                                {...register("birthday.year")}
                            >
                                {yearCoomboList.map((e) => {
                                    return (
                                        <option key={e.value} value={e.value}>
                                            {e.label}
                                        </option>
                                    );
                                })}
                            </Select>
                            <BirthDayLabelDiv>
                                年
                            </BirthDayLabelDiv>
                            <Select
                                {...register("birthday.month")}
                            >
                                {MONTH_LIST.map((e) => {
                                    return (
                                        <option key={e.value} value={e.value}>
                                            {e.label}
                                        </option>
                                    );
                                })}
                            </Select>
                            <BirthDayLabelDiv>
                                月
                            </BirthDayLabelDiv>
                            <Select
                                {...register("birthday.day")}
                            >
                                {DAY_LIST.map((e) => {
                                    return (
                                        <option key={e.value} value={e.value}>
                                            {e.label}
                                        </option>
                                    );
                                })}
                            </Select>
                            日
                        </BirthDayDiv>
                        {
                            errors.birthday?.message && (
                                <ErrMessageDiv>{errors.birthday.message}</ErrMessageDiv>
                            )
                        }
                    </InputRowDiv>
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
                            type="button"
                        />
                        <ButtonComponent
                            styleTypeNumber="RUN"
                            title={"保存"}
                            onclick={handleSaveClick}
                            style={{
                                "borderRadius": "23px",
                                "background": "black",
                                "fontSize": "1rem",
                                "marginLeft": "5%",
                            }}
                            type="button"
                        />
                    </UpdateUserInfoButtonDiv>
                </UpdateUserInfoFormDiv>
                {/* 更新確認用モーダル */}
                <ConfirmModalComponent
                    isOpenModal={isOpenModal}
                    closeModal={closeModal}
                    titleMessage={`入力した内容でユーザー情報を更新しますか？`}
                    clickOk={handleConfirm}
                />
            </Parent>
        </form>
    );
}