"use client";
import { motion } from "motion/react"
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="m-4 text-4xl"
    >
      testing
    </motion.div>
  );
}
