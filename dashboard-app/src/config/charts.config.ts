import type { ChartConfig } from "../types/chartMetrics.js";

export const chartsConfig: ChartConfig[] = [
  {
    id: "cpu",
    title: "CPU Usage",
    type: "line",
    unit: "%",
    series: [
      { key: "cpu", label: "CPU", color: "#ff4d4f" }
    ]
  },
  {
    id: "memory",
    title: "Memory Usage",
    type: "line",
    unit: "%",
    series: [
      { key: "memory", label: "Memory", color: "#1890ff" }
    ]
  },
  {
    id: "disk",
    title: "Disk IO",
    type: "line",
    series: [
      { key: "diskRead", label: "Disk Read", color: "#52c41a" },
      { key: "diskWrite", label: "Disk Write", color: "#faad14" }
    ]
  },
  {
    id: "network",
    title: "Network Traffic",
    type: "line",
    series: [
      { key: "ingress", label: "Ingress", color: "#722ed1" },
      { key: "egress", label: "Egress", color: "#13c2c2" }
    ]
  }
];
