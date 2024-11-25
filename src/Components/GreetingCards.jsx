import React from "react";

const GreetingCards = ({ title, message }) => {
  return (
    <div className="border p-5 shadow-md rounded-lg bg-white max-w-xs text-center">
      <h1 className="text-lg font-bold text-blue-600 mb-2">{title}</h1>
      <p className="text-gray-700">{message}</p>
    </div>
  );
};

export default GreetingCards;
