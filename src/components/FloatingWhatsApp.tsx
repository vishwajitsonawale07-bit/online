import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { OWNER_INFO } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Tooltip message */}
      {showTooltip && (
        <div className="bg-slate-900 text-white text-xs py-1.5 px-3 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Need help? Chat with Vishwajit</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button Group */}
      <div className="flex items-center gap-2">
        {/* Floating Call Button on mobile */}
        <a
          href={OWNER_INFO.callUrl}
          className="sm:hidden w-11 h-11 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95"
          aria-label="Call 8087553025"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={OWNER_INFO.whatsappPrefilledUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all group"
          aria-label="Chat on WhatsApp with ONLINE SERVICES CENTER"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:rotate-6 transition-transform" />
        </a>
      </div>
    </div>
  );
};
