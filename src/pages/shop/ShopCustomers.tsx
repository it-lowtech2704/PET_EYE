import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Search, Filter, TrendingUp } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  pets: number;
  totalBookings: number;
  totalSpent: string;
  lastVisit: string;
  avatar: string;
}

const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 'CUS001',
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@email.com',
    phone: '0901234567',
    pets: 2,
    totalBookings: 15,
    totalSpent: '4.500.000đ',
    lastVisit: '04/03/2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    id: 'CUS002',
    name: 'Trần Thị B',
    email: 'tranthib@email.com',
    phone: '0912345678',
    pets: 1,
    totalBookings: 8,
    totalSpent: '2.100.000đ',
    lastVisit: '05/03/2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    id: 'CUS003',
    name: 'Lê Văn C',
    email: 'levanc@email.com',
    phone: '0923456789',
    pets: 3,
    totalBookings: 22,
    totalSpent: '7.800.000đ',
    lastVisit: '03/03/2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  },
];

export default function ShopCustomers() {
  const [customers] = useState<Customer[]>(MOCK_CUSTOMERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'new' | 'regular' | 'vip'>('all');

  const filteredCustomers = customers.filter((customer) => {
    const searchMatch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);

    if (!searchMatch) return false;

    if (filter === 'all') return true;

    // Determine customer category
    const lastVisitDate = new Date(customer.lastVisit.split('/').reverse().join('-'));
    const today = new Date();
    const daysDiff = Math.floor((today.getTime() - lastVisitDate.getTime()) / (1000 * 60 * 60 * 24));
    const isNew = daysDiff <= 7;

    const spentAmount = parseInt(customer.totalSpent.replace(/\D/g, ''));
    const isVIP = spentAmount >= 5000000 || customer.totalBookings >= 20;

    if (filter === 'new') return isNew;
    if (filter === 'vip') return isVIP;
    if (filter === 'regular') return !isNew && !isVIP;

    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header with Image */}
        <div className="mb-8 relative">
          <div className="absolute right-0 top-0 w-64 h-64 opacity-10 pointer-events-none hidden lg:block">

          </div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Quản lý khách hàng</h1>
            <p className="text-slate-600 dark:text-slate-400">Danh sách khách hàng và lịch sử giao dịch</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Tổng khách hàng', value: customers.length, gradient: 'from-[#1a2b4c] to-slate-700', icon: '👥' },
            { label: 'Khách hàng mới (tháng này)', value: 12, gradient: 'from-green-500 to-emerald-600', icon: '✨' },
            { label: 'Khách hàng thân thiết', value: 45, gradient: 'from-purple-500 to-purple-600', icon: '⭐' },
          ].map((stat) => (
            <div key={stat.label} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-700/20 rounded-bl-full group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-2">
                  <span className="text-xl">{stat.icon}</span>
                  {stat.label}
                </p>
                <p className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm mb-6 border border-slate-100 dark:border-slate-700">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Tìm khách hàng theo tên, email, số điện thoại..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-white transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-all">
              <Filter size={20} />
              Lọc
            </button>
          </div>

          {/* Customer Type Filters */}
          <div className="flex gap-2 overflow-x-auto">
            {[
              { value: 'all', label: 'Tất cả' },
              { value: 'new', label: 'Khách hàng mới' },
              { value: 'regular', label: 'Khách hàng thường' },
              { value: 'vip', label: 'Khách hàng VIP' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${filter === tab.value
                    ? 'bg-gradient-to-r from-[#1a2b4c] to-slate-700 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Customers List */}
        <div className="space-y-4">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-700/20 rounded-bl-full group-hover:scale-110 transition-transform" />
              <div className="flex flex-col lg:flex-row gap-6 relative z-10">
                {/* Avatar & Basic Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-100 dark:border-slate-700 shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{customer.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">#{customer.id}</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-sm">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Mail size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Phone size={16} className="text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">{customer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <Calendar size={16} className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">Lần cuối: {customer.lastVisit}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 self-start">

                    {/* Thú cưng */}
                    <div className="h-20 flex flex-col justify-center text-center
                  bg-blue-50 dark:bg-blue-900/30
                  rounded-xl">
                      <p className="text-[11px] text-blue-600 dark:text-blue-300">
                        Thú cưng
                      </p>
                      <p className="text-xl font-bold text-blue-700 dark:text-blue-200">
                        {customer.pets}
                      </p>
                    </div>

                    {/* Lượt đặt */}
                    <div className="h-20 flex flex-col justify-center text-center
                  bg-emerald-50 dark:bg-emerald-900/30
                  rounded-xl">
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-300">
                        Lượt đặt
                      </p>
                      <p className="text-xl font-bold text-emerald-700 dark:text-emerald-200">
                        {customer.totalBookings}
                      </p>
                    </div>

                    {/* Tổng chi */}
                    <div className="h-20 flex flex-col justify-center text-center
                  bg-gradient-to-br from-[#1a2b4c] to-slate-700
                  rounded-xl">
                      <p className="text-[11px] text-slate-300">
                        Tổng chi
                      </p>
                      <p className="text-lg font-bold text-white">
                        {customer.totalSpent.replace('.000đ', 'K')}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 lg:w-36">
                  <button className="px-4 py-2.5 bg-gradient-to-r from-[#1a2b4c] to-slate-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm">
                    Xem chi tiết
                  </button>
                  <button className="px-4 py-2.5 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm">
                    Liên hệ
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredCustomers.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-slate-400" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-semibold text-lg">Không tìm thấy khách hàng</p>
              <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">Thử tìm kiếm với từ khóa khác</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
