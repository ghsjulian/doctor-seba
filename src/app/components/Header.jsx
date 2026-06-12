import React, { useState } from 'react';
import hospitalLogo from '../../assets/86bb69a367b5fd3a7a436349fa2cbac9b84ac023.png';
import {
  Share2,
  MoreVertical,
  Bell,
  Search,
  MapPin,
  X,
  Facebook,
  Twitter,
  MessageCircle,
  Copy,
  Mail,
  Settings,
  Languages,
  HelpCircle,
  Info,
  ShieldCheck,
  LogOut,
} from 'lucide-react';
import { notifications } from './mockData';

const Header = ({ onSettingsClick, onLanguageClick, lang }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const t = {
    appName: lang === 'en' ? 'Doctor Available' : 'ডাক্তার আছে',
    location: lang === 'en' ? 'Dhaka, Bangladesh' : 'ঢাকা, বাংলাদেশ',
    searchPlaceholder: lang === 'en' ? 'Search doctor or hospital...' : 'ডাক্তার বা হাসপাতাল খুঁজুন...',
    notifications: lang === 'en' ? 'Notifications' : 'বিজ্ঞপ্তি',
    viewAll: lang === 'en' ? 'View All' : 'সব বিজ্ঞপ্তি দেখুন',
    share: lang === 'en' ? 'Share' : 'শেয়ার করুন',
    copyLink: lang === 'en' ? 'Copy Link' : 'লিঙ্ক কপি করুন',
    menu: lang === 'en' ? 'Menu' : 'মেনু',
    settings: lang === 'en' ? 'Settings' : 'সেটিংস',
    changeLanguage: lang === 'en' ? 'Change Language' : 'ভাষা পরিবর্তন',
    helpSupport: lang === 'en' ? 'Help & Support' : 'সাহায্য ও সহায়তা',
    about: lang === 'en' ? 'About App' : 'অ্যাপ সম্পর্কে',
    privacy: lang === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি',
    logout: lang === 'en' ? 'Log Out' : 'লগ আউট',
  };

  const shareOptions = [
    { icon: Facebook, label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, label: 'Twitter', color: '#1DA1F2' },
    { icon: MessageCircle, label: 'WhatsApp', color: '#25D366' },
    { icon: Mail, label: 'Email', color: '#EA4335' },
    { icon: Copy, label: t.copyLink, color: '#6B7280' },
  ];

  const menuItems = [
    { icon: Settings, label: t.settings, color: '#2E7D32', action: 'settings' },
    { icon: Languages, label: t.changeLanguage, color: '#1565C0', action: 'language' },
    { icon: HelpCircle, label: t.helpSupport, color: '#F57F17', action: null },
    { icon: Info, label: t.about, color: '#6A1B9A', action: null },
    { icon: ShieldCheck, label: t.privacy, color: '#00695C', action: null },
    { icon: LogOut, label: t.logout, color: '#C62828', action: null },
  ];

  const closeAll = () => {
    setShowMenu(false);
    setShowNotifications(false);
    setShowShare(false);
  };

  return (
    <header className="bg-[#2E7D32] text-white px-4 pt-2 pb-4 shadow-lg relative">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-white/30 shadow-md shrink-0 bg-white">
            <img src={hospitalLogo} alt="ডাক্তার আছে" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-white leading-tight" style={{ fontWeight: 700, fontSize: '18px' }}>
              {t.appName}
            </h1>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={9} className="text-green-300" />
              <p className="text-green-200" style={{ fontSize: '10px' }}>{t.location}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Bell */}
          <button
            className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center active:bg-white/30 relative"
            onClick={() => { setShowNotifications(!showNotifications); setShowShare(false); setShowMenu(false); }}
          >
            <Bell size={15} />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Share */}
          <button
            className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center active:bg-white/30"
            onClick={() => { setShowShare(!showShare); setShowNotifications(false); setShowMenu(false); }}
          >
            <Share2 size={15} />
          </button>

          {/* Menu */}
          <button
            className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center active:bg-white/30 relative"
            onClick={() => { setShowMenu(!showMenu); setShowNotifications(false); setShowShare(false); }}
          >
            <MoreVertical size={15} />
          </button>
        </div>
      </div>

      {/* Notifications Panel */}
      {showNotifications && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setShowNotifications(false)} />
          <div className="absolute left-4 right-4 top-[120px] bg-white rounded-2xl shadow-2xl overflow-hidden z-20 border border-gray-100">
            <div className="bg-[#2E7D32] px-4 py-3 flex items-center justify-between">
              <h3 className="text-white" style={{ fontWeight: 700, fontSize: '14px' }}>{t.notifications}</h3>
              <button onClick={() => setShowNotifications(false)} className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <X size={14} className="text-white" />
              </button>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
              {notifications.map((notif) => {
                const NotifIcon = notif.icon;
                return (
                  <div
                    key={notif.id}
                    className={`px-4 py-3 border-b border-gray-100 last:border-0 ${notif.unread ? 'bg-green-50' : 'bg-white'} active:bg-gray-100 transition-colors`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${notif.color}15` }}>
                        <NotifIcon size={18} style={{ color: notif.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-gray-800" style={{ fontWeight: 600, fontSize: '13px' }}>
                            {lang === 'en' ? notif.titleEn : notif.title}
                          </p>
                          {notif.unread && <span className="w-2 h-2 bg-green-500 rounded-full shrink-0" />}
                        </div>
                        <p className="text-gray-600 mb-1.5" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                          {lang === 'en' ? notif.messageEn : notif.message}
                        </p>
                        <p className="text-gray-400" style={{ fontSize: '10px' }}>
                          {lang === 'en' ? notif.timeEn : notif.time}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-gray-50 px-4 py-2.5 text-center border-t border-gray-100">
              <button className="text-[#2E7D32]" style={{ fontSize: '12px', fontWeight: 600 }}>{t.viewAll}</button>
            </div>
          </div>
        </>
      )}

      {/* Share Panel */}
      {showShare && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setShowShare(false)} />
          <div className="absolute left-4 right-4 top-[120px] bg-white rounded-2xl shadow-2xl overflow-hidden z-20 border border-gray-100">
            <div className="bg-[#2E7D32] px-4 py-3 flex items-center justify-between">
              <h3 className="text-white" style={{ fontWeight: 700, fontSize: '14px' }}>{t.share}</h3>
              <button onClick={() => setShowShare(false)} className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <X size={14} className="text-white" />
              </button>
            </div>
            <div className="p-3">
              {shareOptions.map((item, i) => {
                const ShareIcon = item.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setShowShare(false)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl active:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                      <ShareIcon size={20} style={{ color: item.color }} />
                    </div>
                    <span className="text-gray-800" style={{ fontSize: '14px', fontWeight: 500 }}>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Dropdown Menu */}
      {showMenu && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />
          <div className="absolute left-4 right-4 top-[120px] bg-white rounded-2xl shadow-2xl overflow-hidden z-20 border border-gray-100">
            <div className="bg-[#2E7D32] px-4 py-3 flex items-center justify-between">
              <h3 className="text-white" style={{ fontWeight: 700, fontSize: '14px' }}>{t.menu}</h3>
              <button onClick={() => setShowMenu(false)} className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <X size={14} className="text-white" />
              </button>
            </div>
            <div className="p-2">
              {menuItems.map((item, i) => {
                const MenuIcon = item.icon;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      closeAll();
                      if (item.action === 'settings') onSettingsClick && onSettingsClick();
                      if (item.action === 'language') onLanguageClick && onLanguageClick();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl active:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                      <MenuIcon size={18} style={{ color: item.color }} />
                    </div>
                    <span className="text-gray-800" style={{ fontSize: '14px', fontWeight: 500 }}>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white text-gray-700 placeholder:text-gray-400 outline-none shadow-sm"
          style={{ fontSize: '13px' }}
        />
      </div>
    </header>
  );
};

export { Header };
