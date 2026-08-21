import type { CapabilityType, ServiceType } from "@intisy-ai/api/contract";
import type {
  ActivityService,
  CapabilitySchema,
  FieldSpec,
  ScreenNode,
  ScreensCapability,
  SettingsCapability,
} from "../../src/generated/contracts.js";
import { ACTIVITY, SCREENS, SETTINGS } from "../../src/generated/contracts.keys.js";

const field: FieldSpec = { key: "logging", type: "boolean", label: "Write log files" };
const node: ScreenNode = { kind: "table", children: [{ kind: "row", extra: 1 }] };
const schema: CapabilitySchema = { fields: [field], sections: [{ id: "main", label: "Main", scope: "allHomes" }] };

const screensKey: CapabilityType<ScreensCapability> = SCREENS;
const settingsKey: CapabilityType<SettingsCapability> = SETTINGS;
const activityKey: ServiceType<ActivityService> = ACTIVITY;

export const checked: [FieldSpec, ScreenNode, CapabilitySchema] = [field, node, schema];
export const keys: [CapabilityType<ScreensCapability>, CapabilityType<SettingsCapability>] = [screensKey, settingsKey];
export const services: [ServiceType<ActivityService>] = [activityKey];
