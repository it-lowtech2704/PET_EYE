import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Phone, Clock, ShieldCheck, Heart, Share2, Calendar, MessageCircle, Video } from 'lucide-react';

export default function ClinicDetail() {
  return (
    <div className="flex-1">
      {/* Hero Header */}
      <div className="relative h-[400px] w-full">
        <img 
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Clinic"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-10 left-6 md:left-20 right-6 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-white space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#2dd4bf] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Verified Partner</span>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={14} fill="currentColor" />
                <span className="text-sm font-bold">4.9 (120 reviews)</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">PetCare Sài Gòn - Quận 3</h1>
            <p className="flex items-center gap-2 text-slate-200 font-medium">
              <MapPin size={18} className="text-[#2dd4bf]" /> 123 Võ Văn Tần, Phường 6, Quận 3, TP.HCM
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <Heart size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid lg:grid-cols-3 gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#1a2b4c] rounded-full"></span>
              Về chúng tôi
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              PetCare Sài Gòn là hệ thống bệnh viện thú y hàng đầu với hơn 10 năm kinh nghiệm. Chúng tôi cung cấp các dịch vụ chăm sóc sức khỏe toàn diện cho thú cưng với đội ngũ bác sĩ chuyên môn cao và trang thiết bị hiện đại bậc nhất.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                { icon: <ShieldCheck className="text-blue-500" />, label: "Chứng nhận ISO" },
                { icon: <Video className="text-emerald-500" />, label: "Live Camera" },
                { icon: <Clock className="text-orange-500" />, label: "Cấp cứu 24/7" },
                { icon: <Heart className="text-red-500" />, label: "Tận tâm" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-slate-100 dark:border-slate-700">
                  {item.icon}
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#1a2b4c] rounded-full"></span>
              Dịch vụ nổi bật
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Khám tổng quát", price: "200,000đ", desc: "Kiểm tra sức khỏe định kỳ cho bé" },
                { title: "Tiêm phòng dại", price: "150,000đ", desc: "Vắc xin nhập khẩu từ Pháp" },
                { title: "Phẫu thuật triệt sản", price: "800,000đ", desc: "Công nghệ xâm lấn tối thiểu" },
                { title: "Spa & Grooming", price: "350,000đ", desc: "Tắm, sấy, cắt tỉa lông chuyên nghiệp" },
              ].map((service, i) => (
                <div key={i} className="p-5 border border-slate-100 dark:border-slate-700 rounded-2xl hover:border-[#1a2b4c] transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg group-hover:text-[#1a2b4c] transition-colors">{service.title}</h4>
                    <span className="text-[#2dd4bf] font-black">{service.price}</span>
                  </div>
                  <p className="text-sm text-slate-500">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#1a2b4c] rounded-full"></span>
              Đội ngũ bác sĩ
            </h2>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {[
                { name: "BS. Trần Văn An", role: "Chuyên gia Nội khoa", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" },
                { name: "BS. Lê Thị Mai", role: "Chuyên gia Ngoại khoa", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" },
                { name: "BS. Ngô Minh Đức", role: "Chuyên gia Da liễu", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop" },
              ].map((doc, i) => (
                <div key={i} className="min-w-[200px] flex flex-col items-center text-center">
                  <div className="size-24 rounded-full overflow-hidden mb-4 border-4 border-slate-100 dark:border-slate-700">
                    <img src={doc.img} className="w-full h-full object-cover" alt={doc.name} />
                  </div>
                  <h4 className="font-bold">{doc.name}</h4>
                  <p className="text-xs text-slate-500">{doc.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Booking Widget */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black">Đặt lịch ngay</h3>
              <p className="text-sm text-slate-500">Chọn thời gian phù hợp để chúng tôi phục vụ bạn tốt nhất.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Chọn dịch vụ</label>
                <select className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl px-4 py-4 text-sm font-bold appearance-none">
                  <option>Khám tổng quát</option>
                  <option>Spa & Grooming</option>
                  <option>Tiêm phòng</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Ngày hẹn</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="date" className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl pl-12 pr-4 py-4 text-sm font-bold" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {['08:00', '09:30', '11:00', '14:00', '15:30', '17:00'].map(time => (
                  <button key={time} className="py-3 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-bold hover:bg-[#1a2b4c] hover:text-white transition-all">
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Link to="/bookings" className="w-full bg-[#1a2b4c] text-white py-5 rounded-2xl font-black shadow-xl shadow-[#1a2b4c]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                Xác nhận đặt lịch <Calendar size={20} />
              </Link>
              <Link to="/messages" className="w-full bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3">
                Chat với bác sĩ <MessageCircle size={20} />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <ShieldCheck size={14} /> Thanh toán an toàn & bảo mật
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
