import { useMemo } from "react";
import type { MetricRecord } from "../types/chartMetrics.js";


export type TimeRange =
  | '1H'
  | '6H'
  | '24H'
  | '7D';

const RANGE_MS: Record<TimeRange, number> = {
  "1H": 60 * 60 * 1000,
  "6H": 6 * 60 * 60 * 1000,
  "24H": 24 * 60 * 60 * 1000,
  "7D": 7 * 24 * 60 * 60 * 1000,
};

export function useProcessedMetrics(
  rawData: MetricRecord[],
  range: TimeRange,
  maxPoints = 300
): MetricRecord[] {
  return useMemo(() => {
    const cutoff = Date.now() - RANGE_MS[range];

    const sliced = rawData.filter(d => d.timestamp >= cutoff);
    if (sliced.length <= maxPoints) return sliced;

    const step = Math.ceil(sliced.length / maxPoints);
    return sliced.filter((_, i) => i % step === 0);
  }, [rawData, range, maxPoints]);
}