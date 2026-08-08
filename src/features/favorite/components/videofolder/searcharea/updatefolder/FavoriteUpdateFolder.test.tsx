// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FavoriteUpdateFolder } from "./FavoriteUpdateFolder";
import { FolderMasterType } from "../../../../types/videolist/FolderMasterType";

const capturedPropsList: Record<string, unknown>[] = [];

// テストごとに切り替える画面サイズ判定
let mockIsPcLess = false;

vi.mock("../../../../../../components/ColorPickerTwitter", () => ({
    ColorPickerTwitter: (props: Record<string, unknown>) => {
        capturedPropsList.push(props);
        return null;
    },
}));

vi.mock("../../../../../../components/ModalPortal", () => ({
    ModalPortal: (props: { children?: React.ReactNode }) => props.children,
}));

vi.mock("../../../../hooks/videofolder/searcharea/updatefolder/useFavoriteUpdateFolderMain", () => ({
    useFavoriteUpdateFolderMain: () => ({
        execute: () => { },
        folderName: "テストフォルダ",
        setFolderName: () => { },
        folderColor: "#FF6900",
        setFolderColor: () => { },
        isMobile: mockIsPcLess,
        isPcLess: mockIsPcLess,
    }),
}));

const folder: FolderMasterType = {
    id: 1,
    name: "テストフォルダ",
    folderColor: "#FF6900",
    parentId: "0",
};

describe("FavoriteUpdateFolder", () => {

    test("PC未満（スマホ・タブレット）ではカラーパレットがはみ出さないよう、ColorPickerTwitterのwidthを90%で渡す", () => {

        mockIsPcLess = true;
        capturedPropsList.length = 0;

        render(
            <FavoriteUpdateFolder
                isOpen={true}
                close={() => { }}
                folder={folder}
                isMobile={true}
            />
        );

        const passedProps = capturedPropsList[capturedPropsList.length - 1];

        expect(passedProps.width).toBe("90%");
    });

    test("PCではカラーパレットのwidthを33%で渡す", () => {

        mockIsPcLess = false;
        capturedPropsList.length = 0;

        render(
            <FavoriteUpdateFolder
                isOpen={true}
                close={() => { }}
                folder={folder}
                isMobile={false}
            />
        );

        const passedProps = capturedPropsList[capturedPropsList.length - 1];

        expect(passedProps.width).toBe("33%");
    });
});
