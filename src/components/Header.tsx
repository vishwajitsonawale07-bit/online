import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Menu, X, ArrowRight, Mail } from 'lucide-react';
import { OWNER_INFO } from '../data/servicesData';

interface HeaderProps {
  onSelectServiceTab?: (categoryId: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar with Address, Hours, Phone and Gmail */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-xs font-normal">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Pimpari, Koregaon, Satara – 415511</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>8:30 AM – 8:30 PM (सर्व दिवस सुरू)</span>
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Added Gmail as requested */}
            <a
              href={OWNER_INFO.emailUrl}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              title="Send an email"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="font-medium text-[11px] sm:text-xs">{OWNER_INFO.email}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={OWNER_INFO.callUrl}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="font-semibold tabular-nums">{OWNER_INFO.phone}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={OWNER_INFO.whatsappPrefilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar adhering to 3-zone contract with the uploaded logo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Official Brand Logo & Wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img
              src={OWNER_INFO.logoPath}
              alt="CSC ONLINE SERVICES CENTER Logo - Vishwajit Balu Sonawale"
              referrerPolicy="no-referrer"
              className="h-13 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors whitespace-nowrap">
                ONLINE SERVICES CENTER
              </span>
              <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
                Common Service Centre · Vishwajit Sonawale
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Navigation Links (single line, clean text) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-700 transition-colors whitespace-nowrap">
              All Services (सर्व सेवा)
            </a>
            <a href="#about" className="hover:text-blue-700 transition-colors whitespace-nowrap">
              About Us (आमच्याबद्दल)
            </a>
            <a href="#why-choose-us" className="hover:text-blue-700 transition-colors whitespace-nowrap">
              Why Choose Us
            </a>
            <a href="#enquiry" className="hover:text-blue-700 transition-colors whitespace-nowrap">
              Enquiry (अर्ज करा)
            </a>
            <a href="#location" className="hover:text-blue-700 transition-colors whitespace-nowrap">
              Address & Map
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={OWNER_INFO.whatsappPrefilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp Direct</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={OWNER_INFO.callUrl}
              className="p-2 text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100"
              aria-label="Call Owner"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-md"
            >
              All Services (सर्व सेवा)
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-md"
            >
              About Us (आमच्याबद्दल)
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-md"
            >
              Why Choose Us (खास वैशिष्ट्ये)
            </a>
            <a
              href="#whatsapp-contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-md"
            >
              WhatsApp Contact (संपर्क)
            </a>
            <a
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-md"
            >
              Online Enquiry Form (ऑनलाइन चौकशी)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 rounded-md"
            >
              Center Address & Map (पत्ता)
            </a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={OWNER_INFO.emailUrl}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-slate-100 text-slate-800 rounded-lg font-medium text-xs truncate"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">{OWNER_INFO.email}</span>
              </a>
              <a
                href={OWNER_INFO.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 text-white rounded-lg font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (8087553025)</span>
              </a>
              <a
                href={OWNER_INFO.callUrl}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-700 text-white rounded-lg font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 8087553025</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
