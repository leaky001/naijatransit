// src/pages/Fares.jsx
import React from "react";
import FareEstimator from "../components/route/FareEstimator";
import { motion } from "framer-motion";

const Fares = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-primary mb-4">Fare Estimator</h2>
      <FareEstimator />
    </motion.div>
  );
};

export default Fares;
