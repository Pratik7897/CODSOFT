import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ProductPreview from './components/ProductPreview/ProductPreview';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import AuthModal from './components/AuthModal/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenAuth={() => setIsAuthModalOpen(true)} />
      <main>
        <Hero onOpenAuth={() => setIsAuthModalOpen(true)} />
        <Features />
        <WhyChooseUs />
        <ProductPreview />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA onOpenAuth={() => setIsAuthModalOpen(true)} />
      </main>
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}

export default App;
