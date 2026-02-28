import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './lib/authContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Home from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import OrderHistory from './pages/OrderHistory';
import BookingHistory from './pages/BookingHistory';
import ClinicDetail from './pages/ClinicDetail';
import PetProfile from './pages/PetProfile';
import Messaging from './pages/Messaging';
import LiveTracking from './pages/LiveTracking';
import VetSearch from './pages/VetSearch';
import Payment from './pages/Payment';
import ProfilePets from './pages/ProfilePets';
import ProfileSecurity from './pages/ProfileSecurity';
import ProfileNotifications from './pages/ProfileNotifications';
import CameraView from './pages/CameraView';

// Routes where the global Navbar + Footer should be hidden
// (these pages manage their own header/layout)
const STANDALONE_ROUTES = ['/home', '/camera'];

function AppLayout() {
  const location = useLocation();
  const isStandalone = STANDALONE_ROUTES.includes(location.pathname);
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {!isStandalone && <Navbar />}

      <main className={`flex-1 flex flex-col h-full grow relative ${!isStandalone ? 'overflow-x-hidden' : ''}`}>
        {!isStandalone && (
          <>
            <div className="decoration-blob w-96 h-96 bg-primary/20 top-0 left-0 rounded-full translate-x-[-30%] translate-y-[-30%]" />
            <div className="decoration-blob w-96 h-96 bg-secondary/10 top-1/2 right-0 rounded-full translate-x-[30%]" />
          </>
        )}

        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" replace /> : <Home />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/bookings" element={<BookingHistory />} />
          <Route path="/clinic/:id" element={<ClinicDetail />} />
          <Route path="/pet/:id" element={<PetProfile />} />
          <Route path="/messages" element={<Messaging />} />
          <Route path="/live" element={<LiveTracking />} />
          <Route path="/camera" element={<CameraView />} />
          <Route path="/search" element={<VetSearch />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/pets" element={<ProfilePets />} />
          <Route path="/profile/bookings" element={<BookingHistory />} />
          <Route path="/profile/orders" element={<OrderHistory />} />
          <Route path="/profile/security" element={<ProfileSecurity />} />
          <Route path="/profile/notifications" element={<ProfileNotifications />} />
        </Routes>
      </main>

      {!isStandalone && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}
