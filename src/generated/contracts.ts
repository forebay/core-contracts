// Generated from Java sources. Do not edit.

export interface ActionResult {
  message?: string;
  ok: boolean;
  refresh?: boolean;
}

export interface ActionSpec {
  confirm?: string;
  danger?: boolean;
  description?: string;
  id: string;
  label: string;
}

export interface CapabilitySchema {
  actions?: ActionSpec[];
  data?: DataSpec;
  fields?: FieldSpec[];
  sections?: SectionSpec[];
}

export interface Column {
  key: string;
  label?: string;
  tone?: "normal" | "muted" | "mono" | "old" | "new" | (string & {});
  truncate?: number;
}

export interface CommandDef {
  argumentHint?: string;
  body?: string;
  description: string;
  name: string;
  shell?: string;
}

export interface CommandsCapability {
  commands(): CommandDef[] | Promise<CommandDef[]>;
}

export interface ConfigHistoryCapability {
  history(): Promise<HistoryEntry[]>;
  history(query: HistoryQuery): Promise<HistoryEntry[]>;
  restore(entryId: string): Promise<ActionResult>;
}

export interface CrossAppSyncCapability {
  sync(): Promise<SyncResult>;
}

export interface CustomEndpoint {
  baseUrl: string;
  id: string;
  label: string;
}

export interface CustomEndpointsCapability {
  endpoints(): Promise<CustomEndpoint[]>;
}

export interface DataSpec {
  paths?: string[];
}

export interface FieldOption {
  label: string;
  value: string;
}

export interface FieldSpec {
  description?: string;
  group?: string;
  itemType?: "string" | "number";
  key: string;
  label?: string;
  max?: number;
  min?: number;
  options?: FieldOption[];
  placeholder?: string;
  step?: number;
  type: "boolean" | "number" | "string" | "secret" | "select" | "multiline" | "list";
}

export interface HistoryEntry {
  files: string[];
  id: string;
  summary: string;
  ts: number;
}

export interface HistoryQuery {
  cursor?: string;
  home?: string;
  limit?: number;
}

export interface ItemShape {
  badge?: string;
  icon?: string;
  subtitle?: string;
  title: string;
}

export interface ManagedPlugin {
  enabled: boolean;
  id: string;
  url?: string;
  version?: string;
}

export interface MarketplaceEntry {
  description?: string;
  displayName?: string;
  id: string;
  topics?: string[];
  url: string;
}

export interface MarketplaceSourceCapability {
  entries(): Promise<MarketplaceEntry[]>;
}

export interface NodeStyle {
  align?: "start" | "center" | "end";
  grow?: number;
  pad?: "none" | "tight" | "normal";
  tone?: string;
  width?: string;
}

export interface PluginManagementCapability {
  install(url: string): Promise<ActionResult>;
  list(): Promise<ManagedPlugin[]>;
  remove(id: string): Promise<ActionResult>;
  repair(id: string): Promise<ActionResult>;
  update(id: string): Promise<ActionResult>;
}

export interface ScreenActionRequest {
  actionId: string;
  home?: string;
  input?: Record<string, unknown>;
  screenId: string;
}

export interface ScreenData {
  sources: Record<string, unknown>;
}

export interface ScreenDataRequest {
  home?: string;
  refresh?: boolean;
  screenId: string;
}

export interface ScreenNode {
  children?: ScreenNode[];
  kind: string;
  style?: NodeStyle;
  [prop: string]: unknown;
}

export interface ScreenSpec {
  glyph?: string;
  id: string;
  label: string;
  layout: ScreenNode;
  order?: number;
  refreshOn?: string[];
  scope?: "home" | "allHomes";
  surfaces?: Record<string, ScreenNode>;
}

export interface ScreensCapability {
  invoke(request: ScreenActionRequest): Promise<ActionResult>;
  read(request: ScreenDataRequest): Promise<ScreenData>;
  screens(): ScreenSpec[] | Promise<ScreenSpec[]>;
}

export interface SectionSpec {
  actions?: string[];
  description?: string;
  fields?: string[];
  id: string;
  label: string;
  order?: number;
  scope?: "home" | "allHomes";
}

export interface SettingsCapability {
  run(actionId: string): Promise<ActionResult>;
  run(actionId: string, input: Record<string, unknown>): Promise<ActionResult>;
  schema(): CapabilitySchema | Promise<CapabilitySchema>;
}

export interface SyncResult {
  files: string[];
  homes: string[];
  plugins: string[];
}

