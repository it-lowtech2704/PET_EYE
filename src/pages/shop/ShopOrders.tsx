import React from 'react';
import { Link } from 'react-router-dom';
import { Package, CheckCircle, Clock, XCircle, Truck, Eye } from 'lucide-react';

export default function ShopOrders() {
  const orders = [
    { id: 'ORD-88291', date: '2023-10-24', customer: 'Nguyễn Văn A', phone: '0901234567', amount: '1,250,000đ', status: 'delivered', items: 3 },
    { id: 'ORD-88102', date: '2023-10-12', customer: 'Trần Thị B', phone: '0912345678', amount: '450,000đ', status: 'processing', items: 1 },
    { id: 'ORD-87954', date: '2023-09-28', customer: 'Lê Văn C', phone: '0923456789', amount: '2,100,000đ', status: 'shipping', items: 5 },
    { id: 'ORD-87823', date: '2023-09-15', customer: 'Phạm Thị D', phone: '0934567890', amount: '800,000đ', status: 'pending', items: 2 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-600';
      case 'processing': return 'bg-blue-100 text-blue-600';
      case 'shipping': return 'bg-purple-100 text-purple-600';
      case 'pending': return 'bg-yellow-100 text-yellow-600';
      case 'cancelled': return 'bg-red-100 text-red-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle size={14} />;
      case 'processing': return <Clock size={14} />;
      case 'shipping': return <Truck size={14} />;
      case 'pending': return <Clock size={14} />;
      case 'cancelled': return <XCircle size={14} />;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'Đã giao';
      case 'processing': return 'Đang xử lý';
      case 'shipping': return 'Đang giao';
      case 'pending': return 'Chờ xác nhận';
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
          <Link to="/shop/dashboard" className="bg-[#1a2b4c] text-white px-6 py-3 rounded-xl font-bold">
            Quay lại Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#1a2b4c] text-white rounded-xl font-bold text-sm">
                Tất cả
              </button>
              <button className="px-6 py-2 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100">
                Chờ xác nhận
              </button>
              <button className="px-6 py-2 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100">
                Đang xử lý
              </button>
              <button className="px-6 py-2 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100">
                Đã giao
              </button>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {orders.map((order) => (
              <div key={order.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="size-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Package size={28} className="text-blue-600" />
                  </div>

                  <div className="flex-1 grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-bold text-sm mb-1">Mã đơn hàng</h4>
                      <p className="text-sm text-slate-600">{order.id}</p>
                      <p className="text-xs text-slate-400 mt-1">{order.date}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm mb-1">Khách hàng</h4>
                      <p className="text-sm text-slate-600">{order.customer}</p>
                      <p className="text-xs text-slate-400 mt-1">{order.phone}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm mb-1">Tổng tiền</h4>
                      <p className="text-lg font-black text-[#2dd4bf]">{order.amount}</p>
                      <p className="text-xs text-slate-400 mt-1">{order.items} sản phẩm</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm mb-1">Trạng thái</h4>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          {getStatusText(order.status)}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {order.status === 'pending' && (
                          <button className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100">
                            Xác nhận
                          </button>
                        )}
                        {order.status === 'processing' && (
                          <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg text-xs font-bold hover:bg-purple-100">
                            Giao hàng
                          </button>
                        )}
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                          <Eye size={18} className="text-slate-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
