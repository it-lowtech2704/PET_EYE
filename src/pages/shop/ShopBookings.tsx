import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Phone, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function ShopBookings() {
  const bookings = [
    { id: 1, time: '09:00', date: '2023-10-30', customer: 'Nguyễn Văn A', phone: '0901234567', pet: 'Miu Miu', service: 'Khám tổng quát', status: 'confirmed' },
    { id: 2, time: '10:30', date: '2023-10-30', customer: 'Trần Thị B', phone: '0912345678', pet: 'Lucky', service: 'Tiêm phòng', status: 'confirmed' },
    { id: 3, time: '14:00', date: '2023-10-30', customer: 'Lê Văn C', phone: '0923456789', pet: 'Bông', service: 'Spa & Grooming', status: 'pending' },
    { id: 4, time: '15:30', date: '2023-10-30', customer: 'Phạm Thị D', phone: '0934567890', pet: 'Milo', service: 'Khám bệnh', status: 'confirmed' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-600';
      case 'pending': return 'bg-yellow-100 text-yellow-600';
      case 'cancelled': return 'bg-red-100 text-red-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle size={14} />;
      case 'pending': return <AlertCircle size={14} />;
      case 'cancelled': return <XCircle size={14} />;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Đã xác nhận';
      case 'pending': return 'Chờ xác nhận';
      case 'cancelled': return 'Đã hủy';
      default: return status;
    }
  };

  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Quản lý lịch hẹn</h1>
            <p className="text-slate-500">Tổng số: {bookings.length} lịch hẹn hôm nay</p>
          </div>
          <Link to="/shop/dashboard" className="bg-[#1a2b4c] text-white px-6 py-3 rounded-xl font-bold">
            Quay lại Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-[#1a2b4c] text-white rounded-xl font-bold text-sm">
                Hôm nay
              </button>
              <button className="px-6 py-2 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100">
                Tuần này
              </button>
              <button className="px-6 py-2 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100">
                Tháng này
              </button>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {bookings.map((booking) => (
              <div key={booking.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="size-16 rounded-2xl bg-blue-100 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-blue-600">{booking.time.split(':')[0]}</span>
                      <span className="text-xs font-bold text-blue-600">{booking.time.split(':')[1]}</span>
                    </div>
                  </div>

                  <div className="flex-1 grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-bold text-sm mb-1">Khách hàng</h4>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <User size={14} /> {booking.customer}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <Phone size={12} /> {booking.phone}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm mb-1">Thú cưng & Dịch vụ</h4>
                      <p className="text-sm text-slate-600">{booking.pet}</p>
                      <p className="text-xs text-slate-500 mt-1">{booking.service}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm mb-1">Trạng thái</h4>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          {getStatusText(booking.status)}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {booking.status === 'pending' && (
                          <>
                            <button className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-xs font-bold hover:bg-green-100">
                              Xác nhận
                            </button>
                            <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100">
                              Từ chối
                            </button>
                          </>
                        )}
                        {booking.status === 'confirmed' && (
                          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100">
                            Chi tiết
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
