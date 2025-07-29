// src/components/route/RouteFinder.jsx
import React, { useState, useContext } from "react";
import { RouteContext } from "../../context/RouteContext";
import { toast } from "react-toastify";
import Button from "../common/Button";

const RouteFinder = () => {
  const { routes } = useContext(RouteContext);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSearch = () => {
    if (!start || !end) {
      toast.error("Please enter both start and end locations.");
      return;
    }

    const result = routes.find(
      (r) =>
        r.start.toLowerCase().trim() === start.toLowerCase().trim() &&
        r.end.toLowerCase().trim() === end.toLowerCase().trim()
    );

    if (result) {
      toast.success(`Route found: ${result.start} → ${result.end}`);
    } else {
      toast.warn("No direct route found.");
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow max-w-md mx-auto mt-4">
      <h2 className="text-xl font-semibold text-center mb-4">Find a Route</h2>
      <input
        type="text"
        placeholder="Start location"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
      />
      <input
        type="text"
        placeholder="End location"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
      />
      <Button onClick={handleSearch}>Search Route</Button>
    </div>
  );
};

export default RouteFinder;
