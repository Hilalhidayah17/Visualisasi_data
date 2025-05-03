"use client";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import InsightCard from "./InsightCard";

const COLORS = ["#0088FE", "#FFBB28", "#00C49F", "#FF8042"];

export default function LocationChart({
  data,
}: {
  data: { location: string; count: number }[];
}) {
  const mostCommon = data.reduce(
    (max, item) => (item.count > max.count ? item : max),
    { location: "", count: 0 }
  );

  const insight = mostCommon.location
    ? `Mayoritas pengguna berasal dari lokasi ${mostCommon.location.toLowerCase()} dengan total ${
        mostCommon.count
      } pengguna.`
    : "Memuat data lokasi...";

  return (
    <InsightCard title="Location Type" insight={insight}>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="location"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            label
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </InsightCard>
  );
}
