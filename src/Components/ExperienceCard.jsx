import React from "react";

const ExperienceCard = ({ role, company, duration, responsibilities }) => {
  return (
    <div className="bg-grayscale-50 shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold">{role}</h3>
      <h4 className="text-md text-primary-400">{company}</h4>
      <p className="text-sm italic">{duration}</p>
      <ul className="list-disc list-inside mt-4">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
