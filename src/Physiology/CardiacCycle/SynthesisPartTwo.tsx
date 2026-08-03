import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ReferenceDot,
  Tooltip,
} from "recharts";
import {
  Activity,
  Droplets,
  GitMerge,
  TrendingDown,
  Lightbulb,
} from "lucide-react";

// Simulated data points for the Wiggers Diagram (Pressure, Volume, ECG)
const cardiacData = [
  { time: 0.0, ap: 110, vp: 10, atp: 8, vv: 150, ecg: 0 },
  { time: 0.1, ap: 108, vp: 12, atp: 16, vv: 150, ecg: 10 }, // P wave, 'a' wave
  { time: 0.15, ap: 106, vp: 10, atp: 10, vv: 150, ecg: 0 },
  { time: 0.2, ap: 104, vp: 14, atp: 8, vv: 150, ecg: -5 }, // Q wave
  { time: 0.22, ap: 103, vp: 40, atp: 12, vv: 150, ecg: 45 }, // R wave
  { time: 0.24, ap: 102, vp: 85, atp: 18, vv: 148, ecg: -15 }, // S wave, 'c' wave
  { time: 0.26, ap: 102, vp: 102, atp: 14, vv: 140, ecg: -5 }, // Aortic Valve Opens
  { time: 0.3, ap: 130, vp: 135, atp: 10, vv: 100, ecg: 0 },
  { time: 0.35, ap: 140, vp: 145, atp: 8, vv: 75, ecg: 12 }, // Peak pressure
  { time: 0.4, ap: 125, vp: 125, atp: 10, vv: 70, ecg: 25 }, // T wave peak, Aortic Valve Closes
  { time: 0.45, ap: 130, vp: 50, atp: 14, vv: 70, ecg: 5 }, // Dicrotic notch
  { time: 0.5, ap: 120, vp: 10, atp: 20, vv: 75, ecg: 0 }, // 'v' wave
  { time: 0.6, ap: 110, vp: 8, atp: 12, vv: 115, ecg: 0 },
  { time: 0.7, ap: 105, vp: 8, atp: 10, vv: 135, ecg: 0 },
  { time: 0.8, ap: 100, vp: 10, atp: 8, vv: 145, ecg: 0 },
];

export const SynthesisPartTwo: React.FC = () => {
  return (
    <div className="w-full min-h-screen  p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <header className="space-y-2 border-b border-slate-200/60 pb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#991B1B] uppercase">
            <Droplets className="w-4 h-4 text-[#991B1B]" />
            <span>SYNTHESIS PART II</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
            Pressure Dictates Flow
          </h1>
          <p className="text-base text-slate-600 max-w-2xl">
            Tracing the exact moments where electrical signals convert to
            pressure gradients and mechanical ejection.
          </p>
        </header>

        {/* Chart Container */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-2">
          {/* Chart Header & Legends */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-4 mb-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-50 text-slate-600">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-serif font-medium text-[#1E2B37]">
                  Wiggers Diagram: Pressure & Volume
                </h2>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#E11D48]" />
                <span className="text-slate-600">Ventricular Pressure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#64748B]" />
                <span className="text-slate-600">Aortic Pressure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#CBD5E1]" />
                <span className="text-slate-600">Atrial Pressure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#06B6D4]" />
                <span className="text-slate-600">ECG</span>
              </div>
            </div>
          </div>

          {/* Stacked Synchronized Charts */}
          <div className="w-full flex flex-col gap-1">
            {/* 1. Pressure Chart */}
            <div className="h-[220px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={cardiacData}
                  syncId="wiggersSync"
                  margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#F1F5F9"
                    vertical={true}
                  />
                  <YAxis
                    domain={[0, 180]}
                    stroke="#94A3B8"
                    tick={{ fontSize: 11 }}
                    label={{
                      value: "Pressure (mmHg)",
                      angle: -90,
                      position: "insideLeft",
                      style: {
                        textAnchor: "middle",
                        fill: "#64748B",
                        fontSize: 12,
                      },
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E2B37",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />

                  {/* Vertical Reference Lines for Valve Events */}
                  <ReferenceLine
                    x={0.26}
                    stroke="#94A3B8"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                  />
                  <ReferenceLine
                    x={0.4}
                    stroke="#94A3B8"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                  />

                  {/* Valve Open/Close Markers */}
                  <ReferenceDot
                    x={0.26}
                    y={102}
                    r={5}
                    fill="#06B6D4"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                  <ReferenceDot
                    x={0.4}
                    y={125}
                    r={5}
                    fill="#06B6D4"
                    stroke="#fff"
                    strokeWidth={2}
                  />

                  <Line
                    type="monotone"
                    dataKey="vp"
                    name="Ventricular Pressure"
                    stroke="#E11D48"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ap"
                    name="Aortic Pressure"
                    stroke="#64748B"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="atp"
                    name="Atrial Pressure"
                    stroke="#CBD5E1"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* 2. Volume Chart */}
            <div className="h-[120px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={cardiacData}
                  syncId="wiggersSync"
                  margin={{ top: 0, right: 20, left: -10, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#F1F5F9"
                    vertical={true}
                  />
                  <YAxis
                    domain={[50, 160]}
                    stroke="#94A3B8"
                    tick={{ fontSize: 11 }}
                    tickCount={3}
                    label={{
                      value: "Vol (mL)",
                      angle: -90,
                      position: "insideLeft",
                      style: {
                        textAnchor: "middle",
                        fill: "#64748B",
                        fontSize: 12,
                      },
                    }}
                  />
                  <Tooltip
                    cursor={{ stroke: "#E2E8F0", strokeWidth: 2 }}
                    contentStyle={{ display: "none" }}
                  />

                  <ReferenceLine
                    x={0.26}
                    stroke="#94A3B8"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                  />
                  <ReferenceLine
                    x={0.4}
                    stroke="#94A3B8"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                  />

                  <Line
                    type="monotone"
                    dataKey="vv"
                    name="Ventricular Volume"
                    stroke="#64748B"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* 3. ECG Chart */}
            <div className="h-[80px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={cardiacData}
                  syncId="wiggersSync"
                  margin={{ top: 0, right: 20, left: -10, bottom: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#F1F5F9"
                    vertical={true}
                    horizontal={false}
                  />
                  <XAxis
                    dataKey="time"
                    unit="s"
                    stroke="#94A3B8"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis domain={[-20, 60]} hide />
                  <Tooltip
                    cursor={{ stroke: "#E2E8F0", strokeWidth: 2 }}
                    contentStyle={{ display: "none" }}
                  />

                  <ReferenceLine
                    x={0.26}
                    stroke="#94A3B8"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                  />
                  <ReferenceLine
                    x={0.4}
                    stroke="#94A3B8"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                  />

                  <Line
                    type="monotone"
                    dataKey="ecg"
                    name="ECG"
                    stroke="#06B6D4"
                    strokeWidth={2}
                    dot={false}
                    activeDot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Observations Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Observation 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#991B1B] uppercase">
              <GitMerge className="w-4 h-4 text-[#991B1B]" />
              <span>OBSERVATION 1 (THE CROSSING)</span>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm">
              When Left Ventricular pressure exceeds Aortic pressure (
              <strong className="text-[#1E2B37]">80 mmHg</strong>), the Aortic
              Valve is forced open.
            </p>
          </div>

          {/* Observation 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#991B1B] uppercase">
              <TrendingDown className="w-4 h-4 text-[#991B1B]" />
              <span>OBSERVATION 2 (THE RESULT)</span>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm">
              Immediately after the valve opens, we see Left Ventricular Volume
              plummet from{" "}
              <strong className="text-[#1E2B37]">150mL down to 70mL</strong>{" "}
              (The 80mL Stroke Volume).
            </p>
          </div>

          {/* Conclusion */}
          <div className="bg-[#991B1B]/5 rounded-2xl p-6 border border-[#991B1B]/15 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#991B1B] uppercase">
              <Lightbulb className="w-4 h-4 text-[#991B1B]" />
              <span>CONCLUSION</span>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm">
              The <strong className="text-[#1E2B37]">electrical spark</strong>{" "}
              creates pressure; the{" "}
              <strong className="text-[#1E2B37]">pressure</strong> opens the
              door; the <strong className="text-[#1E2B37]">open door</strong>{" "}
              ejects the volume.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SynthesisPartTwo;
