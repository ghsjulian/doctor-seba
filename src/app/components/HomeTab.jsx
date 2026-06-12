import React from 'react';
import {
  Building2,
  Stethoscope,
  Star,
  ChevronRight,
  MapPin,
  HeartPulse,
  ShieldCheck,
  Activity,
  Phone,
  Pill,
  FlaskConical,
  User,
} from 'lucide-react';
import {
  blobColors,
  hospitalTypes,
  doctorTypes,
  featuredDoctors,
  nearbyHospitals,
  quickServices,
  quickStats,
} from './mockData';

const quickStatIcons = [Stethoscope, Building2, Pill, FlaskConical];

// Hero Banner
const HeroBanner = ({ lang }) => (
  <div className="mx-4 mt-4 rounded-2xl overflow-hidden shadow-md relative" style={{ height: '130px' }}>
    <img
      src="https://images.unsplash.com/photo-1723056416893-e38cdbd35685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700"
      alt="Doctor"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20]/90 via-[#2E7D32]/70 to-transparent" />
    <div className="absolute inset-0 p-4 flex flex-col justify-center">
      <p className="text-green-200 mb-0.5" style={{ fontSize: '10px' }}>
        {lang === 'en' ? 'Book your appointment today' : 'আজই অ্যাপয়েন্টমেন্ট নিন'}
      </p>
      <h3 className="text-white leading-snug mb-2.5" style={{ fontWeight: 700, fontSize: '15px' }}>
        {lang === 'en' ? 'Find Specialist\nDoctors Near You' : 'আপনার কাছের\nবিশেষজ্ঞ ডাক্তার'}
      </h3>
      <button className="self-start bg-white text-[#2E7D32] text-[11px] px-3.5 py-1.5 rounded-full shadow-md active:scale-95 transition-transform" style={{ fontWeight: 700 }}>
        {lang === 'en' ? 'View Now →' : 'এখনই দেখুন →'}
      </button>
    </div>
  </div>
);

// Quick Stats
const QuickStats = ({ lang }) => (
  <div className="mx-4 mt-4 grid grid-cols-4 gap-2">
    {quickStats.map((s, i) => {
      const Icon = quickStatIcons[i];
      const color = blobColors[i === 3 ? 5 : i];
      return (
        <div
          key={s.id}
          className="bg-white rounded-2xl p-2.5 flex flex-col items-center shadow-sm border border-gray-100 active:scale-95 transition-transform cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-1" style={{ backgroundColor: color.bg }}>
            <Icon size={15} strokeWidth={2} style={{ color: color.icon }} />
          </div>
          <span className="text-gray-800" style={{ fontWeight: 700, fontSize: '12px' }}>{s.value}</span>
          <span className="text-gray-400" style={{ fontSize: '9px' }}>
            {lang === 'en' ? s.labelEn : s.labelBn}
          </span>
        </div>
      );
    })}
  </div>
);

// Blob Card (for hospital/doctor category)
const BlobCard = ({ title, Icon, index }) => {
  const palette = blobColors[index % blobColors.length];
  const shapes = [
    '60% 40% 30% 70% / 60% 30% 70% 40%',
    '40% 60% 70% 30% / 50% 60% 30% 60%',
    '50% 50% 20% 80% / 25% 80% 20% 75%',
    '30% 70% 70% 30% / 30% 30% 70% 70%',
    '65% 35% 45% 55% / 40% 55% 45% 60%',
  ];
  return (
    <button className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-sm border border-gray-100 w-[92px] shrink-0 snap-start active:scale-95 transition-transform">
      <div
        className="w-12 h-12 flex items-center justify-center mb-2"
        style={{ backgroundColor: palette.bg, borderRadius: shapes[index % shapes.length] }}
      >
        <Icon size={24} strokeWidth={1.8} style={{ color: palette.icon }} />
      </div>
      <span className="text-[11px] text-gray-700 text-center leading-snug whitespace-pre-line" style={{ fontWeight: 600 }}>
        {title}
      </span>
    </button>
  );
};

// Horizontal Scroll Section
const ScrollSection = ({ titleBn, titleEn, Icon, items, lang }) => (
  <div className="mb-5">
    <div className="flex items-center justify-between mb-2.5 px-4">
      <div className="flex items-center gap-2">
        <Icon size={17} style={{ color: '#2E7D32' }} strokeWidth={2.5} />
        <h2 style={{ fontWeight: 700, fontSize: '14px', color: '#1B5E20' }}>
          {lang === 'en' ? titleEn : titleBn}
        </h2>
      </div>
      <button className="flex items-center gap-0.5 text-[#388E3C]" style={{ fontSize: '11px', fontWeight: 500 }}>
        {lang === 'en' ? 'See All' : 'সব দেখুন'} <ChevronRight size={12} />
      </button>
    </div>
    <div className="flex overflow-x-auto gap-2.5 px-4 pb-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {items.map((item, i) => (
        <BlobCard
          key={item.id}
          title={lang === 'en' ? item.titleEn : item.title}
          Icon={item.icon}
          index={i}
        />
      ))}
      <div className="w-1 shrink-0" aria-hidden="true" />
    </div>
  </div>
);

// Quick Services (Ambulance, Blood Bank, Pharmacy)
const QuickServices = ({ lang }) => (
  <div className="mb-5 px-4">
    <div className="flex items-center gap-2 mb-2.5">
      <HeartPulse size={17} style={{ color: '#2E7D32' }} strokeWidth={2.5} />
      <h2 style={{ fontWeight: 700, fontSize: '14px', color: '#1B5E20' }}>
        {lang === 'en' ? 'Quick Services' : 'দ্রুত সেবা'}
      </h2>
    </div>
    <div className="grid grid-cols-3 gap-2.5">
      {quickServices.map((svc) => {
        const SvcIcon = svc.icon;
        return (
          <button
            key={svc.id}
            className="relative overflow-hidden rounded-2xl h-[90px] shadow-md active:scale-95 transition-transform"
          >
            <img src={svc.img} alt={lang === 'en' ? svc.titleEn : svc.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-b ${svc.bg} opacity-80`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
              <SvcIcon size={22} className="text-white" strokeWidth={1.8} />
              <span className="text-white text-[11px] text-center" style={{ fontWeight: 700 }}>
                {lang === 'en' ? svc.titleEn : svc.title}
              </span>
              <span className="text-white/80 text-[9px]">
                {lang === 'en' ? svc.subtitleEn : svc.subtitle}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

// Featured Doctors
const FeaturedDoctors = ({ lang }) => (
  <div className="mb-5">
    <div className="flex items-center justify-between mb-2.5 px-4">
      <div className="flex items-center gap-2">
        <Star size={17} style={{ color: '#2E7D32' }} strokeWidth={2.5} />
        <h2 style={{ fontWeight: 700, fontSize: '14px', color: '#1B5E20' }}>
          {lang === 'en' ? 'Featured Doctors' : 'বিশেষজ্ঞ ডাক্তার'}
        </h2>
      </div>
      <button className="flex items-center gap-0.5 text-[#388E3C]" style={{ fontSize: '11px', fontWeight: 500 }}>
        {lang === 'en' ? 'See All' : 'সব দেখুন'} <ChevronRight size={12} />
      </button>
    </div>
    <div className="px-4 space-y-2.5">
      {featuredDoctors.map((doc) => (
        <div key={doc.id} className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100 flex items-center gap-3 active:bg-gray-50 transition-colors">
          <div
            className="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 shadow-sm overflow-hidden"
            style={{ width: 52, height: 52, background: 'linear-gradient(135deg, #A5D6A7, #2E7D32)' }}
          >
            <User size={24} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-gray-800 truncate" style={{ fontWeight: 600, fontSize: '13px' }}>
                {lang === 'en' ? doc.nameEn : doc.name}
              </span>
              {doc.available && (
                <span className="bg-emerald-50 text-emerald-600 shrink-0 rounded-full px-1.5 py-0.5" style={{ fontSize: '9px', fontWeight: 600 }}>
                  {lang === 'en' ? '• Online' : '• অনলাইন'}
                </span>
              )}
            </div>
            <p style={{ fontSize: '11px', fontWeight: 500, color: '#388E3C' }} className="mb-0.5">
              {lang === 'en' ? doc.specialtyEn : doc.specialty}
            </p>
            <div className="flex items-center gap-2 text-gray-400" style={{ fontSize: '10px' }}>
              <span className="flex items-center gap-0.5">
                <MapPin size={8} />
                {lang === 'en' ? doc.hospitalEn : doc.hospital}
              </span>
              <span>•</span>
              <span>{lang === 'en' ? doc.expEn : doc.exp} {lang === 'en' ? 'exp.' : 'অভিজ্ঞ'}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <div className="flex items-center gap-0.5 bg-amber-50 px-1.5 py-0.5 rounded-full">
              <Star size={8} className="text-amber-500 fill-amber-500" />
              <span className="text-amber-700" style={{ fontSize: '10px', fontWeight: 600 }}>{doc.rating}</span>
              <span className="text-gray-400" style={{ fontSize: '9px' }}>({doc.reviews})</span>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2E7D32' }}>{doc.fee}</span>
            <button className="bg-[#2E7D32] text-white rounded-full px-2.5 py-1 shadow-sm active:scale-95 transition-transform" style={{ fontSize: '10px', fontWeight: 600 }}>
              {lang === 'en' ? 'Book' : 'বুক করুন'}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Nearby Hospitals
const NearbyHospitals = ({ lang }) => (
  <div className="mb-5">
    <div className="flex items-center justify-between mb-2.5 px-4">
      <div className="flex items-center gap-2">
        <Building2 size={17} style={{ color: '#2E7D32' }} strokeWidth={2.5} />
        <h2 style={{ fontWeight: 700, fontSize: '14px', color: '#1B5E20' }}>
          {lang === 'en' ? 'Nearby Hospitals' : 'কাছের হাসপাতাল'}
        </h2>
      </div>
      <button className="flex items-center gap-0.5 text-[#388E3C]" style={{ fontSize: '11px', fontWeight: 500 }}>
        {lang === 'en' ? 'Map' : 'মানচিত্র'} <ChevronRight size={12} />
      </button>
    </div>
    <div className="px-4 space-y-2.5">
      {nearbyHospitals.map((h) => (
        <div key={h.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex active:bg-gray-50 transition-colors">
          <img src={h.img} alt={lang === 'en' ? h.nameEn : h.name} className="w-20 h-20 object-cover shrink-0" style={{ width: 80 }} />
          <div className="flex-1 p-3 min-w-0">
            <div className="flex items-start justify-between gap-1 mb-1">
              <span className="text-gray-800 leading-tight" style={{ fontWeight: 600, fontSize: '12px' }}>
                {lang === 'en' ? h.nameEn : h.name}
              </span>
              <span
                className={`shrink-0 rounded-full px-1.5 py-0.5 ${h.open ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}
                style={{ fontSize: '9px', fontWeight: 600 }}
              >
                {h.open ? (lang === 'en' ? '• Open' : '• খোলা') : (lang === 'en' ? '• Closed' : '• বন্ধ')}
              </span>
            </div>
            <span className="inline-block bg-blue-50 text-blue-600 rounded-full px-2 py-0.5 mb-1.5" style={{ fontSize: '9px', fontWeight: 600 }}>
              {lang === 'en' ? h.typeEn : h.type}
            </span>
            <div className="flex items-center gap-3 text-gray-400" style={{ fontSize: '10px' }}>
              <span className="flex items-center gap-0.5">
                <MapPin size={9} />{lang === 'en' ? h.distanceEn : h.distance}
              </span>
              <span className="flex items-center gap-0.5">
                <HeartPulse size={9} />{h.beds} {lang === 'en' ? 'beds' : 'বেড'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Appointment CTA Banner
const AppointmentCTA = ({ lang }) => (
  <div className="mx-4 mb-5 rounded-2xl bg-gradient-to-r from-[#1B5E20] to-[#388E3C] p-4 flex items-center gap-3 shadow-lg active:scale-[0.98] transition-transform cursor-pointer">
    <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
      <Activity size={20} className="text-white" />
    </div>
    <div className="flex-1">
      <p className="text-white" style={{ fontWeight: 700, fontSize: '13px' }}>
        {lang === 'en' ? 'Book Appointment' : 'অ্যাপয়েন্টমেন্ট নিন'}
      </p>
      <p className="text-green-200" style={{ fontSize: '10px' }}>
        {lang === 'en' ? 'See a doctor from home, online or in-person' : 'ঘরে বসেই ডাক্তার দেখান, অনলাইন বা সরাসরি'}
      </p>
    </div>
    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
      <ChevronRight size={16} className="text-[#2E7D32]" />
    </div>
  </div>
);

// Emergency Banner
const EmergencyBanner = ({ lang }) => (
  <div className="mx-4 mb-5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-500 p-4 flex items-center gap-3 shadow-lg active:scale-[0.98] transition-transform cursor-pointer">
    <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
      <Activity size={20} className="text-white" />
    </div>
    <div className="flex-1">
      <p className="text-white" style={{ fontWeight: 700, fontSize: '13px' }}>
        {lang === 'en' ? 'Emergency — 999' : 'জরুরি সেবা — ৯৯৯'}
      </p>
      <p className="text-red-100" style={{ fontSize: '10px' }}>
        {lang === 'en' ? 'Call now for any emergency' : 'যেকোনো জরুরি অবস্থায় এখনই কল করুন'}
      </p>
    </div>
    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
      <Phone size={16} className="text-red-500" />
    </div>
  </div>
);

// Health Tip
const HealthTip = ({ lang }) => (
  <div className="mx-4 mb-5 rounded-2xl bg-[#E8F5E9] border border-green-200 p-3.5 flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-[#2E7D32] flex items-center justify-center shrink-0">
      <ShieldCheck size={18} className="text-white" />
    </div>
    <div className="flex-1">
      <p className="text-[#1B5E20]" style={{ fontWeight: 700, fontSize: '12px' }}>
        {lang === 'en' ? "Today's Health Tip" : 'আজকের স্বাস্থ্য টিপস'}
      </p>
      <p className="text-gray-600" style={{ fontSize: '10px', lineHeight: '1.4' }}>
        {lang === 'en'
          ? 'Drink 8 glasses of water daily and exercise regularly.'
          : 'প্রতিদিন ৮ গ্লাস পানি পান করুন এবং নিয়মিত ব্যায়াম করুন।'}
      </p>
    </div>
    <ChevronRight size={14} style={{ color: '#388E3C' }} className="shrink-0" />
  </div>
);

// Main HomeTab
const HomeTab = ({ lang }) => (
  <>
    <HeroBanner lang={lang} />
    <QuickStats lang={lang} />

    <div className="mx-4 my-4 h-px bg-gray-200" />

    <ScrollSection
      titleBn="হাসপাতালের ধরন"
      titleEn="Hospital Types"
      Icon={Building2}
      items={hospitalTypes}
      lang={lang}
    />

    <div className="mx-4 mb-4 h-px bg-gray-200" />

    <ScrollSection
      titleBn="ডাক্তারের ধরন"
      titleEn="Doctor Types"
      Icon={Stethoscope}
      items={doctorTypes}
      lang={lang}
    />

    <div className="mx-4 mb-4 h-px bg-gray-200" />

    <QuickServices lang={lang} />
    <AppointmentCTA lang={lang} />
    <FeaturedDoctors lang={lang} />
    <NearbyHospitals lang={lang} />
    <HealthTip lang={lang} />
    <EmergencyBanner lang={lang} />

    <div className="h-4" />
  </>
);

export { HomeTab };
