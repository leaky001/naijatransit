// src/pages/Route.jsx
import React from "react";
import RouteFinder from "../components/route/RouteFinder";
import { motion } from "framer-motion";

const RoutePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-primary mb-4">Route Finder</h2>
      <RouteFinder />
    </motion.div>
  );
};

export default RoutePage;
