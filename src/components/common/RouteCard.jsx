
import React from "react";
import { motion } from "framer-motion";

const RouteCard = ({ route }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-4 border-l-4 border-green-500"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="font-bold text-lg">
        {route.start} → {route.end}
      </h3>
      <p className="text-sm text-gray-700 mt-1">Fare: ₦{route.fare}</p>
      <p className="text-sm text-gray-500">Distance: {route.distance} km</p>
    </motion.div>
  );
};

export default RouteCard;
