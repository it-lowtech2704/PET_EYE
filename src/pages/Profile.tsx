import React from 'react';
import { Link } from 'react-router-dom';
import { User, PawPrint, Calendar, ShoppingBag, Settings, LogOut, ShieldCheck, Bell } from 'lucide-react';

export default function Profile() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-72 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col gap-1">
              {[
                { icon: <User size={18} />, label: "Personal Info", path: "/profile", active: true },
                { icon: <PawPrint size={18} />, label: "My Pets", path: "/pet/1" },
                { icon: <ShoppingBag size={18} />, label: "Order History", path: "/orders" },
                { icon: <Calendar size={18} />, label: "Booking History", path: "/bookings" },
                { icon: <ShieldCheck size={18} />, label: "Security & Password", path: "#" },
                { icon: <Bell size={18} />, label: "Notifications", path: "#" },
              ].map((item, i) => (
                <Link 
                  key={i} 
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-[#e0f7f9] text-[#1a2b4c]' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                >
                  {item.icon}
                  <span className="text-sm font-semibold">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-700">
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all w-full">
                <LogOut size={18} />
                <span className="text-sm font-semibold">Logout</span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a2b4c]/10 to-transparent rounded-2xl p-6 border border-[#1a2b4c]/20">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-1">Membership Level</p>
            <h3 className="text-xl font-extrabold text-[#1a2b4c] dark:text-white">Carevia Gold</h3>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-xs font-medium">Appointments</p>
                <p className="text-lg font-bold">24 Total</p>
              </div>
              <div className="size-12 rounded-full border-4 border-[#1a2b4c] border-t-transparent flex items-center justify-center">
                <span className="text-[10px] font-bold">80%</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Personal Information</h1>
            <p className="text-slate-500">Manage your profile details and preferences.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-8 border-b border-slate-100 dark:border-slate-700">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative">
                  <div className="size-32 rounded-full border-4 border-white dark:border-slate-800 shadow-md bg-slate-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-[#1a2b4c] text-white size-10 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center">
                    <Settings size={16} />
                  </button>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold">Alex Johnson</h3>
                  <p className="text-slate-500 text-sm">Member since January 2023</p>
                  <div className="mt-4 flex gap-3">
                    <button className="bg-[#1a2b4c] px-6 py-2 rounded-xl text-white font-semibold text-sm">Upload New Photo</button>
                    <button className="bg-slate-100 dark:bg-slate-700 px-6 py-2 rounded-xl text-slate-600 dark:text-slate-300 font-semibold text-sm">Remove</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3" value="Alex Johnson" readOnly />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3" value="alex.johnson@example.com" readOnly />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3" value="+1 (555) 123-4567" readOnly />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Date of Birth</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3" value="March 12, 1992" readOnly />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Primary Address</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3" rows={3} defaultValue="123 Pinecrest Avenue, Apartment 4B, San Francisco, CA 94107" />
                </div>
                <div className="md:col-span-2 flex justify-end gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <button type="button" className="px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300">Cancel</button>
                  <button type="button" className="px-8 py-3 rounded-xl bg-[#1a2b4c] text-white font-bold shadow-lg shadow-[#1a2b4c]/20">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
