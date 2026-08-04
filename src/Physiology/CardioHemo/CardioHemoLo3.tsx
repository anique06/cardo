import katex from "katex";
import "katex/dist/katex.min.css";
import {
  Activity,
  Database,
  AlertTriangle,
  HeartPulse,
  Droplet,
  Minimize2,
  TrendingUp,
  Info,
} from "lucide-react";

const renderMath = (latex: string) => ({
  __html: katex.renderToString(latex, { throwOnError: false }),
});

export default function CardoHemoLo3() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8  rounded-2xl  text-slate-800 font-sans">
      {/* Header Section */}
      <div className="bg-white p-6 rounded-xl shadow-md ">
        <h1 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <HeartPulse className="text-red-600 w-7 h-7" />
        </h1>
        <p className="text-slate-600 leading-relaxed">
          <strong className="text-red-700">
            Resistance vessels (arterioles)
          </strong>{" "}
          control flow and blood pressure through high vascular tone, while{" "}
          <strong className="text-blue-700">capacitance vessels (veins)</strong>{" "}
          act as a distensible reservoir that stores the vast majority of total
          blood volume.
        </p>
      </div>

      {/* Grid for Detailed Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Arterioles Card */}
        <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden flex flex-col">
          <div className="bg-red-900 p-4 text-white flex items-center gap-3">
            <Activity className="text-red-300 w-6 h-6" />
            <h2 className="text-lg font-bold">
              1. Resistance Vessels (Arterioles)
            </h2>
          </div>
          <div className="p-5 space-y-4 text-sm text-slate-700 grow">
            <div>
              <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-red-500" /> Primary Function
              </h3>
              <p>
                Regulate total peripheral resistance (
                <span dangerouslySetInnerHTML={renderMath("\\text{TPR}")} />
                ), direct local tissue blood flow, and establish systemic blood
                pressure (
                <span
                  dangerouslySetInnerHTML={renderMath(
                    "\\text{MAP} = \\text{CO} \\times \\text{TPR}",
                  )}
                />
                ).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                <Info className="w-4 h-4 text-red-500" /> Anatomical Structure
              </h3>
              <p>
                Thick vascular smooth muscle wall relative to lumen size; high
                concentration of{" "}
                <span dangerouslySetInnerHTML={renderMath("\\alpha_1")} /> and{" "}
                <span dangerouslySetInnerHTML={renderMath("\\beta_2")} />{" "}
                adrenergic receptors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                <Minimize2 className="w-4 h-4 text-red-500" /> Compliance &
                Pressure
              </h3>
              <p>
                Low compliance (rigid walls). Pressure drops sharply across the
                network from{" "}
                <span
                  dangerouslySetInnerHTML={renderMath("\\sim 90 \\text{ mmHg}")}
                />{" "}
                down to{" "}
                <span
                  dangerouslySetInnerHTML={renderMath("\\sim 30 \\text{ mmHg}")}
                />{" "}
                as kinetic energy is lost overcoming high frictional resistance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                <Droplet className="w-4 h-4 text-red-500" /> Blood Volume
              </h3>
              <p>
                Houses only a small fraction (<strong>~10–15%</strong>) of
                systemic blood volume.
              </p>
            </div>
          </div>
        </div>

        {/* Veins Card */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-200 overflow-hidden flex flex-col">
          <div className="bg-blue-900 p-4 text-white flex items-center gap-3">
            <Database className="text-blue-300 w-6 h-6" />
            <h2 className="text-lg font-bold">
              2. Capacitance Vessels (Veins & Venules)
            </h2>
          </div>
          <div className="p-5 space-y-4 text-sm text-slate-700 grow">
            <div>
              <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-blue-500" /> Primary
                Function
              </h3>
              <p>
                Serve as a dynamic blood reservoir and regulate venous return
                (and thus End-Diastolic Volume via the Frank-Starling
                mechanism).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                <Info className="w-4 h-4 text-blue-500" /> Anatomical Structure
              </h3>
              <p>
                Thin, highly stretchable walls with minimal smooth muscle and
                large internal diameters.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                <Minimize2 className="w-4 h-4 text-blue-500" /> Compliance &
                Pressure
              </h3>
              <p>
                High compliance (
                <span
                  dangerouslySetInnerHTML={renderMath(
                    "C = \\frac{\\Delta V}{\\Delta P}",
                  )}
                />
                ). They accommodate large increases in volume with minimal
                changes in internal pressure (
                <span
                  dangerouslySetInnerHTML={renderMath(
                    "\\sim 2\\text{--}10 \\text{ mmHg}",
                  )}
                />
                ).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-1">
                <Droplet className="w-4 h-4 text-blue-500" /> Blood Volume
              </h3>
              <p>
                Contains the vast majority (<strong>~65–70%</strong>) of total
                systemic blood at rest (the "unstressed volume").
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-900 text-white">
          <h2 className="text-lg font-semibold tracking-wide">
            High-Yield Board Comparison
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <th className="p-4 w-1/4">Characteristic</th>
                <th className="p-4 w-3/8 text-red-900 border-l border-slate-200">
                  Resistance Vessels (Arterioles)
                </th>
                <th className="p-4 w-3/8 text-blue-900 border-l border-slate-200">
                  Capacitance Vessels (Veins)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-slate-900">
                  Primary Role
                </td>
                <td className="p-4 border-l border-slate-200">
                  Regulate{" "}
                  <span dangerouslySetInnerHTML={renderMath("\\text{TPR}")} />,
                  organ perfusion, &{" "}
                  <span dangerouslySetInnerHTML={renderMath("\\text{MAP}")} />
                </td>
                <td className="p-4 border-l border-slate-200">
                  Blood volume storage & Venous Return (
                  <span dangerouslySetInnerHTML={renderMath("\\text{VR}")} />)
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-slate-900">
                  Vessel Wall
                </td>
                <td className="p-4 border-l border-slate-200">
                  Thick smooth muscle, high elastic tone
                </td>
                <td className="p-4 border-l border-slate-200">
                  Thin wall, highly distensible
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-slate-900">
                  Compliance (<span dangerouslySetInnerHTML={renderMath("C")} />
                  )
                </td>
                <td className="p-4 border-l border-slate-200">
                  Low (
                  <span
                    dangerouslySetInnerHTML={renderMath("\\Delta P")}
                  />{" "}
                  increases rapidly with{" "}
                  <span dangerouslySetInnerHTML={renderMath("\\Delta V")} />)
                </td>
                <td className="p-4 border-l border-slate-200">
                  High (stores volume with low{" "}
                  <span dangerouslySetInnerHTML={renderMath("\\Delta P")} />)
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-slate-900">
                  Blood Distribution
                </td>
                <td className="p-4 border-l border-slate-200 font-medium">
                  ~10–15% total volume
                </td>
                <td className="p-4 border-l border-slate-200 font-medium">
                  ~65–70% total volume
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-slate-900">
                  Sympathetic Effect
                </td>
                <td className="p-4 border-l border-slate-200">
                  <span dangerouslySetInnerHTML={renderMath("\\alpha_1")} />{" "}
                  activation{" "}
                  <span dangerouslySetInnerHTML={renderMath("\\rightarrow")} />{" "}
                  Vasoconstriction{" "}
                  <span
                    dangerouslySetInnerHTML={renderMath(
                      "\\rightarrow \\uparrow \\text{TPR}",
                    )}
                  />
                </td>
                <td className="p-4 border-l border-slate-200">
                  <span dangerouslySetInnerHTML={renderMath("\\alpha_1")} />{" "}
                  activation{" "}
                  <span dangerouslySetInnerHTML={renderMath("\\rightarrow")} />{" "}
                  Venoconstriction{" "}
                  <span
                    dangerouslySetInnerHTML={renderMath(
                      "\\rightarrow \\uparrow \\text{VR}",
                    )}
                  />
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-slate-900">
                  Clinical Relevance
                </td>
                <td className="p-4 border-l border-slate-200 text-red-700 font-medium">
                  Hypertension targets (ACE inhibitors, CCBs)
                </td>
                <td className="p-4 border-l border-slate-200 text-blue-700 font-medium">
                  Nitrates cause venodilation{" "}
                  <span
                    dangerouslySetInnerHTML={renderMath(
                      "\\rightarrow \\downarrow",
                    )}
                  />{" "}
                  Preload
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Exam Trap Alert Card */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-red-600 w-6 h-6 shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm text-red-950">
            <h3 className="font-bold uppercase tracking-wide text-xs text-red-800">
              Exam Trap to Watch For
            </h3>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                <strong>Arteriolar constriction</strong> (
                <span
                  dangerouslySetInnerHTML={renderMath("\\uparrow \\text{TPR}")}
                />
                ) increases heart <em>afterload</em>.
              </li>
              <li>
                <strong>Venous constriction</strong> converts "unstressed
                volume" into "stressed volume," shifting blood toward the heart
                to increase <em>preload</em>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
