# Hệ thống phân quyền theo Role

## Tổng quan
Đã tạo hệ thống phân quyền hoàn chỉnh với Navbar riêng và route protection cho từng role.

## Các Navbar theo Role

### 1. Customer Navbar (Navbar.tsx)
Hiển thị cho khách hàng và người chưa đăng nhập:
- Trang chủ
- Dịch vụ (Clinic Detail)
- Tin nhắn
- Live Cam
- Hồ sơ
- Đăng nhập/Đăng ký (nếu chưa login)

### 2. Admin Navbar (AdminNavbar.tsx)
Hiển thị cho quản trị viên:
- Dashboard
- Người dùng
- Cửa hàng
- Đơn hàng
- Báo cáo

### 3. Shop Navbar (ShopNavbar.tsx)
Hiển thị cho cửa hàng/phòng khám:
- Dashboard
- Lịch hẹn
- Dịch vụ
- Đơn hàng
- Tin nhắn
- Cửa hàng (Profile)

## Các trang đã tạo

### Admin Pages
1. **AdminDashboard** (`/admin/dashboard`)
   - Tổng quan thống kê hệ thống
   - Hoạt động gần đây
   - Quick actions

2. **AdminUsers** (`/admin/users`)
   - Danh sách người dùng
   - Lọc theo role
   - Quản lý trạng thái

3. **AdminShops** (`/admin/shops`)
   - Danh sách cửa hàng
   - Phê duyệt cửa hàng mới
   - Xem chi tiết

4. **AdminOrders** (`/admin/orders`)
   - Quản lý tất cả đơn hàng
   - Theo dõi trạng thái
   - Thống kê

5. **AdminReports** (`/admin/reports`)
   - Báo cáo doanh thu
   - Thống kê theo tháng
   - Top cửa hàng
   - Xuất báo cáo

### Shop Pages
1. **ShopDashboard** (`/shop/dashboard`)
   - Thống kê cửa hàng
   - Lịch hẹn hôm nay
   - Doanh thu tháng

2. **ShopBookings** (`/shop/bookings`)
   - Quản lý lịch hẹn
   - Xác nhận/Từ chối booking
   - Lọc theo ngày

3. **ShopServices** (`/shop/services`)
   - CRUD dịch vụ
   - Quản lý giá
   - Bật/tắt dịch vụ

4. **ShopOrders** (`/shop/orders`)
   - Quản lý đơn hàng
   - Cập nhật trạng thái
   - Xác nhận đơn

5. **ShopProfile** (`/shop/profile`)
   - Thông tin cửa hàng
   - Giờ hoạt động
   - Thống kê

### Customer Pages (existing)
- Home
- Profile
- Order History
- Booking History
- Pet Profile
- Messaging
- Live Tracking
- Clinic Detail

## Route Protection

### ProtectedRoute Component
Bảo vệ routes theo role:
```typescript
<ProtectedRoute allowedRoles={['admin']}>
  <AdminDashboard />
</ProtectedRoute>
```

### Quy tắc:
- Nếu chưa đăng nhập → redirect về `/login`
- Nếu role không phù hợp → redirect về dashboard của role đó
- Admin cố truy cập shop route → redirect về `/admin/dashboard`
- Shop cố truy cập admin route → redirect về `/shop/dashboard`
- Customer cố truy cập admin/shop route → redirect về `/`

## Workflow theo Role

### Admin Workflow
1. Đăng nhập với role "admin"
2. Redirect tự động về `/admin/dashboard`
3. Navbar hiển thị menu admin
4. Chỉ có thể truy cập các route `/admin/*`
5. Không thể truy cập route customer hoặc shop

### Shop Workflow
1. Đăng nhập với role "shop"
2. Redirect tự động về `/shop/dashboard`
3. Navbar hiển thị menu shop
4. Có thể truy cập:
   - Các route `/shop/*`
   - `/messages` (để chat với khách)
5. Không thể truy cập route admin hoặc customer

### Customer Workflow
1. Đăng nhập với role "customer"
2. Redirect về trang chủ `/`
3. Navbar hiển thị menu customer
4. Có thể truy cập:
   - Trang chủ và các trang công khai
   - Profile, Orders, Bookings
   - Pet Profile, Live Tracking
   - Messages
5. Không thể truy cập route admin hoặc shop

## Các file đã tạo/cập nhật

### Tạo mới:
- `src/components/AdminNavbar.tsx`
- `src/components/ShopNavbar.tsx`
- `src/components/ProtectedRoute.tsx`
- `src/pages/admin/AdminOrders.tsx`
- `src/pages/admin/AdminReports.tsx`
- `src/pages/shop/ShopOrders.tsx`
- `src/pages/shop/ShopProfile.tsx`

### Cập nhật:
- `src/App.tsx` - Thêm logic render Navbar theo role và ProtectedRoute
- `src/components/ShopNavbar.tsx` - Thêm link Profile

## Test hệ thống

### Test Admin:
1. Đăng ký/Đăng nhập với role "Admin"
2. Kiểm tra redirect về `/admin/dashboard`
3. Kiểm tra Navbar hiển thị đúng menu admin
4. Thử truy cập `/shop/dashboard` → redirect về `/admin/dashboard`
5. Thử truy cập `/profile` → redirect về `/admin/dashboard`

### Test Shop:
1. Đăng ký/Đăng nhập với role "Shop"
2. Kiểm tra redirect về `/shop/dashboard`
3. Kiểm tra Navbar hiển thị đúng menu shop
4. Thử truy cập `/admin/dashboard` → redirect về `/shop/dashboard`
5. Thử truy cập `/profile` → redirect về `/shop/dashboard`

### Test Customer:
1. Đăng ký/Đăng nhập với role "Customer"
2. Kiểm tra redirect về `/`
3. Kiểm tra Navbar hiển thị đúng menu customer
4. Thử truy cập `/admin/dashboard` → redirect về `/`
5. Thử truy cập `/shop/dashboard` → redirect về `/`

## Lưu ý
- Tất cả routes đã được bảo vệ bằng ProtectedRoute
- Navbar tự động thay đổi theo role
- Không thể bypass bằng cách nhập URL trực tiếp
- Cần tích hợp API backend thực tế để production
