import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stethoscope, Clock, CheckCircle, Star, ArrowRight, Shield, Activity } from 'lucide-react';

export default function MedicalService() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = React.useState<string>('');

  const services = [
    {
      id: 'checkup',
      name: 'Khám tổng quát',
      price: '200,000',
      duration: '30 phút',
      description: 'Kiểm tra sức khỏe định kỳ, phát hiện sớm bệnh lý',
      features: [
        'Kiểm tra thể trạng tổng quát',
        'Đo nhiệt độ, cân nặng',
        'Khám tim phổi',
        'Kiểm tra răng miệng',
        'Tư vấn dinh dưỡng'
      ]
    },
    {
      id: 'vaccination',
      name: 'Tiêm phòng',
      price: '150,000',
      duration: '15 phút',
      popular: true,
      description: 'Tiêm phòng đầy đủ theo lịch, vaccine nhập khẩu',
      features: [
        'Vaccine 5 bệnh/7 bệnh',
        'Vaccine dại',
        'Vaccine viêm gan',
        'Kiểm tra sức khỏe trước tiêm',
        'Theo dõi sau tiêm'
      ]
    },
    {
      id: 'treatment',
      name: 'Điều trị bệnh',
      price: '500,000',
      duration: '60 phút',
      description: 'Chẩn đoán và điều trị các bệnh lý',
      features: [
        'Xét nghiệm máu, nước tiểu',
        'Chụp X-quang',
        'Siêu âm',
        'Kê đơn thuốc',
        'Theo dõi điều trị'
      ]
    },
    {
      id: 'surgery',
      name: 'Phẫu thuật',
      price: '2,000,000',
      duration: '2-4 giờ',
      description: 'Phẫu thuật triệt sản, cắt u, xương khớp',
      features: [
        'Gây mê an toàn',
        'Phẫu thuật viên giàu kinh nghiệm',
        'Phòng mổ vô trùng',
        'Chăm sóc hậu phẫu',
        'Tái khám miễn phí'
      ]
    }
  ];

  const handleBooking = () => {
    if (!selectedService) {
      alert('Vui lòng chọn dịch vụ');
      return;
    }
    navigate('/booking/medical', { state: { serviceId: selectedService } });
  };

  return (
    <div className="flex-1 bg-slate-50">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Medical"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-10 left-6 md:left-20 right-6 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="text-blue-400" size={32} />
            <span className="px-3 py-1 bg-blue-500 rounded-full text-xs font-bold">KHÁM BỆNH & ĐIỀU TRỊ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Dịch vụ Khám bệnh & Điều trị</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Chăm sóc sức khỏe toàn diện với đội ngũ bác sĩ chuyên môn cao
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        {/* About Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Về dịch vụ</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-slate-600 leading-relaxed mb-6">
              Dịch vụ khám bệnh và điều trị của Carevia được thực hiện bởi đội ngũ bác sĩ thú y có trình độ chuyên môn cao, 
              trang thiết bị y tế hiện đại và quy trình khám chữa bệnh theo tiêu chuẩn quốc tế. Chúng tôi cam kết mang đến 
              dịch vụ chăm sóc sức khỏe tốt nhất cho thú cưng của bạn.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Shield className="text-blue-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Bác sĩ chuyên môn</h4>
                  <p className="text-sm text-slate-600">Đội ngũ bác sĩ có bằng cấp quốc tế, kinh nghiệm lâu năm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="text-blue-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Trang thiết bị hiện đại</h4>
                  <p className="text-sm text-slate-600">Máy xét nghiệm, X-quang, siêu âm đời mới</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Quy trình chuẩn</h4>
                  <p className="text-sm text-slate-600">Theo tiêu chuẩn quốc tế, đảm bảo an toàn</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Chọn dịch vụ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all ${
                  selectedService === service.id
                    ? 'ring-4 ring-blue-500 shadow-xl'
                    : 'shadow-sm hover:shadow-lg'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    PHỔ BIẾN
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-black mb-1">{service.name}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-blue-500">{service.price}đ</div>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                      <Clock size={12} />
                      {service.duration}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    selectedService === service.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {selectedService === service.id ? 'Đã chọn' : 'Chọn dịch vụ'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Top Clinics */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Phòng khám nổi bật</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'PetCare Sài Gòn', location: 'Quận 3, TP.HCM', rating: 4.9, reviews: 320, image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop' },
              { name: 'Saigon Vet Hospital', location: 'Quận 7, TP.HCM', rating: 4.8, reviews: 280, image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop' }
            ].map((clinic, i) => (
              <Link
                key={i}
                to={`/clinic/${i + 1}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex gap-4 p-4">
                  <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0">
                    <img src={clinic.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={clinic.name} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{clinic.name}</h4>
                    <p className="text-sm text-slate-500 mb-2">{clinic.location}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-sm">{clinic.rating}</span>
                      </div>
                      <span className="text-xs text-slate-400">({clinic.reviews} đánh giá)</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-500 font-bold text-sm group-hover:gap-3 transition-all">
                      Đặt lịch khám <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Đặt lịch khám ngay</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Chọn dịch vụ phù hợp và đặt lịch để bác sĩ chăm sóc sức khỏe cho thú cưng của bạn
          </p>
          <button
            onClick={handleBooking}
            className="bg-white text-blue-500 px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Đặt lịch ngay
          </button>
        </section>
      </div>
    </div>
  );
}
