// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold text-primary">About NaijaTransit</h2>
      <p className="text-gray-700">
        NaijaTransit is a lightweight, offline-friendly web app that helps you find common public transport routes, average fares, and smart travel tips around Nigerian cities — starting with Lagos.
      </p>
      <p className="text-gray-700">
        Whether you're a student, newcomer, or just trying to budget your movement, we’ve got you. No app download. No internet required after loading.
      </p>
    </motion.div>
  );
};

export default About;
