import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, MoreVertical, Plus } from 'lucide-react';

export default function BookingHistory() {
  const bookings = [
    { 
      id: 'BK-9921', 
      clinic: 'PetCare Sài Gòn', 
      service: 'General Checkup', 
      pet: 'Miu Miu', 
      date: 'Oct 30, 2023', 
      time: '09:30 AM', 
      status: 'Upcoming',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop'
    },
    { 
      id: 'BK-9810', 
      clinic: 'Happy Paws Spa', 
      service: 'Full Grooming', 
      pet: 'Miu Miu', 
      date: 'Oct 15, 2023', 
      time: '02:00 PM', 
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Booking History</h1>
          <p className="text-slate-500">Manage your appointments and clinic visits.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#1a2b4c] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-[#1a2b4c]/20 hover:-translate-y-0.5 transition-all">
          <Plus size={20} /> New Booking
        </button>
      </div>

      <div className="flex gap-4 mb-8 border-b border-slate-100 dark:border-slate-700">
        <button className="pb-4 px-2 text-[#1a2b4c] border-b-2 border-[#1a2b4c] font-bold text-sm">Upcoming</button>
        <button className="pb-4 px-2 text-slate-400 hover:text-slate-600 font-bold text-sm">Past Visits</button>
        <button className="pb-4 px-2 text-slate-400 hover:text-slate-600 font-bold text-sm">Cancelled</button>
      </div>

      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm flex flex-col md:flex-row">
            <div className="w-full md:w-64 h-48 md:h-auto shrink-0">
              <img src={booking.image} alt="Clinic" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${booking.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                      {booking.status}
                    </span>
                    <span className="text-slate-400 text-xs font-bold">#{booking.id}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">{booking.clinic}</h3>
                  <p className="text-slate-500 font-medium">{booking.service}</p>
                </div>
                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-full">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-50 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                    <CalendarIcon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</p>
                    <p className="text-sm font-bold">{booking.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time</p>
                    <p className="text-sm font-bold">{booking.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pet</p>
                    <p className="text-sm font-bold">{booking.pet}</p>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <Link to="/clinic/1" className="flex items-center gap-1 text-[#1a2b4c] font-bold text-sm hover:underline">
                    View Details <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
