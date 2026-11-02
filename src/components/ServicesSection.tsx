import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  FileText,
  Clock,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  Building2,
  CreditCard,
  Coins,
  Sprout,
  GraduationCap,
  Briefcase,
  Printer,
  Globe,
  LayoutGrid,
  ChevronRight,
  X,
  Send,
  AlertCircle
} from 'lucide-react';
import { ALL_SERVICES, SERVICE_CATEGORIES, ServiceItem, OWNER_INFO } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDocModalService, setActiveDocModalService] = useState<ServiceItem | null>(null);

  // Filter services by category and search
  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.categoryId === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        service.title.toLowerCase().includes(q) ||
        service.titleMr.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.descriptionMr.toLowerCase().includes(q) ||
        service.documentsRequired.some((doc) => doc.toLowerCase().includes(q)) ||
        (service.officialPortal && service.officialPortal.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-4 h-4" />;
      case 'CreditCard': return <CreditCard className="w-4 h-4" />;
      case 'Coins': return <Coins className="w-4 h-4" />;
      case 'Sprout': return <Sprout className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4" />;
      case 'Printer': return <Printer className="w-4 h-4" />;
      case 'Globe': return <Globe className="w-4 h-4" />;
      default: return <LayoutGrid className="w-4 h-4" />;
    }
  };

  const createWhatsAppServiceLink = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello Vishwajit (ONLINE SERVICES CENTER),\nI want assistance for: *${service.title}* (${service.titleMr}).\nPlease guide me on the process, required documents, and timings.`
    );
    return `https://wa.me/918087553025?text=${text}`;
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            All CSC & Digital Services Directory
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            सर्व शासकीय व डिजिटल सेवांची संपूर्ण यादी
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            आधार, पॅन कार्ड, ७/१२ उतारा, उत्पन्न व जातीचे दाखले, बँकिंग, महाडीबीटी शिष्यवृत्ती, शेतकरी योजना आणि प्रिंटिंग सेवा – सर्व काही एकाच ठिकाणी अधिकृत मार्गदर्शनासह.
          </p>
        </div>

        {/* Regulatory Transparency & Authorization Banner */}
        <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 text-blue-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />
            <span>
              <strong>अधिकृत माहिती व पारदर्शकता नियम:</strong> सर्व सेवा संबंधित शासकीय पोर्टल (आपले सरकार, महाभूलेख, UIDAI, NSDL, DBT) यांच्या अधिकृत नियमांनुसार आणि पोर्टलच्या उपलब्धतेनुसार पुरविल्या जातात.
            </span>
          </div>
          <span className="shrink-0 font-semibold text-blue-800 bg-white px-2.5 py-1 rounded border border-blue-200">
            Authorized Facilitator
          </span>
        </div>

        {/* Search Bar & Stats */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search service, e.g. 7/12, पॅन कार्ड, दाखला, PM Kisan..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900 tabular-nums">{filteredServices.length}</strong> of{' '}
            <span className="tabular-nums">{ALL_SERVICES.length}</span> services
          </div>
        </div>

        {/* Category Tabs (Segmented controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count =
              cat.id === 'all'
                ? ALL_SERVICES.length
                : ALL_SERVICES.filter((s) => s.categoryId === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full tabular-nums ${
                  isActive ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200/90 hover:border-blue-400/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5 space-y-3">
                  {/* Category Name & Turnaround Time */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-blue-700">{service.categoryName}</span>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {service.turnaroundTime}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      {service.titleMr}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {service.descriptionMr}
                  </p>

                  {/* Official Portal Attribution */}
                  {service.officialPortal && (
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 pt-1">
                      <span>Portal:</span>
                      <span className="text-slate-600 font-medium truncate">{service.officialPortal}</span>
                    </div>
                  )}
                </div>

                {/* Card Actions Footer */}
                <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveDocModalService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>कागदपत्रे पहा</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectServiceForEnquiry(service.title)}
                      className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-200/70 rounded transition-colors"
                      title="Enquire through form"
                    >
                      Enquire
                    </button>
                    <a
                      href={createWhatsAppServiceLink(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-2xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">कोणतीही सेवा आढळली नाही</h3>
              <p className="text-xs text-slate-500 mt-1">
                तुम्हाला हवी असलेली सेवा शोधण्यासाठी वेगळा शब्द वापरा किंवा आमच्याशी थेट व्हॉट्सअॅपवर संपर्क साधा.
              </p>
            </div>
            <a
              href={OWNER_INFO.whatsappPrefilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>व्हॉट्सअॅपवर थेट विचारा (8087553025)</span>
            </a>
          </div>
        )}

        {/* Service Details & Document Checklist Modal */}
        {activeDocModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white">
                <div>
                  <span className="text-xs font-semibold text-blue-700">
                    {activeDocModalService.categoryName}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {activeDocModalService.title}
                  </h3>
                  <div className="text-xs text-slate-500">{activeDocModalService.titleMr}</div>
                </div>
                <button
                  onClick={() => setActiveDocModalService(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Description */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-900">माहिती व तपशील:</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeDocModalService.descriptionMr}
                  </p>
                  <p className="text-xs text-slate-500">
                    {activeDocModalService.description}
                  </p>
                </div>

                {/* Turnaround Time & Portal */}
                <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">वेळ (Turnaround Time):</span>
                    <span className="font-semibold text-slate-800">{activeDocModalService.turnaroundTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">पोर्टल (Official Portal):</span>
                    <span className="font-semibold text-slate-800 truncate block">
                      {activeDocModalService.officialPortal || 'CSC Digital Desk'}
                    </span>
                  </div>
                </div>

                {/* Document Checklist */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      आवश्यक कागदपत्रे (Required Documents):
                    </span>
                    <span className="text-[11px] text-blue-700 font-medium">
                      केंद्रावर येताना सोबत आणा
                    </span>
                  </div>
                  <div className="space-y-2">
                    {activeDocModalService.documentsRequired.map((doc, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-blue-50/50 border border-blue-100/80 text-xs text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Document Sending Tip */}
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                    <MessageCircle className="w-4 h-4" />
                    <span>घरबसल्या काम सुरू करा:</span>
                  </div>
                  <p className="text-[11px] text-emerald-900 leading-relaxed">
                    तुम्ही ही सर्व कागदपत्रे आमच्या व्हॉट्सअॅप नंबर <strong>८०८७५५३०२५</strong> वर पाठवून घरबसल्या अर्ज सुरू करू शकता.
                  </p>
                </div>

                {/* Modal Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-slate-100">
                  <a
                    href={createWhatsAppServiceLink(activeDocModalService)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp वर अर्ज सुरू करा</span>
                  </a>
                  <button
                    onClick={() => {
                      onSelectServiceForEnquiry(activeDocModalService.title);
                      setActiveDocModalService(null);
                    }}
                    className="w-full sm:w-auto py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
                  >
                    Enquiry Form भरा
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
