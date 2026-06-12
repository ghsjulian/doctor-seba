import React, { useState } from 'react';
import {
  ArrowLeft,
  Bell,
  Volume2,
  Vibrate,
  Smartphone,
  Moon,
  User,
  Lock,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

const ToggleSwitch = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative w-12 h-6 rounded-full transition-colors ${enabled ? 'bg-[#2E7D32]' : 'bg-gray-300'}`}
  >
    <div
      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
        enabled ? 'translate-x-6' : 'translate-x-0.5'
      }`}
    />
  </button>
);

const SettingsPage = ({ onBack, lang }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const t = {
    title: lang === 'en' ? 'Settings' : 'সেটিংস',
    notifSection: lang === 'en' ? 'Notification Settings' : 'বিজ্ঞপ্তি সেটিংস',
    pushNotif: lang === 'en' ? 'Push Notifications' : 'পুশ নোটিফিকেশন',
    pushNotifSub: lang === 'en' ? 'Get all notifications' : 'সব বিজ্ঞপ্তি পান',
    sound: lang === 'en' ? 'Sound' : 'সাউন্ড',
    soundSub: lang === 'en' ? 'Notification sound' : 'বিজ্ঞপ্তির শব্দ',
    vibration: lang === 'en' ? 'Vibration' : 'ভাইব্রেশন',
    vibrationSub: lang === 'en' ? 'Phone vibrate' : 'ফোন কম্পন',
    displaySection: lang === 'en' ? 'Display' : 'প্রদর্শন',
    darkMode: lang === 'en' ? 'Dark Mode' : 'ডার্ক মোড',
    darkModeSub: lang === 'en' ? 'Enable night theme' : 'রাতের থিম সক্রিয় করুন',
    accountSection: lang === 'en' ? 'Account & Security' : 'অ্যাকাউন্ট ও নিরাপত্তা',
    editProfile: lang === 'en' ? 'Edit Profile' : 'প্রোফাইল সম্পাদনা',
    changePassword: lang === 'en' ? 'Change Password' : 'পাসওয়ার্ড পরিবর্তন',
    privacySettings: lang === 'en' ? 'Privacy Settings' : 'গোপনীয়তা সেটিংস',
    deviceManagement: lang === 'en' ? 'Device Management' : 'ডিভাইস ম্যানেজমেন্ট',
    appLabel: lang === 'en' ? 'Doctor Available' : 'ডাক্তার সেবা',
    version: lang === 'en' ? 'Version 1.0.0' : 'সংস্করণ ১.০.০',
  };

  const accountItems = [
    { icon: User, label: t.editProfile, color: '#2E7D32' },
    { icon: Lock, label: t.changePassword, color: '#1565C0' },
    { icon: ShieldCheck, label: t.privacySettings, color: '#6A1B9A' },
    { icon: Smartphone, label: t.deviceManagement, color: '#E65100' },
  ];

  return (
    <div className="px-4 pt-4 pb-20">
      {/* Back Button */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200 active:bg-gray-50"
        >
          <ArrowLeft size={18} className="text-gray-700" />
        </button>
        <h2 className="text-gray-800" style={{ fontWeight: 700, fontSize: '20px' }}>{t.title}</h2>
      </div>

      {/* Notifications */}
      <div className="mb-4">
        <h3 className="text-gray-800 mb-2.5 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '14px' }}>
          <Bell size={16} style={{ color: '#2E7D32' }} />
          {t.notifSection}
        </h3>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50">
                <Bell size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-gray-800" style={{ fontSize: '13px', fontWeight: 600 }}>{t.pushNotif}</p>
                <p className="text-gray-500" style={{ fontSize: '10px' }}>{t.pushNotifSub}</p>
              </div>
            </div>
            <ToggleSwitch enabled={notificationsEnabled} onToggle={() => setNotificationsEnabled(!notificationsEnabled)} />
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-50">
                <Volume2 size={18} className="text-purple-600" />
              </div>
              <div>
                <p className="text-gray-800" style={{ fontSize: '13px', fontWeight: 600 }}>{t.sound}</p>
                <p className="text-gray-500" style={{ fontSize: '10px' }}>{t.soundSub}</p>
              </div>
            </div>
            <ToggleSwitch enabled={soundEnabled} onToggle={() => setSoundEnabled(!soundEnabled)} />
          </div>
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-50">
                <Vibrate size={18} className="text-orange-600" />
              </div>
              <div>
                <p className="text-gray-800" style={{ fontSize: '13px', fontWeight: 600 }}>{t.vibration}</p>
                <p className="text-gray-500" style={{ fontSize: '10px' }}>{t.vibrationSub}</p>
              </div>
            </div>
            <ToggleSwitch enabled={vibrationEnabled} onToggle={() => setVibrationEnabled(!vibrationEnabled)} />
          </div>
        </div>
      </div>

      {/* Display */}
      <div className="mb-4">
        <h3 className="text-gray-800 mb-2.5 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '14px' }}>
          <Smartphone size={16} style={{ color: '#2E7D32' }} />
          {t.displaySection}
        </h3>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-50">
                <Moon size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-gray-800" style={{ fontSize: '13px', fontWeight: 600 }}>{t.darkMode}</p>
                <p className="text-gray-500" style={{ fontSize: '10px' }}>{t.darkModeSub}</p>
              </div>
            </div>
            <ToggleSwitch enabled={darkMode} onToggle={() => setDarkMode(!darkMode)} />
          </div>
        </div>
      </div>

      {/* Account & Security */}
      <div className="mb-4">
        <h3 className="text-gray-800 mb-2.5 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '14px' }}>
          <Lock size={16} style={{ color: '#2E7D32' }} />
          {t.accountSection}
        </h3>
        <div className="space-y-2">
          {accountItems.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <button
                key={i}
                className="w-full bg-white rounded-xl p-3.5 shadow-sm border border-gray-100 flex items-center gap-3 active:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                  <ItemIcon size={18} style={{ color: item.color }} />
                </div>
                <span className="flex-1 text-left text-gray-800" style={{ fontSize: '13px', fontWeight: 600 }}>{item.label}</span>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            );
          })}
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
        <p className="text-gray-500 mb-1" style={{ fontSize: '11px' }}>{t.appLabel}</p>
        <p className="text-gray-800" style={{ fontSize: '13px', fontWeight: 600 }}>{t.version}</p>
      </div>
    </div>
  );
};

export { SettingsPage };
