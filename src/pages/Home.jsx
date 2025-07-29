// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        Welcome to NaijaTransit 🇳🇬
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        Find danfo, keke, okada, and BRT routes across Lagos. Estimate fares, discover local tips, and plan better — all offline!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Link
          to="/routes"
          className="bg-gradient-to-r from-primary to-success text-white font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 transition"
        >
          Find a Route
        </Link>
        <Link
          to="/fares"
          className="bg-white border-2 border-primary text-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition"
        >
          Estimate Fare
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
