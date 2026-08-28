import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ModalProvider } from './context/ModalContext';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/common/Preloader';
import { ConsultationModal } from './components/modal/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesListPage } from './pages/ServicesListPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
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
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;

