import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export { SearchBar };
