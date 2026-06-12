import React from 'react';
import { Home, Calendar, User } from 'lucide-react';

const tabs = [
  { id: 'home', labelBn: 'হোম', labelEn: 'Home', Icon: Home },
  { id: 'appointment', labelBn: 'অ্যাপয়েন্টমেন্ট', labelEn: 'Appointment', Icon: Calendar },
  { id: 'profile', labelBn: 'প্রোফাইল', labelEn: 'Profile', Icon: User },
];

const BottomNav = ({ activeTab, setActiveTab, lang }) => {
  return (
    <nav className="bg-white border-t border-gray-200 flex justify-around items-center pt-2 pb-3 px-2 shadow-[0_-4px_16px_-6px_rgba(0,0,0,0.1)]">
      {tabs.map(({ id, labelBn, labelEn, Icon }) => {
        const isActive = activeTab === id;
        const label = lang === 'en' ? labelEn : labelBn;

        return (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className="flex flex-col items-center px-3 py-1 min-w-[72px] relative"
          >
            {isActive && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#2E7D32] rounded-full" />
            )}
            {id === 'appointment' ? (
              <div className="-mt-6 w-12 h-12 rounded-full bg-[#2E7D32] flex items-center justify-center shadow-lg mb-0.5">
                <Icon size={22} className="text-white" strokeWidth={isActive ? 2.5 : 1.8} />
              </div>
            ) : (
              <Icon
                size={22}
                className="mb-0.5 transition-colors"
                style={{ color: isActive ? '#2E7D32' : '#9CA3AF' }}
                strokeWidth={isActive ? 2.5 : 1.8}
              />
            )}
            <span
              className="text-[9px] transition-colors"
              style={{ color: isActive ? '#2E7D32' : '#9CA3AF', fontWeight: isActive ? 700 : 400 }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export { BottomNav };
