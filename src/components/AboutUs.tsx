import React from 'react';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, HeartHandshake, PhoneCall, MessageCircle, Mail } from 'lucide-react';
import { OWNER_INFO } from '../data/servicesData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Kicker */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Leadership & Vision
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Us – Your Trusted Digital Service Partner
          </h2>
          <p className="text-sm text-slate-600">
            ग्रामीण व शहरी नागरिकांसाठी विश्वासार्ह, पारदर्शक व तंत्रस्नेही सेवा केंद्र
          </p>
        </div>

        {/* Profile & Introduction Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Owner Profile Photo & Personal Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative background ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500" />

              <div className="relative bg-white p-5 rounded-3xl border border-slate-200/90 shadow-xl space-y-5">
                {/* User uploaded image showing full collar and portrait */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40 border border-slate-200 flex items-center justify-center p-1">
                  <img
                    src="/assets/aistudio/vISHU123_151f7776.png"
                    alt="Vishwajit Balu Sonawale - Proprietor of ONLINE SERVICES CENTER"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-semibold border border-slate-700/80 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Founder & Proprietor</span>
                  </div>
                </div>

                {/* Personal Profile Details */}
                <div className="space-y-3 pt-1 text-center sm:text-left">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      Vishwajit Balu Sonawale
                    </h3>
                    <div className="text-sm font-bold text-blue-700">
                      विश्वजित बाळू सोनावले
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Director · ONLINE SERVICES CENTER (Pimpari, Koregaon)
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-100 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-blue-700 font-bold">
                        <GraduationCap className="w-4 h-4 shrink-0" />
                        <span>Education</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium">
                        MBA (Management & Digital Business)
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-blue-700 font-bold">
                        <Award className="w-4 h-4 shrink-0" />
                        <span>Core Focus</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium">
                        Tech & Data Analytics
                      </p>
                    </div>
                  </div>

                  {/* Gmail display card as requested */}
                  <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-700 truncate">
                      <Mail className="w-4 h-4 text-blue-700 shrink-0" />
                      <span className="font-medium truncate">{OWNER_INFO.email}</span>
                    </div>
                    <a
                      href={OWNER_INFO.emailUrl}
                      className="text-[11px] font-bold text-blue-700 hover:text-blue-900 shrink-0"
                    >
                      Email
                    </a>
                  </div>

                  {/* Direct Contact Links */}
                  <div className="pt-1 flex items-center gap-2">
                    <a
                      href={OWNER_INFO.whatsappPrefilledUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp (8087553025)</span>
                    </a>
                    <a
                      href={OWNER_INFO.callUrl}
                      className="py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                      title="Call directly"
                    >
                      <PhoneCall className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Introduction & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold">
                <HeartHandshake className="w-3.5 h-3.5 text-blue-700" />
                <span>संस्थापकांचे मनोगत व वचनबद्धता</span>
              </div>

              {/* Exact Marathi Statement from prompt */}
              <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-2xs">
                <p className="text-xl font-bold text-slate-900 leading-snug">
                  "नमस्कार! मी विश्वजित बाळू सोनावले."
                </p>

                <p>
                  मी <strong className="text-blue-900">ONLINE SERVICES CENTER</strong> च्या माध्यमातून नागरिकांना विविध शासकीय, डिजिटल, ऑनलाइन आणि व्यावसायिक सेवा एकाच ठिकाणी उपलब्ध करून देण्यासाठी कार्यरत आहे.
                </p>

                <p>
                  माझे उद्दिष्ट म्हणजे ग्रामीण आणि शहरी भागातील नागरिकांना डिजिटल सेवांचा लाभ सोप्या, जलद आणि विश्वासार्ह पद्धतीने मिळवून देणे.
                </p>

                <p>
                  <strong className="text-slate-900 font-semibold">MBA शैक्षणिक पार्श्वभूमी, तंत्रज्ञानाची आवड, डेटा अॅनालिटिक्स आणि डिजिटल व्यवसायातील रुची</strong> यांच्या माध्यमातून मी ग्राहकांना उत्तम सेवा आणि मार्गदर्शन देण्याचा प्रयत्न करतो.
                </p>

                <div className="pt-2 border-t border-slate-200">
                  <p className="font-semibold text-blue-950 text-base">
                    "आमच्यासाठी ग्राहकांचा विश्वास, पारदर्शकता आणि समाधान सर्वात महत्त्वाचे आहे."
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  <span>100% पारदर्शकता व अचूकता</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  शासकीय फी, अचूक पावती आणि अधिकृत नियमांचे पालन करून प्रत्येकाला खरी व खात्रीशीर माहिती.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>शेतकरी व नागरिक हित प्रथम</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  शेतकरी ओळखपत्र (Farmer ID), ७/१२, पीक विमा व शासकीय योजनांसाठी तत्पर व सुलभ सहकार्य.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
