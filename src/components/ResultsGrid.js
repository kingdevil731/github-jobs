import React from "react";
import Card from "./Card";

const ResultsGrid = ({ results }) => {
  return (
    <div className="results-grid">
      {results &&
        results.map((result) => (
          <Card
            company={result.company}
            company_logo={result.company_logo}
            created_at={result.created_at}
            key={result.id}
            id={result.id}
            location={result.location}
            title={result.title}
          />
        ))}
    </div>
  );
};

export default ResultsGrid;
