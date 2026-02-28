import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './lib/authContext';
import Navbar from './components/Navbar';
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

// Routes where the global Navbar + Footer should be hidden
// (these pages manage their own header/layout)
const STANDALONE_ROUTES = ['/home'];

function AppLayout() {
  const location = useLocation();
  const isStandalone = STANDALONE_ROUTES.includes(location.pathname);

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
          <Route path="/" element={<Home />} />
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

      {/* Global Footer — only shown on non-standalone routes */}
      {!isStandalone && (
        <footer className="bg-slate-900 text-slate-300 px-6 md:px-12 lg:px-20 py-20 border-t border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="size-8">
                  <svg className="text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd" />
                    <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight">Carevia</h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">Nền tảng kết nối dịch vụ thú y hàng đầu Việt Nam. Tận tâm vì sức khỏe thú cưng của bạn.</p>
              <div className="flex gap-3">
                <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
                <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1" href="#"><span className="material-symbols-outlined text-lg">mail</span></a>
                <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1" href="#"><span className="material-symbols-outlined text-lg">call</span></a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 text-lg">Liên kết nhanh</h5>
              <ul className="space-y-4 text-sm">
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Về chúng tôi</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Dành cho đối tác</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Tin tức thú cưng</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Câu hỏi thường gặp</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 text-lg">Dịch vụ</h5>
              <ul className="space-y-4 text-sm">
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Khám bệnh</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Tiêm chủng</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Lưu trú thú cưng</a></li>
                <li><a className="hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /> Spa &amp; Làm đẹp</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-white font-bold mb-6 text-lg">Liên hệ</h5>
              <div className="flex items-start gap-4 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <p className="flex-1 pt-1">123 Đường Thú Cưng, Quận 1, TP. Hồ Chí Minh</p>
              </div>
              <div className="flex items-center gap-4 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">call</span>
                </div>
                <p className="pt-1 font-bold text-white">1900 123 456</p>
              </div>
              <div className="flex items-center gap-4 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <p className="pt-1">support@carevia.vn</p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2025 Carevia. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-white transition-colors" href="#">Điều khoản sử dụng</a>
              <a className="hover:text-white transition-colors" href="#">Chính sách bảo mật</a>
            </div>
          </div>
        </footer>
      )}
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
