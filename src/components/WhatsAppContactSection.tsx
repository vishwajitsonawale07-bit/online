import React, { useState } from 'react';
import { MessageCircle, Phone, Check, Copy, User, Sparkles, Clock, ShieldCheck, Mail, Send } from 'lucide-react';
import { OWNER_INFO } from '../data/servicesData';

export const WhatsAppContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(OWNER_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OWNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="whatsapp-contact" className="py-20 bg-white border-t border-slate-200/90 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Instant Assistance Available on WhatsApp & Email</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Need Any Online Service?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            आमच्या सेवांबद्दल अधिक माहिती मिळवण्यासाठी किंवा ऑनलाइन अर्जासाठी आजच संपर्क साधा.
          </p>
        </div>

        {/* Conversion Card */}
        <div className="bg-white rounded-3xl border-2 border-emerald-500/20 shadow-xl shadow-emerald-500/5 p-6 sm:p-10 space-y-8 relative overflow-hidden">
          {/* Top Brand Banner Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-700 via-emerald-500 to-amber-500" />

          {/* Contact Person Details Display Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Person */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">Contact Person</span>
                <span className="text-sm font-bold text-slate-900 block">
                  Vishwajit Sonawale
                </span>
                <span className="text-xs text-blue-700 font-medium">विश्वजित सोनावले</span>
              </div>
            </div>

            {/* Mobile Call */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-4">
              <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-blue-700 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] text-slate-500 font-medium block">Mobile Call</span>
                <a
                  href={OWNER_INFO.callUrl}
                  className="text-base font-extrabold text-slate-900 hover:text-blue-700 transition-colors font-mono tabular-nums block"
                >
                  8087553025
                </a>
                <span className="text-[11px] text-slate-400">Direct Calling Line</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] text-slate-500 font-medium block">WhatsApp Chat</span>
                <span className="text-base font-extrabold text-slate-900 font-mono tabular-nums block">
                  8087553025
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold">Active & Quick Reply</span>
              </div>
            </div>

            {/* Gmail as requested */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] text-slate-500 font-medium block">Official Gmail</span>
                <a
                  href={OWNER_INFO.emailUrl}
                  className="text-xs font-bold text-slate-900 hover:text-blue-700 transition-colors truncate block"
                  title={OWNER_INFO.email}
                >
                  {OWNER_INFO.email}
                </a>
                <span className="text-[11px] text-slate-400">Email Support</span>
              </div>
            </div>
          </div>

          {/* Action CTAs: Large Green WhatsApp Button & Call Now Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-4">
            {/* Primary Large Green WhatsApp Button */}
            <a
              href="https://wa.me/918087553025?text=Hello%20ONLINE%20SERVICES%20CENTER%2C%20I%20want%20information%20about%20your%20CSC%20and%20digital%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/35 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              <span>Chat With Us on WhatsApp</span>
            </a>

            {/* Call Now Button */}
            <a
              href="tel:+918087553025"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold text-sm sm:text-base rounded-2xl shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call Now: 8087553025</span>
            </a>

            {/* Email Button */}
            <a
              href={OWNER_INFO.emailUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs sm:text-sm rounded-2xl transition-colors border border-blue-200"
            >
              <Mail className="w-4 h-4 text-blue-700" />
              <span>Send Email</span>
            </a>

            {/* Copy Number Button */}
            <button
              onClick={handleCopyNumber}
              className="inline-flex items-center justify-center gap-2 px-4 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-2xl transition-colors"
              title="Copy phone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Notice */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <Clock className="w-4 h-4 text-blue-700 shrink-0" />
              <span>
                <strong>सेवा वेळ:</strong> सकाळी ८:३० ते रात्री ८:३० पर्यंत सर्व दिवस सुरू.
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <span>ईमेल चौकशी: <strong>{OWNER_INFO.email}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
