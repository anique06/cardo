import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
} from "recharts";
import { Activity, Zap, Sparkles, Clock, Info } from "lucide-react";

// Simulated data points for the 0.8s Cardiac Cycle (Wiggers Relationship)
const cardiacData = [
  { time: 0.0, pressure: 10, ecg: 0 },
  { time: 0.05, pressure: 10, ecg: 0 },
  { time: 0.1, pressure: 10, ecg: 4 }, // P wave start
  { time: 0.15, pressure: 10, ecg: 10 }, // P wave peak
  { time: 0.2, pressure: 11, ecg: 0 }, // PR segment
  { time: 0.25, pressure: 11, ecg: -5 }, // Q wave
  { time: 0.28, pressure: 16, ecg: 45 }, // R wave peak (QRS)
  { time: 0.31, pressure: 22, ecg: -10 }, // S wave
  { time: 0.35, pressure: 40, ecg: 0 }, // Isovolumetric contraction / steep pressure ascent
  { time: 0.4, pressure: 85, ecg: 1 },
  { time: 0.45, pressure: 115, ecg: 2 },
  { time: 0.5, pressure: 120, ecg: 5 }, // Peak Ventricular Pressure
  { time: 0.55, pressure: 112, ecg: 12 }, // T wave start
  { time: 0.6, pressure: 90, ecg: 22 }, // T wave peak
  { time: 0.65, pressure: 40, ecg: 8 }, // T wave end / Rapid pressure drop
  { time: 0.7, pressure: 15, ecg: 0 }, // Isovolumetric relaxation
  { time: 0.75, pressure: 10, ecg: 0 },
  { time: 0.8, pressure: 10, ecg: 0 },
];

export const CardiacSynthesisDisplay: React.FC = () => {
  return (
    <div className="w-full min-h-screen  p-6 md:p-10 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <header className="space-y-2 border-b border-slate-200/60 pb-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#991B1B] uppercase">
            <Sparkles className="w-4 h-4 text-[#991B1B]" />
            <span>SYNTHESIS PART I</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
            The Spark Drives the Pump
          </h1>
          <p className="text-base text-slate-600 max-w-2xl">
            The Wiggers Diagram unifies all cardiac data into a single 0.8s
            timeline.
          </p>
        </header>

        {/* Main Content Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Graph Display (8 Cols) */}
          <section className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-4">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-50 text-[#991B1B]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-medium text-[#1E2B37]">
                    Electrical vs. Mechanical Response
                  </h2>
                  <p className="text-xs text-slate-500">
                    0.8-second Cardiac Cycle Timeline
                  </p>
                </div>
              </div>

              {/* Legend Badges */}
              <div className="flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#E11D48]" />
                  <span className="text-slate-600">Ventricular Pressure</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#06B6D4]" />
                  <span className="text-slate-600">ECG Signal</span>
                </div>
              </div>
            </div>

            {/* Recharts Container */}
            <div className="h-[360px] w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={cardiacData}
                  margin={{ top: 20, right: 20, left: -20, bottom: 10 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#F1F5F9"
                    vertical={true}
                  />

                  {/* X Axis: Time (s) */}
                  <XAxis
                    dataKey="time"
                    unit="s"
                    stroke="#94A3B8"
                    tick={{ fontSize: 12 }}
                  />

                  {/* Y Axis for Pressure */}
                  <YAxis
                    yAxisId="left"
                    domain={[0, 140]}
                    stroke="#94A3B8"
                    tick={{ fontSize: 12 }}
                    unit=" mmHg"
                  />

                  {/* Hidden Y Axis for ECG overlay alignment */}
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[-30, 80]}
                    hide
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E2B37",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />

                  {/* Synchronization Reference Lines */}
                  <ReferenceLine
                    x={0.28}
                    yAxisId="left"
                    stroke="#64748B"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                    label={{
                      value: "QRS Peak",
                      position: "top",
                      fill: "#64748B",
                      fontSize: 10,
                    }}
                  />
                  <ReferenceLine
                    x={0.6}
                    yAxisId="left"
                    stroke="#64748B"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                    label={{
                      value: "T Wave Peak",
                      position: "top",
                      fill: "#64748B",
                      fontSize: 10,
                    }}
                  />

                  {/* Pressure Curve */}
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="pressure"
                    stroke="#E11D48"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />

                  {/* ECG Curve */}
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="ecg"
                    stroke="#06B6D4"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Footer Note */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>
                Dashed vertical lines indicate key electromechanical
                synchronization triggers.
              </span>
            </div>
          </section>

          {/* Right Column: Key Observations (5 Cols) */}
          <section className="lg:col-span-5 space-y-4">
            {/* Observation 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#991B1B] uppercase">
                <Zap className="w-4 h-4 text-[#991B1B]" />
                <span>OBSERVATION 1</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                The{" "}
                <strong className="text-[#1E2B37] font-semibold">
                  QRS complex
                </strong>{" "}
                (electrical depolarization) fires just milliseconds before the
                steep ascent of{" "}
                <strong className="text-[#1E2B37] font-semibold">
                  ventricular pressure
                </strong>{" "}
                (mechanical contraction).
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Electrical Trigger</span>
                <span>→ Mechanical Action</span>
              </div>
            </div>

            {/* Observation 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#991B1B] uppercase">
                <Activity className="w-4 h-4 text-[#991B1B]" />
                <span>OBSERVATION 2</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                The{" "}
                <strong className="text-[#1E2B37] font-semibold">T wave</strong>{" "}
                (repolarization) triggers the rapid fall in pressure, initiating{" "}
                <strong className="text-[#1E2B37] font-semibold">
                  diastole
                </strong>
                .
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Repolarization</span>
                <span>→ Ventricular Relaxation</span>
              </div>
            </div>

            {/* Key takeaway box */}
            <div className="bg-[#991B1B]/5 rounded-2xl p-5 border border-[#991B1B]/15 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#991B1B] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong className="font-semibold text-[#991B1B]">
                  Takeaway:
                </strong>{" "}
                Electrical events always precede mechanical events in the
                cardiac cycle.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CardiacSynthesisDisplay;
