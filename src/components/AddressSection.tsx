import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle, ExternalLink, Compass, Mail } from 'lucide-react';
import { OWNER_INFO } from '../data/servicesData';

export const AddressSection: React.FC = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=Pimpari,+Koregaon,+Satara,+Maharashtra+415511`;

  return (
    <section id="location" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>Visit Our Physical Center</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Address & Location (केंद्राचा पत्ता)
          </h2>
          <p className="text-sm text-slate-600">
            पिंपरी (ता. कोरेगाव) आणि सातारा परिसरातील नागरिकांसाठी सोयीस्कर ठिकाण
          </p>
        </div>

        {/* Address & Maps Split Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Details Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">
                    ONLINE SERVICES CENTER
                  </h3>
                  <div className="text-xs text-blue-200">
                    Common Service Centre · Vishwajit Sonawale
                  </div>
                </div>
              </div>

              {/* Exact Address formatted as requested */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2.5 text-sm">
                <div className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                  अधिकृत पत्ता (Official Address)
                </div>
                <div className="space-y-1 text-slate-100 font-medium leading-relaxed">
                  <p className="text-base font-bold text-white">ONLINE SERVICES CENTER</p>
                  <p>पोस्ट: पिंपरी (Post: Pimpari)</p>
                  <p>तालुका: कोरेगाव (Taluka: Koregaon)</p>
                  <p>जिल्हा: सातारा (District: Satara)</p>
                  <p>राज्य: महाराष्ट्र (State: Maharashtra)</p>
                  <p className="font-mono text-amber-300 font-bold">पिन कोड: ४१५५११ (PIN: 415511)</p>
                </div>
              </div>

              {/* Timings & Direct Contacts */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>वेळ:</strong> सकाळी ८:३० ते रात्री ८:३० (सोमवार ते रविवार)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>थेट संपर्क:</strong> 8087553025 (विश्वजित सोनावले)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href={OWNER_INFO.emailUrl} className="hover:underline text-slate-100">
                    <strong>Gmail:</strong> {OWNER_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <Navigation className="w-4 h-4 text-blue-700" />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={OWNER_INFO.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>केंद्रावर येण्यापूर्वी व्हॉट्सअॅपवर वेळ ठरवा</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Location Card */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative min-h-[380px] flex flex-col justify-between shadow-xs">
            {/* Embedded interactive Google Maps iframe matching Koregaon, Satara 415511 */}
            <div className="relative flex-1 w-full min-h-[320px]">
              <iframe
                title="ONLINE SERVICES CENTER Pimpari Koregaon Satara Map"
                src="https://maps.google.com/maps?q=Pimpari,+Koregaon,+Satara+415511&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Card Footer strip */}
            <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Compass className="w-4 h-4 text-blue-700 shrink-0" />
                <span>
                  <strong>परिसर:</strong> पिंपरी, कोरेगाव, सातारा रोड व लगतच्या गावांमधील नागरिकांसाठी सहज उपलब्ध.
                </span>
              </div>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-bold hover:text-blue-900 flex items-center gap-1 shrink-0"
              >
                <span>मोठ्या नकाशात उघडा</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
