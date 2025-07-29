// src/pages/Tips.jsx
import React from "react";
import TipsList from "../components/route/TipsList";
import { motion } from "framer-motion";

const Tips = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-primary mb-4">Commuting Tips & Safety</h2>
      <TipsList />
    </motion.div>
  );
};

export default Tips;
