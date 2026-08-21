// Generated from Java sources. Do not edit.

import type { CapabilityType, ServiceType } from "@intisy-ai/api/contract";
import type { AccountsService, ActivityService, CommandsCapability, ConfigHistoryCapability, CrossAppSyncCapability, CustomEndpointsCapability, MarketplaceSourceCapability, PluginManagementCapability, RoutingService, ScreensCapability, SettingsCapability } from "./contracts.js";

export const ACCOUNTS: ServiceType<AccountsService> = { id: "accounts" };
export const ACTIVITY: ServiceType<ActivityService> = { id: "activity" };
export const COMMANDS: CapabilityType<CommandsCapability> = { id: "commands" };
export const CONFIG_HISTORY: CapabilityType<ConfigHistoryCapability> = { id: "config-history" };
export const CROSS_APP_SYNC: CapabilityType<CrossAppSyncCapability> = { id: "cross-app-sync" };
export const CUSTOM_ENDPOINTS: CapabilityType<CustomEndpointsCapability> = { id: "custom-endpoints" };
export const MARKETPLACE_SOURCE: CapabilityType<MarketplaceSourceCapability> = { id: "marketplace-source" };
export const PLUGIN_MANAGEMENT: CapabilityType<PluginManagementCapability> = { id: "plugin-management" };
export const ROUTING: ServiceType<RoutingService> = { id: "routing" };
export const SCREENS: CapabilityType<ScreensCapability> = { id: "screens" };
export const SETTINGS: CapabilityType<SettingsCapability> = { id: "settings" };
