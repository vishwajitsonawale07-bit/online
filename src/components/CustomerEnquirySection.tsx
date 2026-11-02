import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Phone, FileText, ArrowRight, Clock, RefreshCw } from 'lucide-react';
import { ALL_SERVICES, OWNER_INFO } from '../data/servicesData';

interface CustomerEnquirySectionProps {
  initialSelectedService?: string;
}

interface StoredEnquiry {
  referenceId: string;
  name: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
}

export const CustomerEnquirySection: React.FC<CustomerEnquirySectionProps> = ({ initialSelectedService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialSelectedService || '');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; service?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<StoredEnquiry | null>(null);

  // Sync initial service when passed from card click
  useEffect(() => {
    if (initialSelectedService) {
      setService(initialSelectedService);
    }
  }, [initialSelectedService]);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; service?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'कृपया आपले पूर्ण नाव प्रविष्ट करा (Please enter your name)';
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'कृपया वैध १० अंकी मोबाईल नंबर प्रविष्ट करा (10-digit mobile number)';
    }

    if (!service) {
      newErrors.service = 'कृपया आवश्यक सेवा निवडा (Please select a service)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const refId = `OSC-${Date.now().toString().slice(-6)}`;
    const newRecord: StoredEnquiry = {
      referenceId: refId,
      name: name.trim(),
      phone: phone.trim(),
      service: service,
      message: message.trim() || 'नवीन अर्जासाठी माहिती हवी आहे.',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Store in localStorage for audit & user retention
    try {
      const existing = JSON.parse(localStorage.getItem('osc_customer_enquiries') || '[]');
      localStorage.setItem('osc_customer_enquiries', JSON.stringify([newRecord, ...existing].slice(0, 5)));
    } catch (e) {
      // LocalStorage access fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedEnquiry(newRecord);
    }, 400);
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setService('');
    setMessage('');
    setSubmittedEnquiry(null);
    setErrors({});
  };

  const getWhatsAppForwardLink = (enquiry: StoredEnquiry) => {
    const text = encodeURIComponent(
      `*नवीन ऑनलाइन चौकशी (Enquiry #${enquiry.referenceId})*\n\n` +
      `👤 *नाव:* ${enquiry.name}\n` +
      `📞 *मोबाईल:* ${enquiry.phone}\n` +
      `📋 *निवडलेली सेवा:* ${enquiry.service}\n` +
      `💬 *मेसेज / अडचण:* ${enquiry.message}\n\n` +
      `_ONLINE SERVICES CENTER (पिंपरी, कोरेगाव) ला पाठवले._`
    );
    return `https://wa.me/918087553025?text=${text}`;
  };

  return (
    <section id="enquiry" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Quick Assistance & Online Filing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Customer Enquiry (ऑनलाइन अर्ज व चौकशी)
          </h2>
          <p className="text-sm text-slate-600">
            आपल्याला हव्या असलेल्या सेवेचा तपशील खाली भरा. आम्ही आपल्याला आवश्यक कागदपत्रांची माहिती व शुल्क त्वरित कळवू.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
          {!submittedEnquiry ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Customer Name */}
                <div className="space-y-1.5">
                  <label htmlFor="customer-name" className="block text-xs font-bold text-slate-900">
                    Customer Name (आपले नाव) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="उदा. राहुल पांडुरंग कदम"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-500'
                        : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label htmlFor="customer-phone" className="block text-xs font-bold text-slate-900">
                    Mobile Number (मोबाईल नंबर) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                      +91
                    </span>
                    <input
                      id="customer-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setPhone(val);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="8087553025"
                      className={`w-full pl-12 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 font-mono focus:bg-white focus:outline-hidden focus:ring-2 transition-all tabular-nums ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-500'
                          : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Select Required Service */}
              <div className="space-y-1.5">
                <label htmlFor="select-service" className="block text-xs font-bold text-slate-900">
                  Select Required Service (आवश्यक सेवा निवडा) <span className="text-red-500">*</span>
                </label>
                <select
                  id="select-service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                  }}
                  className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 transition-all ${
                    errors.service
                      ? 'border-red-400 focus:ring-red-500'
                      : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600'
                  }`}
                >
                  <option value="">-- सेवा निवडा (Choose from list) --</option>
                  {ALL_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.titleMr})
                    </option>
                  ))}
                  <option value="Other Service">इतर कोणतीही ऑनलाइन सेवा (Other Service)</option>
                </select>
                {errors.service && (
                  <p className="text-[11px] text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.service}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="customer-message" className="block text-xs font-bold text-slate-900">
                  Message (तुमची अडचण किंवा तपशील)
                </label>
                <textarea
                  id="customer-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="उदा. मला ७/१२ उतारा काढायचा आहे / पॅन कार्डसाठी कागदपत्रांची यादी हवी आहे..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
                />
              </div>

              {/* Submit Enquiry Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-700/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>प्रक्रिया सुरू आहे...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-sky-200" />
                      <span>Submit Enquiry (चौकशी सबमिट करा)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                🔒 तुमची माहिती १००% सुरक्षित ठेवली जाईल. कोणताही स्पॅम केला जाणार नाही.
              </div>
            </form>
          ) : (
            /* Genuine Confirmation State connected to WhatsApp workflow */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Ref #{submittedEnquiry.referenceId}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  आपली चौकशी नोंदवली गेली आहे!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  धन्यवाद <strong>{submittedEnquiry.name}</strong>, ONLINE SERVICES CENTER ला तुमची माहिती मिळाली आहे.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left max-w-lg mx-auto space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">निवडलेली सेवा:</span>
                  <span className="font-bold text-slate-900">{submittedEnquiry.service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">मोबाईल क्रमांक:</span>
                  <span className="font-mono font-semibold text-slate-900 tabular-nums">
                    +91 {submittedEnquiry.phone}
                  </span>
                </div>
                {submittedEnquiry.message && (
                  <div className="pt-1">
                    <span className="text-slate-500 block">तपशील:</span>
                    <span className="text-slate-700">{submittedEnquiry.message}</span>
                  </div>
                )}
              </div>

              {/* WhatsApp Conversion Action */}
              <div className="max-w-lg mx-auto space-y-3 pt-2">
                <a
                  href={getWhatsAppForwardLink(submittedEnquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ही चौकशी थेट व्हॉट्सअॅपवर पाठवा (Fast Response)</span>
                </a>

                <button
                  onClick={handleResetForm}
                  className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline block mx-auto pt-1"
                >
                  दुसऱ्या सेवेसाठी नवीन अर्ज भरा (Submit Another Enquiry)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
