import { useHeaderUsagePrecautionModal } from "../../../hooks/SideMenu/UsagePrecaution/useHeaderUsagePrecautionModal";
import { HeaderUsagePrecaution } from "./HeaderUsagePrecaution";


type propsType = {
    closeMenu: () => void
}

export function HeaderUsagePrecautionModal(props: propsType) {

    console.log(`HeaderUsagePrecautionModal render`);

    const { isMobile } = useHeaderUsagePrecautionModal();

    return (
        <HeaderUsagePrecaution
            isOpen={true}
            close={props.closeMenu}
            isMobile={isMobile}
        />
    );
}