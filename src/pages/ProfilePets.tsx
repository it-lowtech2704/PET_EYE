import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileLayout } from './Profile';

const PETS = [
    {
        id: 1,
        name: 'Lucky',
        species: 'Chó',
        breed: 'Golden Retriever',
        age: 3,
        weight: '28 kg',
        gender: 'Đực',
        color: 'Vàng',
        vaccinated: true,
        img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=300&auto=format&fit=crop',
        nextVaccine: '15/06/2026',
        microchip: 'VN-2023-001845',
    },
    {
        id: 2,
        name: 'Miu',
        species: 'Mèo',
        breed: 'British Shorthair',
        age: 2,
        weight: '4.5 kg',
        gender: 'Cái',
        color: 'Xanh xám',
        vaccinated: false,
        img: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=300&auto=format&fit=crop',
        nextVaccine: '—',
        microchip: 'Chưa gắn',
    },
];

export default function ProfilePets() {
    const [showAdd, setShowAdd] = useState(false);
    const [petName, setPetName] = useState('');
    const [species, setSpecies] = useState('Chó');

    return (
        <ProfileLayout>
            <main className="flex-1 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">Thú cưng của tôi</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Quản lý hồ sơ sức khỏe cho các bé cưng.</p>
                    </div>
                    <button
                        onClick={() => setShowAdd(!showAdd)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#1a2b4c] text-white font-bold rounded-xl hover:bg-[#243d6b] transition-colors shadow-lg text-sm"
                    >
                        <span className="material-symbols-outlined text-base">add</span>
                        Thêm thú cưng
                    </button>
                </div>

                {/* Add pet form */}
                {showAdd && (
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-dashed border-[#1a2b4c]/40 p-6 shadow-sm">
                        <h2 className="font-bold text-slate-800 dark:text-slate-100 mb-4">Thêm thú cưng mới</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-1 block uppercase tracking-wider">Tên bé cưng</label>
                                <input
                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:ring-1 focus:ring-[#1a2b4c]"
                                    placeholder="vd: Bông"
                                    value={petName}
                                    onChange={e => setPetName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-1 block uppercase tracking-wider">Loài</label>
                                <select
                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none"
                                    value={species}
                                    onChange={e => setSpecies(e.target.value)}
                                >
                                    <option>Chó</option>
                                    <option>Mèo</option>
                                    <option>Thỏ</option>
                                    <option>Chim</option>
                                    <option>Khác</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-1 block uppercase tracking-wider">Giống</label>
                                <input
                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:ring-1 focus:ring-[#1a2b4c]"
                                    placeholder="vd: Poodle"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={() => setShowAdd(false)}
                                className="px-6 py-2.5 bg-[#1a2b4c] text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
                            >
                                Lưu thú cưng
                            </button>
                            <button
                                onClick={() => setShowAdd(false)}
                                className="px-6 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                )}

                {/* Pet cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {PETS.map(pet => (
                        <div key={pet.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                            <div className="flex gap-4 p-5 border-b border-slate-100 dark:border-slate-800">
                                <img
                                    src={pet.img}
                                    alt={pet.name}
                                    className="size-20 rounded-xl object-cover shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <h3 className="font-black text-slate-900 dark:text-slate-100 text-lg">{pet.name}</h3>
                                            <p className="text-slate-500 text-sm">{pet.breed} • {pet.species}</p>
                                        </div>
                                        <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${pet.vaccinated ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400'}`}>
                                            {pet.vaccinated ? '✓ Đã tiêm' : '! Chưa tiêm'}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {[`${pet.age} tuổi`, pet.weight, pet.gender, pet.color].map(tag => (
                                            <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 grid grid-cols-2 gap-3">
                                {[
                                    { label: 'Tiêm phòng tiếp theo', value: pet.nextVaccine, icon: 'vaccines' },
                                    { label: 'Mã microchip', value: pet.microchip, icon: 'qr_code' },
                                ].map(info => (
                                    <div key={info.label} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                                            <span className="material-symbols-outlined text-sm">{info.icon}</span>
                                            {info.label}
                                        </div>
                                        <p className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate">{info.value}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="px-5 pb-5 flex gap-2">
                                <Link
                                    to={`/clinic/1`}
                                    className="flex-1 py-2 text-center bg-[#1a2b4c] text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
                                >
                                    Đặt lịch khám
                                </Link>
                                <button className="flex-1 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    Hồ sơ sức khỏe
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </ProfileLayout>
    );
}
