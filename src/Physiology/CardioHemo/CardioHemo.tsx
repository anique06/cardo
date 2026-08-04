import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowLeft,
  CircleCheck,
  BookOpen,
  BadgeInfo,
  Stethoscope,
} from "lucide-react";
import "katex/dist/katex.min.css";
import katex from "katex";
import CardioHemoLo3 from "./CardioHemoLo3";
import CardioHemoGame from "./CardioHemoGame";

interface Section {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}

interface Section2 {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

// ============================================================================
// DATA CONFIGURATIONS
// ============================================================================

const loLinks = [
  { id: "lo1", label: "LO1" },
  { id: "lo2", label: "LO2" },
  { id: "lo3", label: "LO3" },
];

const sections: Section[] = [
  {
    id: "hemodynamics-flow-and-pressure",
    title: "Hemodynamics: Blood Flow, Pressure, and Dynamics",
    image: "/Hemodynamics_Master.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* --- SECTION 1: BLOOD FLOW --- */}
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>Blood flow (Q)</strong> is the volume of blood passing a given
          point in the circulation per unit of time (expressed as mL/min or
          L/min). Systemically, total blood flow equals{" "}
          <strong>Cardiac Output (CO)</strong>, which averages around 5 L/min at
          rest.
        </p>

        {/* Driving Mechanism */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4 shadow-sm">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Driving Mechanism
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            Blood does not move because of absolute pressure, but because of a{" "}
            <strong>pressure gradient ($\Delta P$)</strong> between two points.
            Blood flows from high pressure (aorta) to low pressure (right
            atrium).
          </p>
          <div
            className="rounded-lg bg-slate-900 border-l-4 border-red-500 p-3 flex justify-center text-red-50 overflow-x-auto"
            dangerouslySetInnerHTML={{
              __html: katex.renderToString("Q = \\frac{\\Delta P}{R}", {
                throwOnError: false,
              }),
            }}
          />
        </div>

        {/* Laminar vs. Turbulent Flow */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              Laminar vs. Turbulent Flow
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm">
              <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                Laminar Flow
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Concentric layers of fluid move smoothly. Velocity is highest in
                the center and lowest at the wall due to friction. It is{" "}
                <strong>silent and energy-efficient</strong>.
              </p>
            </div>
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm">
              <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                Turbulent Flow
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Disrupted, disorganized flow creating eddies. Occurs when
                velocity is high, viscosity is low, or vessel diameter changes
                abruptly. Produces <strong>murmurs or bruits</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Reynold's Number */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 flex flex-col md:flex-row items-center gap-4">
          <div
            className="bg-slate-900 text-red-50 rounded p-3 shrink-0"
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(
                "Re = \\frac{\\rho \\cdot v \\cdot d}{\\eta}",
                { throwOnError: false },
              ),
            }}
          />
          <div className="text-sm text-red-950 space-y-1">
            <h4 className="font-bold uppercase tracking-wide text-xs text-red-800">
              Reynold's Number (Re)
            </h4>
            <p>
              Predicts turbulence. High velocity (
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("v", { throwOnError: false }),
                }}
              />
              ) or vessel diameter (
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("d", { throwOnError: false }),
                }}
              />
              ) increases turbulence, while high viscosity (
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\eta", {
                    throwOnError: false,
                  }),
                }}
              />
              ) reduces it.
            </p>
          </div>
        </div>

        <hr className="border-red-200 my-6" />

        {/* --- SECTION 2: BLOOD PRESSURE --- */}
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>Blood pressure (P)</strong> is the force exerted by
          circulating blood against the vascular walls, providing the force (
          <span
            dangerouslySetInnerHTML={{
              __html: katex.renderToString("\\Delta P", {
                throwOnError: false,
              }),
            }}
          />
          ) that drives flow.
        </p>

        {/* Systemic Gradient */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4 shadow-sm">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Systemic Gradient
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            Mean pressure in the aorta is ~<strong>93 mmHg</strong>, dropping to
            ~<strong>2 mmHg</strong> in the right atrium. This differential (
            <span
              dangerouslySetInnerHTML={{
                __html: katex.renderToString(
                  "\\Delta P \\approx 90\\text{--}95 \\text{ mmHg}",
                  { throwOnError: false },
                ),
              }}
            />
            ) propels systemic organ flow.
          </p>
        </div>

        {/* Mean Arterial Pressure (MAP) */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              Mean Arterial Pressure (MAP)
            </h3>
          </div>
          <div className="p-4 space-y-4 text-sm text-slate-700">
            <p>
              Represents the average driving pressure in arteries during a
              single cardiac cycle:
            </p>
            <div
              className="rounded-lg bg-slate-900 border-l-4 border-red-500 p-3 flex justify-center text-red-50 overflow-x-auto"
              dangerouslySetInnerHTML={{
                __html: katex.renderToString(
                  "\\text{MAP} \\approx \\text{Diastolic BP} + \\frac{1}{3}(\\text{Systolic BP} - \\text{Diastolic BP})",
                  { throwOnError: false },
                ),
              }}
            />
          </div>
        </div>

        {/* Interconnection with Flow and Resistance */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Interconnection with Flow and Resistance
          </h4>
          <p className="text-sm text-red-950 mb-2">
            Rearranging{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("Q = \\frac{\\Delta P}{R}", {
                  throwOnError: false,
                }),
              }}
            />{" "}
            yields the primary clinical equation:
          </p>
          <div
            className="rounded-lg bg-white/70 border border-red-200 p-3 flex justify-center text-red-950 mb-3 overflow-x-auto"
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(
                "\\text{MAP} \\approx \\text{CO} \\times \\text{TPR}",
                { throwOnError: false },
              ),
            }}
          />
          <p className="text-sm text-red-950 leading-relaxed">
            The body actively adjusts <strong>TPR</strong> (vascular tone) or{" "}
            <strong>CO</strong> (heart rate/contractility) to keep{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("\\text{MAP}", {
                  throwOnError: false,
                }),
              }}
            />{" "}
            within normal homeostatic bounds.
          </p>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: MAP is weighted closer to diastolic pressure because the heart spends approximately two-thirds of the cardiac cycle in diastole.",
  },
  {
    id: "hemodynamics-vascular-resistance",
    title: "Vascular Resistance (R) & Poiseuille's Law",
    image: "/VascularResistance_Dynamics.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>Vascular resistance (R)</strong> is the opposition to blood
          flow caused by friction between moving blood particles and the vessel
          wall. It acts as the primary braking mechanism that opposes the
          driving pressure generated by the heart.
        </p>

        {/* Determinants of Resistance (Poiseuille's Law) */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-red-300" />
              <h3 className="font-semibold text-lg">
                Determinants of Resistance (Poiseuille’s Law)
              </h3>
            </div>
            <div
              className="bg-red-950/50 px-3 py-1 rounded text-red-200"
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("R = \\frac{8\\eta L}{\\pi r^4}", {
                  throwOnError: false,
                }),
              }}
            />
          </div>
          <div className="p-4 space-y-4 text-sm text-slate-700">
            <p>
              <strong>
                Vessel Radius (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("r", { throwOnError: false }),
                  }}
                />
                ):
              </strong>{" "}
              The primary physiological regulator. Because resistance varies
              inversely with{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("r^4", { throwOnError: false }),
                }}
              />
              , small adjustments in vessel diameter yield massive changes in
              resistance and flow.
            </p>
            <p>
              <strong>Arterioles as Resistance Vessels:</strong> Arterioles
              account for over <strong>50%</strong> of total peripheral
              resistance (
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\text{TPR}", {
                    throwOnError: false,
                  }),
                }}
              />
              ) because their walls are rich in vascular smooth muscle, allowing
              precise regulation of lumen radius.
            </p>
          </div>
        </div>

        {/* Impact on Flow and Pressure */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Impact on Flow and Pressure
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-red-950">
            <li>
              <strong>Sympathetic Constriction:</strong> Decreases arteriolar
              radius (
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("r \\downarrow", {
                    throwOnError: false,
                  }),
                }}
              />
              ){" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\rightarrow", {
                    throwOnError: false,
                  }),
                }}
              />{" "}
              spikes resistance (
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("R \\uparrow", {
                    throwOnError: false,
                  }),
                }}
              />
              ){" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\rightarrow", {
                    throwOnError: false,
                  }),
                }}
              />{" "}
              reduces downstream blood flow (
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("Q \\downarrow", {
                    throwOnError: false,
                  }),
                }}
              />
              ) to non-essential beds while elevating systemic pressure (
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\text{MAP} \\uparrow", {
                    throwOnError: false,
                  }),
                }}
              />
              ).
            </li>
            <li>
              <strong>Organ Perfusion:</strong> By arranging organs in a
              parallel circuit, the body can independently alter local vascular
              resistance (e.g., dilation of skeletal muscle vessels during
              exercise) to increase local blood flow without dropping systemic
              blood pressure.
            </li>
          </ul>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Arterioles are the main control knobs of systemic blood pressure. Sympathetic tone constricts them to spike resistance, allowing the body to instantly redirect blood flow to exercising muscle or vital organs.",
  },
];

const sections2: Section2[] = [
  {
    id: "hemodynamics-vessel-radius",
    title: "1. Vessel Radius (r) — The Most High-Yield Factor",
    image: "/VesselRadius_Determinants.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>Vessel radius (r)</strong> is the single most powerful
          physiological determinant of vascular resistance because resistance is
          inversely proportional to the fourth power of the radius (
          <span
            dangerouslySetInnerHTML={{
              __html: katex.renderToString("R \\propto \\frac{1}{r^4}", {
                throwOnError: false,
              }),
            }}
          />
          ).
        </p>

        {/* Fourth-Power Relationship Section */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-red-300" />
              <h3 className="font-semibold text-lg">
                The Fourth-Power Relationship
              </h3>
            </div>
            <div
              className="bg-red-950/50 px-3 py-1 rounded text-red-200"
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("R \\propto \\frac{1}{r^4}", {
                  throwOnError: false,
                }),
              }}
            />
          </div>
          <div className="p-4 space-y-3 text-sm text-slate-700">
            <p>
              Small changes in radius lead to exponential changes in resistance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {/* Halving Radius Card */}
              <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm">
                <h5 className="font-bold text-red-900 mb-1">
                  Halving the radius (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("\\frac{1}{2}r", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  )
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Increases resistance by <strong>16-fold</strong> (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("2^4 = 16", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  ), causing blood flow to drop to{" "}
                  <strong>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: katex.renderToString("\\frac{1}{16}", {
                          throwOnError: false,
                        }),
                      }}
                    />
                  </strong>{" "}
                  of its original value.
                </p>
              </div>

              {/* Doubling Radius Card */}
              <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm">
                <h5 className="font-bold text-red-900 mb-1">
                  Doubling the radius (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("2r", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  )
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Decreases resistance to{" "}
                  <strong>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: katex.renderToString("\\frac{1}{16}", {
                          throwOnError: false,
                        }),
                      }}
                    />
                  </strong>{" "}
                  (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("1/2^4", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  ), increasing blood flow <strong>16-fold</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Arterioles as Resistance Vessels */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Arterioles as "Resistance Vessels"
          </h4>
          <p className="text-sm text-red-950 leading-relaxed">
            Arterioles contribute over <strong>50%</strong> of total peripheral
            resistance (
            <span
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("\\text{TPR}", {
                  throwOnError: false,
                }),
              }}
            />
            ). Their thick smooth muscle layer allows tight control over vessel
            radius via:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-red-950">
            <li>
              <strong>Sympathetic tone:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\alpha_1", {
                    throwOnError: false,
                  }),
                }}
              />{" "}
              vasoconstriction vs.{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\beta_2", {
                    throwOnError: false,
                  }),
                }}
              />{" "}
              vasodilation.
            </li>
            <li>
              <strong>Local metabolites:</strong> e.g., adenosine,{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\text{CO}_2", {
                    throwOnError: false,
                  }),
                }}
              />
              , and lactate.
            </li>
          </ul>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Remember the 4th power rule! If an exam question mentions a 50% reduction in vessel radius, resistance doesn't double—it spikes by 1600% (16x).",
  },
  {
    id: "hemodynamics-blood-viscosity",
    title: "2. Blood Viscosity (η) — Fluid Thickness",
    image: "/BloodViscosity_Determinants.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>
            Blood viscosity (
            <span
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("\\eta", { throwOnError: false }),
              }}
            />
            )
          </strong>{" "}
          reflects the internal friction between moving fluid layers. Resistance
          is directly proportional to viscosity (
          <span
            dangerouslySetInnerHTML={{
              __html: katex.renderToString("R \\propto \\eta", {
                throwOnError: false,
              }),
            }}
          />
          ).
        </p>

        {/* Primary Determinant Section */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4 shadow-sm">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Primary Determinant
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            Viscosity is governed almost entirely by <strong>hematocrit</strong>{" "}
            (the concentration of red blood cells).
          </p>
        </div>

        {/* Clinical Correlations */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">Clinical Correlations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Increased Viscosity Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm">
              <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                Increased Viscosity (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\uparrow R", {
                      throwOnError: false,
                    }),
                  }}
                />
                )
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Caused by <strong>Polycythemia Vera</strong>,{" "}
                <strong>severe dehydration</strong>, or{" "}
                <strong>hyperproteinemia</strong> (e.g., Multiple Myeloma). High
                viscosity increases cardiac workload and raises systemic blood
                pressure.
              </p>
            </div>

            {/* Decreased Viscosity Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm">
              <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                Decreased Viscosity (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\downarrow R", {
                      throwOnError: false,
                    }),
                  }}
                />
                )
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Caused by <strong>Anemia</strong>. Fewer RBCs reduce viscosity,
                lowering{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\text{TPR}", {
                      throwOnError: false,
                    }),
                  }}
                />{" "}
                and leading to a high-output cardiac state.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Anemia lowers blood viscosity, which decreases TPR. The heart compensates by increasing stroke volume and heart rate, producing a classic hyperdynamic, high-output state with a systolic murmur.",
  },
  {
    id: "hemodynamics-vessel-length",
    title: "3. Vessel Length (L) — Structural Dimension",
    image: "/VesselLength_Determinants.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>
            Vessel length (
            <span
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("L", { throwOnError: false }),
              }}
            />
            )
          </strong>{" "}
          is directly proportional to vascular resistance (
          <span
            dangerouslySetInnerHTML={{
              __html: katex.renderToString("R \\propto L", {
                throwOnError: false,
              }),
            }}
          />
          ).
        </p>

        {/* Physiological Reality Section */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4 shadow-sm">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Physiological Reality
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            In adult human physiology, total vessel length remains essentially
            constant on a day-to-day basis and is{" "}
            <strong>not actively adjusted</strong> to regulate acute blood
            pressure.
          </p>
        </div>

        {/* Clinical Context Section */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              Clinical Context: Obesity & Vascular Expansion
            </h3>
          </div>
          <div className="p-4 space-y-3 text-sm text-slate-700">
            <p className="leading-relaxed">
              Significant weight gain (obesity) causes the body to synthesize
              miles of new microvascular capillaries to supply expanding adipose
              tissue.
            </p>
            <div className="rounded-lg bg-white/70 border border-red-200 p-3 flex items-center justify-between text-red-950 font-medium">
              <span>
                Increased Total Vessel Length (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("L \\uparrow", {
                      throwOnError: false,
                    }),
                  }}
                />
                )
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\rightarrow", {
                    throwOnError: false,
                  }),
                }}
              />
              <span>
                Chronic Increase in{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\text{TPR}", {
                      throwOnError: false,
                    }),
                  }}
                />
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("\\rightarrow", {
                    throwOnError: false,
                  }),
                }}
              />
              <span className="text-red-900 font-bold">
                Secondary Hypertension
              </span>
            </div>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: While vessel length isn't used for acute moment-to-moment BP regulation, remember it for chronic pathology—every additional kilogram of adipose tissue requires massive capillary expansion, driving up TPR long-term.",
  },
  {
    id: "hemodynamics-vascular-arrangement",
    title: "4. Vascular Arrangement — Series vs. Parallel Circuits",
    image: "/VascularArrangement_Circuits.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          How vessels are connected structurally alters the overall net
          resistance of a circuit.
        </p>

        {/* Series vs. Parallel Circuits Section */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">Circuit Configurations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Series Circuit Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-3">
              <h5 className="font-bold text-red-900 mb-1">
                Series Circuits (Sequential)
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Blood flows through arteries{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\rightarrow", {
                      throwOnError: false,
                    }),
                  }}
                />{" "}
                arterioles{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\rightarrow", {
                      throwOnError: false,
                    }),
                  }}
                />{" "}
                capillaries{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\rightarrow", {
                      throwOnError: false,
                    }),
                  }}
                />{" "}
                venules{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\rightarrow", {
                      throwOnError: false,
                    }),
                  }}
                />{" "}
                veins within an organ. Total resistance is cumulative.
              </p>
              <div
                className="bg-slate-900 text-red-50 p-2.5 rounded text-center text-sm overflow-x-auto"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    "R_{\\text{total}} = R_1 + R_2 + R_3 + \\dots",
                    { throwOnError: false },
                  ),
                }}
              />
            </div>

            {/* Parallel Circuit Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-3">
              <h5 className="font-bold text-red-900 mb-1">
                Parallel Circuits (Side-by-Side)
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Major organ systems branch independently off the aorta. Total
                resistance is calculated reciprocal-style.
              </p>
              <div
                className="bg-slate-900 text-red-50 p-2.5 rounded text-center text-sm overflow-x-auto"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    "\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_{\\text{renal}}} + \\frac{1}{R_{\\text{coronary}}} + \\frac{1}{R_{\\text{hepatic}}} + \\dots",
                    { throwOnError: false },
                  ),
                }}
              />
            </div>
          </div>
        </div>

        {/* Key Takeaways Section */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Physiological Advantages of Parallel Layout
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-red-950">
            <li>
              <strong>Lowers Net Resistance:</strong> Adding parallel organ beds
              lowers overall total peripheral resistance (
              <span
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString("R_{\\text{total}}", {
                    throwOnError: false,
                  }),
                }}
              />{" "}
              is always lower than the resistance of any single organ branch).
            </li>
            <li>
              <strong>Independent Control:</strong> Allows independent perfusion
              control—one organ can vasoconstrict without cutting off blood flow
              to neighboring organs.
            </li>
          </ul>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Removing a parallel circuit (e.g., nephrectomy or limb amputation) actually INCREASES total peripheral resistance because you're removing an alternative path for blood flow!",
  },
];

const learningOutcomes = [
  {
    title:
      "Understand the Relationship Between Blood Flow, Pressure, and Resistance",
    path: "#lo1",
  },
  {
    title:
      "Identify and Describe the Key Factors Determining Vascular Resistance",
    path: "#lo2",
  },
  {
    title: "Differentiate Between Capacitance and Resistance Vessels",
    path: "#lo3",
  },
];

const KEY_TAKEAWAYS: string[] = [
  "Student will master the spatial framework of the thoracic cage",
  "Student will systematically compartmentalize the mediastinum",
  "Student will map the structural and functional relationships of the great vessels",
  "Student will integrate anatomical landmarks with high-yield clinical procedures",
];

// ============================================================================
// COMPONENT IMPLEMENTATION
// ============================================================================

export default function CardioHemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);

  const activeSection = sections[activeIndex];
  const activeSection2 = sections2[activeIndex2];

  const handleSectionChange = (index: number) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const handleSection2Change = (index: number) => {
    if (index === activeIndex2) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex2(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#FDF8F5] text-[#1F365C] font-sans selection:bg-[#A71627]/10 selection:text-[#A71627] relative overflow-x-hidden pb-24"
    >
      <div className="bg-blend-soft-light relative h-20 overflow-hidden rounded-xl">
        <img
          src="/HeartLocation.png"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>
      {/* Premium Ambient Background Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-[700px] h-[700px] bg-gradient-to-tr from-amber-100/15 to-rose-100/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        {/* Navigation Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group mb-12"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Home</span>
        </Link>

        {/* Hero Header Section */}
        <header className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-[#A71627] uppercase mb-3">
            Cardiovascular Hemodynamic
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1F365C] leading-[1.15] max-w-4xl">
            The Architecture Of Flow
          </h1>
        </header>

        {/* Split Section: Canvas & Introduction Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          {/* Left Column: Sticky Interactive Canvas */}
          <div className="lg:col-span-7 w-full lg:sticky lg:top-8 z-10">
            <div className="w-full aspect-[4/3] sm:aspect-square lg:h-[calc(100vh-12rem)] rounded-3xl  border border-white/40 bg-white shadow-xl overflow-hidden relative group">
              <div className="absolute top-6 left-6 z-20 flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm text-xs font-medium tracking-wide text-[#1F365C]/80">
                <Activity className="w-3.5 h-3.5 text-[#A71627] animate-pulse" />
                <span>3D MACROSCOPIC SPECIMEN</span>
              </div>

              <div className="absolute bottom-6 right-6 z-20 text-[10px] uppercase tracking-widest text-[#1F365C]/40 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                Interactive Viewport
              </div>
            </div>
          </div>

          {/* Right Column: Introduction & Quick Facts */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Introduction Card */}
            <article className="rounded-3xl  border border-white/40 bg-white shadow-xl p-8 sm:p-10 transition-all hover:-translate-y-1 duration-3xl">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-5 h-5 text-[#A71627]" />
                <h3 className="font-serif text-xl font-medium tracking-tight">
                  Functional Synopsis
                </h3>
              </div>
              <p className="text-sm text-[#1F365C]/80 leading-loose mb-6">
                Cardiovascular hemodynamics governs the physical laws driving
                blood flow through the circulatory system to maintain tissue
                perfusion. Driven by cardiac contraction, blood flows along a
                pressure gradient (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\Delta P", {
                      throwOnError: false,
                    }),
                  }}
                />
                ) from high-pressure systemic arteries to low-pressure veins,
                governed by the core fluid dynamic relationship:
                <span
                  className="block my-3 text-center overflow-x-auto"
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString(
                      "Q = \\frac{\\Delta P}{R} \\implies \\text{Cardiac Output} = \\frac{\\text{Mean Arterial Pressure}}{\\text{Total Peripheral Resistance}}",
                      { displayMode: true, throwOnError: false },
                    ),
                  }}
                />
                Vascular resistance (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("R", { throwOnError: false }),
                  }}
                />
                ) opposes flow and is dictated by{" "}
                <strong>Poiseuille’s Law</strong> (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("R \\propto \\frac{1}{r^4}", {
                      throwOnError: false,
                    }),
                  }}
                />
                ). Arterioles serve as the principal &quot;resistance
                vessels&quot;—minor changes in their radius (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("r", { throwOnError: false }),
                  }}
                />
                ) cause exponential shifts in resistance and blood pressure.
                Systemic organs are arranged in{" "}
                <strong>parallel circuits</strong>, enabling independent local
                flow adjustments without collapsing systemic arterial pressure.
                Together, cardiac pumping and arteriolar vasomotor tone
                precisely balance blood flow and pressure to preserve systemic
                homeostasis.
              </p>
            </article>
          </div>
        </section>

        {/* Section: Overview */}
        <section className="mb-20">
          <div className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-xl p-8 sm:p-12">
            <h2 className="mb-6 font-serif text-3xl font-medium text-[#1F365C]">
              Learning Outcomes
            </h2>

            <div>
              {learningOutcomes.map((item) => (
                <a
                  href={item.path}
                  className="
    group
    flex
    items-center
    justify-between
    
  
  
   
   rounded-2xl
    p-2
    transition-all
    duration-300
    hover:border-[#A71627]/30
    hover:bg-red-50
  "
                >
                  <div className="flex items-center gap-4">
                    <CircleCheck size={20} className="text-[#A71627]" />

                    <span className="text-[#1F365C]">{item.title}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="lo1">
          {/*Lo1 */}
          <section className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
              {/* FULL-WIDTH HEADER SECTION */}
              <header className="w-full border-b border-[#1F365C]/10 pb-5">
                <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
                  Learning Outcome 1
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
                  Blood Flow, Pressure, and Resistance
                </h2>
              </header>

              <div className="max-w-7xl mx-auto">
                {/* Segmented Controls Container */}
                <div className="space-y-6 pb-6">
                  <div className="flex flex-wrap gap-2 p-1.5 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl">
                    {sections.map((section, index) => {
                      const isActive = activeIndex === index;
                      return (
                        <button
                          key={section.id}
                          onClick={() => handleSectionChange(index)}
                          className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-[#A71627] text-white shadow-md transform -translate-y-0.5"
                              : "text-[#1F365C]/70 hover:bg-white/50 hover:text-[#1F365C] hover:shadow-sm"
                          }`}
                        >
                          {section.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* TWO-COLUMN CONTENT LAYOUT */}
                <div className="flex  lg:flex-row gap-12 lg:gap-16 items-start">
                  {/* RIGHT COLUMN: Controls & Adaptive Layout */}
                  <div className="w-full  flex  space-y-8">
                    {/* Dynamic Content Block */}
                    <div
                      className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
                    >
                      <div className="mb-8 overflow-y-auto h-80 text-[#1F365C]/80 leading-relaxed text-base min-h-[160px]">
                        {activeSection.description}
                      </div>

                      {/* Clinical Tip Card */}
                      <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#A71627]/5 rounded-full blur-2xl group-hover:bg-[#A71627]/10 transition-colors duration-500" />
                        <div className="flex gap-4 relative z-10">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A71627]/10 flex items-center justify-center text-[#A71627]">
                            <Stethoscope size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#A71627] uppercase tracking-wider mb-1">
                              Clinical Tip
                            </h4>
                            <p className="text-sm font-medium text-[#1F365C] leading-snug">
                              {activeSection.clinicalTip}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <nav
            className="
    mt-10 
    flex items-center gap-4 
    text-sm font-medium 
    tracking-wide 
    text-[#1F365C]/70
  "
          >
            {loLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="
        rounded-full 
        border border-[#A71627]/30
        px-3 py-1
        text-[#A71627]
        transition-all
        hover:bg-[#A71627]
        hover:text-white
      "
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        <section id="lo2">
          {/*Lo2 */}
          <section className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
              {/* FULL-WIDTH HEADER SECTION */}
              <header className="w-full border-b border-[#1F365C]/10 pb-5">
                <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
                  Learning Outcome 2
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
                  Key Factors Determining Vascular Resistance
                </h2>
              </header>

              <div className="max-w-7xl mx-auto">
                {/* Segmented Controls Container */}
                <div className="space-y-6 pb-6">
                  <div className="flex flex-wrap gap-2 p-1.5 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl">
                    {sections2.map((section2, index) => {
                      const isActive = activeIndex2 === index;
                      return (
                        <button
                          key={section2.id}
                          onClick={() => handleSection2Change(index)}
                          className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-[#A71627] text-white shadow-md transform -translate-y-0.5"
                              : "text-[#1F365C]/70 hover:bg-white/50 hover:text-[#1F365C] hover:shadow-sm"
                          }`}
                        >
                          {section2.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* TWO-COLUMN CONTENT LAYOUT */}
                <div className="flex  lg:flex-row gap-12 lg:gap-16 items-start">
                  {/* RIGHT COLUMN: Controls & Adaptive Layout */}
                  <div className="w-full  flex  space-y-8">
                    {/* Dynamic Content Block */}
                    <div
                      className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
                    >
                      <div className="mb-8 overflow-y-auto h-80 text-[#1F365C]/80 leading-relaxed text-base min-h-[160px]">
                        {activeSection2.description}
                      </div>

                      {/* Clinical Tip Card */}
                      <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#A71627]/5 rounded-full blur-2xl group-hover:bg-[#A71627]/10 transition-colors duration-500" />
                        <div className="flex gap-4 relative z-10">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A71627]/10 flex items-center justify-center text-[#A71627]">
                            <Stethoscope size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#A71627] uppercase tracking-wider mb-1">
                              Clinical Tip
                            </h4>
                            <p className="text-sm font-medium text-[#1F365C] leading-snug">
                              {activeSection2.clinicalTip}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <nav
            className="
    mt-10 
    flex items-center gap-4 
    text-sm font-medium 
    tracking-wide 
    text-[#1F365C]/70
  "
          >
            {loLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="
        rounded-full 
        border border-[#A71627]/30
        px-3 py-1
        text-[#A71627]
        transition-all
        hover:bg-[#A71627]
        hover:text-white
      "
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        <section id="lo3">
          {/*Lo3 */}
          <section className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]">
            <header className="w-full border-b border-[#1F365C]/10 pb-5">
              <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
                Learning Outcome 3
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
                Capacitance and Resistance Vessels
              </h2>
            </header>

            <CardioHemoLo3 />
          </section>
          <nav
            className="
            mb-6
    mt-10 
    flex items-center gap-4 
    text-sm font-medium 
    tracking-wide 
    text-[#1F365C]/70
  "
          >
            {loLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="
        rounded-full 
        border border-[#A71627]/30
        px-3 py-1
        text-[#A71627]
        transition-all
        hover:bg-[#A71627]
        hover:text-white
      "
              >
                {label}
              </a>
            ))}
          </nav>

          <header className="w-full border-b border-[#1F365C]/10 pb-5">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Let's Test Your Knowledge !
            </h2>
          </header>
          <CardioHemoGame />
        </section>

        {/* Section: Key Takeaways */}
        <section className="mb-20 p-8">
          <div className="rounded-3xl backdrop-blur-xl border border-white/40 bg-white/30 shadow-xl p-8 sm:p-12 transition-all hover:-translate-y-1 duration-3xl">
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              Essential High-Yield Takeaways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {KEY_TAKEAWAYS.map((takeaway, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-2 rounded-xl bg-white/20 border border-white/40"
                >
                  <CircleCheck className="w-5 h-5 text-[#A71627] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1F365C]/90 leading-relaxed">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Elegant Academic Footer */}
      <footer className="border-t border-[#1F365C]/10 pt-12 mt-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-xs text-[#1F365C]/50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          {/* Navigation Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group "
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Home</span>
          </Link>
          <div className="w-2 h-2 bg-[#A71627] rounded-full" />
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group "
          >
            Top
          </a>
        </div>
        <p className="font-sans">
          &copy; 2026 Curriculum Module &bull; All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
