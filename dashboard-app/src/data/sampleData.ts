
import type { chartKeys } from "../types/chartMetrics.js";

// function to generate rawdata for the charts to render
export function generateMetricsData(
  count: number,
  // time span considered with 5s difference
  stepMs = 5000
): chartKeys[] {

  // using the current timestamp and substracting the time span for time range slicing
  const startTime = Date.now() - count * stepMs;

  return Array.from({ length: count }, (_, i) => ({
    timestamp: startTime + i * stepMs,
    cpu: Math.random() * 100,
    memory: Math.random() * 100,
    diskRead: Math.random() * 2000,
    diskWrite: Math.random() * 2000,
    ingress: Math.random() * 5000,
    egress: Math.random() * 5000,
  }));
}