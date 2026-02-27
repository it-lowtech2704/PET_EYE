import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Clock, DollarSign, CheckCircle, Star, ArrowRight } from 'lucide-react';

export default function GroomingService() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = React.useState<string>('');

  const packages = [
    {
      id: 'basic',
      name: 'Gói Cơ bản',
      price: '150,000',
      duration: '45 phút',
      features: [
        'Tắm với sữa tắm chuyên dụng',
        'Sấy khô',
        'Vệ sinh tai',
        'Cắt móng',
        'Xịt nước hoa'
      ]
    },
    {
      id: 'standard',
      name: 'Gói Tiêu chuẩn',
      price: '300,000',
      duration: '90 phút',
      popular: true,
      features: [
        'Tất cả dịch vụ gói Cơ bản',
        'Cắt tỉa lông theo yêu cầu',
        'Vệ sinh mắt',
        'Massage thư giãn',
        'Chải lông mượt',
        'Tặng khăn tắm'
      ]
    },
    {
      id: 'premium',
      name: 'Gói Cao cấp',
      price: '500,000',
      duration: '120 phút',
      features: [
        'Tất cả dịch vụ gói Tiêu chuẩn',
        'Spa thảo dược',
        'Nhuộm lông an toàn',
        'Tạo kiểu lông chuyên nghiệp',
        'Chụp ảnh kỷ niệm',
        'Tặng phụ kiện thời trang'
      ]
    }
  ];

  const handleBooking = () => {
    if (!selectedPackage) {
      alert('Vui lòng chọn gói dịch vụ');
      return;
    }
    navigate('/booking/grooming', { state: { packageId: selectedPackage } });
  };

  return (
    <div className="flex-1 bg-slate-50">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Grooming"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-10 left-6 md:left-20 right-6 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="text-pink-400" size={32} />
            <span className="px-3 py-1 bg-pink-500 rounded-full text-xs font-bold">CHĂM SÓC & SPA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Dịch vụ Chăm sóc & Spa</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Làm đẹp và chăm sóc toàn diện cho thú cưng của bạn
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        {/* About Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Về dịch vụ</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-slate-600 leading-relaxed mb-6">
              Dịch vụ chăm sóc và spa của Carevia mang đến trải nghiệm thư giãn và làm đẹp tuyệt vời cho thú cưng. 
              Với đội ngũ groomer chuyên nghiệp, sản phẩm chất lượng cao và không gian sang trọng, chúng tôi cam kết 
              thú cưng của bạn sẽ được chăm sóc tận tình như một thành viên trong gia đình.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Sản phẩm an toàn</h4>
                  <p className="text-sm text-slate-600">Sữa tắm, dầu gội từ thiên nhiên, không gây kích ứng</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Groomer chuyên nghiệp</h4>
                  <p className="text-sm text-slate-600">Được đào tạo bài bản, có chứng chỉ quốc tế</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Không gian sang trọng</h4>
                  <p className="text-sm text-slate-600">Phòng spa riêng tư, sạch sẽ và thoải mái</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Chọn gói dịch vụ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all ${
                  selectedPackage === pkg.id
                    ? 'ring-4 ring-pink-500 shadow-xl scale-105'
                    : 'shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    PHỔ BIẾN NHẤT
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-black mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl font-black text-pink-500">{pkg.price}</span>
                    <span className="text-slate-400">đ</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                    <Clock size={16} />
                    {pkg.duration}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    selectedPackage === pkg.id
                      ? 'bg-pink-500 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {selectedPackage === pkg.id ? 'Đã chọn' : 'Chọn gói này'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Top Shops */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Cơ sở nổi bật</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Happy Paws Spa', location: 'Quận 1, TP.HCM', rating: 4.9, reviews: 156, image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=2070&auto=format&fit=crop' },
              { name: 'Pet Beauty Salon', location: 'Quận 3, TP.HCM', rating: 4.8, reviews: 203, image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop' }
            ].map((shop, i) => (
              <Link
                key={i}
                to={`/clinic/${i + 1}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex gap-4 p-4">
                  <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0">
                    <img src={shop.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={shop.name} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{shop.name}</h4>
                    <p className="text-sm text-slate-500 mb-2">{shop.location}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-sm">{shop.rating}</span>
                      </div>
                      <span className="text-xs text-slate-400">({shop.reviews} đánh giá)</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-500 font-bold text-sm group-hover:gap-3 transition-all">
                      Đặt lịch ngay <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Sẵn sàng đặt lịch?</h2>
          <p className="text-lg mb-8 text-pink-100 max-w-2xl mx-auto">
            Chọn gói dịch vụ phù hợp và đặt lịch ngay hôm nay để thú cưng của bạn được chăm sóc tốt nhất
          </p>
          <button
            onClick={handleBooking}
            className="bg-white text-pink-500 px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Đặt lịch ngay
          </button>
        </section>
      </div>
    </div>
  );
}
