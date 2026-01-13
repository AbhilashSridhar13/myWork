import { memo } from "react";
import type { ChartConfig } from "../types/chartMetrics.js";
import type { chartKeys } from "../types/chartMetrics.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface ChartRendererProps {
  config: ChartConfig;
  data: chartKeys[];
}

export const ChartRenderer = memo (function ChartRenderer({
  config,
  data,
}: ChartRendererProps) {
  return <div style={{ width: "100%", height: 300 }}>
      <h3>{config.title}</h3>
         {config.type === "line" && (
        <LineChart width={800} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
  dataKey="timestamp"
  tickFormatter={(value) =>
    new Date(value).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  }
   label={{ value: "Time", position: "insideBottom", offset: -5 }}
/>
          <YAxis  label={{
    value: config.unit ? `${config.title} (${config.unit})` : config.title,
    angle: -90,
    position: "insideLeft",
  }}/>
          <Tooltip labelFormatter={(label) =>
  new Date(label).toLocaleString([], {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  })
}
 />

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

})