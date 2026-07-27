import { useState, useCallback } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceDot,
  Label,
} from "recharts";
import { Zap, Droplets } from "lucide-react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface PhaseInfo {
  id: number;
  name: string;
  title: string;
  voltage: string;
  ions: string[];
  currents: string[];
  description: string;
  xPos: number;
  yPos: number;
  color: string; // Unique color per phase
  icon: string; // Icon identifier
}

interface DataPoint {
  time: number;
  voltage: number;
  phase?: number;
}

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

const ACTION_POTENTIAL_DATA: DataPoint[] = [
  { time: 0, voltage: -90 },
  { time: 20, voltage: -90, phase: 4 },
  { time: 40, voltage: -90 },
  { time: 45, voltage: -70 },
  { time: 55, voltage: 0, phase: 0 },
  { time: 60, voltage: 52 },
  { time: 65, voltage: 20, phase: 1 },
  { time: 80, voltage: 15 },
  { time: 130, voltage: 10, phase: 2 },
  { time: 180, voltage: 5 },
  { time: 210, voltage: -30, phase: 3 },
  { time: 230, voltage: -85 },
  { time: 240, voltage: -90, phase: 4 },
  { time: 300, voltage: -90 },
];

const PHASES_DATA: Record<number, PhaseInfo> = {
  0: {
    id: 0,
    name: "Phase 0",
    title: "Rapid Depolarization",
    voltage: "+52 mV (Peak)",
    ions: ["Na⁺ (in)"],
    currents: ["I_Na (rapid)"],
    description:
      "Massive influx of Na⁺ through fast voltage-gated channels. Membrane potential shoots upward rapidly.",
    xPos: 55,
    yPos: 0,
    color: "#EF4444",
    icon: "⚡",
  },
  1: {
    id: 1,
    name: "Phase 1",
    title: "Initial Repolarization",
    voltage: "~+20 mV",
    ions: ["K⁺, Cl⁻ (out)"],
    currents: ["I_to (transient outward)"],
    description:
      "Fast Na⁺ channels close. Brief outward current creates the characteristic notch.",
    xPos: 65,
    yPos: 20,
    color: "#EF4444",
    icon: "↘",
  },
  2: {
    id: 2,
    name: "Phase 2",
    title: "Plateau Phase",
    voltage: "~+10 mV",
    ions: ["Ca²⁺ (in)", "K⁺ (out)"],
    currents: ["I_Ca-L (calcium)", "I_KS (potassium)"],
    description:
      "Voltage sustained by balance between inward Ca²⁺ and outward K⁺ currents. Longest phase.",
    xPos: 130,
    yPos: 10,
    color: "#EF4444",
    icon: "═",
  },
  3: {
    id: 3,
    name: "Phase 3",
    title: "Rapid Repolarization",
    voltage: "-90 mV",
    ions: ["K⁺ (out)"],
    currents: ["I_KR (rapid rectifier)", "I_K1 (inward)"],
    description:
      "Ca²⁺ channels close. Rapid K⁺ efflux dominates, membrane potential returns to rest.",
    xPos: 210,
    yPos: -30,
    color: "#EF4444",
    icon: "↙",
  },
  4: {
    id: 4,
    name: "Phase 4",
    title: "Resting Membrane Potential",
    voltage: "-90 mV (Rest)",
    ions: ["K⁺ equilibrium"],
    currents: ["I_K1 (inward rectifier)", "Na⁺/K⁺ ATPase"],
    description:
      "Stable resting state maintained by inward rectifier K⁺ channels and ATP-dependent pumps.",
    xPos: 20,
    yPos: -90,
    color: "#EF4444",
    icon: "━",
  },
};

// ============================================================================
// COMPONENT
// ============================================================================

export default function VentricularCardioAPGraph() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const activePhase = PHASES_DATA[selectedPhase];

  // Memoized handler to prevent recreation
  const handlePhaseSelect = useCallback((phaseId: number) => {
    setSelectedPhase(phaseId);
  }, []);

  const handlePhaseHover = useCallback((phaseId: number | null) => {
    setHoveredPhase(phaseId);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6  from-white via-slate-50 to-white rounded-3xl  font-sans">
      {/* Main Chart Section */}
      <div className="mb-8 bg-white p-6 rounded-3xl  border border-white/40  shadow-xl">
        <div className="w-full h-96 relative">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={ACTION_POTENTIAL_DATA}
              margin={{ top: 40, right: 40, left: 60, bottom: 40 }}
            >
              <defs>
                <linearGradient id="apGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#DC2626" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#e2e8f0"
                vertical={false}
                opacity={0.5}
              />

              <XAxis
                dataKey="time"
                type="number"
                domain={[0, 300]}
                label={{
                  value: "Time (ms)",
                  position: "insideBottomRight",
                  offset: -10,
                }}
                stroke="#94a3b8"
                fontSize={12}
                tick={{ fill: "#64748b" }}
              />

              <YAxis
                domain={[-100, 60]}
                ticks={[-90, -70, 0, 20, 52]}
                label={{
                  value: "Membrane Voltage (mV)",
                  angle: -90,
                  position: "insideLeft",
                }}
                stroke="#94a3b8"
                fontSize={12}
                tick={{ fill: "#64748b" }}
              />

              <Tooltip
                formatter={(value: any) => [`${value} mV`, "Voltage"]}
                labelFormatter={(label: any) => `${label} ms`}
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  padding: "12px 16px",
                }}
                cursor={{
                  stroke: "#dc2626",
                  strokeWidth: 2,
                  strokeDasharray: "5 5",
                }}
              />

              {/* Main Action Potential Curve */}
              <Area
                type="monotone"
                dataKey="voltage"
                stroke="#DC2626"
                strokeWidth={3}
                fill="url(#apGradient)"
                isAnimationActive={false}
                dot={false}
              />

              {/* Phase Markers - Non-interactive dots only */}
              {Object.values(PHASES_DATA).map((phase) => {
                const isSelected = selectedPhase === phase.id;
                const isHovered = hoveredPhase === phase.id;

                return (
                  <ReferenceDot
                    key={`dot-${phase.id}`}
                    x={phase.xPos}
                    y={phase.yPos}
                    r={isSelected ? 12 : isHovered ? 10 : 8}
                    fill={phase.color}
                    stroke="#ffffff"
                    strokeWidth={isSelected ? 3 : 2}
                  >
                    <Label
                      value={`Phase ${phase.id}`}
                      position={
                        phase.id === 0
                          ? "left"
                          : phase.id === 1
                            ? "right"
                            : phase.id === 2
                              ? "top"
                              : phase.id === 3
                                ? "left"
                                : "top"
                      }
                    />
                  </ReferenceDot>
                );
              })}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Phase Numbers and Labels Overlay */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {[4, 0, 1, 2, 3].map((phaseNum) => {
            const phase = PHASES_DATA[phaseNum];
            const isSelected = selectedPhase === phaseNum;
            const isHovered = hoveredPhase === phaseNum;

            return (
              <button
                key={`btn-${phaseNum}`}
                onClick={() => handlePhaseSelect(phaseNum)}
                onMouseEnter={() => handlePhaseHover(phaseNum)}
                onMouseLeave={() => handlePhaseHover(null)}
                className={`
                  relative px-4 py-2.5 rounded-xl text-sm font-semibold
                  transition-all duration-200 ease-out
                  flex items-center gap-2 border
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500
                  ${
                    isSelected
                      ? "bg-red-600 text-white border-red-600 shadow-lg scale-105"
                      : isHovered
                        ? "bg-red-50 text-red-700 border-red-200 shadow-md"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }
                `}
              >
                <span
                  className={`
                    w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                    ${isSelected ? "bg-red-700 text-white" : "bg-slate-100 text-slate-600"}
                  `}
                >
                  {phaseNum}
                </span>
                <span className="hidden sm:inline">{phase.title}</span>
                <span className="sm:hidden text-lg">{phase.icon}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Phase Details Panel */}
      <div
        className={`
          p-6 rounded-2xl inset-shadow-sm border shadow-xl transition-all duration-300 ease-out
          ${
            selectedPhase === 0 || selectedPhase === 1
              ? "bg-red-50 border-red-200"
              : selectedPhase === 2
                ? "bg-red-50 border-red-200"
                : selectedPhase === 3
                  ? "bg-red-50 border-red-200"
                  : "bg-red-50 border-red-200"
          }
        `}
      >
        {/* Phase Header */}
        <div className="flex items-center gap-4 mb-5">
          <div
            className="w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-2xl shadow-md"
            style={{ backgroundColor: activePhase.color }}
          >
            {activePhase.id}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900">
              {activePhase.name}
            </h2>
            <p className="text-sm font-semibold text-slate-600">
              {activePhase.title}
            </p>
            <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">
              {activePhase.voltage}
            </p>
          </div>
        </div>

        {/* Phase Description */}
        <p className="text-slate-700 leading-relaxed mb-6 text-sm">
          {activePhase.description}
        </p>

        {/* Ion & Channel Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ion Movements */}
          <div className="bg-white/80 inset-shadow-sm backdrop-blur-sm p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Ion Movements
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {activePhase.ions.map((ion, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-800 text-xs font-semibold border border-blue-200"
                >
                  {ion}
                </span>
              ))}
            </div>
          </div>

          {/* Channels & Currents */}
          <div className="bg-white/80 inset-shadow-sm backdrop-blur-sm p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Active Channels & Currents
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {activePhase.currents.map((curr, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 text-xs font-semibold border border-amber-200"
                >
                  {curr}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
