import { useMemo } from "react";
import type { chartKeys } from "../types/chartMetrics.js";

function roundTo2(value: number) {
  return Math.round(value * 100) / 100;
}


export type TimeRange =
  | '1H'
  | '6H'
  | '24H'

const RANGE_MS: Record<TimeRange, number> = {
  "1H": 60 * 60 * 1000,
  "6H": 6 * 60 * 60 * 1000,
  "24H": 24 * 60 * 60 * 1000,
};


/* we are using the downsampling which is enough to control the datasets and keep the architecture simple 
we can later add aggregation strategies into this if highter averaging is required*/

export function useProcessedMetrics(
  rawData: chartKeys[],
  range: TimeRange,
  maxPoints = 300
): chartKeys[] {
  return useMemo(() => {

    // the cutoff timestamp based on the selected time range
    const cutoff = Date.now() - RANGE_MS[range];

    // Keep only data points whose timestamp falls within the selected range
    const sliced = rawData.filter(d => d.timestamp >= cutoff);

    // If the sliced dataset is already small enough, skip downsampling and just round values for readability.
    if (sliced.length <= maxPoints) {
      return sliced.map(d => ({
        ...d,
        cpu: roundTo2(d.cpu),
        memory: roundTo2(d.memory),
        diskRead: roundTo2(d.diskRead),
        diskWrite: roundTo2(d.diskWrite),
        ingress: roundTo2(d.ingress),
        egress: roundTo2(d.egress),
      }));
    }


    // Apply downsampling by keeping every Nth point
    const step = Math.ceil(sliced.length / maxPoints);
    return sliced
      .filter((_, i) => i % step === 0)
      .map(d => ({
        ...d,
        cpu: roundTo2(d.cpu),
        memory: roundTo2(d.memory),
        diskRead: roundTo2(d.diskRead),
        diskWrite: roundTo2(d.diskWrite),
        ingress: roundTo2(d.ingress),
        egress: roundTo2(d.egress),
      }));
  }, [rawData, range, maxPoints]);
}