import { ModalPortal } from "../../../../../components/ModalPortal";
import { useHeaderHowToUseModal } from "../../../hooks/SideMenu/HowToUse/useHeaderHowToUseModal";
import { HeaderHowToUse } from "./HeaderHowToUse";


type propsType = {
    closeMenu: () => void
}

export function HeaderHowToUseModal(props: propsType) {

    console.log(`HeaderSideMenuList render`);

    const { isMobile } = useHeaderHowToUseModal();

    return (
        <ModalPortal
            isOpen={true}
            modalWidth={isMobile ? "86%" : "45%"}
            modalMinHeight="70%"
            isCloseOuter={true}
            close={props.closeMenu}
        >
            <HeaderHowToUse
                close={props.closeMenu}
            />
        </ModalPortal>
    );
}