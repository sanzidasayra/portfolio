import React, { useEffect } from "react";
import { useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-purple-900">
      <div className="flex items-center space-x-4 text-gray-300 text-2xl md:text-4xl font-bold select-none">
        {/* First Name - bottom to up */}
        <motion.span
        style={{ fontFamily: "Georgia, serif" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Sanzida
        </motion.span>

        {/* Slash - fixed */}
        <span className="text-gray-400 text-3xl md:text-5xl select-none">/</span>

        {/* Last Name - top to bottom */}
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Akter
        </motion.span>
      </div>
    </div>
  );
}
