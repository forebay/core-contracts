import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { expect, it } from "vitest";

const repo = fileURLToPath(new URL("../..", import.meta.url));

it("keeps the committed surface identical to what the java emits", () => {
  const scratch = mkdtempSync(join(tmpdir(), "contracts-emit-"));
  execFileSync(process.execPath, [
    join(repo, "api", "scripts", "emit-dts.mjs"),
    "--java-dir", join(repo, "java"),
    "--module", ":contracts",
    "--module-dir", "contracts",
    "--out", scratch,
  ], { cwd: repo, stdio: "inherit" });

  const emitted = readdirSync(scratch).sort();
  const committed = readdirSync(join(repo, "src", "generated")).sort();
  expect(emitted).toEqual(committed);
  for (const name of emitted) {
    expect(readFileSync(join(scratch, name), "utf8")).toBe(
      readFileSync(join(repo, "src", "generated", name), "utf8"),
    );
  }
});
