import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CHART_DATA } from "./Membership.constants";

export const Membership = () => (
  <div className="rounded-3xl border-2 border-solid border-purple-gray p-membership">
    <p className="text-lg font-semibold leading-6 mb-4 text-white">
      Membership
    </p>
    <ResponsiveContainer width="100%" height={120}>
      <BarChart data={CHART_DATA} margin={{ left: -2 }}>
        <Bar
          dataKey="uv"
          shape={<rect fill="#FEBCCF" rx="12px" ry="12px" />}
          barSize={65}
        />
        <Bar
          dataKey="amt"
          shape={<rect fill="#BB9BFF" rx="12px" ry="12px" />}
          barSize={65}
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fill: "#A0A5A9" }}
        />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#A0A5A9" }}
          tickFormatter={(value) => (value === 0 ? "" : value)}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
