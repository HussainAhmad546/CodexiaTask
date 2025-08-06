import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { topicOptions, titleOptions } from "../../data";

const TitleSelector = ({
  selectedTopic,
  selectedTitle,
  searchQuery,
  showDropdown,
  onTitleSelect,
  onSearchChange,
  onToggleDropdown,
}) => {
  if (!selectedTopic) return null;

  const topicLabel = topicOptions.find(t => t.id === selectedTopic)?.label || "";
  const titles = titleOptions[selectedTopic] || [];

  const filteredTitles = searchQuery
    ? titles.filter(title =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : titles;

  const showAddCustom =
    searchQuery &&
    !filteredTitles.includes(searchQuery) &&
    !titles.includes(searchQuery);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">
        Which type of "{topicLabel}" content do you want to create?
      </h3>

      <div className="relative">
        <div
          className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 cursor-pointer flex items-center justify-between"
          onClick={() => onToggleDropdown(!showDropdown)}
        >
          <div className="flex items-center space-x-3">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={selectedTitle || searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Select"
              className="bg-transparent border-none outline-none text-white placeholder-gray-500 flex-1"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform ${
              showDropdown ? "rotate-180" : ""
            }`}
          />
        </div>

        {showDropdown && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
            {filteredTitles.map((title, index) => (
              <div
                key={index}
                className="p-3 hover:bg-gray-700 cursor-pointer text-sm"
                onClick={() => onTitleSelect(title)}
              >
                {title}
              </div>
            ))}

            {showAddCustom && (
              <div
                className="p-3 hover:bg-gray-700 cursor-pointer text-sm text-purple-400"
                onClick={() => onTitleSelect(searchQuery)}
              >
                Add "{searchQuery}" (custom topic)
              </div>
            )}

            {filteredTitles.length === 0 && !searchQuery && (
              <div className="p-3 text-sm text-gray-500">No options available</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TitleSelector;
