import React, { useState } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../lib/authContext';

const NAV_ITEMS = [
  { icon: 'person', label: 'Thông tin cá nhân', path: '/profile' },
  { icon: 'pets', label: 'Thú cưng của tôi', path: '/profile/pets' },
  { icon: 'receipt_long', label: 'Lịch sử đơn hàng', path: '/profile/orders' },
  { icon: 'calendar_month', label: 'Lịch sử đặt lịch', path: '/profile/bookings' },
  { icon: 'shield_person', label: 'Bảo mật & Mật khẩu', path: '/profile/security' },
  { icon: 'notifications', label: 'Thông báo', path: '/profile/notifications' },
];

export function ProfileLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto w-full px-4 md:px-10 py-8 gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-72 flex flex-col gap-6 shrink-0">
          {/* Nav */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map(item => {
                const isActive =
                  item.path === '/profile'
                    ? location.pathname === '/profile'
                    : location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                      ? 'bg-[#e0f7f9] text-[#1a2b4c] shadow-sm dark:bg-teal-900/30 dark:text-teal-300'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                  >
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all w-full"
              >
                <span className="material-symbols-outlined text-xl">logout</span>
                <span className="text-sm font-semibold">Đăng xuất</span>
              </button>
            </div>
          </div>

          {/* Membership card */}
          <div className="bg-gradient-to-br from-[#1a2b4c]/20 to-[#1a2b4c]/5 dark:from-[#1a2b4c]/30 dark:to-transparent rounded-xl p-6 shadow-sm border border-[#1a2b4c]/20">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-[#1a2b4c]/20 text-[#1a2b4c] dark:text-teal-300 text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">
                Trạng thái
              </span>
              <span className="material-symbols-outlined text-[#1a2b4c] dark:text-teal-400 text-2xl">workspace_premium</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Cấp thành viên</p>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">Peteye Gold</h3>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Số lịch hẹn</p>
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">24 Tổng cộng</p>
              </div>
              <div className="size-12 rounded-full border-4 border-[#1a2b4c] dark:border-teal-400 border-t-transparent flex items-center justify-center rotate-45">
                <span className="text-[10px] font-bold -rotate-45 text-[#1a2b4c] dark:text-teal-400">80%</span>
              </div>
            </div>
            <button className="w-full mt-5 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors">
              Xem đặc quyền
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Personal Info (main profile page)
// ─────────────────────────────────────────────
export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || 'Demo User');
  const [email, setEmail] = useState(user?.email || 'demo@carevia.vn');
  const [phone, setPhone] = useState('0909 123 456');
  const [dob, setDob] = useState('12/03/1992');
  const [address, setAddress] = useState('123 Nguyễn Thị Thập, Quận 7, TP. Hồ Chí Minh');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main className="flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl text-slate-900 dark:text-slate-100 tracking-tight font-bold">Thông tin cá nhân</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Quản lý thông tin hồ sơ và tùy chọn của bạn.</p>
        </div>

        {saved && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3 text-green-700 dark:text-green-300">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-semibold text-sm">Thông tin đã được lưu thành công!</span>
          </div>
        )}

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Avatar */}
          <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <div className="size-28 rounded-full border-4 border-white dark:border-slate-800 shadow-md overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-[#1a2b4c] text-white size-9 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                </button>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Thành viên từ tháng 1, 2023</p>
                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
                  <button className="bg-[#1a2b4c] px-5 py-2 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md">
                    Tải ảnh mới
                  </button>
                  <button className="bg-slate-100 dark:bg-slate-800 px-5 py-2 rounded-lg text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    Xóa ảnh
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="p-6 md:p-8 flex flex-col gap-8" onSubmit={handleSave}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Họ và tên</label>
                <input
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-slate-900 dark:text-slate-100 focus:border-[#1a2b4c] focus:ring-1 focus:ring-[#1a2b4c] outline-none transition-all"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  Địa chỉ Email
                  <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Đã xác minh
                  </span>
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-slate-900 dark:text-slate-100 focus:border-[#1a2b4c] focus:ring-1 focus:ring-[#1a2b4c] outline-none transition-all"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Số điện thoại</label>
                <input
                  type="tel"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-slate-900 dark:text-slate-100 focus:border-[#1a2b4c] focus:ring-1 focus:ring-[#1a2b4c] outline-none transition-all"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Ngày sinh</label>
                <div className="relative">
                  <input
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-slate-900 dark:text-slate-100 focus:border-[#1a2b4c] focus:ring-1 focus:ring-[#1a2b4c] outline-none transition-all"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                  />
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 text-lg">calendar_today</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Địa chỉ</label>
                <textarea
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-slate-900 dark:text-slate-100 focus:border-[#1a2b4c] focus:ring-1 focus:ring-[#1a2b4c] outline-none transition-all resize-none"
                  rows={3}
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-500 max-w-xs">Dữ liệu cá nhân của bạn được mã hóa và bảo mật theo chính sách riêng tư của Peteye.</p>
              <div className="flex gap-3">
                <button type="button" className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm">Hủy</button>
                <button type="submit" className="bg-[#1a2b4c] px-8 py-2.5 rounded-xl text-white font-bold shadow-lg shadow-[#1a2b4c]/20 hover:opacity-90 active:scale-[0.98] transition-all text-sm">Lưu thay đổi</button>
              </div>
            </div>
          </form>
        </div>

        {/* Quick info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: 'health_and_safety', label: 'Bảo hiểm đang hoạt động', value: 'Peteye Plus (2 thú cưng)', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
            { icon: 'payments', label: 'Thanh toán mặc định', value: 'Visa kết thúc bằng •••• 4242', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
          ].map(c => (
            <div key={c.label} className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <div className={`size-12 rounded-xl ${c.bg} flex items-center justify-center ${c.color}`}>
                <span className="material-symbols-outlined text-xl">{c.icon}</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{c.label}</p>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
  );
}
