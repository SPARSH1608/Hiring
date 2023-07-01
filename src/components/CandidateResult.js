import React from "react";

const CandidateSearchResults = ({ results }) => {
  //   console.log(results);
  return (
    <section className="candidate-search-results">
      {results.map((candidate, index) => (
        <div key={index}>
          <h3>{candidate.name}</h3>
          <p>Job Role: {candidate.jobRole}</p>
          <p>Location: {candidate.location}</p>
          <p>Skills: {candidate.skills.join(", ")}</p>
          <button>View Profile</button>
        </div>
      ))}
    </section>
  );
};

export default CandidateSearchResults;
