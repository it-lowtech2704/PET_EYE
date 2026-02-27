import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star, Camera, Edit } from 'lucide-react';

export default function ShopProfile() {
  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Thông tin cửa hàng</h1>
            <p className="text-slate-500">Quản lý thông tin và cài đặt cửa hàng của bạn</p>
          </div>
          <Link to="/shop/dashboard" className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-bold">
            Quay lại
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black">Thông tin cơ bản</h2>
                <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <Edit size={18} className="text-slate-400" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="size-32 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-md bg-slate-200">
                      <img 
                        src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
                        alt="Shop" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-[#1a2b4c] text-white size-10 rounded-full border-4 border-white flex items-center justify-center">
                      <Camera size={16} />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">PetCare Sài Gòn</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">4.9</span>
                      <span className="text-slate-400 text-sm">(120 đánh giá)</span>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">
                      Đã xác thực
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Tên cửa hàng</label>
                    <input 
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3" 
                      value="PetCare Sài Gòn" 
                      readOnly 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Loại hình</label>
                    <select className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3">
                      <option>Phòng khám thú y</option>
                      <option>Spa & Grooming</option>
                      <option>Cửa hàng thú cưng</option>
                      <option>Khách sạn thú cưng</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email</label>
                    <input 
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3" 
                      value="petcare@example.com" 
                      readOnly 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Số điện thoại</label>
                    <input 
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3" 
                      value="0901234567" 
                      readOnly 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Địa chỉ</label>
                    <textarea 
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3" 
                      rows={3} 
                      defaultValue="123 Võ Văn Tần, Phường 6, Quận 3, TP.HCM" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Mô tả</label>
                    <textarea 
                      className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3" 
                      rows={4} 
                      defaultValue="PetCare Sài Gòn là hệ thống bệnh viện thú y hàng đầu với hơn 10 năm kinh nghiệm. Chúng tôi cung cấp các dịch vụ chăm sóc sức khỏe toàn diện cho thú cưng với đội ngũ bác sĩ chuyên môn cao và trang thiết bị hiện đại bậc nhất." 
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
                  <button className="px-8 py-3 rounded-xl border border-slate-200 font-bold text-slate-600">
                    Hủy
                  </button>
                  <button className="px-8 py-3 rounded-xl bg-[#1a2b4c] text-white font-bold shadow-lg shadow-[#1a2b4c]/20">
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black">Giờ hoạt động</h2>
                <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <Edit size={18} className="text-slate-400" />
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { day: 'Thứ 2', hours: '08:00 - 18:00', open: true },
                  { day: 'Thứ 3', hours: '08:00 - 18:00', open: true },
                  { day: 'Thứ 4', hours: '08:00 - 18:00', open: true },
                  { day: 'Thứ 5', hours: '08:00 - 18:00', open: true },
                  { day: 'Thứ 6', hours: '08:00 - 18:00', open: true },
                  { day: 'Thứ 7', hours: '08:00 - 16:00', open: true },
                  { day: 'Chủ nhật', hours: 'Đóng cửa', open: false },
                ].map((schedule, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
                    <span className="font-bold text-sm">{schedule.day}</span>
                    <div className="flex items-center gap-4">
                      <span className={`text-sm ${schedule.open ? 'text-slate-600' : 'text-red-500 font-bold'}`}>
                        {schedule.hours}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={schedule.open} className="sr-only peer" readOnly />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Quick Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a2b4c] to-slate-900 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-black mb-6">Thống kê tháng này</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/10">
                  <p className="text-xs text-slate-300 mb-1">Lượt đặt lịch</p>
                  <p className="text-3xl font-black">124</p>
                </div>
                <div className="p-4 rounded-xl bg-white/10">
                  <p className="text-xs text-slate-300 mb-1">Doanh thu</p>
                  <p className="text-3xl font-black">45.2M</p>
                </div>
                <div className="p-4 rounded-xl bg-white/10">
                  <p className="text-xs text-slate-300 mb-1">Đánh giá mới</p>
                  <p className="text-3xl font-black">28</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-black mb-4">Liên hệ nhanh</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="text-slate-600">Quận 3, TP.HCM</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-slate-400" />
                  <span className="text-slate-600">0901234567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-slate-400" />
                  <span className="text-slate-600">petcare@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock size={16} className="text-slate-400" />
                  <span className="text-slate-600">08:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
