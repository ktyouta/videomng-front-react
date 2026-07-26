import { describe, test, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const srcDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(srcDir, "..");
const env: Record<string, string> = JSON.parse(
    readFileSync(path.join(rootDir, "src", "env.json"), "utf-8")
);

describe("Pages Functions ルーティング", () => {
    test("env.jsonの各エンドポイントに対応するプロキシ関数が存在すること", () => {
        const prefixes = new Set(Object.values(env).map((endpoint) => endpoint.split("/")[1]));

        for (const prefix of prefixes) {
            const functionPath = path.join(rootDir, "functions", prefix, "[[path]].ts");
            expect(existsSync(functionPath)).toBe(true);
        }
    });
});
