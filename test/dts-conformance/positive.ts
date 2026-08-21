import type { CapabilitySchema, FieldSpec, ScreenNode } from "../../src/generated/contracts.js";

const field: FieldSpec = { key: "logging", type: "boolean", label: "Write log files" };
const node: ScreenNode = { kind: "table", children: [{ kind: "row", extra: 1 }] };
const schema: CapabilitySchema = { fields: [field], sections: [{ id: "main", label: "Main", scope: "allHomes" }] };

export const checked: [FieldSpec, ScreenNode, CapabilitySchema] = [field, node, schema];
