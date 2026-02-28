import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/authContext';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 md:px-12 lg:px-20 py-5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800 transition-all duration-300">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-2.5 text-primary group">
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary dark:hover:text-primary transition-colors">
              Dịch vụ
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
              <Link to="/clinic/1" className="block px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary rounded-t-xl">Khám bệnh</Link>
              <Link to="/clinic/1" className="block px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary">Lưu trú</Link>
              <Link to="/clinic/1" className="block px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary">Spa &amp; Grooming</Link>
              <Link to="/clinic/1" className="block px-4 py-2.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-primary rounded-b-xl">Tiêm chủng</Link>
            </div>
          </div>
          <Link to="/search" className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary dark:hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Cơ sở thú y</Link>
          <Link to="/" className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary dark:hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Về chúng tôi</Link>
          <Link to="/" className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary dark:hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">Liên hệ</Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {isLoggedIn && user ? (
          <>
            {/* Go to HomePage */}
            <Link
              to="/home"
              className="hidden md:flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">home</span>
              Khám phá
            </Link>

            {/* User Avatar + Name → Profile */}
            <Link to="/profile" className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1.5 hover:bg-primary/10 transition-colors">
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-[100px] truncate">
                {user.name}
              </span>
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
              <span className="hidden md:inline">Đăng xuất</span>
            </button>
          </>
        ) : (
          <>
            <button className="hidden md:flex bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-5 py-2.5 rounded-full font-bold text-sm transition-all border border-slate-200 dark:border-slate-700 hover:border-primary/50">
              Dành cho đối tác
            </button>
            <Link
              to="/login"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              Đăng nhập
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
