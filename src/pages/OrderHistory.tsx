import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronRight, Package, Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function OrderHistory() {
  const orders = [
    { id: 'ORD-88291', date: 'Oct 24, 2023', amount: '1,250,000đ', status: 'Delivered', items: 3, image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop' },
    { id: 'ORD-88102', date: 'Oct 12, 2023', amount: '450,000đ', status: 'Processing', items: 1, image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop' },
    { id: 'ORD-87954', date: 'Sep 28, 2023', amount: '2,100,000đ', status: 'Cancelled', items: 5, image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-600';
      case 'Processing': return 'bg-blue-100 text-blue-600';
      case 'Cancelled': return 'bg-red-100 text-red-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered': return <CheckCircle2 size={14} />;
      case 'Processing': return <Clock size={14} />;
      case 'Cancelled': return <XCircle size={14} />;
      default: return <AlertCircle size={14} />;
    }
  };

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Order History</h1>
          <p className="text-slate-500">Track and manage your pet supply purchases.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm" placeholder="Search orders..." />
          </div>
          <button className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-24 h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                <img src={order.image} alt="Order" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{order.id}</h3>
                    <p className="text-slate-500 text-sm">Ordered on {order.date}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-end gap-4 mt-4">
                  <div className="flex gap-6">
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Total Amount</p>
                      <p className="font-bold">{order.amount}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Items</p>
                      <p className="font-bold">{order.items} items</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors">Order Details</button>
                    <Link to="/" className="px-4 py-2 rounded-lg bg-[#1a2b4c] text-white text-xs font-bold hover:opacity-90 transition-opacity">Reorder</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
