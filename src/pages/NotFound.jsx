// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-4"
    >
      <h1 className="text-4xl font-bold text-danger">404 - Page Not Found</h1>
      <p className="text-gray-600">Looks like this page no dey road map 🚧</p>
      <Link
        to="/"
        className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-success transition"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
