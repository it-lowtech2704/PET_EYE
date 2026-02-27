# Hướng dẫn hệ thống Authentication

## Tổng quan
Đã tạo hệ thống đăng nhập/đăng ký với 4 role: Admin, Shop/Hospital, Customer

## Các tính năng đã thêm

### 1. Authentication Context (`src/contexts/AuthContext.tsx`)
- Quản lý trạng thái đăng nhập
- Lưu thông tin user vào localStorage
- Tự động redirect theo role sau khi đăng nhập/đăng ký

### 2. Trang đăng nhập/đăng ký
- **Login** (`src/pages/Login.tsx`): Có dropdown chọn role
- **Register** (`src/pages/Register.tsx`): Có dropdown chọn role
- Form validation
- Loading state

### 3. Navbar cập nhật
- Hiển thị tên user khi đã đăng nhập
- Nút đăng xuất
- Ẩn/hiện nút đăng nhập/đăng ký theo trạng thái

## Các trang theo Role

### Customer (Khách hàng)
- Trang chủ (/)
- Profile (/profile)
- Order History (/orders)
- Booking History (/bookings)
- Pet Profile (/pet/:id)
- Messaging (/messages)
- Live Tracking (/live)
- Clinic Detail (/clinic/:id)

### Shop/Hospital (Cửa hàng/Phòng khám)
- **Dashboard** (`/shop/dashboard`): Tổng quan, thống kê, lịch hẹn hôm nay
- **Quản lý lịch hẹn** (`/shop/bookings`): Xem, xác nhận, từ chối lịch hẹn
- **Quản lý dịch vụ** (`/shop/services`): CRUD dịch vụ, giá, thời gian
- Messaging (/messages)

### Admin (Quản trị viên)
- **Dashboard** (`/admin/dashboard`): Tổng quan hệ thống, thống kê
- **Quản lý người dùng** (`/admin/users`): Xem danh sách, quản lý users
- **Quản lý cửa hàng** (`/admin/shops`): Phê duyệt, quản lý shops

## Cách sử dụng

### Đăng nhập
1. Vào trang `/login`
2. Chọn loại tài khoản (Customer/Shop/Admin)
3. Nhập email và password
4. Hệ thống tự động redirect:
   - Admin → `/admin/dashboard`
   - Shop → `/shop/dashboard`
   - Customer → `/` (trang chủ)

### Đăng ký
1. Vào trang `/register`
2. Chọn loại tài khoản
3. Điền thông tin
4. Tự động redirect như đăng nhập

### Đăng xuất
- Click nút "Đăng xuất" trên Navbar
- Tự động redirect về `/login`

## Routes đã thêm

```typescript
// Customer routes (existing)
/ - Home
/login - Login
/register - Register
/profile - Profile
/orders - Order History
/bookings - Booking History
/clinic/:id - Clinic Detail
/pet/:id - Pet Profile
/messages - Messaging
/live - Live Tracking

// Admin routes (new)
/admin/dashboard - Admin Dashboard
/admin/users - User Management
/admin/shops - Shop Management

// Shop routes (new)
/shop/dashboard - Shop Dashboard
/shop/bookings - Booking Management
/shop/services - Service Management
```

## Các file đã tạo/sửa

### Tạo mới:
- `src/contexts/AuthContext.tsx`
- `src/pages/admin/AdminDashboard.tsx`
- `src/pages/admin/AdminUsers.tsx`
- `src/pages/admin/AdminShops.tsx`
- `src/pages/shop/ShopDashboard.tsx`
- `src/pages/shop/ShopBookings.tsx`
- `src/pages/shop/ShopServices.tsx`

### Cập nhật:
- `src/App.tsx` - Thêm AuthProvider và routes mới
- `src/pages/Login.tsx` - Thêm logic đăng nhập
- `src/pages/Register.tsx` - Thêm logic đăng ký
- `src/components/Navbar.tsx` - Hiển thị user info và logout

## Lưu ý
- Hiện tại đang dùng mock data (localStorage)
- Cần tích hợp API backend thực tế
- Cần thêm route protection (PrivateRoute) để bảo vệ các trang theo role
- Cần thêm các trang quản lý khác cho Admin và Shop
