"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  logTag: string;
  x: string;
  y: string;
  z: number;
  accent?: "green" | "cyan" | "red";
  children: ReactNode;
  details: ReactNode;
};

export default function DraggableCard({
  id, title, logTag, x, y, z, accent = "green", children, details,
}: Props) {
  const [focused, setFocused] = useState(false);
  const [command, setCommand] = useState("idle");
  const topZ = useRef(z);

  const frame =
    accent === "cyan" ? "neon-frame neon-frame-cyan" :
    accent === "red" ? "neon-frame neon-frame-red" : "neon-frame";

  const tint =
    accent === "cyan" ? "text-cyber" :
    accent === "red" ? "text-alert" : "text-terminal";

  return (
    <motion.div
      className={`absolute ${frame} scan-beam group w-[min(90vw,420px)] cursor-grab active:cursor-grabbing select-none`}
      style={{ left: x, top: y, zIndex: focused ? 60 : z }}
      drag
      dragElastic={0.2}
      dragMomentum={false}
      whileDrag={{ scale: 1.03, rotate: 0.5 }}
      whileHover={{ scale: 1.02 }}
      animate={{ scale: focused ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onTap={() => {
        setFocused((f) => !f);
        setCommand((c) => (c === "idle" ? "decode" : "idle"));
      }}
      layout
    >
      <div className="beam" />

      {/* terminal header bar */}
      <div className={`flex items-center justify-between border-b border-inherit px-3 py-2 ${tint}`}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-alert animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-amber2/80" />
          <span className="w-2 h-2 rounded-full bg-terminal/80" />
          <span className="ml-2 text-[10px] tracking-[0.25em] uppercase">{title}</span>
        </div>
        <span className="text-[9px] opacity-60">
          [{logTag}::{command}] #{id}
        </span>
      </div>

      {/* body */}
      <div className="p-4 text-sm leading-relaxed text-terminal/90">{children}</div>

      {/* expandable intel */}
      <motion.div
        initial={false}
        animate={{
          height: focused ? "auto" : 0,
          opacity: focused ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className={`px-4 pb-4 border-t border-dashed border-terminal/20 pt-3 text-[13px] ${tint}`}>
          <p className="text-[10px] tracking-[0.3em] mb-2 opacity-70">
            {"// DECRYPTED INTEL"}
          </p>
          {details}
        </div>
      </motion.div>

      {/* footer prompt */}
      <div className="px-4 pb-3 text-[10px] opacity-50">
        {">"} {focused ? "collapse --intel" : "click to decrypt intel"}
        <span className="animate-blink">_</span>
      </div>
    </motion.div>
  );
}