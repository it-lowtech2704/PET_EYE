# Hệ thống Dịch vụ và Đặt lịch

## Tổng quan
Đã tạo hệ thống dịch vụ hoàn chỉnh với 3 dịch vụ chính và quy trình đặt lịch có thanh toán.

## 3 Dịch vụ chính

### 1. Chăm sóc & Spa (Grooming)
**Route:** `/services/grooming`

**Gói dịch vụ:**
- Gói Cơ bản (150,000đ - 45 phút)
  - Tắm với sữa tắm chuyên dụng
  - Sấy khô
  - Vệ sinh tai
  - Cắt móng
  - Xịt nước hoa

- Gói Tiêu chuẩn (300,000đ - 90 phút) ⭐ PHỔ BIẾN
  - Tất cả dịch vụ gói Cơ bản
  - Cắt tỉa lông theo yêu cầu
  - Vệ sinh mắt
  - Massage thư giãn
  - Chải lông mượt
  - Tặng khăn tắm

- Gói Cao cấp (500,000đ - 120 phút)
  - Tất cả dịch vụ gói Tiêu chuẩn
  - Spa thảo dược
  - Nhuộm lông an toàn
  - Tạo kiểu lông chuyên nghiệp
  - Chụp ảnh kỷ niệm
  - Tặng phụ kiện thời trang

### 2. Khám bệnh & Điều trị (Medical)
**Route:** `/services/medical`

**Dịch vụ:**
- Khám tổng quát (200,000đ - 30 phút)
  - Kiểm tra thể trạng tổng quát
  - Đo nhiệt độ, cân nặng
  - Khám tim phổi
  - Kiểm tra răng miệng
  - Tư vấn dinh dưỡng

- Tiêm phòng (150,000đ - 15 phút) ⭐ PHỔ BIẾN
  - Vaccine 5 bệnh/7 bệnh
  - Vaccine dại
  - Vaccine viêm gan
  - Kiểm tra sức khỏe trước tiêm
  - Theo dõi sau tiêm

- Điều trị bệnh (500,000đ - 60 phút)
  - Xét nghiệm máu, nước tiểu
  - Chụp X-quang
  - Siêu âm
  - Kê đơn thuốc
  - Theo dõi điều trị

- Phẫu thuật (2,000,000đ - 2-4 giờ)
  - Gây mê an toàn
  - Phẫu thuật viên giàu kinh nghiệm
  - Phòng mổ vô trùng
  - Chăm sóc hậu phẫu
  - Tái khám miễn phí

### 3. Lưu trú & Khách sạn (Boarding)
**Route:** `/services/boarding`

**Loại phòng:**
- Phòng Tiêu chuẩn (100,000đ/ngày)
  - Kích thước: 1m x 1.5m
  - Phòng riêng có cửa
  - Nệm êm ái
  - Bát ăn, uống riêng
  - Vệ sinh 2 lần/ngày
  - Camera giám sát

- Phòng Cao cấp (200,000đ/ngày) ⭐ PHỔ BIẾN
  - Kích thước: 1.5m x 2m
  - Tất cả tiện nghi phòng Tiêu chuẩn
  - Phòng rộng hơn
  - Điều hòa riêng
  - Đồ chơi cao cấp
  - Tắm miễn phí 1 lần
  - Chụp ảnh hàng ngày

- Phòng VIP (300,000đ/ngày)
  - Kích thước: 2m x 3m
  - Tất cả tiện nghi phòng Cao cấp
  - Phòng suite rộng rãi
  - Sân chơi riêng
  - TV & nhạc thư giãn
  - Spa & massage
  - Thực đơn cao cấp
  - Video call 24/7

## Quy trình đặt lịch

### Bước 1: Chọn lịch
**Route:** `/booking/:serviceType`

- Chọn cơ sở (clinic/shop)
- Chọn ngày (không được chọn ngày quá khứ)
- Chọn giờ (8 khung giờ từ 08:00 - 17:00)

### Bước 2: Thông tin thú cưng
- Nhập tên thú cưng
- Chọn loại (Chó, Mèo, Thỏ, Khác)
- Ghi chú thêm (không bắt buộc)

### Bước 3: Thanh toán
**Phương thức thanh toán:**
1. Tiền mặt - Thanh toán khi đến
2. Thẻ tín dụng - Visa, Mastercard
3. Chuyển khoản - Ngân hàng

**Tóm tắt đặt lịch:**
- Hiển thị đầy đủ thông tin đã chọn
- Xác nhận trước khi đặt

### Trang thành công
**Route:** `/booking/success`

**Hiển thị:**
- Animation thành công
- Mã đặt lịch (BK-XXXXXX)
- Chi tiết đầy đủ booking
- Bước tiếp theo
- Actions: Tải xuống, Nhắn tin, Về trang chủ

## Các trang đã tạo

### Trang chính
1. **Services** (`/services`)
   - Tổng quan 3 dịch vụ
   - Grid card với hình ảnh
   - Giá và tính năng
   - Link đến chi tiết

2. **GroomingService** (`/services/grooming`)
   - Chi tiết dịch vụ chăm sóc
   - 3 gói dịch vụ
   - Chọn gói và đặt lịch
   - Cơ sở nổi bật

3. **MedicalService** (`/services/medical`)
   - Chi tiết dịch vụ khám bệnh
   - 4 loại dịch vụ
   - Chọn dịch vụ và đặt lịch
   - Phòng khám nổi bật

4. **BoardingService** (`/services/boarding`)
   - Chi tiết dịch vụ lưu trú
   - 3 loại phòng
   - Chọn phòng và đặt lịch
   - Khách sạn nổi bật

5. **Booking** (`/booking/:serviceType`)
   - Form đặt lịch 3 bước
   - Progress indicator
   - Validation từng bước
   - Tóm tắt trước khi xác nhận

6. **BookingSuccess** (`/booking/success`)
   - Thông báo thành công
   - Chi tiết booking
   - Mã đặt lịch
   - Hướng dẫn tiếp theo

## Workflow đặt lịch

```
Trang chủ
  ↓
Chọn dịch vụ (/services)
  ↓
Chi tiết dịch vụ (/services/grooming|medical|boarding)
  ↓
Chọn gói/dịch vụ
  ↓
Đặt lịch (/booking/:serviceType)
  ↓
Bước 1: Chọn lịch
  ↓
Bước 2: Thông tin
  ↓
Bước 3: Thanh toán
  ↓
Thành công (/booking/success)
  ↓
Về trang chủ / Xem booking / Nhắn tin
```

## Tính năng nổi bật

### 1. Responsive Design
- Mobile-first approach
- Grid layout tự động điều chỉnh
- Touch-friendly buttons

### 2. User Experience
- Progress indicator rõ ràng
- Validation real-time
- Disable button khi chưa đủ thông tin
- Animation mượt mà

### 3. Visual Design
- Color coding theo dịch vụ:
  - Grooming: Pink/Rose
  - Medical: Blue/Cyan
  - Boarding: Green/Emerald
- Icons phù hợp
- Images chất lượng cao

### 4. Protected Routes
- Chỉ customer đã login mới đặt lịch
- Redirect về login nếu chưa đăng nhập
- State được truyền qua navigation

## Cập nhật Navbar
- Link "Dịch vụ" → `/services` (thay vì `/clinic/1`)
- Hiển thị trên cả desktop và mobile

## Routes đã thêm

```typescript
// Services
/services - Tổng quan dịch vụ
/services/grooming - Chi tiết chăm sóc
/services/medical - Chi tiết khám bệnh
/services/boarding - Chi tiết lưu trú

// Booking
/booking/:serviceType - Form đặt lịch
/booking/success - Thành công
```

## Lưu ý
- Tất cả giá đều là VNĐ
- Thời gian được tính theo phút/giờ/ngày
- Cần tích hợp API backend thực tế
- Payment gateway cần được tích hợp
- Email confirmation cần được gửi
- SMS notification có thể thêm
