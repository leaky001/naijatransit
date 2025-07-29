import React, { useState } from "react";
import { calculateFare } from "../../utils/fareCalculator";
import Button from "../common/Button";
import { toast } from "react-toastify";

const FareEstimator = () => {
  const [distance, setDistance] = useState("");
  const [fare, setFare] = useState(null);

  const handleEstimate = () => {
    const value = parseFloat(distance);
    if (!value || value <= 0) {
      toast.error("Please enter a valid distance.");
      return;
    }

    const estimatedFare = calculateFare(value);
    setFare(estimatedFare);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Fare Estimator</h2>
      <input
        type="number"
        placeholder="Distance in km"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        className="input w-full mb-2"
      />
      <Button onClick={handleEstimate}>Estimate</Button>
      {fare !== null && (
        <p className="mt-2 text-green-700 font-bold">
          Estimated Fare: ₦{fare.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default FareEstimator;
