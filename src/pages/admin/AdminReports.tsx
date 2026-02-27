import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Store, DollarSign, ShoppingBag, Calendar, Download } from 'lucide-react';

export default function AdminReports() {
  const monthlyStats = [
    { month: 'Tháng 1', revenue: '180M', orders: 1200, users: 450, shops: 25 },
    { month: 'Tháng 2', revenue: '195M', orders: 1350, users: 520, shops: 28 },
    { month: 'Tháng 3', revenue: '210M', orders: 1450, users: 580, shops: 30 },
    { month: 'Tháng 4', revenue: '225M', orders: 1600, users: 650, shops: 32 },
    { month: 'Tháng 5', revenue: '240M', orders: 1750, users: 720, shops: 35 },
  ];

  const topShops = [
    { name: 'PetCare Sài Gòn', revenue: '45M', orders: 320, rating: 4.9 },
    { name: 'Happy Paws Spa', revenue: '38M', orders: 280, rating: 4.7 },
    { name: 'Saigon Vet Hospital', revenue: '52M', orders: 380, rating: 4.8 },
  ];

  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Báo cáo & Thống kê</h1>
            <p className="text-slate-500">Tổng quan hoạt động kinh doanh</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
              <Download size={18} /> Xuất báo cáo
            </button>
            <Link to="/admin/dashboard" className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-bold">
              Quay lại
            </Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Users size={32} />
              <TrendingUp size={20} />
            </div>
            <h3 className="text-3xl font-black mb-1">12,458</h3>
            <p className="text-blue-100 text-sm">Tổng người dùng</p>
            <p className="text-xs mt-2 text-blue-100">+12% so với tháng trước</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Store size={32} />
              <TrendingUp size={20} />
            </div>
            <h3 className="text-3xl font-black mb-1">342</h3>
            <p className="text-green-100 text-sm">Cửa hàng hoạt động</p>
            <p className="text-xs mt-2 text-green-100">+8% so với tháng trước</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <ShoppingBag size={32} />
              <TrendingUp size={20} />
            </div>
            <h3 className="text-3xl font-black mb-1">8,234</h3>
            <p className="text-purple-100 text-sm">Đơn hàng tháng này</p>
            <p className="text-xs mt-2 text-purple-100">+23% so với tháng trước</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <DollarSign size={32} />
              <TrendingUp size={20} />
            </div>
            <h3 className="text-3xl font-black mb-1">2.4B</h3>
            <p className="text-orange-100 text-sm">Doanh thu (VNĐ)</p>
            <p className="text-xs mt-2 text-orange-100">+18% so với tháng trước</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Monthly Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black">Thống kê theo tháng</h2>
              <Calendar size={20} className="text-slate-400" />
            </div>
            <div className="space-y-4">
              {monthlyStats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-sm">{stat.month}</h4>
                    <span className="text-lg font-black text-[#2dd4bf]">{stat.revenue} VNĐ</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="text-slate-400">Đơn hàng</p>
                      <p className="font-bold">{stat.orders}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Users</p>
                      <p className="font-bold">{stat.users}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Shops</p>
                      <p className="font-bold">{stat.shops}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Shops */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black">Top cửa hàng</h2>
              <Store size={20} className="text-slate-400" />
            </div>
            <div className="space-y-4">
              {topShops.map((shop, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-100 hover:border-[#1a2b4c] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-black text-lg">
                      #{i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{shop.name}</h4>
                      <div className="flex items-center gap-1 text-xs text-yellow-500">
                        <span>⭐</span>
                        <span className="font-bold">{shop.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400 text-xs">Doanh thu</p>
                      <p className="font-black text-[#2dd4bf]">{shop.revenue} VNĐ</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">Đơn hàng</p>
                      <p className="font-bold">{shop.orders}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
