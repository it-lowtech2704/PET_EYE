import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/authContext';

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
          <div className="size-10 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
            <div className="relative bg-white dark:bg-slate-800 rounded-xl p-1.5 shadow-sm text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd" />
                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl font-extrabold tracking-tight">Carevia</h2>
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
