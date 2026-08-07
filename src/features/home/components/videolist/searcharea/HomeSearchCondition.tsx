import { MdTune } from "react-icons/md";
import styled from "styled-components";
import { LabeledFieldRow } from "../../../../../components/LabeledFieldRow";
import { ModalPortal } from "../../../../../components/ModalPortal";
import { Selectbox } from "../../../../../components/Selectbox";
import { VIDEO_TYPE_LIST } from "../../../const/HomeConst";
import { useHomeSearchConditionMain } from "../../../hooks/videolist/searcharea/useHomeSearchConditionMain";


const ConditionAreaDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 6%;
  padding-right: 6%;
`;

const LABEL_WIDTH = "4.5em";
const ROW_MARGIN_BOTTOM = "13%";

type propsType = {
    isOpen: boolean;
    close: () => void;
    isMobile: boolean;
}

export function HomeSearchCondition(props: propsType) {

    console.log("HomeSearchCondition render");

    const { isMobile } = props;

    const {
        selectVideoCategory,
        selectedVideoType,
        setSelectedVideoType,
        selectedVideoCategory,
        setSelectedVideoCategory, } = useHomeSearchConditionMain();

    return (
        <ModalPortal
            isOpen={props.isOpen}
            modalWidth={isMobile ? "93%" : "45%"}
            modalMinHeight="45%"
            isCloseOuter={true}
            close={props.close}
            title="条件を指定"
            titleIcon={MdTune}
        >
            <ConditionAreaDiv>
                <LabeledFieldRow
                    label="種別"
                    isMobile={isMobile}
                    labelStyle={{ width: LABEL_WIDTH }}
                    outerStyle={{ marginBottom: ROW_MARGIN_BOTTOM }}
                >
                    <Selectbox
                        options={VIDEO_TYPE_LIST}
                        value={selectedVideoType || VIDEO_TYPE_LIST[0].value}
                        onChange={setSelectedVideoType}
                        width="auto"
                        outerStyle={{ flex: 1, minWidth: 0 }}
                        height={isMobile ? "30px" : "39px"}
                        indicatorPadding={isMobile ? "2px" : undefined}
                        fontSize={isMobile ? "12px" : undefined}
                        isSearchable={!isMobile}
                    />
                </LabeledFieldRow>
                {
                    selectVideoCategory && selectVideoCategory.length > 0 &&
                    <LabeledFieldRow
                        label="カテゴリ"
                        isMobile={isMobile}
                        labelStyle={{ width: LABEL_WIDTH }}
                        outerStyle={{ marginBottom: ROW_MARGIN_BOTTOM }}
                    >
                        <Selectbox
                            options={selectVideoCategory}
                            value={selectedVideoCategory || selectVideoCategory[0].value}
                            onChange={setSelectedVideoCategory}
                            width="auto"
                            outerStyle={{ flex: 1, minWidth: 0 }}
                            height={isMobile ? "30px" : "39px"}
                            indicatorPadding={isMobile ? "2px" : undefined}
                            fontSize={isMobile ? "12px" : undefined}
                            isSearchable={!isMobile}
                        />
                    </LabeledFieldRow>
                }
            </ConditionAreaDiv>
        </ModalPortal>
    );
}
