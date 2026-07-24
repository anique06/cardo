import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Activity,
  AlertTriangle,
  Clock,
  FileText,
  CheckCircle2,
  Stethoscope,
  Pill,
  Microscope,
  Building2,
  ShieldAlert,
  ChevronRight,
} from "lucide-react";

export default function MI() {
  const [activeTab, setActiveTab] = useState("timeline");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen bg-[#FDF8F5] text-[#1F365C] font-sans selection:bg-[#A71627]/10 selection:text-[#A71627] relative overflow-x-hidden pb-24"
    >
      {/* Visual Accent Header Bar */}
      <div className="bg-blend-soft-light relative h-16 bg-[#1F365C] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#A71627_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F365C] via-[#1F365C]/90 to-transparent" />
      </div>

      {/* Ambient Background Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Navigation Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1F365C]/70 hover:text-[#A71627] transition-colors group mb-6"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Cardiology Clinical Cases</span>
        </Link>

        {/* Clinical Case Header */}
        <header className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#A71627]/10 text-[#A71627] font-bold text-xs rounded-full uppercase tracking-wider">
              Clinical Case Study
            </span>
            <span className="px-3 py-1 bg-slate-100 text-[#1F365C] font-medium text-xs rounded-full">
              ID: ED-RZ-4946456
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-medium text-xs rounded-full">
              TIMI Score: 1 | Killip Class: I
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1F365C] tracking-tight leading-tight mb-4">
            Acute Inferior STEMI Complicated by Complete Heart Block (CHB) Post-Thrombolysis
          </h1>

          <p className="text-base sm:text-lg text-[#1F365C]/80 font-normal leading-relaxed max-w-5xl">
            Detailed clinical progress of a 54-year-old female presenting with acute inferior myocardial infarction. 
            The patient underwent successful thrombolysis with Streptokinase, followed by transient ST-segment resolution, 
            subsequently complicated by delayed high-grade AV block (CHB) requiring emergency transcutaneous pacing and inotropic support.
          </p>

          {/* Key Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 text-sm">
            <div>
              <span className="text-xs text-slate-500 uppercase font-semibold block">Patient Profile</span>
              <span className="font-semibold text-[#1F365C]">54Y / Female / Housewife</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase font-semibold block">Primary Presentation</span>
              <span className="font-semibold text-[#1F365C]">Left Chest Pain (3/7, PS 7/10)</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase font-semibold block">Thrombolytic Outcome</span>
              <span className="font-semibold text-emerald-700">Successful (STE Resolved @ 60m)</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase font-semibold block">Disposition</span>
              <span className="font-semibold text-[#A71627]">Admitted to CCU (HSNZ)</span>
            </div>
          </div>
        </header>

        {/* Clinical Navigation Tabs */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("timeline")}
            className={`flex items-center gap-2 py-3 px-5 border-b-2 font-semibold text-sm whitespace-nowrap transition-colors ${
              activeTab === "timeline"
                ? "border-[#A71627] text-[#A71627] bg-rose-50/50"
                : "border-transparent text-slate-600 hover:text-[#1F365C]"
            }`}
          >
            <Clock className="w-4 h-4" /> Sequential Narrative & Timeline
          </button>
          <button
            onClick={() => setActiveTab("investigations")}
            className={`flex items-center gap-2 py-3 px-5 border-b-2 font-semibold text-sm whitespace-nowrap transition-colors ${
              activeTab === "investigations"
                ? "border-[#A71627] text-[#A71627] bg-rose-50/50"
                : "border-transparent text-slate-600 hover:text-[#1F365C]"
            }`}
          >
            <Microscope className="w-4 h-4" /> Lab Panels & Diagnostics
          </button>
          <button
            onClick={() => setActiveTab("plan")}
            className={`flex items-center gap-2 py-3 px-5 border-b-2 font-semibold text-sm whitespace-nowrap transition-colors ${
              activeTab === "plan"
                ? "border-[#A71627] text-[#A71627] bg-rose-50/50"
                : "border-transparent text-slate-600 hover:text-[#1F365C]"
            }`}
          >
            <Pill className="w-4 h-4" /> Treatment Regimen & CCU Plan
          </button>
        </div>

        {/* TAB 1: TIMELINE & CASE STORYLINE */}
        {activeTab === "timeline" && (
          <div className="space-y-8">
            {/* 1. Baseline & Demographics Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="p-2 bg-slate-100 rounded-lg text-[#1F365C]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#1F365C]">Patient Demographics & Background</h2>
                  <p className="text-xs text-slate-500">Medical History & Prior Cardiac Records</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h3 className="font-semibold text-[#1F365C] mb-2">Social Profile</h3>
                  <ul className="space-y-1.5 text-slate-700 text-xs">
                    <li><strong className="text-slate-900">Age/Gender:</strong> 54 years old, Lady</li>
                    <li><strong className="text-slate-900">Residence:</strong> Bukit Besi</li>
                    <li><strong className="text-slate-900">Occupation:</strong> Housewife</li>
                    <li><strong className="text-slate-900">Family:</strong> Blessed with 7 children</li>
                    <li><strong className="text-slate-900">Functional Status:</strong> ADL Independent</li>
                    <li><strong className="text-slate-900">Allergies:</strong> NKDFA</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h3 className="font-semibold text-[#1F365C] mb-2">Past Medical History (u/l)</h3>
                  <ul className="space-y-1.5 text-slate-700 text-xs">
                    <li>1. <strong>Hyperlipidemia / Hypertension (HPL)</strong></li>
                    <li>
                      2. <strong>Hx Admission for Cardiac Syncope:</strong> Secondary to 1st degree Heart Block (HB), possible 2° to electrolyte imbalance (Hypomagnesemia & Hypophosphatemia).
                    </li>
                    <li>3. <strong>CT Brain (05/04/2026):</strong> No CT evidence of ICB or lesion.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h3 className="font-semibold text-[#1F365C] mb-2">Pre-Admission Meds & Outpatient Plan</h3>
                  <ul className="space-y-1.5 text-slate-700 text-xs mb-3">
                    <li>• Tab. Atorvastatin 40mg ON</li>
                    <li>• Tab. Pantoprazole 40mg OD</li>
                  </ul>
                  <div className="pt-2 border-t border-slate-200/80">
                    <span className="font-semibold text-slate-900 block text-xs">Pending Follow-Ups:</span>
                    <span className="text-xs text-slate-600 block">• TCA MOPD 6/12 (Review ECHO & Holter)</span>
                    <span className="text-xs text-slate-600 block">• TCA Cardio HSNZ (14/07/2026)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Timeline Cards */}
            <div className="relative border-l-2 border-rose-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
              
              {/* Event 1: Initial Symptom Onset */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 p-1.5 bg-rose-500 text-white rounded-full ring-4 ring-[#FDF8F5]">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                      05/07/2026 @ 09:00 AM — Initial Clinical Presentation
                    </span>
                    <span className="text-xs text-slate-500 font-medium">GP Visit & Urgent Referral</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#1F365C] mb-2">Severe Acute Chest Pain & Numbness</h3>
                  <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                    Patient experienced left-sided chest pain for 3 days, with acute intensification at 9:00 AM. 
                    Described as <strong>pricking in nature</strong>, radiating to the left upper limb and back (Pain Score 7/10), accompanied by left upper limb numbness.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                    <div>
                      <strong className="text-slate-900 block mb-1">Associated Symptoms:</strong>
                      <span>Left Upper Limb (UL) Numbness</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">Review of Systems (Negative):</strong>
                      <span>No palpitations, no SOB, no headache, no dizziness, no abdominal pain, no URTI/UTI.</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span><strong>GP Action:</strong> ECG performed showing <strong>Inferior MI</strong>. Emergency referral issued to Hospital Dungun.</span>
                  </div>
                </div>
              </div>

              {/* Event 2: Emergency Department Presentation - Hospital Dungun */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 p-1.5 bg-blue-600 text-white rounded-full ring-4 ring-[#FDF8F5]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      Hospital Dungun ED Evaluation
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Acute STEMI Workup</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F365C] mb-3">Initial Assessment & Diagnostic Lead</h3>

                  {/* Vitals Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4 text-center">
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">BP</span>
                      <span className="text-xs font-bold text-[#1F365C]">141/89 mmHg</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">PR</span>
                      <span className="text-xs font-bold text-[#1F365C]">65 bpm</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">RR</span>
                      <span className="text-xs font-bold text-[#1F365C]">23 /min</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">SpO2</span>
                      <span className="text-xs font-bold text-[#1F365C]">98% (RA)</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">CBG</span>
                      <span className="text-xs font-bold text-[#1F365C]">7.0 mmol/L</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">Pain Score</span>
                      <span className="text-xs font-bold text-rose-600">5 / 10</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p><strong>Physical Examination:</strong> Alert, conscious, GCS full (15/15), non-tachypneic, good peripheral perfusion. Chest: Lungs clear. CVS: Dual rhythms, no murmurs (DRNM). Abdomen: Soft, non-tender.</p>
                    <p className="text-[#A71627] font-semibold">
                      <strong>ED Diagnostic ECG:</strong> Sinus Rhythm (SR), Right Bundle Branch Block (RBBB), ST Elevation (STE) in leads III & aVF. ST Depression (STD) in leads I, aVL, V5. (No right-sided or posterior involvement).
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 3: Thrombolysis Protocol */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 p-1.5 bg-emerald-600 text-white rounded-full ring-4 ring-[#FDF8F5]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      01:50 PM – 02:50 PM — Thrombolysis Therapy
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold">Reperfusion Successful</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F365C] mb-3">Streptokinase Infusion & ECG Resolution</h3>

                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-lg">
                      <p className="font-semibold text-emerald-900">Intervention:</p>
                      <p>IV Streptokinase 1.5MU initiated @ 01:50 PM and completed @ 02:50 PM without acute allergic reaction.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <strong className="text-slate-900 block mb-1">Post-Strep Vitals & Pain Score:</strong>
                        <span>BP 125/79 mmHg | PR 59 bpm | RR 20 | T 37.0°C | SpO2 100% (RA). Pain score reduced from 5/10 to <strong>3/10</strong>.</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <strong className="text-slate-900 block mb-1">Anticoagulation Stat Dose:</strong>
                        <span>IV Fondaparinux 2.5mg stat administered @ 03:30 PM.</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded-lg">
                      <strong className="text-slate-900 block mb-1">Serial Post-Thrombolysis ECG Monitoring:</strong>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        <li><strong>0 min:</strong> No resolution of ST elevation yet.</li>
                        <li><strong>30 min & 60 min:</strong> <span className="text-emerald-700 font-bold">Complete resolution of ST elevation in Lead III and aVF</span>. Diagnosed as successful reperfusion.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event 4: Emergency Deterioration - Complete Heart Block */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 p-1.5 bg-red-600 text-white rounded-full ring-4 ring-[#FDF8F5] animate-pulse">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div className="bg-red-50/40 rounded-2xl p-6 border border-red-200 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="text-xs font-bold text-red-700 bg-red-100 px-2.5 py-1 rounded-md">
                      10:45 PM – 02:00 AM — Critical Complication
                    </span>
                    <span className="text-xs text-red-600 font-bold uppercase">Hemodynamic Collapse</span>
                  </div>

                  <h3 className="text-lg font-bold text-red-900 mb-2">Development of Complete Heart Block (CHB) & Bradycardia</h3>
                  <p className="text-xs text-slate-700 mb-4">
                    Initially admitted to the medical ward with mild pain (PS 2/10). At 10:45 PM, patient suddenly deteriorated with severe chest pain (PS 10/10), symptomatic bradycardia, giddiness, and pre-syncope.
                  </p>

                  <div className="space-y-3 text-xs">
                    <div className="bg-white p-3.5 rounded-xl border border-red-200">
                      <strong className="text-red-900 block mb-1">Resuscitation Interventions:</strong>
                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                        <li><strong>Atropine Trial:</strong> IV Atropine total 2mg administered. <em>Bradycardia persisted.</em></li>
                        <li><strong>Inotropic Support:</strong> IVI Dobutamine initiated @ 4cc/hr. HR maintained at 45–55 bpm.</li>
                        <li><strong>02:00 AM Spike:</strong> Developed vomiting and fever spike (38.0°C). Administered IV MgSO4 and IV Phosphate replacement.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-red-200">
                      <strong className="text-red-900 block mb-1">02:00 AM Diagnostic ECG & Transcutaneous Pacing (TCP):</strong>
                      <p className="text-slate-700 mb-2">ECG confirmed <strong>Complete Heart Block (3rd Degree AV Block)</strong>.</p>
                      <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-200">
                        <strong>TCP Protocol:</strong> Pacer rate set at 60 ppm, output increased from 10mA to 50mA. <em>Unsuccessful electrical/mechanical capture</em>. Native heart rate remained bradycardic at 40–44 bpm. Decision made for urgent transfer to tertiary center (HSNZ).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event 5: Tertiary Transfer & Assessment at HSNZ */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 p-1.5 bg-[#1F365C] text-white rounded-full ring-4 ring-[#FDF8F5]">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="text-xs font-bold text-[#1F365C] bg-slate-100 px-2.5 py-1 rounded-md">
                      Transfer & Review at ED HSNZ
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Medical Review</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F365C] mb-2">Tertiary Medical Re-evaluation</h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">BP</span>
                      <span className="text-xs font-bold text-[#1F365C]">111/54 mmHg</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">PR</span>
                      <span className="text-xs font-bold text-[#A71627]">41 bpm (Brady)</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">SpO2</span>
                      <span className="text-xs font-bold text-[#1F365C]">99% (NPO2)</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">Temp</span>
                      <span className="text-xs font-bold text-[#1F365C]">37.6 °C</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                    <p><strong>Clinical Status:</strong> Low grade fever (37.6°C). No desaturation under nasal cannula oxygen. No shortness of breath. Giddiness and headache resolved. No GI loss.</p>
                    <p><strong>Physical Exam:</strong> Lungs clear, CVS S1 S2 audible, abdomen soft non-tender, no pedal edema.</p>
                    <p><strong>ECG at HSNZ:</strong> Sinus Bradycardia with Right Bundle Branch Block (RBBB).</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: INVESTIGATIONS & LAB PANELS */}
        {activeTab === "investigations" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-[#1F365C] mb-4 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-[#A71627]" />
                Laboratory Investigation Summary (Hospital Dungun)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Full Blood Count */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2.5 font-bold text-xs text-[#1F365C] uppercase">
                    Full Blood Count (FBC)
                  </div>
                  <div className="p-4 space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">WBC</span>
                      <span className="font-semibold text-slate-900">4.98 x10^9/L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Hemoglobin (HB)</span>
                      <span className="font-semibold text-slate-900">12.1 g/dL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Platelets (PLT)</span>
                      <span className="font-semibold text-slate-900">168 x10^9/L</span>
                    </div>
                  </div>
                </div>

                {/* Renal Profile & Electrolytes */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2.5 font-bold text-xs text-[#1F365C] uppercase">
                    Renal & Electrolyte Profile
                  </div>
                  <div className="p-4 space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Urea</span>
                      <span className="font-semibold text-slate-900">5.76 mmol/L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Sodium (Na)</span>
                      <span className="font-semibold text-slate-900">141 mmol/L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Potassium (K)</span>
                      <span className="font-semibold text-slate-900">3.88 mmol/L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Chloride (Cl)</span>
                      <span className="font-semibold text-slate-900">110 mmol/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Creatinine</span>
                      <span className="font-semibold text-slate-900">63 umol/L</span>
                    </div>
                  </div>
                </div>

                {/* Liver Function Tests */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2.5 font-bold text-xs text-[#1F365C] uppercase">
                    Liver Function Test (LFT)
                  </div>
                  <div className="p-4 space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Albumin (ALB)</span>
                      <span className="font-semibold text-slate-900">40 g/L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Total Bilirubin</span>
                      <span className="font-semibold text-slate-900">8.59 umol/L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">ALP</span>
                      <span className="font-semibold text-slate-900">78 U/L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">ALT</span>
                      <span className="font-semibold text-slate-900">17 U/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">AST</span>
                      <span className="font-semibold text-slate-900">23 U/L</span>
                    </div>
                  </div>
                </div>

                {/* Cardiac Enzymes */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2.5 font-bold text-xs text-[#1F365C] uppercase">
                    Cardiac Markers & Enzymes
                  </div>
                  <div className="p-4 space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Creatine Kinase (CK)</span>
                      <span className="font-semibold text-slate-900">83 U/L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">LDH</span>
                      <span className="font-semibold text-slate-900">172 U/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">CK-MB</span>
                      <span className="font-semibold text-slate-900">15 U/L</span>
                    </div>
                  </div>
                </div>

                {/* Serum Minerals & Coagulation */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2.5 font-bold text-xs text-[#1F365C] uppercase">
                    Minerals & Coagulation
                  </div>
                  <div className="p-4 space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Calcium (Ca)</span>
                      <span className="font-semibold text-slate-900">2.55 mmol/L</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Phosphate (PO4)</span>
                      <span className="font-semibold text-amber-700 font-bold">0.70 mmol/L (Low)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Magnesium (Mg)</span>
                      <span className="font-semibold text-amber-700 font-bold">0.79 mmol/L (Low)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">PT / INR</span>
                      <span className="font-semibold text-slate-900">11.4s / 1.04</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">APTT</span>
                      <span className="font-semibold text-slate-900">33s</span>
                    </div>
                  </div>
                </div>

                {/* Imaging Findings */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2.5 font-bold text-xs text-[#1F365C] uppercase">
                    Radiology & Imaging
                  </div>
                  <div className="p-4 text-xs space-y-2">
                    <div>
                      <strong className="text-slate-900 block mb-1">Chest X-Ray (CXR):</strong>
                      <span className="text-slate-700">Clear lung fields. No features of acute pulmonary edema or cardiomegaly.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DIAGNOSIS & MANAGEMENT PLAN */}
        {activeTab === "plan" && (
          <div className="space-y-6">
            {/* Diagnosis Impression */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-[#1F365C] mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#A71627]" />
                Clinical Impression (Imp:)
              </h2>

              <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100 space-y-2 text-sm text-[#1F365C]">
                <p className="font-bold">
                  1. Acute Inferior Myocardial Infarction (TIMI 1, Killip Class 1)
                </p>
                <p className="pl-4 text-emerald-800 font-semibold">
                  • Status: Successfully Thrombolysed (Complete STE resolution @ 60 min)
                </p>
                <p className="pl-4 text-[#A71627] font-semibold">
                  • Complication: Complicated with Complete Heart Block (3rd Degree AV Block)
                </p>
              </div>
            </div>

            {/* Comprehensive Plan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CCU Inpatient Orders */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-md font-bold text-[#1F365C] mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Building2 className="w-4 h-4 text-blue-600" /> CCU Monitoring & Inotropic Directives
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A71627] flex-shrink-0 mt-0.5" />
                    <span><strong>Disposition:</strong> Admit to Coronary Care Unit (CCU).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A71627] flex-shrink-0 mt-0.5" />
                    <span><strong>Oxygenation:</strong> Off NPO2 (maintain room air monitoring).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A71627] flex-shrink-0 mt-0.5" />
                    <span><strong>Inotrope Tapering:</strong> Reduce IVI Dobutamine to 6cc/hr and taper accordingly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A71627] flex-shrink-0 mt-0.5" />
                    <span><strong>Hemodynamic Goals:</strong> Monitor BP (aim &lt;140/90 mmHg). Continuous cardiac monitoring. Inform medical officer if HR persistently &lt;50 bpm.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A71627] flex-shrink-0 mt-0.5" />
                    <span><strong>Glycemic Control:</strong> CBG Stat and QID.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A71627] flex-shrink-0 mt-0.5" />
                    <span><strong>Safety Monitoring:</strong> Watch for bleeding tendencies or signs of increased intracranial pressure (ICP).</span>
                  </li>
                </ul>
              </div>

              {/* Medication Chart */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-md font-bold text-[#1F365C] mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Pill className="w-4 h-4 text-emerald-600" /> Active Pharmacotherapy Chart
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-slate-50 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="text-slate-900 block">SC Fondaparinux (fonda)</strong>
                      <span className="text-slate-500">Anticoagulant</span>
                    </div>
                    <span className="font-bold text-[#1F365C]">2.5mg OD</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="text-slate-900 block">Tab. Aspirin</strong>
                      <span className="text-slate-500">Antiplatelet</span>
                    </div>
                    <span className="font-bold text-[#1F365C]">150mg OD</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="text-slate-900 block">Tab. Plavix (Clopidogrel)</strong>
                      <span className="text-slate-500">P2Y12 Inhibitor</span>
                    </div>
                    <span className="font-bold text-[#1F365C]">75mg OD</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="text-slate-900 block">Tab. Atorvastatin</strong>
                      <span className="text-slate-500">High-intensity Statin</span>
                    </div>
                    <span className="font-bold text-[#1F365C]">40mg ON</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="text-slate-900 block">Tab. Pantoprazole (panto)</strong>
                      <span className="text-slate-500">Proton Pump Inhibitor</span>
                    </div>
                    <span className="font-bold text-[#1F365C]">40mg OD</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-lg flex justify-between items-center">
                    <div>
                      <strong className="text-slate-900 block">S/L GTN (Glyceryl Trinitrate)</strong>
                      <span className="text-slate-500">Sublingual Nitrate</span>
                    </div>
                    <span className="font-bold text-[#1F365C]">1/1 PRN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Investigations Plan */}
            <div className="bg-amber-50/60 rounded-2xl p-6 border border-amber-200">
              <h3 className="text-md font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-700" /> Pending Investigations & Follow-Up Protocol
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-amber-950">
                <li>Trace pending lab results: <strong>CRP, HbA1c, Fasting Lipid Profile (LP), Cardiac Enzymes (CE)</strong>.</li>
                <li><strong>Antibiotic Protocol:</strong> If CRP is elevated, keep in view (KIV) initiating systemic antibiotics.</li>
                <li><strong>Routine Surveillance:</strong> Daily Cardiac Enzymes (CE) and daily serial 12-lead ECGs.</li>
                <li><strong>Symptom-Driven:</strong> Repeat 12-lead ECG immediately upon any complaint of chest pain.</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}