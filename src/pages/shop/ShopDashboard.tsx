import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Calendar, Package, DollarSign, Users, TrendingUp, Clock, CheckCircle, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function ShopDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Đơn hôm nay', value: '12', icon: Calendar, gradient: 'from-blue-500 to-blue-600', change: '+3', changeType: 'up' },
    { label: 'Doanh thu tháng', value: '45.2M', icon: DollarSign, gradient: 'from-green-500 to-emerald-600', change: '+12%', changeType: 'up' },
    { label: 'Khách hàng', value: '234', icon: Users, gradient: 'from-purple-500 to-purple-600', change: '+8', changeType: 'up' },
    { label: 'Đánh giá TB', value: '4.8', icon: TrendingUp, gradient: 'from-orange-500 to-orange-600', change: '+0.2', changeType: 'up' },
  ];

  const recentBookings = [
    { id: 1, customer: 'Nguyễn Văn A', pet: 'Milo', service: 'Grooming', time: '10:00', status: 'pending' },
    { id: 2, customer: 'Trần Thị B', pet: 'Luna', service: 'Khám bệnh', time: '11:30', status: 'confirmed' },
    { id: 3, customer: 'Lê Văn C', pet: 'Max', service: 'Lưu trú', time: '14:00', status: 'completed' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Welcome Header */}
      <div className="bg-gradient-to-br from-[#1a2b4c] via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-slate-300 text-sm mb-1">Chào mừng trở lại 👋</p>
              <h1 className="text-3xl font-bold text-white mb-1">{user?.name || 'Shop Owner'}</h1>
              <p className="text-slate-400 text-sm">Quản lý cửa hàng của bạn một cách hiệu quả</p>
            </div>
            <Link
              to="/shop/profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium transition-all border border-white/20"
            >
              <Store size={18} />
              Cài đặt cửa hàng
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-700/20 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg shadow-${stat.gradient.split('-')[1]}-500/20`}>
                    <stat.icon className="text-white" size={22} />
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold text-green-600 dark:text-green-400">
                    <ArrowUpRight size={16} />
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 mb-8 border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Đơn đặt lịch gần đây</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Quản lý và theo dõi các đơn đặt lịch</p>
            </div>
            <Link to="/shop/bookings" className="flex items-center gap-1 text-sm text-primary hover:text-primary-dark font-semibold transition-colors group">
              Xem tất cả 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users size={20} className="text-slate-600 dark:text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{booking.customer}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {booking.pet} • {booking.service}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Clock size={14} />
                      {booking.time}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                      booking.status === 'completed'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : booking.status === 'confirmed'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                    }`}
                  >
                    {booking.status === 'completed'
                      ? 'Hoàn thành'
                      : booking.status === 'confirmed'
                      ? 'Đã xác nhận'
                      : 'Chờ xác nhận'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Truy cập nhanh</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/shop/bookings"
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 rounded-bl-full group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Quản lý lịch hẹn</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Xem và xử lý các đơn đặt lịch</p>
              </div>
            </Link>
            <Link
              to="/shop/services"
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20 rounded-bl-full group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                  <Package className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Dịch vụ</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Quản lý các dịch vụ của bạn</p>
              </div>
            </Link>
            <Link
              to="/shop/orders"
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/20 rounded-bl-full group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                  <DollarSign className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Đơn hàng</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Theo dõi đơn hàng và doanh thu</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
