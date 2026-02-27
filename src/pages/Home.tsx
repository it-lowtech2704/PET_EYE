import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Video, Star, ArrowRight, CheckCircle2, PawPrint } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none pattern-dots"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-[#1a2b4c]/20 text-[#1a2b4c] dark:text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-[#1a2b4c] animate-pulse"></span>
                Nền tảng B2B2C Thú y số 1
              </div>
              <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                Tìm kiếm & Đặt lịch <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a2b4c] to-[#2dd4bf]">cơ sở thú y uy tín</span> nhất gần bạn
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                Kết nối ngay với hàng ngàn phòng khám, spa và dịch vụ lưu trú chất lượng cao. So sánh giá, xem đánh giá thực tế và đặt lịch chỉ trong vài giây.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="md:col-span-4 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="text-slate-400" size={18} />
                  </div>
                  <input 
                    className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-[#1a2b4c] sm:text-sm" 
                    placeholder="Địa điểm (Quận, TP)" 
                  />
                </div>
                <div className="md:col-span-3 relative">
                  <select className="block w-full pl-4 pr-8 py-3 border-none rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1a2b4c] sm:text-sm appearance-none">
                    <option>Loại dịch vụ</option>
                    <option>Khám chữa bệnh</option>
                    <option>Lưu trú</option>
                    <option>Spa & Grooming</option>
                  </select>
                </div>
                <div className="md:col-span-3 relative">
                  <select className="block w-full pl-4 pr-8 py-3 border-none rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1a2b4c] sm:text-sm appearance-none">
                    <option>Loại thú cưng</option>
                    <option>Chó</option>
                    <option>Mèo</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <Link to="/clinic/1" className="w-full h-full bg-[#1a2b4c] text-white rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 py-3 md:py-0">
                    <Search size={18} /> Tìm
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative z-10 mx-auto w-full max-w-lg aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop" 
                alt="Veterinarian" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="bg-green-100 text-green-600 p-2 rounded-xl">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Đối tác đã xác thực</p>
                  <p className="text-xs text-slate-500">Thông tin minh bạch 100%</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-xl animate-bounce">
              <PawPrint className="text-[#1a2b4c]" size={32} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Clinics */}
      <section className="px-6 md:px-12 lg:px-20 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#1a2b4c] font-bold tracking-widest uppercase text-sm bg-[#1a2b4c]/10 w-fit mx-auto px-3 py-1 rounded-full">Gợi ý hàng đầu</h2>
          <h3 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black tracking-tight">Cơ sở thú y & Dịch vụ <br /><span className="text-[#1a2b4c]">được yêu thích nhất</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/clinic/1" className="md:col-span-2 group relative overflow-hidden rounded-3xl h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
              alt="Clinic" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h4 className="text-2xl font-bold mb-2">Phòng khám PetCare Center</h4>
              <p className="flex items-center gap-2 text-sm opacity-90"><MapPin size={16} /> Quận 3, TP.HCM</p>
            </div>
            <div className="absolute top-6 right-6 bg-[#2dd4bf] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
              <Video size={14} /> LIVE CAM
            </div>
          </Link>
          
          <div className="flex flex-col gap-8">
            <div className="group relative overflow-hidden rounded-3xl h-[234px]">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=2070&auto=format&fit=crop" 
                alt="Spa" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-bold">Happy Paws Spa</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl h-[234px]">
              <img 
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop" 
                alt="Hospital" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-bold">Saigon Vet Hospital</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Camera Promo */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 md:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#2dd4bf]/20 text-[#2dd4bf] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Video size={14} /> Tính năng mới
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                An tâm tuyệt đối với <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#2dd4bf]">Live Camera 24/7</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Độc quyền tại Carevia - Kết nối trực tiếp với thú cưng của bạn mọi lúc, mọi nơi khi gửi tại các đối tác có hỗ trợ camera của chúng tôi.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Video />, title: "Hình ảnh HD sắc nét", desc: "Chất lượng hình ảnh cao, rõ nét cả ngày lẫn đêm." },
                { icon: <ArrowRight />, title: "Đàm thoại 2 chiều", desc: "Trò chuyện và gọi tên bé cưng từ xa dễ dàng." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/live" className="bg-gradient-to-r from-blue-600 to-[#2dd4bf] text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 flex items-center gap-2 group w-fit">
              Tìm cơ sở có Camera <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-slate-800 rounded-3xl p-4 shadow-2xl border border-white/10 aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
                alt="Live Stream" 
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
              <div className="absolute top-8 right-8 bg-[#2dd4bf] text-white text-[10px] font-bold px-3 py-1.5 rounded-full animate-pulse flex items-center gap-1 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white"></span> LIVE
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
