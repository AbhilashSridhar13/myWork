export type MetricKey =
  | 'cpu'
  | 'memory'
  | 'diskRead'
  | 'diskWrite'
  | 'ingress'
  | 'egress';

  export interface MetricRecord {
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
  key: MetricKey;     // cpu, memory, diskRead, etc.
  label: string;      // Display name
  color: string;
}

export interface ChartConfig {
  id: string;
  title: string;
  type: ChartType;
  series: ChartSeriesConfig[];
  unit?: string;
}