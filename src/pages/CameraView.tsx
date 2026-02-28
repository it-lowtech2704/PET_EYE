import React, { useState, useEffect, useRef } from 'react';
import {
    Video, Camera, Maximize2, Minimize2, Volume2, VolumeX,
    ShieldCheck, Activity, Clock, Heart, Send, MessageCircle,
    Download, RefreshCw, Wifi, WifiOff, Settings, ChevronRight,
    Thermometer, Utensils, Droplets, AlertCircle, CheckCircle,
    LayoutGrid, Monitor, ArrowLeft, Bell, BellOff, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const CAMERAS = [
    {
        id: 'cam01',
        label: 'CAM 01 – Phòng Lưu Trú VIP',
        pet: 'Miu Miu',
        area: 'Khu VIP – Tầng 2',
        img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop',
        status: 'online',
    },
    {
        id: 'cam02',
        label: 'CAM 02 – Khu Vui Chơi',
        pet: 'Miu Miu',
        area: 'Sân Chơi – Tầng 1',
        img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop',
        status: 'online',
    },
    {
        id: 'cam03',
        label: 'CAM 03 – Phòng Ăn',
        pet: 'Miu Miu',
        area: 'Nhà Bếp – Tầng 1',
        img: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop',
        status: 'online',
    },
    {
        id: 'cam04',
        label: 'CAM 04 – Khu Spa',
        pet: 'Miu Miu',
        area: 'Spa & Grooming',
        img: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2069&auto=format&fit=crop',
        status: 'offline',
    },
];

const CARE_LOGS = [
    { time: '10:30 SA', action: 'Cho ăn', desc: 'Bé đã ăn hết 50g hạt Royal Canin Indoor.', icon: 'utensils', color: '#f97316' },
    { time: '09:15 SA', action: 'Vệ sinh', desc: 'Đã dọn dẹp khay vệ sinh và thay cát mới.', icon: 'droplets', color: '#3b82f6' },
    { time: '08:00 SA', action: 'Kiểm tra sức khoẻ', desc: 'Nhiệt độ 38.5°C – ổn định. Bé rất lanh lợi.', icon: 'activity', color: '#2dd4bf' },
    { time: 'Hôm qua', action: 'Vận động', desc: 'Chơi đùa với cần câu mèo trong 25 phút.', icon: 'heart', color: '#ec4899' },
    { time: 'Hôm qua', action: 'Uống nước', desc: 'Bổ sung nước đầy đủ – 200ml.', icon: 'droplets', color: '#3b82f6' },
];

const CHAT_MESSAGES = [
    { from: 'staff', name: 'Nhân viên Lan', text: 'Chào bạn! Bé Miu Miu đang rất vui và khoẻ. 🐾', time: '10:32 SA' },
    { from: 'me', name: 'Bạn', text: 'Cảm ơn bạn! Bé có ăn đủ bữa không?', time: '10:35 SA' },
    { from: 'staff', name: 'Nhân viên Lan', text: 'Có ạ! Bé ăn rất ngon, hết sạch hạt Royal Canin. Bé còn đòi thêm nữa 😄', time: '10:36 SA' },
    { from: 'me', name: 'Bạn', text: 'Tốt quá! Cảm ơn bạn rất nhiều 🙏', time: '10:38 SA' },
];

/* ─── ICON HELPER ────────────────────────────────────────────────────────── */
function LogIcon({ type, color }: { type: string; color: string }) {
    const cls = `w-3.5 h-3.5`;
    const style = { color };
    if (type === 'utensils') return <Utensils className={cls} style={style} />;
    if (type === 'droplets') return <Droplets className={cls} style={style} />;
    if (type === 'activity') return <Activity className={cls} style={style} />;
    return <Heart className={cls} style={style} />;
}

/* ─── ANIMATED SCAN LINE EFFECT ─────────────────────────────────────────── */
function ScanLine() {
    return (
        <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 5 }}
        >
            {/* Moving scan line */}
            <div className="scan-line absolute left-0 right-0 h-0.5 opacity-20"
                style={{
                    background: 'linear-gradient(90deg, transparent, #2dd4bf, transparent)',
                    animation: 'scanDown 5s linear infinite',
                    top: 0,
                }}
            />
            {/* CRT noise overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                }}
            />
        </div>
    );
}

/* ─── CAMERA CELL ──────────────────────────────────────────────────────── */
interface CamCellProps {
    cam: typeof CAMERAS[0];
    isMain?: boolean;
    isSelected?: boolean;
    onClick?: () => void;
}

function CamCell({ cam, isMain, isSelected, onClick }: CamCellProps) {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const ts = time.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const online = cam.status === 'online';

    return (
        <div
            onClick={onClick}
            className={`relative overflow-hidden w-full h-full cursor-pointer group
        ${isSelected ? 'ring-2 ring-[#2dd4bf]' : 'ring-1 ring-white/10 hover:ring-[#2dd4bf]/60'}
        bg-slate-950 rounded-xl transition-all duration-300`}
        >
            {online ? (
                <>
                    <img
                        src={cam.img}
                        alt={cam.label}
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
                    <ScanLine />
                </>
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900">
                    <WifiOff className="w-8 h-8 text-slate-600" />
                    <p className="text-xs font-bold text-slate-500">Mất kết nối</p>
                </div>
            )}

            {/* Top-left: LIVE badge + cam label */}
            <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                {online ? (
                    <span className="flex items-center gap-1 bg-red-600 text-white text-[9px] font-black px-2 py-1 rounded-full shadow-lg"
                        style={{ animation: 'pulse 2s ease-in-out infinite' }}>
                        <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" style={{ animation: 'pulse 1s ease-in-out infinite' }} />
                        LIVE
                    </span>
                ) : (
                    <span className="flex items-center gap-1 bg-slate-700 text-slate-400 text-[9px] font-black px-2 py-1 rounded-full">
                        OFFLINE
                    </span>
                )}
                {isMain && (
                    <span className="text-[9px] font-black text-white/80 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                        {cam.label}
                    </span>
                )}
            </div>

            {/* Top-right: timestamp */}
            {online && (
                <div className="absolute top-3 right-3 z-10 font-mono text-[9px] font-bold text-white/70 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                    {ts}
                </div>
            )}

            {/* Bottom: area label */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10">
                <div>
                    {!isMain && (
                        <p className="text-[9px] font-black text-white/80 leading-tight truncate max-w-[120px]">{cam.label}</p>
                    )}
                    <p className="text-[8px] font-bold text-white/50">{cam.area}</p>
                </div>
                {isMain && online && (
                    <div className="flex items-center gap-1 text-[9px] font-bold text-[#2dd4bf]">
                        <Wifi className="w-3 h-3" /> HD
                    </div>
                )}
            </div>

            {/* Corner indicator */}
            {isSelected && (
                <div className="absolute inset-0 ring-2 ring-[#2dd4bf] rounded-xl pointer-events-none z-20" />
            )}
        </div>
    );
}

/* ─── MAIN PAGE ────────────────────────────────────────────────────────── */
export default function CameraView() {
    const navigate = useNavigate();
    const [activeCam, setActiveCam] = useState(CAMERAS[0]);
    const [muted, setMuted] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [notified, setNotified] = useState(true);
    const [tab, setTab] = useState<'logs' | 'chat'>('logs');
    const [msg, setMsg] = useState('');
    const [chatMessages, setChatMessages] = useState(CHAT_MESSAGES);
    const [layout, setLayout] = useState<'split' | 'main'>('split');
    const [currentTime, setCurrentTime] = useState(new Date());
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const id = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);

    const sendMessage = () => {
        if (!msg.trim()) return;
        setChatMessages(prev => [...prev, { from: 'me', name: 'Bạn', text: msg.trim(), time: currentTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ' ' + (currentTime.getHours() < 12 ? 'SA' : 'CH') }]);
        setMsg('');
        // Simulate staff reply after 2s
        setTimeout(() => {
            setChatMessages(prev => [...prev, { from: 'staff', name: 'Nhân viên Lan', text: 'Cảm ơn bạn! Chúng tôi sẽ kiểm tra ngay ạ. 🐾', time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ' ' + (new Date().getHours() < 12 ? 'SA' : 'CH') }]);
        }, 2000);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-950 overflow-hidden">
            <style>{`
        @keyframes scanDown {
          0% { top: 0; }
          100% { top: 100%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .scan-line { animation: scanDown 5s linear infinite; }
      `}</style>

            {/* ── HEADER ────────────────────────────────────────────────── */}
            <header className="flex items-center gap-4 px-5 py-3 bg-slate-900 border-b border-white/10 shrink-0">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                    <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                    <div className="relative flex items-center">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <Video className="w-5 h-5 text-[#2dd4bf] ml-2" />
                    </div>
                    <div>
                        <h1 className="text-sm font-black text-white leading-none">Camera Lưu Trú</h1>
                        <p className="text-[10px] text-slate-400 mt-0.5">Peteye PetCare · {CAMERAS.filter(c => c.status === 'online').length}/{CAMERAS.length} camera online</p>
                    </div>
                </div>

                {/* Date+time */}
                <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#2dd4bf]" />
                    {currentTime.toLocaleDateString('vi-VN', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' })}
                    &nbsp;·&nbsp;
                    <span className="text-white font-bold">{currentTime.toLocaleTimeString('vi-VN')}</span>
                </div>

                {/* Layout toggle */}
                <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/10">
                    <button
                        onClick={() => setLayout('main')}
                        className={`p-1.5 rounded-lg transition-all ${layout === 'main' ? 'bg-[#2dd4bf] text-white' : 'text-slate-400 hover:text-white'}`}
                        title="Xem chính"
                    >
                        <Monitor className="w-3.5 h-3.5" />
                    </button>
                    <button
                        onClick={() => setLayout('split')}
                        className={`p-1.5 rounded-lg transition-all ${layout === 'split' ? 'bg-[#2dd4bf] text-white' : 'text-slate-400 hover:text-white'}`}
                        title="Xem lưới"
                    >
                        <LayoutGrid className="w-3.5 h-3.5" />
                    </button>
                </div>

                <button
                    onClick={() => setNotified(!notified)}
                    className={`p-2 rounded-xl border transition-all ${notified ? 'bg-[#2dd4bf]/10 border-[#2dd4bf]/30 text-[#2dd4bf]' : 'bg-white/5 border-white/10 text-slate-400'}`}
                    title="Thông báo"
                >
                    {notified ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
                </button>
            </header>

            {/* ── BODY ──────────────────────────────────────────────────── */}
            <div className="flex flex-1 overflow-hidden">

                {/* LEFT: Camera Area */}
                <main className={`flex flex-col gap-3 p-3 overflow-hidden transition-all duration-500 ${fullscreen ? 'fixed inset-0 z-50 bg-black p-0 gap-0' : 'flex-1'}`}>

                    {/* Main / Primary Camera */}
                    <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${layout === 'split' ? 'flex-[2]' : 'flex-1'}`}>
                        {/* LIVE large camera */}
                        <div className="absolute inset-0">
                            {activeCam.status === 'online' ? (
                                <>
                                    <img
                                        key={activeCam.id}
                                        src={activeCam.img}
                                        className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
                                        alt="Live feed"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/50" />
                                    <ScanLine />
                                </>
                            ) : (
                                <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center gap-4">
                                    <WifiOff className="w-12 h-12 text-slate-600" />
                                    <p className="text-slate-500 font-bold">Camera đang ngoại tuyến</p>
                                </div>
                            )}
                        </div>

                        {/* Overlays – top left */}
                        <div className="absolute top-4 left-4 flex items-center gap-3 z-10">
                            <div className="flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-xl shadow-red-900/50 animate-pulse">
                                <span className="w-2 h-2 bg-white rounded-full" />LIVE
                            </div>
                            <div className="bg-black/50 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full border border-white/10 hidden sm:flex items-center gap-1.5">
                                <Camera className="w-3 h-3 text-[#2dd4bf]" />
                                {activeCam.label}
                            </div>
                        </div>

                        {/* Top right controls */}
                        <div className="absolute top-4 right-4 flex gap-2 z-10">
                            <button
                                onClick={() => setMuted(!muted)}
                                className="p-2.5 bg-black/50 backdrop-blur-md text-white rounded-xl border border-white/10 hover:bg-black/70 transition-all"
                            >
                                {muted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setFullscreen(!fullscreen)}
                                className="p-2.5 bg-black/50 backdrop-blur-md text-white rounded-xl border border-white/10 hover:bg-black/70 transition-all"
                            >
                                {fullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                            </button>
                            <button className="p-2.5 bg-black/50 backdrop-blur-md text-white rounded-xl border border-white/10 hover:bg-black/70 transition-all">
                                <Download className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Bottom: action bar (visible on hover) */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 flex items-center justify-between">
                            <div className="text-xs font-bold text-white/60">
                                <span className="font-mono">{currentTime.toLocaleTimeString('vi-VN')}</span>
                                &nbsp;·&nbsp;{activeCam.area}
                            </div>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-full border border-white/20 text-xs font-bold hover:bg-white/20 transition-all">
                                    <Camera className="w-3.5 h-3.5" /> Chụp
                                </button>
                                <button className="flex items-center gap-1.5 bg-[#2dd4bf] text-white px-5 py-2 rounded-full text-xs font-black shadow-lg shadow-[#2dd4bf]/30 hover:scale-105 transition-all">
                                    <MessageCircle className="w-3.5 h-3.5" /> Gọi nhân viên
                                </button>
                            </div>
                        </div>

                        {/* Fullscreen close hint */}
                        {fullscreen && (
                            <button
                                onClick={() => setFullscreen(false)}
                                className="absolute top-4 left-4 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-2 rounded-xl border border-white/10"
                            >
                                <Minimize2 className="w-4 h-4" /> Thu nhỏ
                            </button>
                        )}
                    </div>

                    {/* Thumbnail row – only in split layout */}
                    {layout === 'split' && (
                        <div className="flex gap-3 flex-[1] max-h-36">
                            {CAMERAS.map(cam => (
                                <div key={cam.id} className="flex-1" onClick={() => setActiveCam(cam)}>
                                    <CamCell cam={cam} isSelected={activeCam.id === cam.id} />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Camera carousel in main layout */}
                    {layout === 'main' && (
                        <div className="flex gap-2 shrink-0 overflow-x-auto pb-1 scrollbar-hide">
                            {CAMERAS.map(cam => (
                                <button
                                    key={cam.id}
                                    onClick={() => setActiveCam(cam)}
                                    className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all ${activeCam.id === cam.id ? 'bg-[#2dd4bf]/20 border-[#2dd4bf] text-[#2dd4bf]' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'}`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${cam.status === 'online' ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`} />
                                    {cam.label.split('–')[0].trim()}
                                </button>
                            ))}
                        </div>
                    )}
                </main>

                {/* RIGHT: Info Panel */}
                {!fullscreen && (
                    <aside className="w-[340px] xl:w-[380px] shrink-0 bg-slate-900 border-l border-white/10 flex flex-col hidden lg:flex">

                        {/* Pet header */}
                        <div className="p-5 border-b border-white/10 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#2dd4bf]/30 shadow-lg shadow-[#2dd4bf]/10 shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop"
                                        className="w-full h-full object-cover"
                                        alt="Miu Miu"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-lg font-black text-white">Miu Miu</h2>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                                        <ShieldCheck className="w-3 h-3 text-[#2dd4bf]" />
                                        Đang được chăm sóc
                                    </p>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-[9px] font-black text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                                        AN TOÀN
                                    </span>
                                    <span className="text-[9px] text-slate-500 font-medium">Ngày 2/3 lưu trú</span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { label: 'Nhịp tim', value: '115', unit: 'bpm', icon: <Activity className="w-3 h-3" />, color: '#2dd4bf' },
                                    { label: 'Nhiệt độ', value: '38.5', unit: '°C', icon: <Thermometer className="w-3 h-3" />, color: '#f97316' },
                                    { label: 'Thời gian', value: '2', unit: 'ngày', icon: <Clock className="w-3 h-3" />, color: '#a78bfa' },
                                ].map(s => (
                                    <div key={s.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
                                        <div className="flex items-center gap-1 mb-2" style={{ color: s.color }}>
                                            {s.icon}
                                            <span className="text-[8px] font-black uppercase tracking-wider">{s.label}</span>
                                        </div>
                                        <p className="text-base font-black text-white leading-none">
                                            {s.value} <span className="text-[9px] font-medium text-slate-400">{s.unit}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Upcoming meal */}
                            <div className="flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 rounded-xl px-3 py-2.5">
                                <Utensils className="w-4 h-4 text-orange-400 shrink-0" />
                                <div>
                                    <p className="text-[10px] font-black text-orange-300 uppercase tracking-wider">Bữa tiếp theo</p>
                                    <p className="text-xs text-white font-bold">12:00 CH – Hạt Royal Canin 50g</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-orange-400 ml-auto" />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-white/10 shrink-0">
                            {(['logs', 'chat'] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className={`flex-1 py-3.5 text-[10px] font-black uppercase tracking-widest transition-colors ${tab === t ? 'text-[#2dd4bf] border-b-2 border-[#2dd4bf]' : 'text-slate-500 hover:text-white'}`}
                                >
                                    {t === 'logs' ? 'Nhật ký chăm sóc' : 'Trò chuyện'}
                                </button>
                            ))}
                        </div>

                        {/* Tab content */}
                        <div className="flex-1 overflow-y-auto scrollbar-hide">
                            {tab === 'logs' && (
                                <div className="p-4 space-y-1">
                                    {CARE_LOGS.map((log, i) => (
                                        <div key={i} className="flex gap-3 py-3 border-b border-white/5 last:border-0">
                                            <div className="flex flex-col items-center gap-1 pt-0.5">
                                                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                    <LogIcon type={log.icon} color={log.color} />
                                                </div>
                                                {i < CARE_LOGS.length - 1 && <div className="w-px flex-1 bg-white/10 min-h-[16px]" />}
                                            </div>
                                            <div className="flex-1 min-w-0 pb-2">
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="text-xs font-black text-white">{log.action}</span>
                                                    <span className="text-[9px] font-bold text-slate-500 shrink-0">{log.time}</span>
                                                </div>
                                                <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{log.desc}</p>
                                            </div>
                                        </div>
                                    ))}

                                    {/* All good banner */}
                                    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2.5 mt-3">
                                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                                        <p className="text-[11px] text-green-300 font-bold">Mọi hoạt động đều ổn định hôm nay!</p>
                                    </div>
                                </div>
                            )}

                            {tab === 'chat' && (
                                <div className="flex flex-col h-full">
                                    <div className="flex-1 p-4 space-y-3 overflow-y-auto scrollbar-hide">
                                        {chatMessages.map((m, i) => (
                                            <div key={i} className={`flex gap-2 ${m.from === 'me' ? 'flex-row-reverse' : ''}`}>
                                                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[9px] font-black ${m.from === 'staff' ? 'bg-[#2dd4bf]/20 text-[#2dd4bf] border border-[#2dd4bf]/30' : 'bg-primary/60 text-white border border-white/10'}`}>
                                                    {m.name.charAt(0)}
                                                </div>
                                                <div className={`max-w-[75%] ${m.from === 'me' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                                                    <p className={`text-[9px] font-bold ${m.from === 'staff' ? 'text-[#2dd4bf]' : 'text-slate-400'}`}>{m.name}</p>
                                                    <div className={`px-3 py-2 rounded-2xl text-xs leading-relaxed font-medium ${m.from === 'me' ? 'bg-[#2dd4bf] text-white rounded-tr-sm' : 'bg-white/8 text-white border border-white/10 rounded-tl-sm'}`}>
                                                        {m.text}
                                                    </div>
                                                    <p className="text-[8px] text-slate-600">{m.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <div ref={chatEndRef} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Message box */}
                        <div className="p-4 border-t border-white/10 bg-black/20 shrink-0">
                            <div className="flex items-center gap-2 bg-white/5 rounded-2xl border border-white/10 p-1.5">
                                <input
                                    className="flex-1 bg-transparent text-xs font-medium text-white placeholder-slate-500 focus:outline-none px-3"
                                    placeholder={tab === 'chat' ? 'Nhắn tin cho nhân viên…' : 'Tìm kiếm nhật ký…'}
                                    value={msg}
                                    onChange={e => setMsg(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && sendMessage()}
                                />
                                <button
                                    onClick={sendMessage}
                                    className="w-8 h-8 flex items-center justify-center bg-[#2dd4bf] text-white rounded-xl hover:scale-110 transition-all shadow-lg shadow-[#2dd4bf]/20"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
}
