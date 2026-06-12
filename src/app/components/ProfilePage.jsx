import React, { useState, useRef } from 'react';
import {
  User,
  Camera,
  Upload,
  Trash2,
  HeartPulse,
  Activity,
  Calendar,
  Clock,
  Pill,
  FlaskConical,
  Bell,
  ShieldCheck,
  Phone,
  ChevronRight,
} from 'lucide-react';

const profileMenuItems = [
  { id: 1, Icon: Calendar, labelBn: 'আমার অ্যাপয়েন্টমেন্ট', labelEn: 'My Appointments', count: '৩', color: '#2E7D32' },
  { id: 2, Icon: Clock, labelBn: 'চিকিৎসার ইতিহাস', labelEn: 'Medical History', count: '১২', color: '#1565C0' },
  { id: 3, Icon: Pill, labelBn: 'প্রেসক্রিপশন', labelEn: 'Prescription', count: '৫', color: '#6A1B9A' },
  { id: 4, Icon: FlaskConical, labelBn: 'ল্যাব রিপোর্ট', labelEn: 'Lab Reports', count: '৮', color: '#E65100' },
  { id: 5, Icon: Bell, labelBn: 'বিজ্ঞপ্তি সেটিংস', labelEn: 'Notification Settings', count: null, color: '#F57F17' },
  { id: 6, Icon: ShieldCheck, labelBn: 'গোপনীয়তা ও নিরাপত্তা', labelEn: 'Privacy & Security', count: null, color: '#00695C' },
];

const ProfilePage = ({ lang }) => {
  const [showPhotoMenu, setShowPhotoMenu] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const fileInputRef = useRef(null);

  const t = {
    name: 'জীবন রাজবংশী',
    phone: '০১৩১৪৮৭৮০৩৫',
    email: 'jibon@email.com',
    editProfile: lang === 'en' ? 'Edit Profile' : 'প্রোফাইল সম্পাদনা করুন',
    profilePicture: lang === 'en' ? 'Profile Picture' : 'প্রোফাইল ছবি',
    takePhoto: lang === 'en' ? 'Take from Camera' : 'ক্যামেরা থেকে তুলুন',
    chooseGallery: lang === 'en' ? 'Choose from Gallery' : 'গ্যালারি থেকে নির্বাচন করুন',
    removePhoto: lang === 'en' ? 'Remove Photo' : 'ছবি মুছে ফেলুন',
    healthRecords: lang === 'en' ? 'Health Records' : 'স্বাস্থ্য রেকর্ড',
    lastCheckup: lang === 'en' ? 'Last Checkup' : 'শেষ চেকআপ',
    heartRate: lang === 'en' ? 'Heart Rate' : 'হৃদস্পন্দন',
    bloodPressure: lang === 'en' ? 'Blood Pressure' : 'রক্তচাপ',
    emergencyContacts: lang === 'en' ? 'Emergency Contacts' : 'জরুরি যোগাযোগ',
    nationalEmergency: lang === 'en' ? 'National Emergency Service' : 'জাতীয় জরুরি সেবা',
    available247: lang === 'en' ? '24/7 Available' : '২৪/৭ উপলব্ধ',
    ambulance: lang === 'en' ? 'Ambulance Service' : 'অ্যাম্বুলেন্স সেবা',
    fastResponse: lang === 'en' ? 'Fast Response' : 'দ্রুত সাড়া',
    callNow: lang === 'en' ? 'Call' : 'কল করুন',
    logout: lang === 'en' ? 'Log Out' : 'লগ আউট',
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setShowPhotoMenu(false);
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(null);
    setShowPhotoMenu(false);
  };

  return (
    <div className="px-4 pt-4 pb-20">
      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
        <div className="flex items-center gap-4 mb-4">
          {/* Avatar */}
          <div className="relative">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-md overflow-hidden"
              style={{ background: profilePhoto ? 'transparent' : 'linear-gradient(135deg, #A5D6A7, #2E7D32)' }}
            >
              {profilePhoto ? (
                <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User size={36} className="text-white" />
              )}
            </div>

            {/* Camera Button */}
            <button
              onClick={() => setShowPhotoMenu(!showPhotoMenu)}
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center shadow-lg border-2 border-white active:scale-95 transition-transform"
            >
              <Camera size={14} className="text-white" />
            </button>

            {/* Photo Menu */}
            {showPhotoMenu && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowPhotoMenu(false)} />
                <div className="absolute left-0 top-24 bg-white rounded-xl shadow-2xl overflow-hidden z-20 w-56 border border-gray-100">
                  <div className="bg-[#2E7D32] px-3 py-2">
                    <p className="text-white" style={{ fontSize: '11px', fontWeight: 600 }}>{t.profilePicture}</p>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg active:bg-gray-100 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50">
                        <Camera size={16} className="text-blue-600" />
                      </div>
                      <span className="text-gray-800" style={{ fontSize: '13px', fontWeight: 500 }}>{t.takePhoto}</span>
                    </button>
                    <button
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg active:bg-gray-100 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-green-50">
                        <Upload size={16} className="text-green-600" />
                      </div>
                      <span className="text-gray-800" style={{ fontSize: '13px', fontWeight: 500 }}>{t.chooseGallery}</span>
                    </button>
                    {profilePhoto && (
                      <button
                        onClick={handleRemovePhoto}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg active:bg-gray-100 transition-colors border-t border-gray-100"
                      >
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-red-50">
                          <Trash2 size={16} className="text-red-600" />
                        </div>
                        <span className="text-red-600" style={{ fontSize: '13px', fontWeight: 500 }}>{t.removePhoto}</span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-gray-800" style={{ fontWeight: 700, fontSize: '16px' }}>{t.name}</h3>
            <p className="text-gray-500" style={{ fontSize: '12px' }}>{t.phone}</p>
            <p className="text-gray-500" style={{ fontSize: '11px' }}>{t.email}</p>
          </div>
        </div>

        <button
          className="w-full bg-[#2E7D32] text-white rounded-xl py-2.5 shadow-sm active:scale-95 transition-transform"
          style={{ fontSize: '12px', fontWeight: 600 }}
        >
          {t.editProfile}
        </button>
      </div>

      {/* Health Records */}
      <div className="mb-4">
        <h3 className="text-gray-800 mb-2.5 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '14px' }}>
          <Activity size={16} style={{ color: '#2E7D32' }} />
          {t.healthRecords}
        </h3>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <HeartPulse size={20} style={{ color: '#2E7D32' }} />
              <span className="text-gray-400" style={{ fontSize: '9px' }}>{t.lastCheckup}</span>
            </div>
            <p className="text-gray-800" style={{ fontWeight: 700, fontSize: '16px' }}>৭২ bpm</p>
            <p className="text-gray-500" style={{ fontSize: '10px' }}>{t.heartRate}</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <Activity size={20} style={{ color: '#E65100' }} />
              <span className="text-gray-400" style={{ fontSize: '9px' }}>{t.lastCheckup}</span>
            </div>
            <p className="text-gray-800" style={{ fontWeight: 700, fontSize: '16px' }}>120/80</p>
            <p className="text-gray-500" style={{ fontSize: '10px' }}>{t.bloodPressure}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {profileMenuItems.map((item) => {
          const ItemIcon = item.Icon;
          return (
            <button
              key={item.id}
              className="w-full bg-white rounded-xl p-3.5 shadow-sm border border-gray-100 flex items-center gap-3 active:bg-gray-50 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <ItemIcon size={18} style={{ color: item.color }} />
              </div>
              <span className="flex-1 text-left text-gray-800" style={{ fontSize: '13px', fontWeight: 600 }}>
                {lang === 'en' ? item.labelEn : item.labelBn}
              </span>
              <div className="flex items-center gap-2">
                {item.count && (
                  <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-0.5" style={{ fontSize: '10px', fontWeight: 600 }}>
                    {item.count}
                  </span>
                )}
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Emergency Contacts */}
      <div className="mt-4">
        <h3 className="text-gray-800 mb-2.5 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '14px' }}>
          <Phone size={16} style={{ color: '#2E7D32' }} />
          {t.emergencyContacts}
        </h3>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-gray-800" style={{ fontWeight: 600, fontSize: '12px' }}>{t.nationalEmergency}</p>
              <p className="text-gray-500" style={{ fontSize: '10px' }}>{t.available247}</p>
            </div>
            <a
              href="tel:999"
              className="bg-red-500 text-white rounded-full px-4 py-2 shadow-sm active:scale-95 transition-transform"
              style={{ fontSize: '12px', fontWeight: 700 }}
            >
              ৯৯৯
            </a>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800" style={{ fontWeight: 600, fontSize: '12px' }}>{t.ambulance}</p>
              <p className="text-gray-500" style={{ fontSize: '10px' }}>{t.fastResponse}</p>
            </div>
            <a
              href="tel:01234567890"
              className="bg-[#2E7D32] text-white rounded-full px-4 py-2 shadow-sm active:scale-95 transition-transform"
              style={{ fontSize: '11px', fontWeight: 600 }}
            >
              {t.callNow}
            </a>
          </div>
        </div>
      </div>

      {/* Logout */}
      <button
        className="w-full mt-4 bg-red-50 text-red-600 rounded-xl py-3 shadow-sm border border-red-200 active:scale-95 transition-transform"
        style={{ fontSize: '13px', fontWeight: 600 }}
      >
        {t.logout}
      </button>
    </div>
  );
};

export { ProfilePage };
