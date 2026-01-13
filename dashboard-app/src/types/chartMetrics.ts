export type keyMetrics =
  | 'cpu'
  | 'memory'
  | 'diskRead'
  | 'diskWrite'
  | 'ingress'
  | 'egress';

  export interface chartKeys {
  timestamp: number;
  cpu: number;
  memory: number;
  diskRead: number;
  diskWrite: number;
  ingress: number;
  egress: number;
}

export type ChartType = "line" | "area";

export interface ChartSeriesConfig {
  key: keyMetrics;
  label: string;
  color: string;
}

export interface ChartConfig {
  id: string;
  title: string;
  type: ChartType;
  series: ChartSeriesConfig[];
  unit?: string;
}