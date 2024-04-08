"use client";
import useMousePosition from "@/utlis/useMousePosition";
import React from "react";
import { motion } from "framer-motion";

const MouseFollowDiv = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      style={{
        x: `${x - 128 / 2}px`,
        y: ` ${y - 128}px`,
      }}
      className="fixed h-32 w-32 rounded-full bg-green-400 opacity-40 blur-3xl"
    >
      <div className="absolute left-0 top-0 h-20 w-20 rounded-full bg-red-400 blur-2xl"></div>
    </motion.div>
  );
};

export default MouseFollowDiv;
