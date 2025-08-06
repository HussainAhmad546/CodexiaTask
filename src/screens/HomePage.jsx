import React, { useState } from "react";
import { titleOptions } from "../data";
import Header from "../components/homePageComponents/Header";
import TopicSelector from "../components/homePageComponents/TopicSelector";
import TitleSelector from "../components/homePageComponents/TitleSelector";
import WordCountSlider from "../components/homePageComponents/WordCountSlider";
import NavigationButtons from "../components/homePageComponents/NavigationButtons";

const HomePage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [wordCount, setWordCount] = useState(700);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    setSelectedTitle("");
    setSearchQuery("");
  };

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
    setShowDropdown(false);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setSelectedTitle("");
    setShowDropdown(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery) {
      const titles = titleOptions[selectedTopic] || [];
      const filteredTitles = titles.filter((title) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (!filteredTitles.includes(searchQuery)) {
        setSelectedTitle(searchQuery);
        setShowDropdown(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Content type</h2>
          <p className="text-gray-400">
            Choose a content type that best fits your needs.
          </p>
        </div>

        <TopicSelector
          selectedTopic={selectedTopic}
          onTopicSelect={handleTopicSelect}
        />

        <TitleSelector
          selectedTopic={selectedTopic}
          selectedTitle={selectedTitle}
          searchQuery={searchQuery}
          showDropdown={showDropdown}
          onTitleSelect={handleTitleSelect}
          onSearchChange={handleSearchChange}
          onToggleDropdown={setShowDropdown}
          onKeyPress={handleKeyPress}
        />

        <WordCountSlider
          wordCount={wordCount}
          onWordCountChange={setWordCount}
        />

        <NavigationButtons />
      </div>
    </div>
  );
};

export default HomePage;
