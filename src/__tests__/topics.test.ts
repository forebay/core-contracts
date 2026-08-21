import { ECOSYSTEM_TOPICS } from "@intisy-ai/api";
import { expect, it } from "vitest";
import * as keys from "../generated/contracts.keys.js";

/**
 * A wrong topic id compiles, type-checks, and silently never fires, so it needs a check that is not
 * the compiler. This reads api's own list on purpose while that list still exists; phase 7 deletes
 * it and this test goes with it.
 */
it("mints exactly the ecosystem topics api lists, with the same ids", () => {
  const minted = Object.values(keys)
    .filter((value): value is { id: string } => typeof value === "object" && value !== null && "id" in value)
    .map((value) => value.id);
  for (const topic of ECOSYSTEM_TOPICS) expect(minted).toContain(topic);
});
