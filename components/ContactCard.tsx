"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useActionState, useEffect, useState } from "react";
import { submitContact, type ContactState } from "@/app/actions";

const initial: ContactState = { status: "idle", log: "[SYS] AWAITING TRANSMISSION" };

export default function ContactCard() {
  const [state, formAction, pending] = useActionState(submitContact, initial);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (state.status === "granted") {
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 2200);
      return () => clearTimeout(t);
    }
  }, [state]);

  return (
    <>
      {/* system-wide flash on success */}
      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[95] bg-terminal pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* ACCESS GRANTED stamp */}
      <AnimatePresence>
        {state.status === "granted" && (
          <motion.div
            initial={{ scale: 3, opacity: 0, rotate: -18 }}
            animate={{ scale: 1, opacity: 1, rotate: -12 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="fixed inset-0 z-[96] flex items-center justify-center pointer-events-none"
          >
            <div className="border-4 border-terminal px-10 py-4 shadow-[0_0_60px_rgba(0,255,136,0.7)] bg-void/70">
              <p className="font-condensed text-5xl font-bold text-terminal tracking-[0.2em]">
                ACCESS GRANTED
              </p>
              <p className="text-center text-[10px] text-terminal/70 mt-1 tracking-[0.4em]">
                SIGNAL LOGGED IN SUPABASE
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="neon-frame neon-frame-red w-[min(94vw,560px)] mx-auto"
      >
        {/* badge header */}
        <div className="flex items-center justify-between border-b border-alert/30 px-4 py-3">
          <span className="text-[10px] tracking-[0.3em] text-alert uppercase">
            ⬢ SECURE TRANSMISSION PASS
          </span>
          <span className="text-[9px] text-alert/60 animate-blink">ENCRYPTED · AES-256</span>
        </div>

        <form action={formAction} className="p-5 space-y-4">
          {[
            { id: "name", label: "CALLSIGN / NAME", type: "text", ph: "operator_name" },
            { id: "email", label: "SECURE CHANNEL / EMAIL", type: "email", ph: "ops@node.net" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="block text-[10px] tracking-[0.3em] text-terminal/60 mb-1">
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                placeholder={f.ph}
                className="w-full bg-black/60 border border-terminal/25 focus:border-terminal focus:shadow-[0_0_14px_rgba(0,255,136,0.35)] outline-none px-3 py-2 text-sm text-terminal placeholder:text-terminal/25 transition-all"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="block text-[10px] tracking-[0.3em] text-terminal/60 mb-1">
              PAYLOAD / MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="type encrypted payload here…"
              className="w-full bg-black/60 border border-terminal/25 focus:border-terminal focus:shadow-[0_0_14px_rgba(0,255,136,0.35)] outline-none px-3 py-2 text-sm text-terminal placeholder:text-terminal/25 resize-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="cmd-btn w-full neon-frame py-3 text-xs tracking-[0.35em] uppercase disabled:opacity-50"
          >
            {pending ? "[ TRANSMITTING… ]" : "[ ⏻ TRANSMIT SIGNAL ]"}
          </button>

          <p
            className={`text-[10px] tracking-[0.2em] ${
              state.status === "granted"
                ? "text-terminal"
                : state.status === "denied"
                ? "text-alert"
                : "text-terminal/40"
            }`}
          >
            {state.log}
            <span className="animate-blink">_</span>
          </p>
        </form>
      </motion.div>
    </>
  );
}