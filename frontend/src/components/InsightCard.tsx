"use client";

import { ReactNode } from "react";

export default function InsightCard({
  title,
  children,
  insight,
}: {
  title: string;
  children: ReactNode;
  insight: string;
}) {
  return (
    <div className="bg-zinc-900 p-4 rounded-2xl shadow-lg text-white">
      <h3 className="text-lg font-semibold mb-3 text-center">{title}</h3>
      <div className="h-[250px]">{children}</div>
      <p className="mt-4 text-sm text-blue-300 italic text-center">{insight}</p>
    </div>
  );
}
