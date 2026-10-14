"use client";

import { motion } from "framer-motion";

export default function Radar({ size = 220 }: { size?: number }) {
  return (
    <div
      className="relative rounded-full border border-terminal/30"
      style={{ width: size, height: size }}
    >
      {/* concentric rings */}
      {[0.33, 0.66, 1].map((s) => (
        <div
          key={s}
          className="absolute rounded-full border border-terminal/20"
          style={{ inset: `${(1 - s) * 50}%` }}
        />
      ))}
      {/* crosshair */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-terminal/20" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-terminal/20" />
      {/* rotating sweep */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(0,255,136,0.5), transparent 70deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      {/* blips */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-alert shadow-[0_0_8px_#ff2d4d]"
        style={{ top: "30%", left: "62%" }}
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-cyber shadow-[0_0_8px_#00e5ff]"
        style={{ top: "65%", left: "35%" }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
    </div>
  );
}