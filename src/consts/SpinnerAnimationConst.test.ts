import { describe, expect, it } from "vitest";
import { SPINNER_ANIMATION } from "./SpinnerAnimationConst";

describe("SPINNER_ANIMATION", () => {
    it("実行時エラーを起こさずアニメーション文字列を取得できる", () => {
        expect(typeof SPINNER_ANIMATION).toBe("string");
    });
});
