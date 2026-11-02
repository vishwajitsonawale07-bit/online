import React from 'react';
import { ArrowDown, MessageCircle, ShieldCheck, CheckCircle2, PhoneCall, Sparkles, FileText, Mail, Zap, Users, ThumbsUp, HeartHandshake } from 'lucide-react';
import { OWNER_INFO } from '../data/servicesData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-slate-50 text-slate-900 pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200/70">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563eb_0.8px,transparent_0.8px)] [background-size:20px_20px] opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines, CTAs, and Direct Contacts */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Regional Trust Marker with Tricolor Salient Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-blue-900 text-xs font-bold shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>अधिकृत CSC व डिजिटल सेवा केंद्र · पिंपरी (कोरेगाव, सातारा)</span>
            </div>

            {/* Main Marathi Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              आपल्या सर्व डिजिटल सेवा <span className="text-blue-700 underline decoration-blue-300 decoration-wavy decoration-2">आता एकाच ठिकाणी!</span>
            </h1>

            {/* English Subtitle */}
            <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed max-w-2xl">
              Your Trusted Digital Service Partner – All Government & Online Services Under One Roof.
            </p>

            {/* Supporting Marathi Text */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              आधारभूत डिजिटल सेवा, शेतकरी ओळखपत्र (Farmer ID), ७/१२ व ८अ, शासकीय योजना, ऑनलाइन अर्ज, प्रमाणपत्रे, बँकिंग सेवा आणि इतर महत्त्वाच्या ऑनलाइन सुविधांसाठी आजच भेट द्या.
            </p>

            {/* Two Prominent CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-xl shadow-lg shadow-blue-700/20 transition-all group"
              >
                <span>Explore All Services</span>
                <ArrowDown className="w-4 h-4 text-blue-200 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={OWNER_INFO.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/25 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-100" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>

            {/* Quick Contact Line: Phone & Gmail */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <a
                href={OWNER_INFO.callUrl}
                className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-mono"
              >
                <PhoneCall className="w-4 h-4" />
                <span>8087553025</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={OWNER_INFO.emailUrl}
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-600" />
                <span className="font-sans">{OWNER_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Uploaded Official CSC Logo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xl shadow-blue-900/5 group hover:border-blue-400/80 transition-all">
              {/* Official CSC Online Services Center Logo Uploaded by User */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-white flex items-center justify-center">
                <img
                  src={OWNER_INFO.logoPath}
                  alt="ONLINE SERVICES CENTER - Vishwajit Balu Sonawale Official CSC Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain max-h-[360px] drop-shadow-sm group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>

              {/* Bottom Quick Info strip */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-800">अधिकृत सीएससी केंद्र</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  पिंपरी, कोरेगाव, सातारा – ४१५५११
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Salient Pillars Bar (Matching the exact 5 trust pillars in the logo) */}
        <div className="pt-8 border-t border-slate-200/90">
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Our 5 Core Pillars (आमची ५ मुख्य तत्त्वे)
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Trusted Service</div>
                <div className="text-[11px] text-slate-500">विश्वासार्ह सेवा</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Professional Support</div>
                <div className="text-[11px] text-slate-500">तज्ज्ञ सहकार्य</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Fast & Easy Process</div>
                <div className="text-[11px] text-slate-500">जलद कार्यपद्धती</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Customer First</div>
                <div className="text-[11px] text-slate-500">ग्राहक प्राधान्य</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Transparent Service</div>
                <div className="text-[11px] text-slate-500">पारदर्शक व्यवहार</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
