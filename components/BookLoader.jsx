"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const pageVariants = {
  initial: { rotateY: 90, opacity: 0 },
  enter: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
  exit: { rotateY: -90, opacity: 0, transition: { duration: 0.6 } },
};

export default function PageFlipTransition({ children }) {
  const [showPage, setShowPage] = useState(true);

  return (
    <motion.div
      key={showPage ? "page1" : "page2"}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="w-full h-full bg-white shadow-xl rounded-lg"
    >
      {children}
    </motion.div>
  );
}
