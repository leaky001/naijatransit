import React from "react";

const tips = [
  "Carry small cash for easier fare payments.",
  "Avoid rush hours if possible.",
  "Always ask the driver for the route confirmation.",
  "Secure your belongings and avoid distractions.",
];

const TipsList = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Transport Tips</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {tips.map((tip, index) => (
          <li key={index}>✅ {tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipsList;
