import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint, Users, Store, ShoppingBag, BarChart3, Settings, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white/90 backdrop-blur-md px-6 lg:px-10 py-3">
      <div className="flex items-center gap-8">
        <Link to="/admin/dashboard" className="flex items-center gap-3 text-[#1a2b4c]">
          <div className="size-8 bg-[#1a2b4c] rounded-lg flex items-center justify-center text-white">
            <PawPrint size={20} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Carevia Admin</h2>
        </Link>
      </div>

      <div className="flex flex-1 justify-end gap-6 items-center">
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            to="/admin/dashboard" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/admin/dashboard') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <BarChart3 size={18} /> Dashboard
          </Link>
          <Link 
            to="/admin/users" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/admin/users') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <Users size={18} /> Người dùng
          </Link>
          <Link 
            to="/admin/shops" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/admin/shops') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <Store size={18} /> Cửa hàng
          </Link>
          <Link 
            to="/admin/orders" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/admin/orders') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <ShoppingBag size={18} /> Đơn hàng
          </Link>
          <Link 
            to="/admin/reports" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive('/admin/reports') ? 'text-[#1a2b4c]' : 'text-slate-700 hover:text-[#1a2b4c]'
            }`}
          >
            <BarChart3 size={18} /> Báo cáo
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
          <Link to="/admin/dashboard" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <BarChart3 size={18} /> Dashboard
          </Link>
          <Link to="/admin/users" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Users size={18} /> Người dùng
          </Link>
          <Link to="/admin/shops" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Store size={18} /> Cửa hàng
          </Link>
          <Link to="/admin/orders" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <ShoppingBag size={18} /> Đơn hàng
          </Link>
          <Link to="/admin/reports" className="text-lg font-medium flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <BarChart3 size={18} /> Báo cáo
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
