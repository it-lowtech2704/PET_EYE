import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, MapPin, Clock, Download, Home, MessageCircle } from 'lucide-react';

export default function BookingSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking, service } = location.state || {};

  React.useEffect(() => {
    if (!booking) {
      navigate('/');
    }
  }, [booking, navigate]);

  if (!booking) return null;

  const bookingId = `BK-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <div className="flex-1 bg-slate-50 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center size-24 rounded-full bg-green-100 mb-6 animate-bounce">
            <CheckCircle className="text-green-500" size={48} />
          </div>
          <h1 className="text-4xl font-black mb-2">Đặt lịch thành công!</h1>
          <p className="text-slate-600 text-lg">
            Chúng tôi đã nhận được yêu cầu đặt lịch của bạn
          </p>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100">
            <div>
              <p className="text-sm text-slate-500 mb-1">Mã đặt lịch</p>
              <p className="text-2xl font-black">{bookingId}</p>
            </div>
            <div className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-bold">
              Đã xác nhận
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl">{service?.icon || '🏥'}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-500">Dịch vụ</p>
                <p className="font-bold text-lg">{service?.name || 'Dịch vụ'}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <MapPin className="text-purple-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-500">Cơ sở</p>
                <p className="font-bold">PetCare Sài Gòn</p>
                <p className="text-sm text-slate-600">Quận 3, TP.HCM</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Calendar className="text-orange-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">Ngày</p>
                  <p className="font-bold">{booking.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                  <Clock className="text-pink-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500">Giờ</p>
                  <p className="font-bold">{booking.time}</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <span className="text-xl">🐾</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-500">Thú cưng</p>
                <p className="font-bold">{booking.petName}</p>
                <p className="text-sm text-slate-600">{booking.petType}</p>
              </div>
            </div>

            {booking.notes && (
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-slate-500 mb-1">Ghi chú</p>
                <p className="text-sm text-slate-700">{booking.notes}</p>
              </div>
            )}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-lg mb-3">📋 Bước tiếp theo</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">1.</span>
              <span>Chúng tôi sẽ gửi email xác nhận đến địa chỉ của bạn</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">2.</span>
              <span>Vui lòng đến đúng giờ đã đặt, mang theo thú cưng</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">3.</span>
              <span>Nếu cần thay đổi, vui lòng liên hệ trước 24 giờ</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <Download size={20} />
            Tải xuống
          </button>
          <Link
            to="/messages"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all"
          >
            <MessageCircle size={20} />
            Nhắn tin
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-[#1a2b4c] text-white rounded-xl font-bold hover:opacity-90 transition-all"
          >
            <Home size={20} />
            Về trang chủ
          </Link>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Cảm ơn bạn đã tin tưởng Carevia! 💚
        </p>
      </div>
    </div>
  );
}
