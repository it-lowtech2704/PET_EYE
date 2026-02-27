import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Syringe, Utensils, FileText, Camera, Plus, ChevronRight, Settings } from 'lucide-react';
import { motion } from 'motion/react';

export default function PetProfile() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-8">
      {/* Header Profile */}
      <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="size-48 md:size-64 rounded-[3rem] overflow-hidden border-8 border-slate-50 dark:border-slate-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt="Pet"
              />
            </div>
            <button className="absolute -bottom-4 -right-4 bg-[#1a2b4c] text-white size-14 rounded-2xl border-4 border-white dark:border-slate-800 flex items-center justify-center shadow-xl">
              <Camera size={24} />
            </button>
          </div>

          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                <h1 className="text-5xl font-black tracking-tight">Miu Miu</h1>
                <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Female</span>
                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">3 Years Old</span>
              </div>
              <p className="text-slate-500 text-lg font-medium">Scottish Fold • 4.2 kg • Healthy Weight</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 rounded-3xl border border-slate-100 dark:border-slate-700">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Last Visit</p>
                <p className="font-bold">Oct 12, 2023</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 rounded-3xl border border-slate-100 dark:border-slate-700">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Next Vaccine</p>
                <p className="font-bold text-orange-500">Nov 20, 2023</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 rounded-3xl border border-slate-100 dark:border-slate-700">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Microchip ID</p>
                <p className="font-bold">#982-110-229</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Link to="/live" className="bg-[#1a2b4c] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-[#1a2b4c]/20 flex items-center gap-2">
                <Activity size={20} /> Live Tracking
              </Link>
              <button className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2">
                <Settings size={20} /> Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Heart Rate", value: "120 bpm", icon: <Heart className="text-red-500" />, trend: "+2%", color: "bg-red-50" },
          { label: "Activity", value: "4.2 km", icon: <Activity className="text-blue-500" />, trend: "-5%", color: "bg-blue-50" },
          { label: "Sleep", value: "14.5 hrs", icon: <Activity className="text-indigo-500" />, trend: "+10%", color: "bg-indigo-50" },
          { label: "Calories", value: "320 kcal", icon: <Utensils className="text-orange-500" />, trend: "Normal", color: "bg-orange-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.color} dark:bg-slate-700`}>{stat.icon}</div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.trend}</span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <h4 className="text-2xl font-black">{stat.value}</h4>
          </div>
        ))}
      </div>

      {/* Detailed Info Tabs */}
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <Syringe className="text-[#2dd4bf]" /> Vaccination History
              </h2>
              <button className="text-[#1a2b4c] font-bold text-sm flex items-center gap-1">Add New <Plus size={16} /></button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Rabies Vaccine", date: "Oct 12, 2023", clinic: "PetCare Sài Gòn", status: "Completed" },
                { name: "Feline Viral Rhinotracheitis", date: "Aug 05, 2023", clinic: "Saigon Vet Hospital", status: "Completed" },
                { name: "Feline Calicivirus", date: "Aug 05, 2023", clinic: "Saigon Vet Hospital", status: "Completed" },
              ].map((vax, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-[#2dd4bf]">
                      <Syringe size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{vax.name}</h4>
                      <p className="text-xs text-slate-500">{vax.clinic} • {vax.date}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{vax.status}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <FileText className="text-blue-500" /> Medical Documents
              </h2>
              <button className="text-[#1a2b4c] font-bold text-sm flex items-center gap-1">Upload <Plus size={16} /></button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Blood Test Results", date: "Oct 12, 2023", size: "2.4 MB" },
                { name: "X-Ray Report", date: "Sep 20, 2023", size: "15.8 MB" },
                { name: "Surgery Consent", date: "Jul 15, 2023", size: "1.1 MB" },
                { name: "Prescription - Flu", date: "May 10, 2023", size: "0.5 MB" },
              ].map((doc, i) => (
                <div key={i} className="p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-500">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm truncate max-w-[120px]">{doc.name}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{doc.date}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-10">
          <section className="bg-gradient-to-br from-[#1a2b4c] to-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
            <h2 className="text-xl font-black mb-6 flex items-center gap-3">
              <Utensils size={20} className="text-[#2dd4bf]" /> Nutrition Plan
            </h2>
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <p className="text-[10px] font-black text-[#2dd4bf] uppercase tracking-widest mb-1">Morning (08:00)</p>
                <p className="font-bold text-sm">Royal Canin Indoor (50g)</p>
                <p className="text-xs text-slate-400 mt-1">Mix with warm water for hydration</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <p className="text-[10px] font-black text-[#2dd4bf] uppercase tracking-widest mb-1">Evening (18:00)</p>
                <p className="font-bold text-sm">Wet Food - Tuna & Salmon (85g)</p>
                <p className="text-xs text-slate-400 mt-1">Add 1/2 tablet of Vitamin B</p>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Daily Goal</p>
                  <p className="text-lg font-black">320 kcal</p>
                </div>
                <div className="size-12 rounded-full border-4 border-[#2dd4bf] border-t-transparent flex items-center justify-center">
                  <span className="text-[10px] font-black">75%</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black flex items-center gap-3">
                <Camera size={20} className="text-pink-500" /> Photo Album
              </h2>
              <span className="text-xs font-bold text-slate-400">24 Photos</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2030&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513245538257-075e7071f154?q=80&w=1935&auto=format&fit=crop",
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
                  <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" alt="Pet Album" />
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-500 font-bold text-sm hover:bg-slate-100 transition-colors">View All Photos</button>
          </section>
        </div>
      </div>
    </div>
  );
}
