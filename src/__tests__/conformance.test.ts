import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { expect, it } from "vitest";

const repo = fileURLToPath(new URL("../..", import.meta.url));

function typeCheck(file: string): { ok: boolean; output: string } {
  try {
    execFileSync(process.execPath, [
      join(repo, "node_modules", "typescript", "bin", "tsc"),
      // TypeScript 6 refuses to name files on the command line while a tsconfig.json is in reach
      // (TS5112), and each fixture must be checked ALONE: one project covering both would fail on
      // the negative fixture and say nothing about the positive one.
      "--ignoreConfig",
      "--noEmit", "--strict", "--target", "ESNext",
      "--module", "NodeNext", "--moduleResolution", "NodeNext",
      join(repo, "test", "dts-conformance", file),
    ], { cwd: repo, encoding: "utf8" });
    return { ok: true, output: "" };
  } catch (failure) {
    return { ok: false, output: String((failure as { stdout?: string }).stdout ?? failure) };
  }
}

it("accepts a correct implementation of the emitted contracts", () => {
  expect(typeCheck("positive.ts")).toEqual({ ok: true, output: "" });
});

it("rejects a value that is not one of a field type's literals", () => {
  const result = typeCheck("negative-wrong-impl.ts");
  expect(result.ok).toBe(false);
  expect(result.output).toContain("TS2322");
});
