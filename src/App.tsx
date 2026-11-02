/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutUs } from './components/AboutUs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WhatsAppContactSection } from './components/WhatsAppContactSection';
import { AddressSection } from './components/AddressSection';
import { CustomerEnquirySection } from './components/CustomerEnquirySection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForEnquiry, setSelectedServiceForEnquiry] = useState<string>('');

  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setSelectedServiceForEnquiry(serviceTitle);
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* Sticky Header with 3-Zone Contract */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. All CSC and Digital Services Directory */}
        <ServicesSection onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        {/* 3. About Us Section with Vishwajit Balu Sonawale's photo & statement */}
        <AboutUs />

        {/* 4. Why Choose Us (6 Premium Feature Cards) */}
        <WhyChooseUs />

        {/* 5. WhatsApp Contact Section (White background conversion focus) */}
        <WhatsAppContactSection />

        {/* 6. Customer Enquiry Section (Functional form with WhatsApp workflow) */}
        <CustomerEnquirySection initialSelectedService={selectedServiceForEnquiry} />

        {/* 7. Address & Location Section with Map */}
        <AddressSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
