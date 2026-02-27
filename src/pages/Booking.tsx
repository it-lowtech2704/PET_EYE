import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Calendar, Clock, MapPin, CreditCard, Wallet, Building2, CheckCircle, ArrowLeft } from 'lucide-react';

export default function Booking() {
  const navigate = useNavigate();
  const { serviceType } = useParams<{ serviceType: string }>();
  const location = useLocation();
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    clinic: '',
    date: '',
    time: '',
    petName: '',
    petType: '',
    notes: '',
    paymentMethod: ''
  });

  const serviceInfo = {
    grooming: { name: 'Chăm sóc & Spa', color: 'pink', icon: '💅' },
    medical: { name: 'Khám bệnh & Điều trị', color: 'blue', icon: '🏥' },
    boarding: { name: 'Lưu trú & Khách sạn', color: 'green', icon: '🏠' }
  };

  const currentService = serviceInfo[serviceType as keyof typeof serviceInfo] || serviceInfo.grooming;

  const clinics = [
    { id: '1', name: 'PetCare Sài Gòn', address: 'Quận 3, TP.HCM' },
    { id: '2', name: 'Happy Paws Spa', address: 'Quận 1, TP.HCM' },
    { id: '3', name: 'Saigon Vet Hospital', address: 'Quận 7, TP.HCM' }
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const paymentMethods = [
    { id: 'cash', name: 'Tiền mặt', icon: <Wallet size={24} />, desc: 'Thanh toán khi đến' },
    { id: 'card', name: 'Thẻ tín dụng', icon: <CreditCard size={24} />, desc: 'Visa, Mastercard' },
    { id: 'bank', name: 'Chuyển khoản', icon: <Building2 size={24} />, desc: 'Ngân hàng' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process booking
      navigate('/booking/success', { state: { booking: formData, service: currentService } });
    }
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.clinic && formData.date && formData.time;
    }
    if (step === 2) {
      return formData.petName && formData.petType;
    }
    if (step === 3) {
      return formData.paymentMethod;
    }
    return false;
  };

  return (
    <div className="flex-1 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4"
          >
            <ArrowLeft size={20} />
            Quay lại
          </button>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{currentService.icon}</span>
            <h1 className="text-3xl font-black">Đặt lịch {currentService.name}</h1>
          </div>
          <p className="text-slate-600">Hoàn thành các bước để đặt lịch</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Chọn lịch' },
              { num: 2, label: 'Thông tin' },
              { num: 3, label: 'Thanh toán' }
            ].map((s, i) => (
              <React.Fragment key={s.num}>
                <div className="flex flex-col items-center">
                  <div className={`size-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    step >= s.num
                      ? `bg-${currentService.color}-500 text-white`
                      : 'bg-slate-200 text-slate-400'
                  }`}>
                    {step > s.num ? <CheckCircle size={24} /> : s.num}
                  </div>
                  <span className={`text-sm mt-2 font-medium ${
                    step >= s.num ? 'text-slate-900' : 'text-slate-400'
                  }`}>
                    {s.label}
                  </span>
                </div>
                {i < 2 && (
                  <div className={`flex-1 h-1 mx-4 rounded transition-all ${
                    step > s.num ? `bg-${currentService.color}-500` : 'bg-slate-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
          {/* Step 1: Schedule */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  <MapPin size={16} className="inline mr-2" />
                  Chọn cơ sở
                </label>
                <div className="grid gap-3">
                  {clinics.map((clinic) => (
                    <label
                      key={clinic.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.clinic === clinic.id
                          ? `border-${currentService.color}-500 bg-${currentService.color}-50`
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="clinic"
                        value={clinic.id}
                        checked={formData.clinic === clinic.id}
                        onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold">{clinic.name}</h4>
                        <p className="text-sm text-slate-500">{clinic.address}</p>
                      </div>
                      {formData.clinic === clinic.id && (
                        <CheckCircle className={`text-${currentService.color}-500`} size={24} />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  <Calendar size={16} className="inline mr-2" />
                  Chọn ngày
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  <Clock size={16} className="inline mr-2" />
                  Chọn giờ
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`py-3 rounded-xl font-bold text-sm transition-all ${
                        formData.time === time
                          ? `bg-${currentService.color}-500 text-white`
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Pet Info */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Tên thú cưng
                </label>
                <input
                  type="text"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  placeholder="Ví dụ: Miu Miu"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Loại thú cưng
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Chó', 'Mèo', 'Thỏ', 'Khác'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, petType: type })}
                      className={`py-3 rounded-xl font-bold transition-all ${
                        formData.petType === type
                          ? `bg-${currentService.color}-500 text-white`
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Ghi chú (không bắt buộc)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Thông tin thêm về thú cưng, yêu cầu đặc biệt..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Phương thức thanh toán
                </label>
                <div className="grid gap-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.paymentMethod === method.id
                          ? `border-${currentService.color}-500 bg-${currentService.color}-50`
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="sr-only"
                      />
                      <div className={`size-12 rounded-xl flex items-center justify-center ${
                        formData.paymentMethod === method.id
                          ? `bg-${currentService.color}-100 text-${currentService.color}-600`
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold">{method.name}</h4>
                        <p className="text-sm text-slate-500">{method.desc}</p>
                      </div>
                      {formData.paymentMethod === method.id && (
                        <CheckCircle className={`text-${currentService.color}-500`} size={24} />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold mb-4">Tóm tắt đặt lịch</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Dịch vụ:</span>
                    <span className="font-bold">{currentService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Cơ sở:</span>
                    <span className="font-bold">{clinics.find(c => c.id === formData.clinic)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Ngày giờ:</span>
                    <span className="font-bold">{formData.date} - {formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Thú cưng:</span>
                    <span className="font-bold">{formData.petName} ({formData.petType})</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-slate-100">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-all"
              >
                Quay lại
              </button>
            )}
            <button
              type="submit"
              disabled={!isStepValid()}
              className={`flex-1 py-3 rounded-xl font-bold text-white transition-all ${
                isStepValid()
                  ? `bg-${currentService.color}-500 hover:bg-${currentService.color}-600`
                  : 'bg-slate-300 cursor-not-allowed'
              }`}
            >
              {step === 3 ? 'Xác nhận đặt lịch' : 'Tiếp tục'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
