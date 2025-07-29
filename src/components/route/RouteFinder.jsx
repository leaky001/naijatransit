// src/components/route/RouteFinder.jsx
import React, { useState, useContext } from "react";
import { RouteContext } from "../../context/RouteContext";
import { toast } from "react-toastify";
import Button from "../common/Button";

const RouteFinder = () => {
  const { routes } = useContext(RouteContext);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [foundRoute, setFoundRoute] = useState(null);

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
      setFoundRoute(result);
    } else {
      toast.warn("No direct route found.");
      setFoundRoute(null);
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

      {/* Result Display */}
      {foundRoute && (
        <div className="mt-6 p-4 bg-green-50 border border-green-300 rounded-lg text-green-800">
          <p><strong>Route:</strong> {foundRoute.start} → {foundRoute.end}</p>
          <p><strong>Estimated Fare:</strong> ₦{foundRoute.fare}</p>
        </div>
      )}
    </div>
  );
};

export default RouteFinder;
