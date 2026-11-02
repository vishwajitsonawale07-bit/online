import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Heart, ArrowUp, Mail } from 'lucide-react';
import { OWNER_INFO, SERVICE_CATEGORIES } from '../data/servicesData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Owner Info (Col 1-4) with Uploaded Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={OWNER_INFO.logoPath}
                alt="CSC ONLINE SERVICES CENTER Official Logo"
                referrerPolicy="no-referrer"
                className="h-16 w-auto object-contain bg-white rounded-xl p-1 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-white tracking-tight">
                  ONLINE SERVICES CENTER
                </span>
                <span className="text-xs text-blue-400">
                  CSC – Common Service Centre & Digital Services
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="text-slate-400">
                संचालक / Owner: <strong className="text-white">{OWNER_INFO.name}</strong> ({OWNER_INFO.nameMr})
              </div>
              <div className="text-slate-400">
                पात्रता / Qualification: <span className="text-blue-300 font-medium">MBA (Data Analytics & Digital Systems)</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              आपल्या सर्व शासकीय व डिजिटल सेवा एकाच ठिकाणी उपलब्ध करून देणारे सातारा जिल्ह्यातील पिंपरी (कोरेगाव) येथील विश्वासार्ह केंद्र.
            </p>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Home (मुख्यपृष्ठ)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">All Services (सर्व सेवा)</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us (आमच्याबद्दल)</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#whatsapp-contact" className="hover:text-blue-400 transition-colors">WhatsApp Contact</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-blue-400 transition-colors">Online Enquiry</a>
              </li>
              <li>
                <a href="#location" className="hover:text-blue-400 transition-colors">Full Address & Map</a>
              </li>
            </ul>
          </div>

          {/* Service Categories (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Major Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-white transition-colors">· Farmer ID (AgriStack शेतकरी ओळखपत्र)</li>
              <li className="hover:text-white transition-colors">· Digital 7/12 & 8A Extract (सातबारा)</li>
              <li className="hover:text-white transition-colors">· Income & Caste Certificates (दाखले)</li>
              <li className="hover:text-white transition-colors">· PAN Card Application & Correction</li>
              <li className="hover:text-white transition-colors">· PM-KISAN & Crop Insurance (पीक विमा)</li>
              <li className="hover:text-white transition-colors">· AEPS Aadhaar Cash Withdrawal</li>
              <li className="hover:text-white transition-colors">· MahaDBT Scholarship & Admissions</li>
              <li className="hover:text-white transition-colors">· Color Printing & Lamination</li>
            </ul>
          </div>

          {/* Contact & Address (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Address
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Post: Pimpari, Taluka: Koregaon, District: Satara, Maharashtra – 415511
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={OWNER_INFO.callUrl} className="hover:text-white font-mono tabular-nums">
                  +91 {OWNER_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={OWNER_INFO.whatsappPrefilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-semibold"
                >
                  WhatsApp: 8087553025
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={OWNER_INFO.emailUrl} className="hover:text-white text-xs truncate">
                  {OWNER_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>8:30 AM – 8:30 PM (All 7 Days)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Regulatory Info */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-500 space-y-2">
          <p className="leading-relaxed">
            <strong>महत्त्वाची सूचना (Disclaimer):</strong> ONLINE SERVICES CENTER हे अधिकृत सीएससी व डिजिटल सुविधा केंद्र असून नागरिकांना शासकीय पोर्टलवरील ऑनलाइन अर्ज, दाखले, सातबारा, शेतकरी ओळखपत्र, बँकिंग व कागदपत्रे तयार करण्यासाठी मार्गदर्शन व सहाय्य करते. सर्व सेवा संबंधित शासकीय पोर्टल व संस्थांच्या उपलब्धतेनुसार व नियमांनुसार पुरविल्या जातात.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Copyright © 2026 <strong className="text-slate-200">ONLINE SERVICES CENTER</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Pimpari · Koregaon · Satara
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1 text-[11px]"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
