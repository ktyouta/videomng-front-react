import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../../components/ButtonComponent";
import { ErrorMessageField } from "../../../components/ErrorMessageField";
import { LoadingCenter } from "../../../components/LoadingCenter";
import { ModalPortalConfirm } from "../../../components/ModalPortalConfirm";
import { DAY_LIST, MONTH_LIST, } from "../../../consts/CommonConst";
import { MEDIA } from "../../../consts/MediaConst";
import { OverlayDiv } from "../../../styles/styledcomponent/OverlayDiv";
import { RhfSelect } from "../../../styles/styledcomponent/RhfSelect";
import { RhfTextbox } from "../../../styles/styledcomponent/RhfTextbox";
import { useUpdateUserInfo } from "../hooks/useUpdateUserInfo";


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

const UpdateUserInfoFormDiv = styled.div`
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

const UpdateUserInfoButtonDiv = styled.div`
    margin-top: 9%;
`;

const TitleDiv = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 8%;
`;

const ErrMessageDiv = styled.div`
    font-size: 15px;
    margin-top: 3%;
    margin-bottom: 6%;
    color: #ff6b6b;
    white-space: pre-line;
`;

const BirthDayDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
`;

const BirthDayLabelDiv = styled.div`
  color: rgba(255, 255, 255, 0.7);
`;

const InputRowDiv = styled.div`
    margin-bottom: 8%;
`;

const InputTitleDiv = styled.div`
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    margin-bottom: 8px;
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
                <UpdateUserInfoButtonDiv>
                    <ButtonComponent
                        variant="grad-gray"
                        shape="rounded"
                        onClick={clickCancel}
                        style={{
                            minWidth: "100px",
                        }}
                    >
                        キャンセル
                    </ButtonComponent>
                    <ButtonComponent
                        variant="blue"
                        shape="rounded"
                        onClick={handleSaveClick}
                        style={{
                            marginLeft: "5%",
                            minWidth: "100px"
                        }}
                    >
                        保存
                    </ButtonComponent>
                </UpdateUserInfoButtonDiv>
            </UpdateUserInfoFormDiv>
            {/* 更新確認用モーダル */}
            <ModalPortalConfirm
                isOpenModal={isOpenModal}
                closeModal={closeModal}
                titleMessage={`入力した内容でユーザー情報を更新しますか？`}
                clickOk={handleConfirm}
            />
        </Parent>
    );
}