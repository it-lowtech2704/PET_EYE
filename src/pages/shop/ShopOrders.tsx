import React, { useState } from 'react';
import { Package, TrendingUp, DollarSign, ShoppingBag, Search, Calendar, ArrowUpRight } from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  customerAvatar: string;
  items: number;
  total: string;
  date: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
}

const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD001',
    customerName: 'Nguyễn Văn A',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    items: 3,
    total: '1.250.000đ',
    date: '04/03/2026',
    status: 'completed',
  },
  {
    id: 'ORD002',
    customerName: 'Trần Thị B',
    customerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    items: 1,
    total: '450.000đ',
    date: '05/03/2026',
    status: 'processing',
  },
  {
    id: 'ORD003',
    customerName: 'Lê Văn C',
    customerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    items: 5,
    total: '2.100.000đ',
    date: '05/03/2026',
    status: 'pending',
  },
];

export default function ShopOrders() {
  const [orders] = useState<Order[]>(MOCK_ORDERS);

  const stats = [
    { label: 'Doanh thu tháng', value: '45.2M', icon: DollarSign, gradient: 'from-green-500 to-emerald-600', change: '+12%' },
    { label: 'Đơn hàng', value: '156', icon: ShoppingBag, gradient: 'from-blue-500 to-blue-600', change: '+8' },
    { label: 'Đang xử lý', value: '12', icon: Package, gradient: 'from-orange-500 to-orange-600', change: '+3' },
    { label: 'Tăng trưởng', value: '+12%', icon: TrendingUp, gradient: 'from-purple-500 to-purple-600', change: '+2%' },
  ];

  const getStatusConfig = (status: Order['status']) => {
    const configs = {
      pending: { label: 'Chờ xử lý', className: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' },
      processing: { label: 'Đang xử lý', className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' },
      completed: { label: 'Hoàn thành', className: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' },
      cancelled: { label: 'Đã hủy', className: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' },
    };
    return configs[status];
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-8">
        {/* Header with Image */}
        <div className="mb-8 relative">
          <div className="absolute right-0 top-0 w-64 h-64 opacity-10 pointer-events-none hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400" 
              alt="Orders" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Quản lý đơn hàng</h1>
            <p className="text-slate-600 dark:text-slate-400">Theo dõi đơn hàng và doanh thu</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-700/20 rounded-bl-full group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
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

        {/* Search */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm mb-6 border border-slate-100 dark:border-slate-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Tìm đơn hàng..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-white transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-all">
              <Calendar size={20} />
              Lọc theo ngày
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => {
            const statusConfig = getStatusConfig(order.status);
            return (
              <div key={order.id} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-700/20 rounded-bl-full group-hover:scale-110 transition-transform" />
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-4 flex-1">
                    <img 
                      src={order.customerAvatar} 
                      alt={order.customerName}
                      className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 dark:border-slate-700"
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-lg bg-gradient-to-r from-[#1a2b4c] to-slate-700 bg-clip-text text-transparent">#{order.id}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusConfig.className}`}>
                          {statusConfig.label}
                        </span>
                      </div>
                      <p className="font-semibold text-slate-900 dark:text-white">{order.customerName}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{order.items} sản phẩm • {order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Tổng tiền</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">{order.total}</p>
                    </div>
                    <button className="px-5 py-2.5 bg-gradient-to-r from-[#1a2b4c] to-slate-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
