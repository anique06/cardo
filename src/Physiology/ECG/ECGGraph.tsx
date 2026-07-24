import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface ECGDataPoint {
  x: number;
  y: number;
  wave?: string;
  description?: string;
}

const ecgData: ECGDataPoint[] = [
  { x: 0, y: 0 },
  { x: 5, y: 0 },
  { x: 10, y: 0 },
  // P Wave
  { x: 13, y: 0.2 },
  {
    x: 16,
    y: 1.5,
    wave: "P Wave",
    description:
      "Atrial Depolarization: Electrical activation leading to contraction of the atria.",
  },
  { x: 19, y: 0.2 },
  { x: 22, y: 0 },
  // PR Segment
  { x: 27, y: 0 },
  // QRS Complex
  {
    x: 29,
    y: -1.2,
    wave: "Q Wave",
    description: "Q Wave: Initial downward deflection preceding the R wave.",
  },
  {
    x: 33,
    y: 8.5,
    wave: "R Wave",
    description:
      "R Wave: Main upward peak representing ventricular depolarization.",
  },
  {
    x: 36,
    y: -2.5,
    wave: "S Wave",
    description: "S Wave: Downward deflection following the main R wave.",
  },
  { x: 38, y: 0 },
  // ST Segment
  { x: 48, y: 0 },
  // T Wave
  { x: 52, y: 0.5 },
  {
    x: 58,
    y: 2.2,
    wave: "T Wave",
    description:
      "T Wave: Ventricular Repolarization (recovery of the ventricles).",
  },
  { x: 64, y: 0.5 },
  { x: 67, y: 0 },
  // U Wave
  {
    x: 72,
    y: 0.4,
    wave: "U Wave",
    description:
      "U Wave: Small wave following T wave, representing Purkinje fiber repolarization.",
  },
  { x: 76, y: 0 },
  { x: 85, y: 0 },
  { x: 95, y: 0 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: ECGDataPoint;
  }>;
}

// iOS Glassmorphism Tooltip
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    // Only display tooltip if hovering over a valid wave point
    if (data.wave) {
      return (
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "14px",
            padding: "10px 14px",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
            maxWidth: "240px",
          }}
        >
          <strong
            style={{
              color: "#dc2626",
              fontSize: "14px",
              fontWeight: "600",
              display: "block",
              marginBottom: "2px",
              letterSpacing: "-0.01em",
            }}
          >
            {data.wave}
          </strong>
          <span
            style={{
              fontSize: "12px",
              color: "#1f2937",
              lineHeight: "1.4",
              display: "block",
            }}
          >
            {data.description}
          </span>
        </div>
      );
    }
  }
  return null;
};

interface DotProps {
  cx?: number;
  cy?: number;
  payload?: ECGDataPoint;
}

export default function ECGChart(): React.ReactElement {
  const [selectedWave, setSelectedWave] = useState<ECGDataPoint | null>(null);

  // Click handler only registers named wave points
  const handleChartClick = (state: any): void => {
    if (state && state.activePayload && state.activePayload.length) {
      const point = state.activePayload[0].payload as ECGDataPoint;
      if (point.wave) {
        setSelectedWave(point);
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* Container with no background or border */}
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={ecgData}
            onClick={handleChartClick}
            margin={{ top: 20, right: 20, left: -20, bottom: 20 }}
          >
            <XAxis dataKey="x" hide />
            <YAxis domain={[-3, 10]} hide />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false} // Hides default vertical hovering line
            />

            <Line
              type="monotone"
              dataKey="y"
              stroke="#000000"
              strokeWidth={3}
              isAnimationActive={true}
              // Normal state dots (red clickable markers for waves only)
              dot={(props: DotProps) => {
                const { cx, cy, payload } = props;
                if (payload?.wave && cx !== undefined && cy !== undefined) {
                  return (
                    <circle
                      key={payload.x}
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill="#ef4444"
                      stroke="#ffffff"
                      strokeWidth={2}
                      style={{ cursor: "pointer" }}
                    />
                  );
                }
                return (
                  <React.Fragment key={props.payload?.x ?? Math.random()} />
                );
              }}
              // Active hover state (Only grows when hovering P, Q, R, S, T, U)
              activeDot={(props: DotProps) => {
                const { cx, cy, payload } = props;
                if (payload?.wave && cx !== undefined && cy !== undefined) {
                  return (
                    <circle
                      key={`active-${payload.x}`}
                      cx={cx}
                      cy={cy}
                      r={7}
                      fill="#dc2626"
                      stroke="#ffffff"
                      strokeWidth={2}
                      style={{
                        cursor: "pointer",
                        filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
                      }}
                    />
                  );
                }
                return (
                  <React.Fragment key={props.payload?.x ?? Math.random()} />
                );
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Selected Wave Description Card with Glassmorphism */}
      {selectedWave ? (
        <div
          style={{
            marginTop: "16px",
            padding: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px) saturate(200%)",
            WebkitBackdropFilter: "blur(10px) saturate(200%)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h4
            style={{
              margin: "0 0 6px 0",
              color: "#111827",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Selected Wave:{" "}
            <span style={{ color: "#dc2626" }}>{selectedWave.wave}</span>
          </h4>
          <p
            style={{
              margin: 0,
              color: "#4b5563",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            {selectedWave.description}
          </p>
        </div>
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "13px",
            marginTop: "12px",
          }}
        >
          Hover over or click on P, Q, R, S, T, or U markers for details.
        </p>
      )}
    </div>
  );
}
