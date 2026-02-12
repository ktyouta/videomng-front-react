import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../../components/ButtonComponent";
import { ErrorMessageField } from "../../../components/ErrorMessageField";
import { LoadingCenter } from "../../../components/LoadingCenter";
import { ModalPortalConfirm } from "../../../components/ModalPortalConfirm";
import { MEDIA } from "../../../consts/MediaConst";
import { OverlayDiv } from "../../../styles/styledcomponent/OverlayDiv";
import { RhfTextbox } from "../../../styles/styledcomponent/RhfTextbox";
import { useUpdateUserPassword } from "../hooks/useUpdateUserPassword";


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

const FormDiv = styled.div`
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

const FormButtonDiv = styled.div`
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
    margin-bottom: 6%;
    color: #ff6b6b;
    white-space: pre-line;
`;

const InputRowDiv = styled.div`
    margin-bottom: 8%;
`;

const InputTitleDiv = styled.div`
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    margin-bottom: 8px;
`;



export function UpdateUserPassword() {

    console.log("UpdateUserPassword render");

    const {
        errMessage,
        clickCancel,
        isOpenModal,
        closeModal,
        isLoading,
        register,
        errors,
        handleSaveClick,
        handleConfirm, } = useUpdateUserPassword();

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
            <FormDiv>
                <TitleDiv>
                    パスワードの変更
                </TitleDiv>
                {
                    errMessage &&
                    <ErrMessageDiv>
                        {errMessage}
                    </ErrMessageDiv>
                }
                <InputRowDiv>
                    <InputTitleDiv>
                        現在のパスワード
                    </InputTitleDiv>
                    <RhfTextbox
                        width="98%"
                        height="33px"
                        type="password"
                        maxLength={30}
                        autoComplete="off"
                        {...register("currentPassword")}
                    />
                    <ErrorMessageField
                        message={errors.currentPassword?.message}
                        style={{
                            marginBottom: `6%`,
                            marginTop: `3%`,
                        }}
                    />
                </InputRowDiv>
                <InputRowDiv>
                    <InputTitleDiv>
                        新しいパスワード(3～30文字)
                    </InputTitleDiv>
                    <RhfTextbox
                        width="98%"
                        height="33px"
                        type="password"
                        maxLength={30}
                        autoComplete="off"
                        {...register("newPassword")}
                    />
                    <ErrorMessageField
                        message={errors.newPassword?.message}
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
                <FormButtonDiv>
                    <ButtonComponent
                        variant="grad-gray"
                        shape="rounded"
                        onClick={clickCancel}
                        style={{
                            minWidth: "100px"
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
                            minWidth: "100px",
                        }}
                    >
                        保存
                    </ButtonComponent>
                </FormButtonDiv>
            </FormDiv>
            <ModalPortalConfirm
                isOpenModal={isOpenModal}
                closeModal={closeModal}
                titleMessage={`入力した内容でパスワードを更新しますか？`}
                clickOk={handleConfirm}
            />
        </Parent>
    );
}