// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeAll, describe, expect, test, vi } from "vitest";
import { IsLoginContext } from "../../../app/components/QueryApp";
import { BACK_ICON_Z_INDEX } from "../../../components/BackToListIcon";
import { Header } from "./Header";

beforeAll(() => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    }));
});

describe("Header", () => {

    test("詳細画面の一覧に戻る矢印より、Header自体のz-indexが大きい（サイドメニューが矢印より前面に出る）", () => {

        const { container } = render(
            <MemoryRouter>
                <IsLoginContext.Provider value={false}>
                    <Header />
                </IsLoginContext.Provider>
            </MemoryRouter>
        );

        const headerRoot = container.firstChild as HTMLElement;
        const headerZIndex = Number(getComputedStyle(headerRoot).zIndex);

        expect(headerZIndex).toBeGreaterThan(BACK_ICON_Z_INDEX);
    });
});
