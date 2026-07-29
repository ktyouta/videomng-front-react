// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MultiSelectbox } from "./MultiSelectbox";

const capturedPropsList: Record<string, unknown>[] = [];

vi.mock("react-select", async () => {
    const actual = await vi.importActual<typeof import("react-select")>("react-select");
    return {
        ...actual,
        default: (props: Record<string, unknown>) => {
            capturedPropsList.push(props);
            return null;
        },
    };
});

describe("MultiSelectbox", () => {

    test("スマホでオプション選択直後にメニューが閉じてしまわないよう、blurInputOnSelectをfalseに固定して渡す", () => {

        capturedPropsList.length = 0;

        render(
            <MultiSelectbox
                options={[{ value: "1", label: "選択肢1" }]}
                value={[]}
                width="auto"
                height="30px"
            />
        );

        const passedProps = capturedPropsList[capturedPropsList.length - 1];

        expect(passedProps.blurInputOnSelect).toBe(false);
    });
});
