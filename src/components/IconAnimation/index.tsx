"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { MdMarkunreadMailbox } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { motion, AnimatePresence, AnimatePresenceProps } from "framer-motion";

const IconTransition = ({ loadingComplete }: { loadingComplete: boolean }) => {
  const [showCircle, setShowCircle] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (loadingComplete) {
      setShowCircle(true);
      // Transition from circle to check after delay
      const timeout = setTimeout(() => {
        setShowCheck(true);
      }, 500); // Adjust duration if needed
      return () => clearTimeout(timeout);
    }
  }, [loadingComplete]);

  return (
    <div className="flex items-center justify-center h-16 w-16 text-white text-xl">
      <AnimatePresence mode="wait">
        {!loadingComplete && !showCircle && (
          <motion.div
            key="mail"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MdMarkunreadMailbox />
          </motion.div>
        )}

        {showCircle && !showCheck && (
          <motion.div
            key="circle"
            className="animate-spin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" className="opacity-20" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
          </motion.div>
        )}

        {showCheck && (
          <motion.div
            key="check"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <IoCheckmark />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IconTransition;
