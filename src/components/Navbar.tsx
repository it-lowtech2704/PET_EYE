import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Search, Bell, HelpCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 lg:px-10 py-3">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 text-[#1a2b4c] dark:text-white">
          <div className="size-8 bg-[#1a2b4c] rounded-lg flex items-center justify-center text-white">
            <PawPrint size={20} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Carevia</h2>
        </Link>
        
        <div className="hidden lg:flex flex-col min-w-60 h-10">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-slate-100 dark:bg-slate-800 transition-colors">
            <div className="text-slate-500 flex items-center justify-center pl-4 rounded-l-xl">
              <Search size={18} />
            </div>
            <input 
              className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-0 focus:outline-none px-4 h-full text-sm" 
              placeholder="Tìm kiếm dịch vụ, bác sĩ..."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-6 items-center">
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-slate-700 dark:text-slate-200 hover:text-[#1a2b4c] transition-colors text-sm font-medium">Trang chủ</Link>
          <Link to="/clinic/1" className="text-slate-700 dark:text-slate-200 hover:text-[#1a2b4c] transition-colors text-sm font-medium">Dịch vụ</Link>
          <Link to="/messages" className="text-slate-700 dark:text-slate-200 hover:text-[#1a2b4c] transition-colors text-sm font-medium">Tin nhắn</Link>
          <Link to="/live" className="text-slate-700 dark:text-slate-200 hover:text-[#1a2b4c] transition-colors text-sm font-medium">Live Cam</Link>
          <Link to="/profile" className="text-slate-700 dark:text-slate-200 hover:text-[#1a2b4c] transition-colors text-sm font-medium">Hồ sơ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="relative p-2 text-slate-500 hover:text-[#1a2b4c] transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold text-[#1a2b4c] dark:text-white hover:underline">Đăng nhập</Link>
            <Link to="/register" className="bg-[#1a2b4c] text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-all">Đăng ký</Link>
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
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 lg:hidden p-6 flex flex-col gap-4 shadow-xl">
          <Link to="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Trang chủ</Link>
          <Link to="/clinic/1" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Dịch vụ</Link>
          <Link to="/messages" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Tin nhắn</Link>
          <Link to="/live" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Live Cam</Link>
          <Link to="/profile" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Hồ sơ</Link>
          <hr className="border-slate-100" />
          <Link to="/login" className="text-lg font-bold text-[#1a2b4c]" onClick={() => setIsMenuOpen(false)}>Đăng nhập</Link>
          <Link to="/register" className="bg-[#1a2b4c] text-white px-6 py-3 rounded-xl font-bold text-center" onClick={() => setIsMenuOpen(false)}>Đăng ký</Link>
        </div>
      )}
    </header>
  );
}
