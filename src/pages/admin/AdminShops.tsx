import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Star, CheckCircle, XCircle, Eye } from 'lucide-react';

export default function AdminShops() {
  const shops = [
    { id: 1, name: 'PetCare Sài Gòn', address: 'Quận 3, TP.HCM', rating: 4.9, reviews: 120, services: 15, status: 'active', verified: true },
    { id: 2, name: 'Happy Paws Spa', address: 'Quận 1, TP.HCM', rating: 4.7, reviews: 85, services: 8, status: 'active', verified: true },
    { id: 3, name: 'Saigon Vet Hospital', address: 'Quận 7, TP.HCM', rating: 4.8, reviews: 200, services: 20, status: 'active', verified: true },
    { id: 4, name: 'Pet Clinic Hà Nội', address: 'Hoàn Kiếm, Hà Nội', rating: 4.5, reviews: 60, services: 12, status: 'pending', verified: false },
  ];

  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Quản lý cửa hàng/Phòng khám</h1>
            <p className="text-slate-500">Tổng số: {shops.length} đối tác</p>
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
                  placeholder="Tìm kiếm cửa hàng..." 
                />
              </div>
              <button className="px-6 py-3 bg-slate-50 rounded-xl font-bold text-sm flex items-center gap-2">
                <Filter size={18} /> Lọc
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">
            {shops.map((shop) => (
              <div key={shop.id} className="border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-black text-slate-900">{shop.name}</h3>
                      {shop.verified && (
                        <CheckCircle size={18} className="text-blue-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                      <MapPin size={14} />
                      {shop.address}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold">{shop.rating}</span>
                        <span className="text-xs text-slate-400">({shop.reviews})</span>
                      </div>
                      <span className="text-xs text-slate-500">{shop.services} dịch vụ</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    shop.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {shop.status === 'active' ? 'Hoạt động' : 'Chờ duyệt'}
                  </span>
                </div>

                <div className="flex gap-2 pt-4 border-t border-slate-100">
                  <button className="flex-1 py-2 px-4 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 flex items-center justify-center gap-2">
                    <Eye size={14} /> Xem chi tiết
                  </button>
                  {shop.status === 'pending' && (
                    <>
                      <button className="flex-1 py-2 px-4 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100">
                        Phê duyệt
                      </button>
                      <button className="py-2 px-4 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100">
                        <XCircle size={14} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
