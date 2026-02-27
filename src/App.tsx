import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import OrderHistory from './pages/OrderHistory';
import BookingHistory from './pages/BookingHistory';
import ClinicDetail from './pages/ClinicDetail';
import PetProfile from './pages/PetProfile';
import Messaging from './pages/Messaging';
import LiveTracking from './pages/LiveTracking';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/bookings" element={<BookingHistory />} />
            <Route path="/clinic/:id" element={<ClinicDetail />} />
            <Route path="/pet/:id" element={<PetProfile />} />
            <Route path="/messages" element={<Messaging />} />
            <Route path="/live" element={<LiveTracking />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#1a2b4c] dark:text-white">
                <div className="size-8 bg-[#1a2b4c] rounded-lg flex items-center justify-center text-white">
                  <span className="font-black">C</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight">Carevia</h2>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Nền tảng kết nối và chăm sóc thú cưng toàn diện nhất Việt Nam. Sứ mệnh của chúng tôi là mang lại cuộc sống hạnh phúc hơn cho mọi thú cưng.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Dịch vụ</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Tìm phòng khám</a></li>
                <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Đặt lịch Spa</a></li>
                <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Lưu trú thú cưng</a></li>
                <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Cửa hàng trực tuyến</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Hỗ trợ</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Điều khoản sử dụng</a></li>
                <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Liên hệ chúng tôi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Tải ứng dụng</h4>
              <div className="flex flex-col gap-3">
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:opacity-90 transition-all">
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold opacity-60">Download on the</p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:opacity-90 transition-all">
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold opacity-60">Get it on</p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">© 2023 Carevia Corporation. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-[#1a2b4c] transition-colors"><span className="sr-only">Facebook</span></a>
              <a href="#" className="text-slate-400 hover:text-[#1a2b4c] transition-colors"><span className="sr-only">Instagram</span></a>
              <a href="#" className="text-slate-400 hover:text-[#1a2b4c] transition-colors"><span className="sr-only">Twitter</span></a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
