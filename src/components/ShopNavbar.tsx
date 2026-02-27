import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint, Calendar, Package, MessageCircle, Settings, BarChart3, LogOut, Menu, X, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function ShopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white/90 backdrop-blur-md px-6 lg:px-10 py-3">
      <div className="flex items-center gap-8">
        <Link to="/shop/dashboard" className="flex items-center gap-3 text-[#1a2b4c]">
          <div className="size-8 bg-[#1a2b4c] rounded-lg flex items-center justify-center text-white">
            <PawPrint size={20} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Carevia Shop</h2>
        </Link>
      </div>

      <div className="flex flex-1 justify-end gap-6 items-center">
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            to="/shop/dashboard" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/shop/dashboard') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <BarChart3 size={18} /> Dashboard
          </Link>
          <Link 
            to="/shop/bookings" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/shop/bookings') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <Calendar size={18} /> Lịch hẹn
          </Link>
          <Link 
            to="/shop/services" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/shop/services') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <Settings size={18} /> Dịch vụ
          </Link>
          <Link 
            to="/shop/orders" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/shop/orders') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <Package size={18} /> Đơn hàng
          </Link>
          <Link 
            to="/messages" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/messages') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <MessageCircle size={18} /> Tin nhắn
          </Link>
          <Link 
            to="/shop/profile" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/shop/profile') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <User size={18} /> Cửa hàng
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm font-bold text-slate-700">{user?.name}</span>
            <button 
              onClick={logout}
              className="bg-slate-100 text-slate-700 px-6 py-2 rounded-full font-bold text-sm hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              <LogOut size={16} /> Đăng xuất
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 lg:hidden p-6 flex flex-col gap-4 shadow-xl">
          <Link to="/shop/dashboard" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <BarChart3 size={18} /> Dashboard
          </Link>
          <Link to="/shop/bookings" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Calendar size={18} /> Lịch hẹn
          </Link>
          <Link to="/shop/services" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Settings size={18} /> Dịch vụ
          </Link>
          <Link to="/shop/orders" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Package size={18} /> Đơn hàng
          </Link>
          <Link to="/messages" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <MessageCircle size={18} /> Tin nhắn
          </Link>
          <Link to="/shop/profile" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <User size={18} /> Cửa hàng
          </Link>
          <hr className="border-slate-100" />
          <div className="text-sm text-slate-500">Xin chào, {user?.name}</div>
          <button 
            onClick={() => { logout(); setIsMenuOpen(false); }}
            className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
          >
            <LogOut size={18} /> Đăng xuất
          </button>
        </div>
      )}
    </header>
  );
}
