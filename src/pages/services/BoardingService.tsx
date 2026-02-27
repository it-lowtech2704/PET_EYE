import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Clock, CheckCircle, Star, ArrowRight, Camera, Wifi, UtensilsCrossed } from 'lucide-react';

export default function BoardingService() {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = React.useState<string>('');

  const rooms = [
    {
      id: 'standard',
      name: 'Phòng Tiêu chuẩn',
      price: '100,000',
      size: '1m x 1.5m',
      description: 'Phòng riêng tư, sạch sẽ, thoáng mát',
      features: [
        'Phòng riêng có cửa',
        'Nệm êm ái',
        'Bát ăn, uống riêng',
        'Vệ sinh 2 lần/ngày',
        'Camera giám sát'
      ],
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 'deluxe',
      name: 'Phòng Cao cấp',
      price: '200,000',
      size: '1.5m x 2m',
      popular: true,
      description: 'Phòng rộng rãi với nhiều tiện nghi',
      features: [
        'Tất cả tiện nghi phòng Tiêu chuẩn',
        'Phòng rộng hơn',
        'Điều hòa riêng',
        'Đồ chơi cao cấp',
        'Tắm miễn phí 1 lần',
        'Chụp ảnh hàng ngày'
      ],
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'vip',
      name: 'Phòng VIP',
      price: '300,000',
      size: '2m x 3m',
      description: 'Phòng suite sang trọng như khách sạn 5 sao',
      features: [
        'Tất cả tiện nghi phòng Cao cấp',
        'Phòng suite rộng rãi',
        'Sân chơi riêng',
        'TV & nhạc thư giãn',
        'Spa & massage',
        'Thực đơn cao cấp',
        'Video call 24/7'
      ],
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  const handleBooking = () => {
    if (!selectedRoom) {
      alert('Vui lòng chọn loại phòng');
      return;
    }
    navigate('/booking/boarding', { state: { roomId: selectedRoom } });
  };

  return (
    <div className="flex-1 bg-slate-50">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Boarding"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-10 left-6 md:left-20 right-6 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Home className="text-green-400" size={32} />
            <span className="px-3 py-1 bg-green-500 rounded-full text-xs font-bold">LƯU TRÚ & KHÁCH SẠN</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Dịch vụ Lưu trú & Khách sạn</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Chỗ ở an toàn, thoải mái như ở nhà với camera giám sát 24/7
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        {/* About Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Về dịch vụ</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-slate-600 leading-relaxed mb-6">
              Dịch vụ lưu trú và khách sạn thú cưng của Carevia mang đến không gian sống an toàn, thoải mái và vui vẻ 
              cho thú cưng khi bạn đi công tác, du lịch hay bận việc. Với hệ thống camera giám sát 24/7, bạn có thể 
              theo dõi bé cưng mọi lúc mọi nơi và hoàn toàn yên tâm.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="size-16 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Camera className="text-green-500" size={28} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Camera 24/7</h4>
                  <p className="text-sm text-slate-600">Theo dõi bé mọi lúc</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="size-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Wifi className="text-blue-500" size={28} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Kết nối online</h4>
                  <p className="text-sm text-slate-600">Cập nhật hàng ngày</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="size-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <UtensilsCrossed className="text-orange-500" size={28} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Thực đơn đa dạng</h4>
                  <p className="text-sm text-slate-600">Dinh dưỡng cân đối</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="size-16 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <CheckCircle className="text-purple-500" size={28} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Chăm sóc tận tâm</h4>
                  <p className="text-sm text-slate-600">Như ở nhà</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Chọn loại phòng</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all ${
                  selectedRoom === room.id
                    ? 'ring-4 ring-green-500 shadow-xl scale-105'
                    : 'shadow-sm hover:shadow-lg'
                }`}
              >
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PHỔ BIẾN
                  </div>
                )}
                
                <div className="relative h-48">
                  <img src={room.image} className="w-full h-full object-cover" alt={room.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-black mb-1">{room.name}</h3>
                    <p className="text-sm text-slate-200">{room.size}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-green-500">{room.price}</span>
                    <span className="text-slate-400">đ/ngày</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{room.description}</p>

                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      selectedRoom === room.id
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {selectedRoom === room.id ? 'Đã chọn' : 'Chọn phòng này'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Hotels */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Khách sạn nổi bật</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Pet Paradise Hotel', location: 'Quận 2, TP.HCM', rating: 4.9, reviews: 245, image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop' },
              { name: 'Happy Tails Resort', location: 'Quận 7, TP.HCM', rating: 4.8, reviews: 189, image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop' }
            ].map((hotel, i) => (
              <Link
                key={i}
                to={`/clinic/${i + 1}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex gap-4 p-4">
                  <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0">
                    <img src={hotel.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={hotel.name} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{hotel.name}</h4>
                    <p className="text-sm text-slate-500 mb-2">{hotel.location}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-sm">{hotel.rating}</span>
                      </div>
                      <span className="text-xs text-slate-400">({hotel.reviews} đánh giá)</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-500 font-bold text-sm group-hover:gap-3 transition-all">
                      Đặt phòng ngay <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Đặt phòng ngay hôm nay</h2>
          <p className="text-lg mb-8 text-green-100 max-w-2xl mx-auto">
            Chọn phòng phù hợp và đặt chỗ để thú cưng của bạn có kỳ nghỉ tuyệt vời
          </p>
          <button
            onClick={handleBooking}
            className="bg-white text-green-500 px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Đặt phòng ngay
          </button>
        </section>
      </div>
    </div>
  );
}
