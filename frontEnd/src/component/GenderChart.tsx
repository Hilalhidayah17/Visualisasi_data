"use client";

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import InsightCard from "./InsightCard";

type GenderData = {
  gender: string;
  count: number;
};

const COLORS = ["#0088FE", "#FF6384"];

export default function GenderChart({ data }: { data: GenderData[] }) {
  const topGender = data.reduce(
    (max, item) => (item.count > max.count ? item : max),
    { gender: "", count: 0 }
  );

  const insight = topGender.gender
    ? `Sebagian besar pengguna adalah ${topGender.gender.toLowerCase()} dengan total ${
        topGender.count
      } pengguna.`
    : "Memuat data gender...";

  return (
    <InsightCard title="Gender Distribution" insight={insight}>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="gender"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </InsightCard>
  );
}
