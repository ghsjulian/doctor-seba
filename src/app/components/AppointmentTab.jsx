import React from 'react';
import {
  Building2,
  Calendar,
  Clock,
  Download,
  FileText,
  Image as ImageIcon,
  User,
  CheckCircle2,
} from 'lucide-react';
import { upcomingAppointments } from './mockData';

const AppointmentTab = ({ lang, downloadingId, setDownloadingId, onDownload }) => {
  const t = {
    title: lang === 'en' ? 'My Appointments' : 'আমার অ্যাপয়েন্টমেন্ট',
    upcoming: lang === 'en' ? 'upcoming' : 'টি আগামী',
    newBtn: lang === 'en' ? '+ New' : '+ নতুন',
    downloadOptions: lang === 'en' ? 'Download Options' : 'ডাউনলোড অপশন',
    viewDetails: lang === 'en' ? 'View Details' : 'বিস্তারিত দেখুন',
    cancel: lang === 'en' ? 'Cancel' : 'বাতিল করুন',
    pastTitle: lang === 'en' ? 'Past Appointments' : 'পূর্ববর্তী অ্যাপয়েন্টমেন্ট',
    noPast: lang === 'en' ? 'No past appointments' : 'কোনো পূর্ববর্তী অ্যাপয়েন্টমেন্ট নেই',
  };

  const downloadFormats = [
    { icon: FileText, labelBn: 'টেক্সট ফাইল (.txt)', labelEn: 'Text File (.txt)', format: 'txt' },
    { icon: Download, labelBn: 'PDF ফরম্যাট', labelEn: 'PDF Format', format: 'pdf' },
    { icon: ImageIcon, labelBn: 'ছবি হিসেবে', labelEn: 'As Image', format: 'image' },
  ];

  return (
    <div className="px-4 pt-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-gray-800" style={{ fontWeight: 700, fontSize: '18px' }}>{t.title}</h2>
          <p className="text-gray-500" style={{ fontSize: '11px' }}>
            {lang === 'en'
              ? `${upcomingAppointments.length} ${t.upcoming} appointments`
              : `আগামী ${upcomingAppointments.length}${t.upcoming} অ্যাপয়েন্টমেন্ট`}
          </p>
        </div>
        <button
          className="bg-[#2E7D32] text-white rounded-xl px-4 py-2 shadow-sm active:scale-95 transition-transform"
          style={{ fontSize: '11px', fontWeight: 600 }}
        >
          {t.newBtn}
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-3">
        {upcomingAppointments.map((apt) => (
          <div key={apt.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative">
            {/* Download Button */}
            <div className="absolute top-3 right-3">
              <button
                onClick={() => setDownloadingId(downloadingId === apt.id ? null : apt.id)}
                className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center active:bg-blue-100 transition-colors"
              >
                <Download size={14} className="text-blue-600" />
              </button>

              {downloadingId === apt.id && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setDownloadingId(null)} />
                  <div className="absolute right-0 top-10 bg-white rounded-xl shadow-2xl overflow-hidden z-20 w-48 border border-gray-100">
                    <div className="bg-blue-50 px-3 py-2">
                      <p className="text-blue-900" style={{ fontSize: '11px', fontWeight: 600 }}>{t.downloadOptions}</p>
                    </div>
                    {downloadFormats.map((option, i) => {
                      const OptionIcon = option.icon;
                      return (
                        <button
                          key={i}
                          onClick={() => onDownload(apt.id, option.format)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                        >
                          <OptionIcon size={16} className="text-gray-600" />
                          <span className="text-gray-800" style={{ fontSize: '12px', fontWeight: 500 }}>
                            {lang === 'en' ? option.labelEn : option.labelBn}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            <div className="flex items-start gap-3 pr-10">
              {/* Doctor Avatar */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${apt.color.bg}, ${apt.color.icon})` }}
              >
                <User size={28} className="text-white" />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-800 mb-0.5" style={{ fontWeight: 700, fontSize: '13px' }}>
                  {lang === 'en' ? apt.doctorNameEn : apt.doctorName}
                </h4>
                <p style={{ fontSize: '11px', fontWeight: 500, color: '#388E3C' }} className="mb-1">
                  {lang === 'en' ? apt.specialtyEn : apt.specialty}
                </p>
                <div className="flex items-center gap-2 text-gray-500 mb-2" style={{ fontSize: '10px' }}>
                  <span className="flex items-center gap-0.5">
                    <Building2 size={9} />
                    {lang === 'en' ? apt.hospitalEn : apt.hospital}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-lg" style={{ fontSize: '10px', fontWeight: 600 }}>
                    <Calendar size={10} />
                    {lang === 'en' ? apt.dateEn : apt.date}
                  </span>
                  <span className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded-lg" style={{ fontSize: '10px', fontWeight: 600 }}>
                    <Clock size={10} />
                    {lang === 'en' ? apt.timeEn : apt.time}
                  </span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg" style={{ fontSize: '9px', fontWeight: 600 }}>
                    • {lang === 'en' ? apt.statusEn : apt.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
              <button
                className="flex-1 bg-[#2E7D32] text-white rounded-xl py-2 shadow-sm active:scale-95 transition-transform"
                style={{ fontSize: '11px', fontWeight: 600 }}
              >
                {t.viewDetails}
              </button>
              <button
                className="flex-1 bg-red-50 text-red-600 rounded-xl py-2 border border-red-200 active:scale-95 transition-transform"
                style={{ fontSize: '11px', fontWeight: 600 }}
              >
                {t.cancel}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Past Appointments */}
      <div className="mt-6">
        <h3 className="text-gray-800 mb-3 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '14px' }}>
          <Clock size={16} style={{ color: '#6B7280' }} />
          {t.pastTitle}
        </h3>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
          <CheckCircle2 size={32} className="mx-auto mb-2 text-gray-300" />
          <p className="text-gray-500" style={{ fontSize: '12px' }}>{t.noPast}</p>
        </div>
      </div>
    </div>
  );
};

export { AppointmentTab };
