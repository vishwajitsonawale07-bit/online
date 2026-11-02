import React from 'react';
import {
  ShieldCheck,
  Award,
  Layers,
  HeartHandshake,
  Smartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS, OWNER_INFO } from '../data/servicesData';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-700" />;
      case 'Award':
        return <Award className="w-6 h-6 text-blue-700" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-blue-700" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-700" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-blue-700" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-slate-100/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Commitment to Quality & Trust
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Us? (आमची वैशिष्ट्ये)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ऑनलाइन सर्व्हिसेस सेंटर पिंपरी हे केवळ फॉर्म भरण्याचे ठिकाण नसून प्रत्येक नागरिकासाठी एक विश्वासू डिजिटल मार्गदर्शक आहे.
          </p>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                {/* Icon & Index Number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getFeatureIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-400 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                {/* Title in English and Marathi */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600">
                    {item.titleMr}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.descriptionMr}
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Sub-line */}
              <div className="pt-3 border-t border-slate-100 flex items-center text-xs text-blue-700 font-semibold group-hover:translate-x-1 transition-transform">
                <span>अचूक व वेळेवर सेवा</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Quote Strip */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold">
              कागदपत्रे आहेत पण अर्ज कसा करायचा हे समजत नाही?
            </h4>
            <p className="text-xs text-blue-200">
              आताच आमच्या व्हॉट्सअॅपवर मेसेज करा किंवा थेट फोन करून मोफत मार्गदर्शन मिळवा.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={OWNER_INFO.whatsappPrefilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-md"
            >
              व्हॉट्सअॅपवर संपर्क साधा
            </a>
            <a
              href={OWNER_INFO.callUrl}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-colors border border-white/20"
            >
              फोन करा
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
