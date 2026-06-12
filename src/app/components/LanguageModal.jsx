import React, { useState } from 'react';
import { Globe, X, Check } from 'lucide-react';

const languages = [
  { code: 'bn', name: 'বাংলা', englishName: 'Bengali', flag: '🇧🇩' },
  { code: 'en', name: 'English', englishName: 'English', flag: '🇬🇧' },
];

const LanguageModal = ({ show, onClose, onSelectLanguage, currentLang }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(currentLang || 'bn');

  if (!show) return null;

  const handleSave = () => {
    onSelectLanguage(selectedLanguage);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose} />
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-40 max-w-sm mx-auto">
        <div className="bg-[#2E7D32] px-4 py-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe size={20} className="text-white" />
            <h3 className="text-white" style={{ fontWeight: 700, fontSize: '16px' }}>
              {currentLang === 'en' ? 'Select Language' : 'ভাষা নির্বাচন করুন'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center active:bg-white/30"
          >
            <X size={16} className="text-white" />
          </button>
        </div>

        <div className="p-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className="w-full flex items-center gap-3 px-4 py-4 rounded-xl active:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
            >
              <span style={{ fontSize: '32px' }}>{lang.flag}</span>
              <div className="flex-1 text-left">
                <p className="text-gray-800" style={{ fontSize: '15px', fontWeight: 600 }}>{lang.name}</p>
                <p className="text-gray-500" style={{ fontSize: '12px' }}>{lang.englishName}</p>
              </div>
              {selectedLanguage === lang.code && (
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={18} className="text-green-600" strokeWidth={3} />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="px-4 pb-4">
          <button
            onClick={handleSave}
            className="w-full bg-[#2E7D32] text-white rounded-xl py-3 shadow-sm active:scale-95 transition-transform"
            style={{ fontSize: '14px', fontWeight: 600 }}
          >
            {selectedLanguage === 'en' ? 'Save' : 'সংরক্ষণ করুন'}
          </button>
        </div>
      </div>
    </>
  );
};

export { LanguageModal };
