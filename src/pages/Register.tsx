import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Lock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth, UserRole } from '../contexts/AuthContext';

export default function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [role, setRole] = React.useState<UserRole>('customer');
  const [loading, setLoading] = React.useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    
    setLoading(true);
    try {
      await register(name, email, password, role);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-slate-50 dark:bg-slate-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left: Branding */}
        <div className="hidden md:flex md:w-1/2 bg-[#1a2b4c] items-center justify-center p-12 relative overflow-hidden">
          <div className="relative z-10 text-white">
            <h1 className="text-4xl font-black leading-tight mb-6">Chăm sóc thú cưng cùng Carevia</h1>
            <p className="text-slate-300 text-lg mb-10">Hệ thống quản lý sức khỏe thú cưng thông minh, giúp người bạn nhỏ luôn khỏe mạnh.</p>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1a2b4c] bg-slate-400"></div>
                ))}
              </div>
              <p className="text-sm font-medium">+10,000 người đã đăng ký</p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>

        {/* Right: Register Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Đăng ký thành viên</h2>
            <p className="text-slate-500 dark:text-slate-400">Yêu thương thú cưng bằng sự chăm sóc chuyên nghiệp nhất</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Loại tài khoản</label>
              <select 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#1a2b4c]/20 focus:border-[#1a2b4c] outline-none transition-all"
                value={role || 'customer'}
                onChange={(e) => setRole(e.target.value as UserRole)}
              >
                <option value="customer">Khách hàng</option>
                <option value="shop">Cửa hàng/Phòng khám</option>
                <option value="admin">Quản trị viên</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Họ và tên</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#1a2b4c]/20 focus:border-[#1a2b4c] outline-none transition-all" 
                  placeholder="Nguyễn Văn A" 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#1a2b4c]/20 focus:border-[#1a2b4c] outline-none transition-all" 
                  placeholder="example@gmail.com" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Số điện thoại</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#1a2b4c]/20 focus:border-[#1a2b4c] outline-none transition-all" 
                  placeholder="0901 234 567" 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Mật khẩu</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#1a2b4c]/20 focus:border-[#1a2b4c] outline-none transition-all" 
                    placeholder="••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Nhập lại</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#1a2b4c]/20 focus:border-[#1a2b4c] outline-none transition-all" 
                    placeholder="••••••••" 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-2">
              <input type="checkbox" className="mt-1 rounded border-slate-300 text-[#1a2b4c] focus:ring-[#1a2b4c]" id="terms" required />
              <label htmlFor="terms" className="text-xs text-slate-600">
                Tôi đồng ý với các <a href="#" className="font-bold text-[#2dd4bf] hover:underline">Điều khoản dịch vụ</a> và <a href="#" className="font-bold text-[#2dd4bf] hover:underline">Chính sách bảo mật</a> của Carevia.
              </label>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#1a2b4c] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Đang đăng ký...' : 'Đăng ký ngay'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Bạn đã có tài khoản? <Link to="/login" className="text-[#2dd4bf] font-bold hover:underline ml-1">Đăng nhập tại đây</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
