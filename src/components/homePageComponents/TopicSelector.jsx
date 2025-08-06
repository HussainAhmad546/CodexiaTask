import React from "react";
import { topicOptions } from "../../data";

const TopicSelector = ({ selectedTopic, onTopicSelect }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-6">
        What type of content are you creating?
      </h3>
      <div className="flex flex-wrap gap-3">
        {topicOptions.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onTopicSelect(topic.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
              selectedTopic === topic.id
                ? "!bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicSelector;
