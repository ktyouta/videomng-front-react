import { useHeaderHowToUseModal } from "../../../hooks/SideMenu/HowToUse/useHeaderHowToUseModal";
import { HeaderHowToUse } from "./HeaderHowToUse";


type propsType = {
    closeMenu: () => void
}

export function HeaderHowToUseModal(props: propsType) {

    console.log(`HeaderSideMenuList render`);

    const { isMobile } = useHeaderHowToUseModal();

    return (
        <HeaderHowToUse
            isOpen={true}
            close={props.closeMenu}
            isMobile={isMobile}
        />
    );
}