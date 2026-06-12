import React, { useState } from "react";

import { StatusBar } from "./components/StatusBar";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import { LanguageModal } from "./components/LanguageModal";
import { HomeTab } from "./components/HomeTab";
import { AppointmentTab } from "./components/AppointmentTab";
import { ProfilePage } from "./components/ProfilePage";
import { SettingsPage } from "./components/SettingsPage";
import { upcomingAppointments } from "./components/mockData";

export default function App() {
	const [activeTab, setActiveTab] = useState("home");
	const [downloadingId, setDownloadingId] = useState(null);
	const [showLanguageModal, setShowLanguageModal] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const [lang, setLang] = useState("bn");

	const handleDownload = (appointmentId, format) => {
		const apt = upcomingAppointments.find(a => a.id === appointmentId);
		if (!apt) return;

		const content = `
ডাক্তার আছে - অ্যাপয়েন্টমেন্ট বিবরণ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Doctor / ডাক্তার: ${apt.doctorName} (${apt.doctorNameEn})
Specialty / বিশেষত্ব: ${apt.specialty} (${apt.specialtyEn})
Hospital / হাসপাতাল: ${apt.hospital} (${apt.hospitalEn})
Date / তারিখ: ${apt.date} (${apt.dateEn})
Time / সময়: ${apt.time} (${apt.timeEn})
Status / স্ট্যাটাস: ${apt.status} (${apt.statusEn})

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Appointment ID: #${appointmentId.toString().padStart(6, "0")}
Downloaded: ${new Date().toLocaleString("bn-BD")}
    `.trim();

		const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `appointment-${appointmentId}.txt`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);

		setDownloadingId(null);
	};

	return (
	<>
				{/* Notch */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[22px] bg-gray-900 rounded-b-2xl z-20" />

				{/*
        <StatusBar />
        */}

				<Header
					lang={lang}
					onSettingsClick={() => setShowSettings(true)}
					onLanguageClick={() => setShowLanguageModal(true)}
				/>

				{/* Scrollable Body */}
				<main
					className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
					style={{ background: "#F2F5F3" }}
				>
					{showSettings ? (
						<SettingsPage
							lang={lang}
							onBack={() => setShowSettings(false)}
						/>
					) : activeTab === "home" ? (
						<HomeTab lang={lang} />
					) : activeTab === "appointment" ? (
						<AppointmentTab
							lang={lang}
							downloadingId={downloadingId}
							setDownloadingId={setDownloadingId}
							onDownload={handleDownload}
						/>
					) : activeTab === "profile" ? (
						<ProfilePage lang={lang} />
					) : null}
				</main>

				<BottomNav
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					lang={lang}
				/>

				{/* Home Indicator */}
				<div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-400/50 rounded-full" />

				{/* Language Modal */}
				<LanguageModal
					show={showLanguageModal}
					onClose={() => setShowLanguageModal(false)}
					onSelectLanguage={setLang}
					currentLang={lang}
				/>
				</>
	);
}
