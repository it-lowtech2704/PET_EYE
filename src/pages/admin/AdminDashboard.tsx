import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Store, ShoppingBag, TrendingUp, DollarSign, Activity, Calendar, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Tổng người dùng', value: '12,458', change: '+12%', icon: <Users />, color: 'bg-blue-500' },
    { label: 'Cửa hàng/Phòng khám', value: '342', change: '+8%', icon: <Store />, color: 'bg-green-500' },
    { label: 'Đơn hàng', value: '8,234', change: '+23%', icon: <ShoppingBag />, color: 'bg-purple-500' },
    { label: 'Doanh thu', value: '2.4B VNĐ', change: '+18%', icon: <DollarSign />, color: 'bg-orange-500' },
  ];

  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900">Admin Dashboard</h1>
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
                <span className="text-xs font-bold text-green-500">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black mb-6">Hoạt động gần đây</h2>
            <div className="space-y-4">
              {[
                { action: 'Đăng ký mới', user: 'Nguyễn Văn A', time: '5 phút trước', type: 'customer' },
                { action: 'Cửa hàng mới', user: 'PetCare Đà Nẵng', time: '15 phút trước', type: 'shop' },
                { action: 'Đơn hàng mới', user: 'Trần Thị B', time: '30 phút trước', type: 'order' },
                { action: 'Đặt lịch khám', user: 'Lê Văn C', time: '1 giờ trước', type: 'booking' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                  <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Activity size={18} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{activity.action}</h4>
                    <p className="text-xs text-slate-500">{activity.user}</p>
                  </div>
                  <span className="text-xs text-slate-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black mb-6">Quản lý nhanh</h2>
            <div className="space-y-3">
              <Link to="/admin/users" className="block w-full py-3 px-4 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors">
                Quản lý người dùng
              </Link>
              <Link to="/admin/shops" className="block w-full py-3 px-4 bg-green-50 text-green-600 rounded-xl font-bold text-sm hover:bg-green-100 transition-colors">
                Quản lý cửa hàng
              </Link>
              <Link to="/admin/orders" className="block w-full py-3 px-4 bg-purple-50 text-purple-600 rounded-xl font-bold text-sm hover:bg-purple-100 transition-colors">
                Quản lý đơn hàng
              </Link>
              <Link to="/admin/reports" className="block w-full py-3 px-4 bg-orange-50 text-orange-600 rounded-xl font-bold text-sm hover:bg-orange-100 transition-colors">
                Báo cáo thống kê
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
