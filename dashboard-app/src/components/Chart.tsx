import type { ChartConfig } from "../types/chartMetrics.js";
import type { MetricRecord } from "../types/chartMetrics.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface ChartRendererProps {
  config: ChartConfig;
  data: MetricRecord[];
}

export function ChartRenderer({ config, data }: ChartRendererProps) {
  return <div style={{ width: "100%", height: 300 }}>
      <h3>{config.title}</h3>
         {config.type === "line" && (
        <LineChart width={800} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />

          {config.series.map((s) => (
            <Line
              key={s.key}
              dataKey={s.key}
              stroke={s.color}
              dot={false}
              name={s.label}
            />
          ))}
        </LineChart>
      )}
    </div>;
}