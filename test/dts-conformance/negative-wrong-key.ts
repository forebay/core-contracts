// Expected to FAIL type-checking: a screens key is not a settings key. The phantom marker on
// CapabilityType is what makes this fail; without it TypeScript's structural matching would accept
// it and the typed key would enforce nothing.
import type { CapabilityType } from "@intisy-ai/api/contract";
import type { SettingsCapability } from "../../src/generated/contracts.js";
import { SCREENS } from "../../src/generated/contracts.keys.js";

export const wrong: CapabilityType<SettingsCapability> = SCREENS;
