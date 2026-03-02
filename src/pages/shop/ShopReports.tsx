import React from 'react';
import { TrendingUp, DollarSign, Users, Calendar, Download } from 'lucide-react';

export default function ShopReports() {
  const monthlyData = [
    { month: 'T1', revenue: 35, bookings: 45 },
    { month: 'T2', revenue: 42, bookings: 52 },
    { month: 'T3', revenue: 45, bookings: 58 },
  ];

  const topServices = [
    { name: 'Grooming Premium', bookings: 45, revenue: '20.250.000đ' },
    { name: 'Khám tổng quát', bookings: 38, revenue: '7.600.000đ' },
    { name: 'Lưu trú VIP', bookings: 25, revenue: '18.750.000đ' },
    { name: 'Tiêm phòng', bookings: 52, revenue: '7.800.000đ' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Báo cáo & Thống kê</h1>
            <p className="text-slate-600">Phân tích doanh thu và hiệu suất kinh doanh</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1a2b4c] text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg">
            <Download size={20} />
            Xuất báo cáo
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Doanh thu tháng này', value: '45.2M', change: '+12%', icon: DollarSign, color: 'green' },
            { label: 'Tổng đơn đặt lịch', value: '156', change: '+8%', icon: Calendar, color: 'blue' },
            { label: 'Khách hàng mới', value: '24', change: '+15%', icon: Users, color: 'purple' },
            { label: 'Tăng trưởng', value: '12%', change: '+2%', icon: TrendingUp, color: 'orange' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`size-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`text-${stat.color}-600`} size={24} />
                </div>
                <span className="text-sm font-bold text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-black mb-1">{stat.value}</h3>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-6">Doanh thu 3 tháng gần đây</h3>
            <div className="space-y-4">
              {monthlyData.map((data) => (
                <div key={data.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">{data.month}/2026</span>
                    <span className="text-sm font-bold text-[#1a2b4c]">{data.revenue}M</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div
                      className="bg-[#1a2b4c] h-3 rounded-full transition-all"
                      style={{ width: `${data.revenue}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bookings Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-6">Số lượng đơn đặt lịch</h3>
            <div className="space-y-4">
              {monthlyData.map((data) => (
                <div key={data.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">{data.month}/2026</span>
                    <span className="text-sm font-bold text-blue-600">{data.bookings} đơn</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all"
                      style={{ width: `${data.bookings}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Services */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-6">Dịch vụ phổ biến nhất</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-slate-700">Dịch vụ</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-slate-700">Số lượt đặt</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-slate-700">Doanh thu</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-slate-700">Tỷ lệ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topServices.map((service, index) => (
                  <tr key={service.name} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center size-8 bg-[#1a2b4c] text-white rounded-lg font-bold text-sm">
                          {index + 1}
                        </span>
                        <span className="font-semibold">{service.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold">{service.bookings} lượt</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-[#1a2b4c]">{service.revenue}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-slate-100 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(service.bookings / 52) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-slate-600">
                          {Math.round((service.bookings / 160) * 100)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
