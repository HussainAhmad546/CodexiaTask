import React from "react";

const WordCountSlider = ({ wordCount, onWordCountChange }) => {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-medium mb-6">
        Set the number of words for output text.
      </h3>
      <div className="relative">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {wordCount}
          </span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="100"
            max="1000"
            value={wordCount}
            onChange={(e) => onWordCountChange(parseInt(e.target.value))}
            className="w-full h-2 rounded-lg cursor-pointer accent-purple-600 bg-gray-700 custom-slider"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>100</span>
            <span>1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCountSlider;
