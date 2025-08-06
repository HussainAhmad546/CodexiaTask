import React from 'react'
import { ArrowRight } from 'lucide-react';

const NavigationButtons = () => {
    return (
      <div className="flex justify-between">
        <button className="px-8 py-3 bg-transparent border border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 transition-colors">
          Back
        </button>
        <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors flex items-center space-x-2">
          <span>Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

export default NavigationButtons;
