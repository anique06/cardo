import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  CircleCheck,
  BookOpen,
  BadgeInfo,
  Stethoscope,
} from "lucide-react";
import { useEffect, useState } from "react";
import ECGGraph from "./ECGGraph";
import katex from "katex";
import ECGGame from "./ECGGame";

const learningOutcomes = [
  {
    title:
      "Interpret normal and common abnormal electrocardiogram by systemically analyzing heart rate, rythm, cardiac axis, intervals, waveforms, and ST-T changes",
    path: "#lo1",
  },
  {
    title:
      "Recognize characteristic ECG findings associated with common cardiovascular disease and correlate them with the patient's clinical presentation",
    path: "#lo2",
  },
  {
    title:
      "Integrate ECG findings with the patient's history and physical examination to formulate differential diagnoses",
    path: "#lo3",
  },
];

const loLinks = [
  { id: "lo1", label: "LO1" },
  { id: "lo2", label: "LO2" },
  { id: "lo3", label: "LO3" },
];

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

const sections: Section[] = [
  {
    id: "ecg-step1-heart-rate",
    title: "Step 1: Heart Rate Calculation",
    image: "/ECG_HeartRate_Step1.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro / Calibration Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          Determining the heart rate from an ECG strip begins with verifying
          standard paper calibration settings.
        </p>

        {/* Standard Calibration Section */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4 shadow-sm">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Standard Calibration Baseline
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="bg-white/70 p-3 rounded-lg border border-red-100">
              <span className="font-semibold text-red-900 block mb-1">
                Paper Speed
              </span>
              <span>25 mm/s</span>
              <div className="text-xs text-slate-500 mt-1">
                1 small box = 0.04 s <br />1 large box = 0.2 s
              </div>
            </div>
            <div className="bg-white/70 p-3 rounded-lg border border-red-100">
              <span className="font-semibold text-red-900 block mb-1">
                Voltage Gain
              </span>
              <span>10 mm/mV</span>
              <div className="text-xs text-slate-500 mt-1">
                10 small boxes = 1 mV
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Methods */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              Heart Rate Calculation Methods
            </h3>
          </div>
          <div className="p-4 space-y-4">
            {/* Regular Rhythm Method */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-3">
              <h5 className="font-bold text-red-900">
                1. Regular Rhythm Method
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Divide 300 by the number of large boxes between consecutive R
                waves.
                <br />
                <em>Quick Sequence:</em> 300 → 150 → 100 → 75 → 60 → 50
              </p>
              <div
                className="bg-slate-900 text-red-50 p-3 rounded text-center text-sm overflow-x-auto"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    "\\text{Heart Rate} = \\frac{300}{\\text{Large Boxes between R-R}}",
                    { throwOnError: false },
                  ),
                }}
              />
            </div>

            {/* Irregular Rhythm Method */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-2">
              <h5 className="font-bold text-red-900">
                2. Irregular Rhythm Method
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Count the number of R waves in a <strong>6-second strip</strong>{" "}
                (30 large boxes) and multiply by <strong>10</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Rate Abnormalities */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Rate Abnormalities (Normal P Waves Present)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-red-950">
            <div className="bg-white/70 p-3 rounded-lg border border-red-200">
              <span className="font-bold text-red-900 block mb-1">
                Sinus Bradycardia
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("< 60\\text{ bpm}", {
                      throwOnError: false,
                    }),
                  }}
                />
              </span>
            </div>
            <div className="bg-white/70 p-3 rounded-lg border border-red-200">
              <span className="font-bold text-red-900 block mb-1">
                Sinus Tachycardia
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("> 100\\text{ bpm}", {
                      throwOnError: false,
                    }),
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Always double-check calibration marks before calculating rate! If paper speed is doubled to 50 mm/s, your standard 300-rule formula will overestimate the heart rate by 2x.",
  },
  {
    id: "ecg-step2-rhythm-analysis",
    title: "Step 2: Rhythm Analysis",
    image: "/ECG_RhythmAnalysis_Step2.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          Evaluate <strong>Lead II</strong> to systematically analyze P waves
          and assess their relationship to QRS complexes.
        </p>

        {/* Normal Sinus Rhythm (NSR) Section */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4 shadow-sm">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            Normal Sinus Rhythm (NSR) Criteria
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>
              <strong>P-Wave Axis:</strong> Upright in leads{" "}
              <strong>I, II, and aVF</strong>; strictly inverted in{" "}
              <strong>aVR</strong>.
            </li>
            <li>
              <strong>1:1 AV Conduction:</strong> Every P wave is followed by a
              QRS complex, and every QRS complex is preceded by a P wave.
            </li>
          </ul>
        </div>

        {/* Common Abnormalities Section */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              Common Rhythm Abnormalities
            </h3>
          </div>
          <div className="p-4 space-y-3">
            {/* AFib Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm">
              <h5 className="font-bold text-red-900 mb-1">
                Atrial Fibrillation (AFib)
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Characterized by <strong>irregularly irregular</strong> R-R
                intervals with <strong>absent P waves</strong> (replaced by
                chaotically undulating fibrillatory{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("f", { throwOnError: false }),
                  }}
                />
                -waves).
              </p>
            </div>

            {/* Atrial Flutter Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm">
              <h5 className="font-bold text-red-900 mb-1">Atrial Flutter</h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Regular or fixed-ratio irregular R-R intervals with
                characteristic{" "}
                <strong>
                  "sawtooth" flutter (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("F", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  ) waves
                </strong>{" "}
                (typically an atrial rate of{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\sim 300\\text{ bpm}", {
                      throwOnError: false,
                    }),
                  }}
                />
                ).
              </p>
            </div>

            {/* Ventricular Tachycardia Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm">
              <h5 className="font-bold text-red-900 mb-1">
                Ventricular Tachycardia (VT)
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Wide QRS complexes (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("> 120\\text{ ms}", {
                      throwOnError: false,
                    }),
                  }}
                />
                ) at a rate{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("> 100\\text{ bpm}", {
                      throwOnError: false,
                    }),
                  }}
                />
                , often displaying AV dissociation.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: If you see an irregularly irregular rhythm without distinct P waves, think AFib. If you see a rapid, regular rhythm with a classic saw-tooth baseline at ~150 bpm ventricular rate (2:1 block), think Atrial Flutter!",
  },
  {
    id: "ecg-step3-cardiac-axis",
    title: "Step 3: Cardiac Axis Assessment",
    image: "/ECG_CardiacAxis_Step3.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          Determine the global direction of ventricular depolarization by
          evaluating the net deflection of the QRS complex in{" "}
          <strong>Lead I</strong> and <strong>Lead aVF</strong>.
        </p>

        {/* Axis Quadrant Table */}
        <div className="overflow-hidden rounded-xl border border-red-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-red-900 text-white font-semibold">
              <tr>
                <th className="p-3 w-1/3">Vector</th>
                <th className="p-3 w-1/3">Lead aVF Positive (+)</th>
                <th className="p-3 w-1/3">Lead aVF Negative (-)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-100 bg-red-50/40 text-red-950">
              <tr className="hover:bg-red-100/50 transition-colors">
                <td className="p-3 font-semibold text-red-900">Lead I (+)</td>
                <td className="p-3">
                  <strong>Normal Axis</strong> <br />
                  <span className="text-xs text-slate-600 font-mono">
                    (-30° to +90°)
                  </span>
                </td>
                <td className="p-3">
                  <strong>Left Axis Deviation</strong> <br />
                  <span className="text-xs text-slate-600 font-mono">
                    (-30° to -90°)
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-red-100/50 transition-colors">
                <td className="p-3 font-semibold text-red-900">Lead I (-)</td>
                <td className="p-3">
                  <strong>Right Axis Deviation</strong> <br />
                  <span className="text-xs text-slate-600 font-mono">
                    (+90° to +180°)
                  </span>
                </td>
                <td className="p-3">
                  <strong>Extreme Axis Deviation</strong> <br />
                  <span className="text-xs text-slate-600 font-mono">
                    (-90° to 180°)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pathological Axis Deviations */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              Pathological Axis Deviations
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Left Axis Deviation Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-2">
              <h5 className="font-bold text-red-900 mb-1">
                Left Axis Deviation (LAD)
              </h5>
              <div className="text-xs bg-red-100/80 text-red-950 p-2 rounded font-mono border border-red-200 mb-2">
                Lead I (+) | Lead aVF (-) | Lead II (-)
              </div>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Common Causes:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Left anterior fascicular block (LAFB)</li>
                <li>Left bundle branch block (LBBB)</li>
                <li>Inferior MI</li>
                <li>Left ventricular hypertrophy (LVH)</li>
              </ul>
            </div>

            {/* Right Axis Deviation Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-2">
              <h5 className="font-bold text-red-900 mb-1">
                Right Axis Deviation (RAD)
              </h5>
              <div className="text-xs bg-red-100/80 text-red-950 p-2 rounded font-mono border border-red-200 mb-2">
                Lead I (-) | Lead aVF (+)
              </div>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Common Causes:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Right ventricular hypertrophy (RVH)</li>
                <li>Pulmonary embolism (acute cor pulmonale)</li>
                <li>Left posterior fascicular block (LPFB)</li>
                <li>Lateral MI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Use the 'Two Thumbs Up' rule! Thumbs up in Lead I and Lead aVF = Normal. Thumbs leaving each other (Lead I up, aVF down) = Left Axis Deviation ('Left is Leaving'). Thumbs reaching toward each other (Lead I down, aVF up) = Right Axis Deviation ('Right is Reaching').",
  },
  {
    id: "ecg-step4-intervals-blocks",
    title: "Step 4: Interval Analysis & AV Blocks",
    image: "/ECG_Intervals_Step4.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          Systematically measure conduction intervals to evaluate
          atrioventricular delay, ventricular depolarization speed, and
          repolarization duration.
        </p>

        {/* Intervals Table */}
        <div className="overflow-hidden rounded-xl border border-red-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-red-900 text-white font-semibold">
              <tr>
                <th className="p-3 w-1/4">Interval</th>
                <th className="p-3 w-1/4">Normal Duration</th>
                <th className="p-3">Common Pathology & Clinical Sign</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-100 bg-red-50/40 text-red-950">
              <tr className="hover:bg-red-100/50 transition-colors">
                <td className="p-3 font-semibold text-red-900">PR Interval</td>
                <td className="p-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString(
                        "120\\text{--}200\\text{ ms}",
                        { throwOnError: false },
                      ),
                    }}
                  />
                  <br />
                  <span className="text-xs text-slate-500">
                    (3–5 small boxes)
                  </span>
                </td>
                <td className="p-3 leading-relaxed">
                  <strong>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: katex.renderToString("> 200\\text{ ms}", {
                          throwOnError: false,
                        }),
                      }}
                    />
                    :
                  </strong>{" "}
                  1<sup>st</sup>-degree AV block.
                  <br />
                  <strong>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: katex.renderToString("< 120\\text{ ms}", {
                          throwOnError: false,
                        }),
                      }}
                    />
                    :
                  </strong>{" "}
                  Wolff-Parkinson-White (WPW) syndrome (with delta wave).
                </td>
              </tr>
              <tr className="hover:bg-red-100/50 transition-colors">
                <td className="p-3 font-semibold text-red-900">QRS Duration</td>
                <td className="p-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("< 120\\text{ ms}", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  <br />
                  <span className="text-xs text-slate-500">
                    (&lt; 3 small boxes)
                  </span>
                </td>
                <td className="p-3 leading-relaxed">
                  <strong>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: katex.renderToString("\\ge 120\\text{ ms}", {
                          throwOnError: false,
                        }),
                      }}
                    />
                    :
                  </strong>{" "}
                  Bundle Branch Block (RBBB/LBBB), Ventricular pacing,
                  Hyperkalemia.
                </td>
              </tr>
              <tr className="hover:bg-red-100/50 transition-colors">
                <td className="p-3 font-semibold text-red-900">QTc Interval</td>
                <td className="p-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("\\le 450\\text{ ms}", {
                        throwOnError: false,
                      }),
                    }}
                  />{" "}
                  (men)
                  <br />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("\\le 460\\text{ ms}", {
                        throwOnError: false,
                      }),
                    }}
                  />{" "}
                  (women)
                </td>
                <td className="p-3 leading-relaxed">
                  <strong>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: katex.renderToString(
                          "> 470\\text{--}500\\text{ ms}",
                          { throwOnError: false },
                        ),
                      }}
                    />
                    :
                  </strong>{" "}
                  High risk for <strong>Torsades de Pointes</strong>. Caused by
                  Class IA/III antiarrhythmics, hypokalemia, hypomagnesemia, and
                  hypocalcemia.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* AV Blocks Breakdown */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">AV Blocks Breakdown</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* 1st Degree Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-1">
              <h5 className="font-bold text-red-900 mb-1">
                1<sup>st</sup> Degree AV Block
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Prolonged PR interval (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("> 200\\text{ ms}", {
                      throwOnError: false,
                    }),
                  }}
                />
                ) of fixed length with <strong>no dropped QRS complexes</strong>
                .
              </p>
            </div>

            {/* Mobitz I Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-1">
              <h5 className="font-bold text-red-900 mb-1">
                2<sup>nd</sup> Degree Mobitz I (Wenckebach)
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Progressive PR lengthening until a QRS complex is dropped (
                <em>
                  "Longer, longer, longer, drop—now you have a Wenckebach"
                </em>
                ).
              </p>
            </div>

            {/* Mobitz II Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-1">
              <h5 className="font-bold text-red-900 mb-1">
                2<sup>nd</sup> Degree Mobitz II
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Fixed PR interval duration with{" "}
                <strong>unpredictable dropped QRS complexes</strong>. High risk
                of progressing to 3<sup>rd</sup>-degree block.
              </p>
            </div>

            {/* 3rd Degree Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-1">
              <h5 className="font-bold text-red-900 mb-1">
                3<sup>rd</sup> Degree (Complete) AV Block
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Total AV dissociation; P waves and QRS complexes beat
                independently of each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Remember the distinction for Mobitz II vs. Wenckebach! Mobitz I occurs in the AV node (usually benign/reversible), whereas Mobitz II occurs below the AV node in the His-Purkinje system (requires a pacemaker!).",
  },
  {
    id: "ecg-step5-waveforms-chambers",
    title: "Step 5: Waveforms & Chamber Hypertrophy",
    image: "/ECG_WaveformsChambers_Step5.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          Examine specific waveform morphologies to identify atrial enlargement,
          ventricular conduction delays, hypertrophy, and signs of structural
          myocardial damage.
        </p>

        {/* P Wave & Atrial Abnormalities */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4 shadow-sm">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-3">
            P Wave Morphologies (Atrial Enlargement)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="bg-white/70 p-3.5 rounded-lg border border-red-100 shadow-sm space-y-1">
              <span className="font-bold text-red-900 block">
                P Pulmonale (Right Atrial Enlargement)
              </span>
              <p className="leading-relaxed">
                Tall, peaked P waves{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\ge 2.5\\text{ mm}", {
                      throwOnError: false,
                    }),
                  }}
                />{" "}
                in lead II. Associated with chronic lung disease and pulmonary
                hypertension.
              </p>
            </div>
            <div className="bg-white/70 p-3.5 rounded-lg border border-red-100 shadow-sm space-y-1">
              <span className="font-bold text-red-900 block">
                P Mitrale (Left Atrial Enlargement)
              </span>
              <p className="leading-relaxed">
                Broad, notched P wave{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\ge 120\\text{ ms}", {
                      throwOnError: false,
                    }),
                  }}
                />{" "}
                in lead II or a deep terminal negative component in V
                <sub>1</sub>. Associated with mitral valve disease.
              </p>
            </div>
          </div>
        </div>

        {/* QRS Morphology & Conduction Blocks */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              QRS Morphology & Conduction Blocks
            </h3>
          </div>
          <div className="p-4 space-y-3">
            {/* RBBB Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-1">
              <h5 className="font-bold text-red-900 mb-1">
                Right Bundle Branch Block (RBBB)
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Classic <strong>RSR' ("rabbit ears")</strong> pattern in V
                <sub>1</sub>–V<sub>2</sub> with a wide, slurred S wave in leads
                I and V<sub>6</sub>.
              </p>
            </div>

            {/* LBBB Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-1">
              <h5 className="font-bold text-red-900 mb-1">
                Left Bundle Branch Block (LBBB)
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Broad, notched R wave in leads I, aVL, V<sub>5</sub>–V
                <sub>6</sub> with a deep S wave in V<sub>1</sub>.
                <br />
                <em className="text-red-900 font-semibold">
                  Critical rule: New-onset LBBB + ischemic chest pain = STEMI
                  equivalent!
                </em>
              </p>
            </div>

            {/* LVH Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-2">
              <h5 className="font-bold text-red-900 mb-1">
                Left Ventricular Hypertrophy (LVH)
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Evaluated using the <strong>Sokolow-Lyon Criteria</strong>:
              </p>
              <div
                className="bg-slate-900 text-red-50 p-2.5 rounded text-center text-sm overflow-x-auto"
                dangerouslySetInnerHTML={{
                  __html: katex.renderToString(
                    "S_{\\text{in } V_1} + R_{\\text{in } V_5 \\text{ or } V_6} \\ge 35\\text{ mm}",
                    { throwOnError: false },
                  ),
                }}
              />
            </div>
          </div>
        </div>

        {/* Pathologic Q Waves */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-2">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-2">
            Pathologic Q Waves
          </h4>
          <p className="text-sm text-red-950 leading-relaxed">
            Defined as{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("> 40\\text{ ms}", {
                  throwOnError: false,
                }),
              }}
            />{" "}
            (1 small box) wide or{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("> 25\\%", {
                  throwOnError: false,
                }),
              }}
            />{" "}
            of the total QRS amplitude. Indicates irreversible, prior transmural
            myocardial infarction.
          </p>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Remember 'MARROW' vs 'WILLIAM'! RBBB has an 'M' in V1 and 'W' in V6 (MaRRoW). LBBB has a 'W' in V1 and 'M' in V6 (WiLLiaM).",
  },
  {
    id: "ecg-step6-st-segments-t-waves",
    title: "Step 6: ST Segments & T Waves (Ischemia / Infarction)",
    image: "/ECG_STSegments_Step6.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          Evaluate ST segments and T waves for acute ischemia, myocardial
          infarction, and metabolic disturbances. Anatomical localization
          requires assessing <strong>contiguous leads</strong>.
        </p>

        {/* Anatomical Localization Grid */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4 shadow-sm space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-1">
            Anatomical Lead Localization & Coronary Vessels
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="bg-white/70 p-3 rounded-lg border border-red-100 shadow-sm">
              <span className="font-bold text-red-900 block mb-0.5">
                Septal Leads
              </span>
              <span className="font-mono text-xs bg-red-100 text-red-950 px-2 py-0.5 rounded">
                V1, V2
              </span>
              <p className="text-xs text-slate-600 mt-1">
                Left Anterior Descending (LAD)
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg border border-red-100 shadow-sm">
              <span className="font-bold text-red-900 block mb-0.5">
                Anterior Leads
              </span>
              <span className="font-mono text-xs bg-red-100 text-red-950 px-2 py-0.5 rounded">
                V3, V4
              </span>
              <p className="text-xs text-slate-600 mt-1">
                Left Anterior Descending (LAD)
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg border border-red-100 shadow-sm">
              <span className="font-bold text-red-900 block mb-0.5">
                Lateral Leads
              </span>
              <span className="font-mono text-xs bg-red-100 text-red-950 px-2 py-0.5 rounded">
                I, aVL, V5, V6
              </span>
              <p className="text-xs text-slate-600 mt-1">
                Left Circumflex (LCX) or Diagonal
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg border border-red-100 shadow-sm">
              <span className="font-bold text-red-900 block mb-0.5">
                Inferior Leads
              </span>
              <span className="font-mono text-xs bg-red-100 text-red-950 px-2 py-0.5 rounded">
                II, III, aVF
              </span>
              <p className="text-xs text-slate-600 mt-1">
                Right Coronary Artery (RCA)
              </p>
            </div>
          </div>
        </div>

        {/* Key Pathologic Findings Section */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              Key Pathologic Ischemic Findings
            </h3>
          </div>
          <div className="p-4 space-y-3">
            {/* STEMI Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-1">
              <h5 className="font-bold text-red-900 mb-1">
                ST Elevation Myocardial Infarction (STEMI)
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\ge 1\\text{ mm}", {
                      throwOnError: false,
                    }),
                  }}
                />{" "}
                ST elevation in{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("\\ge 2", {
                      throwOnError: false,
                    }),
                  }}
                />{" "}
                anatomically contiguous leads (
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString(
                      "\\ge 1.5\\text{--}2\\text{ mm}",
                      { throwOnError: false },
                    ),
                  }}
                />{" "}
                in precordial leads). Often accompanied by reciprocal ST
                depression in opposing anatomical leads.
              </p>
            </div>

            {/* Subendocardial Ischemia Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-1">
              <h5 className="font-bold text-red-900 mb-1">
                ST Depression & T-Wave Inversion
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Signifies subendocardial ischemia or NSTEMI when present in
                contiguous lead groupings.
              </p>
            </div>

            {/* Hyperacute T Waves Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-1">
              <h5 className="font-bold text-red-900 mb-1">
                Hyperacute T Waves
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                Tall, symmetric, broad-based T waves appearing within the
                earliest minutes of acute coronary occlusion.
              </p>
            </div>
          </div>
        </div>

        {/* Hyperkalemia Progression Sequence */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-2">
            Hyperkalemia ECG Sequence
          </h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-red-950 gap-2 bg-white/80 p-3 rounded-lg border border-red-200 font-medium">
            <span>Tall Peaked T Waves</span>
            <span
              className="hidden sm:inline"
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("\\rightarrow", {
                  throwOnError: false,
                }),
              }}
            />
            <span>PR Prolongation & P Flattening</span>
            <span
              className="hidden sm:inline"
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("\\rightarrow", {
                  throwOnError: false,
                }),
              }}
            />
            <span>QRS Widening</span>
            <span
              className="hidden sm:inline"
              dangerouslySetInnerHTML={{
                __html: katex.renderToString("\\rightarrow", {
                  throwOnError: false,
                }),
              }}
            />
            <span className="text-red-900 font-bold">"Sine Wave" Pattern</span>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Always look for reciprocal ST changes! Inferior STEMI (II, III, aVF) famously displays reciprocal ST depression in lateral leads (I, aVL). If you see ST elevation in aVL, immediately look at III for ST depression!",
  },
];

const sections2: Section2[] = [
  {
    id: "acs-ischemia-vs-infarction",
    title: "1. Acute Coronary Syndromes (Ischemia vs. Infarction)",
    image: "/ACS_Ischemia_Infarction.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          Acute Coronary Syndromes (ACS) range along a spectrum of myocardial
          ischemia to frank necrosis, differentiated primarily by contiguous
          12-lead ECG changes and serum cardiac biomarkers.
        </p>

        {/* STEMI vs NSTEMI Comparison Grid */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              ACS Classification & Clinical Correlation
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* STEMI Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-3">
              <h5 className="font-bold text-red-900 mb-1 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                ST-Elevation MI (STEMI)
              </h5>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Characteristic ECG
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Convex ("tombstone") ST-segment elevation{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("\\ge 1\\text{ mm}", {
                        throwOnError: false,
                      }),
                    }}
                  />{" "}
                  in{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("\\ge 2", {
                        throwOnError: false,
                      }),
                    }}
                  />{" "}
                  contiguous leads, accompanied by reciprocal ST-depression in
                  opposing leads.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-red-100">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Clinical Correlation
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Severe, crushing retrosternal chest pain radiating to the jaw
                  or left arm, diaphoresis, and dyspnea due to{" "}
                  <strong>transmural myocardial necrosis</strong>.
                </p>
              </div>
            </div>

            {/* Non-ST-Elevation ACS Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-3">
              <h5 className="font-bold text-red-900 mb-1 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                Non-ST-Elevation ACS (NSTEMI / UA)
              </h5>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Characteristic ECG
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Horizontal or downsloping ST-segment depression (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("\\ge 0.5\\text{ mm}", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  ) or symmetric T-wave inversions.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-red-100">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Clinical Correlation
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Subendocardial ischemia</strong> presenting as chest
                  pain at rest or with minimal exertion. Elevated serum
                  troponins differentiate NSTEMI from Unstable Angina.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnostic Key Takeaway */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-2">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-2">
            Biomarker Differentiation
          </h4>
          <p className="text-sm text-red-950 leading-relaxed">
            While NSTEMI and Unstable Angina can present with identical
            ST-depressions or T-wave inversions,{" "}
            <strong>positive cardiac troponins (I or T)</strong> confirm cell
            death in NSTEMI, whereas Unstable Angina features normal cardiac
            biomarker levels.
          </p>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Remember the anatomical depth! STEMI = transmural (full thickness) ischemia, which causes outward ST elevation. NSTEMI/UA = subendocardial (partial thickness) ischemia, which causes ST depression or T-wave inversion.",
  },
  {
    id: "cardiac-arrhythmias-afib-vt",
    title: "2. Cardiac Arrhythmias (AFib vs. VT)",
    image: "/Cardiac_Arrhythmias_ECG.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>Cardiac arrhythmias</strong> disrupt the normal electrical
          conduction pathway, compromising mechanical efficiency and organ
          perfusion. Proper identification requires distinguishing
          supraventricular rhythms like <strong>Atrial Fibrillation</strong>{" "}
          from life-threatening ventricular rhythms like{" "}
          <strong>Ventricular Tachycardia</strong>.
        </p>

        {/* Arrhythmia Comparison Cards */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">High-Yield Arrhythmias</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Atrial Fibrillation Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-3">
              <h5 className="font-bold text-red-900 mb-1 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                Atrial Fibrillation (AFib)
              </h5>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Characteristic ECG
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>"Irregularly irregular"</strong> QRS complexes, total{" "}
                  <strong>absence of discrete P-waves</strong>, and chaotic
                  fibrillatory background waves (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("f", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  -waves).
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-red-100">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Clinical Correlation
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Presents with palpitations, fatigue, and lightheadedness.
                  Carries a high risk of <strong>thromboembolic stroke</strong>{" "}
                  due to blood stasis in the{" "}
                  <strong>left atrial appendage</strong>.
                </p>
              </div>
            </div>

            {/* Ventricular Tachycardia Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-3">
              <h5 className="font-bold text-red-900 mb-1 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                Ventricular Tachycardia (VT)
              </h5>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Characteristic ECG
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Wide QRS complexes (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("> 120\\text{ ms}", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  ) at a rate{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("> 100\\text{ bpm}", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  , often displaying <strong>AV dissociation</strong>,{" "}
                  <strong>capture beats</strong>, and{" "}
                  <strong>fusion beats</strong>.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-red-100">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Clinical Correlation
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Causes syncope, profound hypotension, or cardiac arrest due to
                  severely reduced diastolic filling time and diminished cardiac
                  output.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pathophysiologic Key Takeaway */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-2">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-2">
            Diagnostic Pathognomonic Clues
          </h4>
          <p className="text-sm text-red-950 leading-relaxed">
            When evaluating a wide-complex tachycardia, look closely for{" "}
            <strong>capture beats</strong> (a normal sinus QRS complex appearing
            amid the tachycardia) or <strong>fusion beats</strong> (a hybrid QRS
            complex formed by simultaneous SA node and ventricular
            impulses)—these are diagnostic proof of{" "}
            <strong>Ventricular Tachycardia</strong> over SVT with aberrancy!
          </p>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Unstable VT with a pulse requires immediate synchronized cardioversion. Pulseless VT requires immediate defibrillation (unsynchronized shock) + CPR following the ACLS cardiac arrest algorithm!",
  },
  {
    id: "structural-pericardial-diseases",
    title: "3. Structural & Pericardial Diseases",
    image: "/Pericardial_Diseases_ECG.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>Pericardial diseases</strong> directly affect the sac
          surrounding the heart, producing characteristic ECG shifts and
          mechanical complications that range from local inflammation to
          life-threatening circulatory collapse.
        </p>

        {/* Pericardial Diseases Comparison Cards */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">Pericardial Pathologies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Acute Pericarditis Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-3">
              <h5 className="font-bold text-red-900 mb-1 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                Acute Pericarditis
              </h5>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Characteristic ECG
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Diffuse concave</strong> ST-elevation with{" "}
                  <strong>PR-segment depression</strong> across almost all leads
                  (except <strong>aVR</strong>, which shows PR elevation and ST
                  depression).
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-red-100">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Clinical Correlation
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Sharp, pleuritic chest pain that worsens when lying flat and{" "}
                  <strong>improves when leaning forward</strong>, often
                  accompanied by a pericardial friction rub.
                </p>
              </div>
            </div>

            {/* Cardiac Tamponade Card */}
            <div className="bg-white/70 p-4 rounded-lg border border-red-100 shadow-sm space-y-3">
              <h5 className="font-bold text-red-900 mb-1 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                Cardiac Tamponade
              </h5>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Characteristic ECG
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Low-voltage QRS complexes</strong> and{" "}
                  <strong>electrical alternans</strong> (beat-to-beat variation
                  in QRS height as the heart swings in fluid).
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-red-100">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Clinical Correlation
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Characterized by <strong>Beck's Triad</strong> plus{" "}
                  <strong>pulsus paradoxus</strong> (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("> 10\\text{ mmHg}", {
                        throwOnError: false,
                      }),
                    }}
                  />{" "}
                  drop in systolic BP during inspiration).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Triad Breakdown */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 space-y-3">
          <h4 className="font-bold uppercase tracking-wide text-xs text-red-800 border-b border-red-300 pb-2 mb-2">
            Beck's Triad of Cardiac Tamponade
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-red-950 font-medium text-center">
            <div className="bg-white/80 p-3 rounded-lg border border-red-200 shadow-sm">
              <span className="block text-red-900 font-bold mb-1">
                1. Hypotension
              </span>
              <span className="text-xs text-slate-600">
                Decreased stroke volume
              </span>
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-red-200 shadow-sm">
              <span className="block text-red-900 font-bold mb-1">2. JVD</span>
              <span className="text-xs text-slate-600">
                Impaired venous return
              </span>
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-red-200 shadow-sm">
              <span className="block text-red-900 font-bold mb-1">
                3. Muffled Heart Sounds
              </span>
              <span className="text-xs text-slate-600">
                Fluid insulation around sac
              </span>
            </div>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Diffuse ST elevation without reciprocal depression (except in aVR) points straight to Acute Pericarditis, NOT a STEMI! If the patient later develops electrical alternans and hypotension, suspect progression to Cardiac Tamponade requiring emergency pericardiocentesis.",
  },
  {
    id: "high-yield-clinical-correlations-summary",
    title: "High-Yield Clinical Correlation Summary",
    image: "/Clinical_Correlations_Summary.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Section */}
        <p className="text-base text-slate-600 leading-relaxed">
          A high-yield summary connecting{" "}
          <strong>pathognomonic ECG findings</strong> with their classic
          clinical presentations for board exams and acute clinical management.
        </p>

        {/* High-Yield Clinical Correlations Table */}
        <div className="overflow-hidden rounded-xl border border-red-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-red-900 text-white font-semibold">
              <tr>
                <th className="p-3 w-1/4">Disease Entity</th>
                <th className="p-3 w-1/3">Pathognomonic ECG Finding</th>
                <th className="p-3">Classic Clinical Presentation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-100 bg-red-50/40 text-red-950">
              {/* Inferior STEMI */}
              <tr className="hover:bg-red-100/50 transition-colors">
                <td className="p-3 font-semibold text-red-900">
                  Inferior STEMI
                  <span className="block text-xs font-normal text-slate-500">
                    (RCA Occlusion)
                  </span>
                </td>
                <td className="p-3 font-medium">
                  ST elevation in leads <strong>II, III, and aVF</strong>
                </td>
                <td className="p-3 leading-relaxed">
                  Crushing chest pain + <strong>bradycardia/hypotension</strong>{" "}
                  (due to increased vagal tone and RV involvement).
                </td>
              </tr>

              {/* Pulmonary Embolism */}
              <tr className="hover:bg-red-100/50 transition-colors">
                <td className="p-3 font-semibold text-red-900">
                  Pulmonary Embolism
                </td>
                <td className="p-3 font-medium">
                  <strong>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: katex.renderToString("S_1 Q_3 T_3", {
                          throwOnError: false,
                        }),
                      }}
                    />
                  </strong>{" "}
                  pattern or <strong>Sinus Tachycardia</strong> (most common)
                </td>
                <td className="p-3 leading-relaxed">
                  Acute dyspnea, pleuritic chest pain, tachypnea, and signs of
                  deep vein thrombosis (DVT).
                </td>
              </tr>

              {/* Hyperkalemia */}
              <tr className="hover:bg-red-100/50 transition-colors">
                <td className="p-3 font-semibold text-red-900">Hyperkalemia</td>
                <td className="p-3 font-medium">
                  Tall peaked T waves{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("\\rightarrow", {
                        throwOnError: false,
                      }),
                    }}
                  />{" "}
                  QRS widening{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("\\rightarrow", {
                        throwOnError: false,
                      }),
                    }}
                  />{" "}
                  <strong>Sine wave</strong>
                </td>
                <td className="p-3 leading-relaxed">
                  Muscle weakness, flaccid paralysis, and acute or chronic renal
                  failure.
                </td>
              </tr>

              {/* Wolff-Parkinson-White */}
              <tr className="hover:bg-red-100/50 transition-colors">
                <td className="p-3 font-semibold text-red-900">
                  Wolff-Parkinson-White (WPW)
                </td>
                <td className="p-3 font-medium">
                  Short PR interval (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString("< 120\\text{ ms}", {
                        throwOnError: false,
                      }),
                    }}
                  />
                  ) + <strong>Delta wave</strong> (slurred QRS upstroke)
                </td>
                <td className="p-3 leading-relaxed">
                  Young patient presenting with recurrent episodes of
                  sudden-onset, paroxysmal tachycardia.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* High-Yield Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/70 p-4 rounded-xl border border-red-200 shadow-sm space-y-1">
            <h5 className="font-bold text-red-900 text-sm flex items-center gap-2">
              <Activity className="h-4 w-4 text-red-600" />
              PE / Right Heart Strain Clue
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed">
              While <strong>Sinus Tachycardia</strong> is the most common ECG
              finding in PE, the{" "}
              <strong>
                <span
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString("S_1 Q_3 T_3", {
                      throwOnError: false,
                    }),
                  }}
                />
              </strong>{" "}
              pattern (S wave in I, Q wave in III, inverted T wave in III)
              reflects acute cor pulmonale/right strain.
            </p>
          </div>

          <div className="bg-white/70 p-4 rounded-xl border border-red-200 shadow-sm space-y-1">
            <h5 className="font-bold text-red-900 text-sm flex items-center gap-2">
              <Activity className="h-4 w-4 text-red-600" />
              WPW Accessory Pathway
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed">
              WPW involves an accessory conduction pathway (
              <strong>Bundle of Kent</strong>) that bypasses the AV node,
              causing premature ventricular pre-excitation seen as a{" "}
              <strong>delta wave</strong>.
            </p>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Never give AV-node blocking agents (e.g., adenosine, beta-blockers, CCBs) to a patient with WPW and Atrial Fibrillation! Blocking the AV node forces all impulses down the accessory pathway, driving the patient straight into Ventricular Fibrillation.",
  },
];

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

// ============================================================================
// DATA CONFIGURATIONS
// ============================================================================

const KEY_TAKEAWAYS: string[] = [
  "Student will master the spatial framework of the thoracic cage",
  "Student will systematically compartmentalize the mediastinum",
  "Student will map the structural and functional relationships of the great vessels",
  "Student will integrate anatomical landmarks with high-yield clinical procedures",
];

// ============================================================================
// COMPONENT IMPLEMENTATION
// ============================================================================
export default function MusclePhysiology() {
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

  const handleSectionChange2 = (index: number) => {
    if (index === activeIndex2) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex2(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    // Removed overflow-x-hidden from here to let the window manage scrolling cleanly
    <div
      id="top"
      className="min-h-screen bg-[#FDF8F5] text-[#1F365C] font-sans selection:bg-[#A71627]/10 selection:text-[#A71627] relative pb-24"
    >
      {/* If ambient blur blobs cause horizontal overflow, wrap JUST them in a clipped container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/20 to-amber-100/10 rounded-full blur-3xl" />
        <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-[700px] h-[700px] bg-gradient-to-tr from-amber-100/15 to-rose-100/20 rounded-full blur-3xl" />
      </div>

      <div className="bg-blend-soft-light relative h-20 overflow-hidden rounded-xl">
        <img
          src="/ECGHeader.png"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 relative z-10">
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
            ECG
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1F365C] leading-[1.15] max-w-4xl">
            Electrocardiogram
          </h1>
        </header>

        {/* Split Section: Canvas & Introduction Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          <div className="lg:col-span-7 w-full lg:sticky lg:top-8 z-10">
            <div className="w-full aspect-[4/3] sm:aspect-square lg:h-[calc(100vh-12rem)] rounded-3xl  border border-white/40 bg-white shadow-xl overflow-hidden relative group">
              <div className="absolute top-6 left-6 z-20 flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm text-xs font-medium tracking-wide text-[#1F365C]/80">
                <Activity className="w-3.5 h-3.5 text-[#A71627] animate-pulse" />
                <span>ECG GRAPH</span>
              </div>
              <ECGGraph />
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
                An Electrocardiogram (ECG) measures and records the electrical
                activity generated by the heart during each cardiac cycle. It
                maps the sequence of electrical excitation (depolarization) and
                recovery (repolarization) as cardiac action potentials travel
                through the conduction system.
              </p>

              <div className="p-4 rounded-2xl bg-red-50/80 inset-shadow-sm border border-white/60 text-xs text-[#1F365C]/90 leading-relaxed flex gap-3">
                <BadgeInfo className="w-4 h-4 text-[#A71627] shrink-0 mt-0.5" />
                <span>
                  <strong>Important Note:</strong> We monitor ECGs because they
                  provide a non-invasive, real-time window into the heart's
                  electrical system. Allowing us to quickly detect
                  life-threatening rhythms, identify heart attacks, and catch
                  hidden structural or electrolyte abnormalities before they
                  cause irreversible damage.
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* Section: Overview */}
        <section className="mb-20">
          <div className="rounded-3xl border border-white/40 bg-white backdrop-blur-xl shadow-xl p-8 sm:p-12">
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
                    <CircleCheck
                      size={20}
                      className="text-[#A71627] shrink-0"
                    />

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
                  How To Interpret The ECG Wave
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
                  ECG Findings Associated with Common Cardiovascular Disease
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
                          onClick={() => handleSectionChange2(index)}
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
                  ECG Findings Associated with Common Cardiovascular Disease
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
                          onClick={() => handleSectionChange2(index)}
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

          <ECGGame />
        </section>

        {/* Section: Key Takeaways */}
        <section className="mb-20">
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
