// Expected to FAIL type-checking: "bool" is not a FieldType. The conformance test asserts tsc
// rejects this file; an emitted surface that accepts it has stopped enforcing.
import type { FieldSpec } from "../../src/generated/contracts.js";

export const wrong: FieldSpec = { key: "logging", type: "bool" };
