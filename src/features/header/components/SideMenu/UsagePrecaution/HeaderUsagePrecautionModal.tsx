import { ModalPortal } from "../../../../../components/ModalPortal";
import { useHeaderUsagePrecautionModal } from "../../../hooks/SideMenu/UsagePrecaution/useHeaderUsagePrecautionModal";
import { HeaderUsagePrecaution } from "./HeaderUsagePrecaution";


type propsType = {
    closeMenu: () => void
}

export function HeaderUsagePrecautionModal(props: propsType) {

    console.log(`HeaderUsagePrecautionModal render`);

    const { isMobile } = useHeaderUsagePrecautionModal();

    return (
        <ModalPortal
            isOpen={true}
            modalWidth={isMobile ? "86%" : "45%"}
            modalMinHeight="70%"
            isCloseOuter={true}
            close={props.closeMenu}
        >
            <HeaderUsagePrecaution
                close={props.closeMenu}
            />
        </ModalPortal>
    );
}