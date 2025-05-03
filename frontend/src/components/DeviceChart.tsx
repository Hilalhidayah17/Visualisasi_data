"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import InsightCard from "./InsightCard";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

type DeviceData = {
  brand: string;
  count: number;
}[];

export default function DeviceChart({ data }: { data: DeviceData }) {
  const topBrand = data?.[0];

  return (
    <InsightCard
      title="Top 5 Devices"
      insight={
        topBrand
          ? `Brand perangkat paling sering digunakan adalah ${topBrand.brand} dengan total ${topBrand.count} pengguna.`
          : "Memuat data perangkat..."
      }
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="brand" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count">
            {data.map((_, index) => (
              <Cell key={`bar-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </InsightCard>
  );
}
