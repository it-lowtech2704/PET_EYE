import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MoreVertical, UserCheck, UserX, Mail, Phone } from 'lucide-react';

export default function AdminUsers() {
  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@example.com', phone: '0901234567', role: 'customer', status: 'active', joined: '2023-10-15' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@example.com', phone: '0912345678', role: 'customer', status: 'active', joined: '2023-10-20' },
    { id: 3, name: 'PetCare Sài Gòn', email: 'petcare@example.com', phone: '0923456789', role: 'shop', status: 'active', joined: '2023-09-10' },
    { id: 4, name: 'Lê Văn C', email: 'levanc@example.com', phone: '0934567890', role: 'customer', status: 'inactive', joined: '2023-08-05' },
  ];

  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Quản lý người dùng</h1>
            <p className="text-slate-500">Tổng số: {users.length} người dùng</p>
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
                  placeholder="Tìm kiếm người dùng..." 
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
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Người dùng</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Liên hệ</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Vai trò</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Trạng thái</th>
                  <th className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-wider">Ngày tham gia</th>
                  <th className="px-6 py-4 text-right text-xs font-black text-slate-500 uppercase tracking-wider">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="font-bold text-blue-600">{user.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{user.name}</h4>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Mail size={14} /> {user.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Phone size={14} /> {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        user.role === 'shop' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {user.role === 'shop' ? 'Cửa hàng' : 'Khách hàng'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit ${
                        user.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {user.status === 'active' ? <UserCheck size={14} /> : <UserX size={14} />}
                        {user.status === 'active' ? 'Hoạt động' : 'Ngưng'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{user.joined}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical size={18} />
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
