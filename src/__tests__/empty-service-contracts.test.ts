import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { expect, it } from "vitest";

const repo = fileURLToPath(new URL("../..", import.meta.url));

function typeChecks(source: string): boolean {
  const scratch = join(mkdtempSync(join(tmpdir(), "contracts-probe-")), "probe.ts");
  writeFileSync(scratch, source, "utf8");
  try {
    execFileSync(process.execPath, [
      join(repo, "node_modules", "typescript", "bin", "tsc"),
      "--ignoreConfig",
      "--noEmit", "--strict", "--target", "ESNext",
      "--module", "NodeNext", "--moduleResolution", "NodeNext",
      scratch,
    ], { cwd: repo, encoding: "utf8" });
    return true;
  } catch {
    return false;
  }
}

/**
 * Two service contracts that are both empty are structurally identical, so their typed keys do NOT
 * discriminate: the phantom marker constrains assignment only when the parameters differ in shape.
 * This asserts the measured behaviour rather than the hoped-for one, and it is a tripwire: filling
 * either contract in makes the keys start discriminating and turns this test red, which is the
 * moment to delete it.
 */
it("does not discriminate the keys of two contracts that are both empty", () => {
  const swap = [
    `import type { ServiceType } from "${join(repo, "api", "generated", "api.js").replace(/\\/g, "/")}";`,
    `import type { AccountsService, RoutingService } from "${join(repo, "src", "generated", "contracts.js").replace(/\\/g, "/")}";`,
    `import { ACCOUNTS } from "${join(repo, "src", "generated", "contracts.keys.js").replace(/\\/g, "/")}";`,
    "export const swapped: ServiceType<RoutingService> = ACCOUNTS;",
    "declare const accounts: AccountsService;",
    "export const alsoSwapped: RoutingService = accounts;",
  ].join("\n");
  expect(typeChecks(swap)).toBe(true);
});
