import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import AdminNavbar from './components/AdminNavbar';
import ShopNavbar from './components/ShopNavbar';
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
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminShops from './pages/admin/AdminShops';
import AdminOrders from './pages/admin/AdminOrders';
import AdminReports from './pages/admin/AdminReports';
import ShopDashboard from './pages/shop/ShopDashboard';
import ShopBookings from './pages/shop/ShopBookings';
import ShopServices from './pages/shop/ShopServices';
import ShopOrders from './pages/shop/ShopOrders';
import ShopProfile from './pages/shop/ShopProfile';
import ProtectedRoute from './components/ProtectedRoute';
import Services from './pages/Services';
import GroomingService from './pages/services/GroomingService';
import MedicalService from './pages/services/MedicalService';
import BoardingService from './pages/services/BoardingService';
import Booking from './pages/Booking';
import BookingSuccess from './pages/BookingSuccess';

function AppContent() {
  const { user } = useAuth();

  const renderNavbar = () => {
    if (!user) return <Navbar />;
    
    switch (user.role) {
      case 'admin':
        return <AdminNavbar />;
      case 'shop':
        return <ShopNavbar />;
      default:
        return <Navbar />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {renderNavbar()}
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/grooming" element={<GroomingService />} />
          <Route path="/services/medical" element={<MedicalService />} />
          <Route path="/services/boarding" element={<BoardingService />} />
          
          {/* Booking Routes */}
          <Route path="/booking/:serviceType" element={<ProtectedRoute allowedRoles={['customer']}><Booking /></ProtectedRoute>} />
          <Route path="/booking/success" element={<ProtectedRoute allowedRoles={['customer']}><BookingSuccess /></ProtectedRoute>} />
          
          {/* Customer Routes */}
          <Route path="/profile" element={<ProtectedRoute allowedRoles={['customer']}><Profile /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute allowedRoles={['customer']}><OrderHistory /></ProtectedRoute>} />
          <Route path="/bookings" element={<ProtectedRoute allowedRoles={['customer']}><BookingHistory /></ProtectedRoute>} />
          <Route path="/clinic/:id" element={<ClinicDetail />} />
          <Route path="/pet/:id" element={<ProtectedRoute allowedRoles={['customer']}><PetProfile /></ProtectedRoute>} />
          <Route path="/messages" element={<ProtectedRoute><Messaging /></ProtectedRoute>} />
          <Route path="/live" element={<ProtectedRoute allowedRoles={['customer']}><LiveTracking /></ProtectedRoute>} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute allowedRoles={['admin']}><AdminUsers /></ProtectedRoute>} />
          <Route path="/admin/shops" element={<ProtectedRoute allowedRoles={['admin']}><AdminShops /></ProtectedRoute>} />
          <Route path="/admin/orders" element={<ProtectedRoute allowedRoles={['admin']}><AdminOrders /></ProtectedRoute>} />
          <Route path="/admin/reports" element={<ProtectedRoute allowedRoles={['admin']}><AdminReports /></ProtectedRoute>} />
          
          {/* Shop Routes */}
          <Route path="/shop/dashboard" element={<ProtectedRoute allowedRoles={['shop']}><ShopDashboard /></ProtectedRoute>} />
          <Route path="/shop/bookings" element={<ProtectedRoute allowedRoles={['shop']}><ShopBookings /></ProtectedRoute>} />
          <Route path="/shop/services" element={<ProtectedRoute allowedRoles={['shop']}><ShopServices /></ProtectedRoute>} />
          <Route path="/shop/orders" element={<ProtectedRoute allowedRoles={['shop']}><ShopOrders /></ProtectedRoute>} />
          <Route path="/shop/profile" element={<ProtectedRoute allowedRoles={['shop']}><ShopProfile /></ProtectedRoute>} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#1a2b4c]">
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
            <h4 className="font-bold mb-6 text-slate-900">Dịch vụ</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Tìm phòng khám</a></li>
              <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Đặt lịch Spa</a></li>
              <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Lưu trú thú cưng</a></li>
              <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Cửa hàng trực tuyến</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900">Hỗ trợ</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-[#1a2b4c] transition-colors">Liên hệ chúng tôi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900">Tải ứng dụng</h4>
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
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2023 Carevia Corporation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-[#1a2b4c] transition-colors"><span className="sr-only">Facebook</span></a>
            <a href="#" className="text-slate-400 hover:text-[#1a2b4c] transition-colors"><span className="sr-only">Instagram</span></a>
            <a href="#" className="text-slate-400 hover:text-[#1a2b4c] transition-colors"><span className="sr-only">Twitter</span></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}
