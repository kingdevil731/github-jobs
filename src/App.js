import axios from "axios";
import React, { useState } from "react";
// Components
import Header from "./components/Header";
import Search from "./components/Search";
import ResultsGrid from "./components/ResultsGrid";
// api
import { baseSearch } from "./api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(baseSearch(searchQuery)).then((data) => setResults(data.data));
  };
  return (
    <div className="App">
      <Header />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        results={results}
      />
      <ResultsGrid results={results} />
    </div>
  );
}

export default App;
