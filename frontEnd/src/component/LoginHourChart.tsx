"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import InsightCard from "./InsightCard";

export default function LoginHourChart({
  data,
}: {
  data: { hour: string; count: number }[];
}) {
  const mostActive = data.reduce(
    (max, item) => (item.count > max.count ? item : max),
    { hour: "", count: 0 }
  );

  const insight = mostActive.hour
    ? `Jam login paling aktif adalah pukul ${mostActive.hour} dengan total ${mostActive.count} pengguna.`
    : "Memuat data login...";

  return (
    <InsightCard title="Login Activity by Hour" insight={insight}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </InsightCard>
  );
}
