"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Radar from "./Radar";

const bootLines = [
  "[SYS] NEURAL OPS KERNEL v4.2.1 ... ONLINE",
  "[NET] Handshake TLS-1.3 :: node-77.casablanca.ma",
  "[AI ] Loading inference weights .......... 100%",
  "[SEC] Perimeter scan :: 0 anomalies detected",
  "[SYS] Rendering operator profile >>> H.BARRADAH",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yVideo = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* grid fog + code rain backdrop */}
      <div className="absolute inset-0 code-rain opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />

      {/* radar top-left */}
      <div className="absolute top-24 left-8 hidden md:block">
        <Radar />
        <p className="mt-2 text-[9px] tracking-[0.3em] text-terminal/50 text-center">
          THREAT SWEEP // 360°
        </p>
      </div>

      {/* vertical scanline sweep */}
      <div className="absolute inset-x-0 h-px bg-cyber/40 shadow-[0_0_20px_#00e5ff] animate-scanline" />

      <motion.div style={{ y: yVideo }} className="relative z-10 w-[min(94vw,980px)]">
        {/* boot log */}
        <div className="mb-4 space-y-1 text-[10px] md:text-xs text-terminal/70">
          {bootLines.map((l, i) => (
            <motion.p
              key={l}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 * i, duration: 0.3 }}
            >
              <span className="text-cyber">$</span> {l}
            </motion.p>
          ))}
        </div>

        {/* monitor frame with "video" */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="neon-frame p-1"
        >
          <div className="relative aspect-video overflow-hidden bg-black">
            {/* LIVE video slot: drop neural-network.mp4 into /public and uncomment
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
              <source src="/neural-network.mp4" type="video/mp4" />
            </video> */}
            {/* procedural network-traffic visuals */}
            <div className="absolute inset-0 code-rain opacity-60" />
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.circle
                  key={i}
                  r="1.6"
                  fill={i % 4 === 0 ? "#ff2d4d" : "#00ff88"}
                  initial={{ cx: "0%", cy: `${(i * 61) % 100}%` }}
                  animate={{ cx: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                  style={{ filter: "drop-shadow(0 0 4px #00ff88)" }}
                />
              ))}
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

            {/* headline over video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="font-condensed font-bold text-[11vw] md:text-7xl leading-none tracking-tight text-white drop-shadow-[0_0_25px_rgba(0,255,136,0.5)]"
              >
                <span className="glitch" data-text="AI × CYBER">AI × CYBER</span>
                <br />
                <span className="text-cyber">OPERATOR</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-3 text-xs md:text-sm text-terminal/80 tracking-[0.35em] uppercase"
              >
                Hajar Barradah — ML Engineer · Intrusion Detection · Cloud Ops
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="mt-6 flex gap-4"
              >
                <a
                  href="#ops-floor"
                  className="cmd-btn neon-frame px-6 py-2 text-xs tracking-[0.25em] uppercase"
                >
                  [ Enter Ops Floor ]
                </a>
                <a
                  href="#contact"
                  className="cmd-btn neon-frame neon-frame-cyan px-6 py-2 text-xs tracking-[0.25em] uppercase text-cyber"
                >
                  [ Transmit Signal ]
                </a>
              </motion.div>
            </div>

            {/* HUD overlays */}
            <div className="absolute top-3 left-3 text-[9px] text-alert/90 animate-flicker">
              ● REC — LIVE FEED
            </div>
            <div className="absolute top-3 right-3 text-[9px] text-terminal/70">
              33.57°N 7.58°W :: NODE-CASA-77
            </div>
            <div className="absolute bottom-3 right-3 text-[9px] text-cyber/80">
              CPU 12% · NET 1.2GB/s · AI-CORE READY
            </div>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.p
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-6 text-center text-[10px] tracking-[0.4em] text-terminal/50"
        >
          ▼ SCROLL TO DECRYPT MODULES ▼
        </motion.p>
      </motion.div>
    </motion.section>
  );
}