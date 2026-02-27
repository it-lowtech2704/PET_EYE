import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, DollarSign, Clock } from 'lucide-react';

export default function ShopServices() {
  const services = [
    { id: 1, name: 'Khám tổng quát', price: '200,000', duration: '30 phút', category: 'Khám bệnh', active: true },
    { id: 2, name: 'Tiêm phòng dại', price: '150,000', duration: '15 phút', category: 'Tiêm phòng', active: true },
    { id: 3, name: 'Phẫu thuật triệt sản', price: '800,000', duration: '2 giờ', category: 'Phẫu thuật', active: true },
    { id: 4, name: 'Spa & Grooming', price: '350,000', duration: '1 giờ', category: 'Chăm sóc', active: true },
    { id: 5, name: 'Cắt móng', price: '50,000', duration: '10 phút', category: 'Chăm sóc', active: false },
  ];

  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Quản lý dịch vụ</h1>
            <p className="text-slate-500">Tổng số: {services.length} dịch vụ</p>
          </div>
          <div className="flex gap-3">
            <Link to="/shop/dashboard" className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-bold">
              Quay lại
            </Link>
            <button className="bg-[#1a2b4c] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
              <Plus size={20} /> Thêm dịch vụ
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">
                  {service.category}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                    <Edit size={16} className="text-slate-400" />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={16} className="text-red-400" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-4">{service.name}</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-600">
                    <DollarSign size={16} />
                    <span className="text-sm font-medium">Giá</span>
                  </div>
                  <span className="text-lg font-black text-[#2dd4bf]">{service.price}đ</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock size={16} />
                    <span className="text-sm font-medium">Thời gian</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{service.duration}</span>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">Trạng thái</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={service.active} className="sr-only peer" readOnly />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
