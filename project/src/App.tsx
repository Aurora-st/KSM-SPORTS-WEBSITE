import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/auth/LoginPage';
import { SignupPage } from './pages/auth/SignupPage';
import { UserDashboard } from './pages/dashboard/UserDashboard';
import { AdminDashboard } from './pages/dashboard/AdminDashboard';
import { SportsPrograms } from './pages/SportsPrograms';
import { SportDetail } from './pages/SportDetail';
import { PaymentPage } from './pages/PaymentPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import AccessoriesPage from './pages/AccessoriesPage';

// PrivateRoute component for protecting routes
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();
  return token ? children : <Navigate to="/login" replace state={{ from: location }} />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          <Route path="/programs" element={<SportsPrograms />} />
          <Route path="/programs/:sport" element={<SportDetail />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;