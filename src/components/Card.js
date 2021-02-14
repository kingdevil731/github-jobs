import React from "react";

const Card = ({ company_logo, company, title, created_at, id, location }) => {
  return (
    <div className="card" key={id}>
      <img src={company_logo} alt={`${company} logo`} />

      <div className="detail">
        <span>{title}</span>
        <span>{location}</span>
        <span>{created_at}</span>
      </div>
    </div>
  );
};

export default Card;
