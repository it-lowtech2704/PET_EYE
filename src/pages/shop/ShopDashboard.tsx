import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Package, MessageCircle, Star, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function ShopDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Lịch hẹn hôm nay', value: '12', icon: <Calendar />, color: 'bg-blue-500' },
    { label: 'Đơn hàng mới', value: '8', icon: <Package />, color: 'bg-green-500' },
    { label: 'Tin nhắn chưa đọc', value: '5', icon: <MessageCircle />, color: 'bg-purple-500' },
    { label: 'Đánh giá trung bình', value: '4.8', icon: <Star />, color: 'bg-yellow-500' },
  ];

  const upcomingBookings = [
    { time: '09:00', customer: 'Nguyễn Văn A', pet: 'Miu Miu', service: 'Khám tổng quát' },
    { time: '10:30', customer: 'Trần Thị B', pet: 'Lucky', service: 'Tiêm phòng' },
    { time: '14:00', customer: 'Lê Văn C', pet: 'Bông', service: 'Spa & Grooming' },
    { time: '15:30', customer: 'Phạm Thị D', pet: 'Milo', service: 'Khám bệnh' },
  ];

  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900">Shop Dashboard</h1>
          <p className="text-slate-500">Chào mừng trở lại, {user?.name}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} text-white p-3 rounded-xl`}>
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming Bookings */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black">Lịch hẹn hôm nay</h2>
              <Link to="/shop/bookings" className="text-sm font-bold text-[#1a2b4c] hover:underline">
                Xem tất cả
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingBookings.map((booking, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                  <div className="size-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Clock size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-sm">{booking.customer}</h4>
                      <span className="text-xs text-slate-400">• {booking.pet}</span>
                    </div>
                    <p className="text-xs text-slate-500">{booking.service}</p>
                  </div>
                  <span className="text-sm font-black text-[#1a2b4c]">{booking.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-black mb-6">Quản lý nhanh</h2>
              <div className="space-y-3">
                <Link to="/shop/bookings" className="block w-full py-3 px-4 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors">
                  Quản lý lịch hẹn
                </Link>
                <Link to="/shop/services" className="block w-full py-3 px-4 bg-green-50 text-green-600 rounded-xl font-bold text-sm hover:bg-green-100 transition-colors">
                  Quản lý dịch vụ
                </Link>
                <Link to="/shop/orders" className="block w-full py-3 px-4 bg-purple-50 text-purple-600 rounded-xl font-bold text-sm hover:bg-purple-100 transition-colors">
                  Đơn hàng
                </Link>
                <Link to="/messages" className="block w-full py-3 px-4 bg-orange-50 text-orange-600 rounded-xl font-bold text-sm hover:bg-orange-100 transition-colors">
                  Tin nhắn
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a2b4c] to-slate-900 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-black mb-2">Doanh thu tháng này</h3>
              <p className="text-3xl font-black mb-4">45.2M VNĐ</p>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp size={16} />
                <span className="font-bold">+18% so với tháng trước</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
