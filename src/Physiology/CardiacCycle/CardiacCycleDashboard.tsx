import React, { useState } from "react";
import {
  Heart,
  Activity,
  Clock,
  ShieldAlert,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
// FIX 1: Explicit type-only import for LucideIcon
import type { LucideIcon } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Data Types Definition
export type ValveState = "Open" | "Closed";
export type CycleType = "Systole" | "Diastole";

export interface CardiacPhase {
  id: number;
  name: string;
  type: CycleType;
  duration: number;
  avValve: ValveState;
  aorticValve: ValveState;
  pressureTrend: string;
  volumeTrend: string;
  icon: LucideIcon;
  desc: string;
}

export interface ChartDataItem {
  name: string;
  duration: number;
  type: CycleType;
  color: string;
}

const CardiacCycleDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"timeline" | "table">("timeline");
  const [selectedPhase, setSelectedPhase] = useState<CardiacPhase | null>(null);

  const systolePhases: CardiacPhase[] = [
    {
      id: 1,
      name: "Isovolumetric Contraction",
      type: "Systole",
      duration: 0.05,
      avValve: "Closed",
      aorticValve: "Closed",
      pressureTrend: "Violent Spike",
      volumeTrend: "Unchanged",
      icon: ShieldAlert,
      desc: "Ventricles contract with all valves closed. Pressure builds rapidly without volume change.",
    },
    {
      id: 2,
      name: "Rapid Ventricular Ejection",
      type: "Systole",
      duration: 0.15,
      avValve: "Closed",
      aorticValve: "Open",
      pressureTrend: "Peaks at 120mmHg",
      volumeTrend: "Sharp Drop",
      icon: TrendingUp,
      desc: "Aortic valve opens as ventricular pressure exceeds aortic pressure. Blood ejects rapidly.",
    },
    {
      id: 3,
      name: "Reduced Ventricular Ejection",
      type: "Systole",
      duration: 0.1,
      avValve: "Closed",
      aorticValve: "Open",
      pressureTrend: "Begins Falling",
      volumeTrend: "Slow Drop",
      icon: TrendingDown,
      desc: "Ejection force slows down as ventricular pressure begins to decrease.",
    },
  ];

  const diastolePhases: CardiacPhase[] = [
    {
      id: 4,
      name: "Isovolumetric Relaxation",
      type: "Diastole",
      duration: 0.1,
      avValve: "Closed",
      aorticValve: "Closed",
      pressureTrend: "Sharp Drop",
      volumeTrend: "Unchanged",
      icon: ShieldAlert,
      desc: "Ventricles relax with all valves closed. Pressure plunges rapidly.",
    },
    {
      id: 5,
      name: "Rapid Ventricular Filling",
      type: "Diastole",
      duration: 0.1,
      avValve: "Open",
      aorticValve: "Closed",
      pressureTrend: "Low & Stable",
      volumeTrend: "Rapid Rise (80% fill)",
      icon: TrendingUp,
      desc: "AV valves snap open due to low ventricular pressure. 80% of passive filling occurs here.",
    },
    {
      id: 6,
      name: "Reduced Passive Filling (Diastasis)",
      type: "Diastole",
      duration: 0.15,
      avValve: "Open",
      aorticValve: "Closed",
      pressureTrend: "Low & Stable",
      volumeTrend: "Slow Rise",
      icon: Minus,
      desc: "Passive blood flow slows as the pressure gradient across the AV valve balances out.",
    },
    {
      id: 7,
      name: "Atrial Contraction",
      type: "Diastole",
      duration: 0.15,
      avValve: "Open",
      aorticValve: "Closed",
      pressureTrend: "Slight Bump",
      volumeTrend: "+20% Top-off",
      icon: Activity,
      desc: "Atria contract to squeeze the remaining 20% of blood into the ventricles.",
    },
  ];

  const allPhases: CardiacPhase[] = [...systolePhases, ...diastolePhases];

  const chartData: ChartDataItem[] = allPhases.map((phase) => ({
    name: phase.name,
    duration: phase.duration,
    type: phase.type,
    color: phase.type === "Systole" ? "#8B0000" : "#0D9488",
  }));

  const handlePhaseClick = (phase: CardiacPhase): void => {
    setSelectedPhase((prev) => (prev?.id === phase.id ? null : phase));
  };

  return (
    <div className="min-h-screen  p-6 md:p-10 text-slate-800 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
            The 7 Mechanical Phases of the Cardiac Cycle
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            A complete cardiac cycle lasts approximately{" "}
            <span className="font-semibold text-slate-900">0.8 seconds</span>{" "}
            (at 75 bpm), divided between active ventricular contraction (
            <span className="font-semibold text-[#8B0000]">Systole 0.3s</span>)
            and relaxation/filling (
            <span className="font-semibold text-[#0D9488]">Diastole 0.5s</span>
            ).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" border-white/40 bg-white backdrop-blur-xl  rounded-xl p-5 shadow-sm flex justify-between items-center">
            <div>
              <span className="text-xs font-semibold bg-red/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Phases 1–3
              </span>
              <h2 className="text-2xl font-serif font-medium mt-2 text-[#1F365C]">
                Systole
              </h2>
              <p className=" text-sm mt-0.5 bg-red/100 rounded-md">
                Ventricular Contraction & Ejection
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-serif">0.30s</span>
              <p className="text-xs ">3 Phases</p>
            </div>
          </div>

          <div className=" border-white/40 bg-white backdrop-blur-xl  rounded-xl p-5 shadow-sm flex justify-between items-center">
            <div>
              <span className="text-xs font-semibold bg-red/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Phases 4–7
              </span>
              <h2 className="text-2xl font-serif font-medium mt-2 text-[#1F365C]">
                Diastole
              </h2>
              <p className=" text-sm mt-0.5 bg-red/100 rounded-md">
                Ventricular Relaxation & Filling
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-serif">0.50s</span>
              <p className="text-xs ">4 Phases</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FAF7F2] p-1.5 rounded-2xl flex border border-slate-200/80 max-w-md">
          <button
            onClick={() => setActiveTab("timeline")}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === "timeline"
                ? "bg-[#8B0000] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Process Flow
          </button>
          <button
            onClick={() => setActiveTab("table")}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === "table"
                ? "bg-[#8B0000] text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Detailed Matrix
          </button>
        </div>

        {activeTab === "timeline" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
              <div className="bg-[#8B0000] px-6 py-3.5 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-current" />
                  <h3 className="font-bold tracking-wide">
                    Systole Phase Breakdown (0.3s)
                  </h3>
                </div>
                <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full">
                  Phases 1 - 3
                </span>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {systolePhases.map((phase) => (
                  <div
                    key={phase.id}
                    onClick={() => handlePhaseClick(phase)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPhase?.id === phase.id
                        ? "border-[#8B0000] ring-2 ring-[#8B0000]/20 bg-red-50/30"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="w-7 h-7 rounded-full bg-red-100 text-[#8B0000] text-xs font-bold flex items-center justify-center">
                          0{phase.id}
                        </span>
                        <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded-md text-slate-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {phase.duration}s
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">
                        {phase.name}
                      </h4>
                      <p className="text-xs text-slate-500 mb-4">
                        {phase.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Valves:</span>
                        <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                          {phase.avValve} / {phase.aorticValve}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Pressure:</span>
                        <span className="font-medium text-red-700">
                          {phase.pressureTrend}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Volume:</span>
                        <span className="font-medium text-slate-700">
                          {phase.volumeTrend}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
              <div className="bg-[#0D9488] px-6 py-3.5 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  <h3 className="font-bold tracking-wide">
                    Diastole Phase Breakdown (0.5s)
                  </h3>
                </div>
                <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full">
                  Phases 4 - 7
                </span>
              </div>

              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {diastolePhases.map((phase) => (
                  <div
                    key={phase.id}
                    onClick={() => handlePhaseClick(phase)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPhase?.id === phase.id
                        ? "border-[#0D9488] ring-2 ring-[#0D9488]/20 bg-teal-50/30"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="w-7 h-7 rounded-full bg-teal-100 text-[#0D9488] text-xs font-bold flex items-center justify-center">
                          0{phase.id}
                        </span>
                        <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded-md text-slate-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {phase.duration}s
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">
                        {phase.name}
                      </h4>
                      <p className="text-xs text-slate-500 mb-4">
                        {phase.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Valves:</span>
                        <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                          {phase.avValve} / {phase.aorticValve}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Pressure:</span>
                        <span className="font-medium text-teal-700">
                          {phase.pressureTrend}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Volume:</span>
                        <span className="font-medium text-slate-700">
                          {phase.volumeTrend}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Phase Duration Relative Timing (Seconds)
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Visual duration comparison across the 7 mechanical phases.
              </p>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 40 }}
                  >
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 11, fill: "#64748B" }}
                      interval={0}
                      angle={-20}
                      textAnchor="end"
                    />
                    <YAxis tick={{ fontSize: 11, fill: "#64748B" }} unit="s" />
                    {/* FIX 2: Added 'any' type definition to formatter value */}
                    <Tooltip
                      formatter={(value: any) => [
                        `${value} seconds`,
                        "Duration",
                      ]}
                      contentStyle={{
                        borderRadius: "8px",
                        borderColor: "#E2E8F0",
                      }}
                    />
                    <Bar dataKey="duration" radius={[6, 6, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === "table" && (
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
            <div className="bg-[#8B0000] px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                <h3 className="font-bold text-lg">Cardiac Phase Matrix</h3>
              </div>
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">
                Total Duration: 0.80s
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-red-50/50 border-b border-red-100 text-slate-700 font-semibold">
                    <th className="p-4 pl-6">Phase</th>
                    <th className="p-4">Duration</th>
                    <th className="p-4">Valve Status (AV / Aortic)</th>
                    <th className="p-4">Pressure Trend</th>
                    <th className="p-4 pr-6">Volume Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-[#8B0000] text-white font-bold text-xs uppercase tracking-wider">
                    <td colSpan={5} className="px-6 py-2">
                      Systole (0.3s Total)
                    </td>
                  </tr>
                  {systolePhases.map((p) => (
                    <tr
                      key={p.id}
                      className="hover:bg-red-50/30 transition-colors"
                    >
                      <td className="p-4 pl-6 font-medium text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#8B0000]"></span>
                        {p.name}
                      </td>
                      <td className="p-4 font-bold text-[#8B0000]">
                        {p.duration}s
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs">
                          {p.avValve} / {p.aorticValve}
                        </span>
                      </td>
                      <td className="p-4 text-slate-700 font-medium">
                        {p.pressureTrend}
                      </td>
                      <td className="p-4 pr-6 text-slate-700">
                        {p.volumeTrend}
                      </td>
                    </tr>
                  ))}

                  <tr className="bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider">
                    <td colSpan={5} className="px-6 py-2">
                      Diastole (0.5s Total)
                    </td>
                  </tr>
                  {diastolePhases.map((p) => (
                    <tr
                      key={p.id}
                      className="hover:bg-teal-50/30 transition-colors"
                    >
                      <td className="p-4 pl-6 font-medium text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0D9488]"></span>
                        {p.name}
                      </td>
                      <td className="p-4 font-bold text-[#0D9488]">
                        {p.duration}s
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs">
                          {p.avValve} / {p.aorticValve}
                        </span>
                      </td>
                      <td className="p-4 text-slate-700 font-medium">
                        {p.pressureTrend}
                      </td>
                      <td className="p-4 pr-6 text-slate-700">
                        {p.volumeTrend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedPhase && (
          <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 flex items-start gap-4 transition-all">
            <div className="p-3 bg-amber-100 text-amber-900 rounded-xl">
              <selectedPhase.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-lg">
                  Phase {selectedPhase.id}: {selectedPhase.name}
                </h4>
                <button
                  onClick={() => setSelectedPhase(null)}
                  className="text-slate-400 hover:text-slate-600 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
              <p className="text-sm text-slate-700 mt-1">
                {selectedPhase.desc}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-slate-600">
                <span>
                  Duration: <strong>{selectedPhase.duration}s</strong>
                </span>
                <span>
                  Category: <strong>{selectedPhase.type}</strong>
                </span>
                <span>
                  Valves:{" "}
                  <strong>
                    {selectedPhase.avValve} (AV) / {selectedPhase.aorticValve}{" "}
                    (Aortic)
                  </strong>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardiacCycleDashboard;
