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

export interface ItemShape {
  badge?: string;
  icon?: string;
  subtitle?: string;
  title: string;
}

export interface NodeStyle {
  align?: "start" | "center" | "end";
  grow?: number;
  pad?: "none" | "tight" | "normal";
  tone?: string;
  width?: string;
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

export interface SectionSpec {
  actions?: string[];
  description?: string;
  fields?: string[];
  id: string;
  label: string;
  order?: number;
  scope?: "home" | "allHomes";
}

