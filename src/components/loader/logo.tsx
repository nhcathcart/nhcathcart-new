"use client";
import { motion } from "framer-motion";
export function Logo() {
  return (
    <motion.svg
      className={`w-full h-full`}
      viewBox="0 0 195 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M148.957 129L146 163H81V94H128.188M148.957 129L152 94H128.188M148.957 129H126L128.188 94M148.957 129H194V49H131L128.188 94M47 31L41 118H110L116 31H47ZM78 1L72 73H147L153 1H78ZM1 102H61L55 163H1V102Z"
        stroke="#E4DBD8"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        initial={{ pathLength: 0, pathSpacing: 1 }}
        animate={{ pathLength: 1, pathSpacing: 1 }}
        transition={{ duration: 20 }}
      />
    </motion.svg>
  );
}
