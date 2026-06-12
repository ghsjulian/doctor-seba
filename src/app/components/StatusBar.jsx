import React from 'react';
import { Signal, Wifi, BatteryMedium } from 'lucide-react';

const StatusBar = () => (
  <div className="flex justify-between items-center px-5 py-1 bg-[#1B5E20] text-white text-[11px]">
    <span style={{ fontWeight: 600 }}>৩:০৫</span>
    <div className="flex items-center space-x-1.5">
      <Signal size={12} />
      <Wifi size={12} />
      <BatteryMedium size={12} />
    </div>
  </div>
);

export { StatusBar };
