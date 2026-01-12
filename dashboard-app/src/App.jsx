import { useMemo, useState } from 'react';
import { generateMetricsData } from "./data/sampleData";
import { useProcessedMetrics } from "./hooks/processConfigToMapData";
import { chartsConfig } from "./config/charts.config";
import { ChartRenderer } from "./components/Chart";

function App() {
  
  const rawData = useMemo(() => {
    return generateMetricsData(100_000);
  }, []);

  // Time range state
  const [range, setRange] = useState("1H");

  // Processed, safe-to-render data
  const processedData = useProcessedMetrics(rawData, range);

  console.log("Raw data size:", rawData.length);

  return (
       <div style={{ padding: 16 }}>
      <h1>Config-Driven Metrics Dashboard</h1>

      {/* Simple range selector */}
      <select value={range} onChange={(e) => setRange(e.target.value)}>
        <option value="1H">Last 1 Hour</option>
        <option value="6H">Last 6 Hours</option>
        <option value="24H">Last 24 Hours</option>
        <option value="7D">Last 7 Days</option>
      </select>

      {/* 4️⃣ Render charts purely from config */}
      {chartsConfig.map((config) => (
        <ChartRenderer
          key={config.id}
          config={config}
          data={processedData}
        />
      ))}
    </div>
  )
}

export default App
