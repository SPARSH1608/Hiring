import React, { useState } from "react";
import CandidateSearchResults from "./CandidateResult";
import candidatesData from "../data/CandidateList.json";

const CandidateSearch = () => {
  const data = JSON.stringify(candidatesData);
  console.log(data);
  const [searchResults, setSearchResults] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchJobRole, setSearchJobRole] = useState("");

  const handleSearch = (e) => {
    // console.log(searchJobRole);
    e.preventDefault();

    // Filter candidates based on location and job role inputs
    // const filteredCandidates = data.candidates.filter(
    //   (candidate) =>
    //     candidate.location
    //       .toLowerCase()
    //       .includes(searchLocation.toLowerCase()) &&
    //     candidate.jobRole.toLowerCase().includes(searchJobRole.toLowerCase())
    // );

    // Set the search results in the state
    // setSearchResults(filteredCandidates);
  };

  return (
    <section className="candidate-search">
      <input
        type="text"
        placeholder="Location"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <select
        value={searchJobRole}
        onChange={(e) => setSearchJobRole(e.target.value)}
      >
        <option value="">Select Job Role</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Web Developer">Web Developer</option>
        {/* Add more job roles here */}
      </select>
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <CandidateSearchResults results={searchResults} />
      )}
    </section>
  );
};

export default CandidateSearch;
