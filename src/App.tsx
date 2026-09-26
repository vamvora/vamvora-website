import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ModalProvider } from './context/ModalContext';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/common/Preloader';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { ConsultationModal } from './components/modal/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesListPage } from './pages/ServicesListPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SupportPage } from './pages/SupportPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LogoRevealPage } from './pages/LogoRevealPage';

export function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Preloader />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F1F5F9] text-[#0F172A] selection:bg-[#0145F2] selection:text-white font-sans antialiased">
          {/* Global Centered Navigation */}
          <Navbar />

          {/* Main Route Views */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesListPage />} />

              {/* Clean Canonical URLs for Primary Partner Services */}
              <Route path="/google-workspace" element={<ServiceDetailPage customSlug="google-workspace" />} />
              <Route path="/microsoft-365" element={<ServiceDetailPage customSlug="microsoft-365" />} />
              <Route path="/zoho" element={<ServiceDetailPage customSlug="zoho" />} />

              {/* Dedicated Support & Pricing Hubs */}
              <Route path="/support" element={<SupportPage />} />
              <Route path="/pricing" element={<PricingPage />} />

              {/* 301 Client-Side Redirects from old service URLs to clean canonical URLs */}
              <Route path="/services/google-workspace" element={<Navigate to="/google-workspace" replace />} />
              <Route path="/services/microsoft-365" element={<Navigate to="/microsoft-365" replace />} />
              <Route path="/services/zoho" element={<Navigate to="/zoho" replace />} />

              {/* Dynamic Service Detail View */}
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/logo-reveal" element={<LogoRevealPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          {/* Global Enterprise Footer */}
          <Footer />

          {/* Global Multi-Step Consultation Modal */}
          <ConsultationModal />

          {/* Floating WhatsApp Action Button */}
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;

