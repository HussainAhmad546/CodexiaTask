import React from 'react'
import {  ArrowLeft } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <ArrowLeft className="w-6 h-6 cursor-pointer" />
        <div>
          <h1 className="text-xl font-semibold">Media management</h1>
          <p className="text-sm text-gray-400">Draft campaign</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm">Hussain Ahmad</span>
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-xs">HA</span>
        </div>
        <p className="text-xs text-purple-400 cursor-pointer">Change profile</p>
      </div>
    </div>
  );
};

export default Header;