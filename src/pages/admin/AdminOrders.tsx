import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Package, CheckCircle, Clock, XCircle, Eye } from 'lucide-react';

export default function AdminOrders() {
  const orders = [
    { id: 'ORD-88291', date: '2023-10-24', customer: 'Nguyễn Văn A', shop: 'PetCare Sài Gòn', amount: '1,250,000đ', status: 'delivered', items: 3 },
    { id: 'ORD-88102', date: '2023-10-12', customer: 'Trần Thị B', shop: 'Happy Paws Spa', amount: '450,000đ', status: 'processing', items: 1 },
    { id: 'ORD-87954', date: '2023-09-28', customer: 'Lê Văn C', shop: 'Saigon Vet Hospital', amount: '2,100,000đ', status: 'cancelled', items: 5 },
    { id: 'ORD-87823', date: '2023-09-15', customer: 'Phạm Thị D', shop: 'PetCare Sài Gòn', amount: '800,000đ', status: 'delivered', items: 2 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-600';
      case 'processing': return 'bg-blue-100 text-blue-600';
      case 'cancelled': return 'bg-red-100 text-red-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle size={14} />;
      case 'processing': return <Clock size={14} />;
      case 'cancelled': return <XCircle size={14} />;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'Đã giao';
      case 'processing': return 'Đang xử lý';
      case 'cancelled': return 'Đã hủy';
      default: return status;
    }
  };

  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Quản lý đơn hàng</h1>
            <p className="text-slate-500">Tổng số: {orders.length} đơn hàng</p>
          </div>
          <Link to="/admin/dashboard" className="bg-[#1a2b4c] text-white px-6 py-3 rounded-xl font-bold">
            Quay lại Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm" 
                  placeholder="Tìm kiếm đơn hàng..." 
                />
              </div>
              <button className="px-6 py-3 bg-slate-50 rounded-xl font-bold text-sm flex items-center gap-2">
                <Filter size={18} /> Lọc
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Mã đơn</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Khách hàng</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Cửa hàng</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Ngày đặt</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Số lượng</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Tổng tiền</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Trạng thái</th>
                  <th className="px-6 py-4 text-right text-xs font-black text-slate-500 uppercase tracking-wider">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Package size={16} className="text-slate-400" />
                        <span className="font-bold text-sm">{order.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{order.customer}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{order.shop}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{order.date}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{order.items} items</td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-sm text-[#2dd4bf]">{order.amount}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {getStatusText(order.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Eye size={18} className="text-slate-400" />
                      </button>
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
