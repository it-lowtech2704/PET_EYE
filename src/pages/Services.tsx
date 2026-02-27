import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Stethoscope, Home, ArrowRight, Star, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'grooming',
      title: 'Chăm sóc & Spa',
      icon: <Heart size={32} />,
      color: 'from-pink-500 to-rose-500',
      description: 'Dịch vụ tắm, cắt tỉa lông, chăm sóc móng và làm đẹp cho thú cưng',
      features: ['Tắm & sấy khô', 'Cắt tỉa lông chuyên nghiệp', 'Vệ sinh tai, mắt', 'Cắt móng & massage'],
      priceRange: '150,000đ - 500,000đ',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'medical',
      title: 'Khám bệnh & Điều trị',
      icon: <Stethoscope size={32} />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Khám sức khỏe, tiêm phòng, điều trị bệnh và phẫu thuật',
      features: ['Khám tổng quát', 'Tiêm phòng đầy đủ', 'Xét nghiệm & chẩn đoán', 'Phẫu thuật & điều trị'],
      priceRange: '200,000đ - 5,000,000đ',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop'
    },
    {
      id: 'boarding',
      title: 'Lưu trú & Khách sạn',
      icon: <Home size={32} />,
      color: 'from-green-500 to-emerald-500',
      description: 'Chỗ ở tạm thời an toàn, thoải mái với camera giám sát 24/7',
      features: ['Phòng riêng tư', 'Camera 24/7', 'Chăm sóc tận tình', 'Vui chơi & vận động'],
      priceRange: '100,000đ - 300,000đ/ngày',
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex-1 bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2b4c] to-slate-900 text-white px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Dịch vụ của chúng tôi</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Chăm sóc toàn diện cho thú cưng của bạn với đội ngũ chuyên nghiệp và trang thiết bị hiện đại
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl">
                  {service.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="size-1.5 rounded-full bg-[#2dd4bf]"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Giá từ</p>
                    <p className="font-black text-[#2dd4bf]">{service.priceRange}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#1a2b4c] font-bold group-hover:gap-3 transition-all">
                    Xem chi tiết <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Tại sao chọn Carevia?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến dịch vụ chất lượng cao nhất cho thú cưng của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: 'Chuyên nghiệp', desc: 'Đội ngũ được đào tạo bài bản' },
              { icon: '💯', title: 'Chất lượng', desc: 'Dịch vụ đạt tiêu chuẩn quốc tế' },
              { icon: '📹', title: 'Minh bạch', desc: 'Camera giám sát 24/7' },
              { icon: '💝', title: 'Tận tâm', desc: 'Chăm sóc như người thân' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-slate-50">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
