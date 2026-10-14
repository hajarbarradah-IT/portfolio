"use client";

import Hero from "@/components/Hero";
import DraggableCard from "@/components/DraggableCard";
import ContactCard from "@/components/ContactCard";

export default function Page() {
  return (
    <main className="relative">
      <Hero />

      {/* ---------- OPS FLOOR : draggable collage modules ---------- */}
      <section id="ops-floor" className="relative min-h-[220vh] py-24">
        {/* network map backdrop */}
        <div className="absolute inset-0 code-rain opacity-20" />
        <div className="sticky top-8 text-center z-0">
          <p className="text-[10px] tracking-[0.5em] text-terminal/40 uppercase">
            {"// OPS FLOOR — drag modules to rearrange the map"}
          </p>
          <h2 className="font-condensed text-4xl md:text-5xl font-bold text-white/90 mt-2">
            LIVE <span className="text-terminal">NETWORK</span> COLLAPSE
          </h2>
        </div>

        <div className="relative mt-16 max-w-7xl mx-auto px-4">
          {/* ABOUT */}
          <DraggableCard
            id="01" title="operator.profile" logTag="BIO" x="4%" y="0%"
            z={10} accent="green"
            details={
              <ul className="space-y-1.5">
                <li>→ Scout leadership: team animation & event ops</li>
                <li>→ Autonomous, rigorous, threat-obsessed</li>
                <li>→ French fluent · English professional · Arabic native</li>
                <li>→ Base: Casablanca, Morocco · open to remote ops</li>
              </ul>
            }
          >
            <p>
              <span className="text-cyber">operator@hbarradah:~$</span> whoami
            </p>
            <p className="mt-2">
              AI & cybersecurity engineer at the intersection of machine
              learning and network defense. I build systems that see attacks
              before they land — from phishing classifiers to production IDS.
            </p>
          </DraggableCard>

          {/* SKILLS */}
          <DraggableCard
            id="02" title="arsenal.sys" logTag="SKILL" x="55%" y="6%"
            z={12} accent="cyan"
            details={
              <ul className="space-y-1.5">
                <li>→ Kali Linux · SOC workflows · SIEM log triage</li>
                <li>→ Sockets & IPC in C · Linux process internals</li>
                <li>→ Flask · Angular · React · Node.js · MySQL</li>
                <li>→ Agile · Git/GitHub · Arduino prototyping</li>
              </ul>
            }
          >
            <div className="grid grid-cols-2 gap-2 text-[13px]">
              {[
                ["AI/ML", "sklearn · TF · Keras"],
                ["NLP", "TF-IDF · RAG · Llama"],
                ["Big Data", "NiFi · Hadoop · Hive"],
                ["Security", "Suricata · IDS/IPS · SOC"],
                ["Cloud", "Docker · WSL2 · Ubuntu"],
                ["Langs", "Python · C · Java · PHP"],
              ].map(([k, v]) => (
                <div key={k} className="border border-terminal/15 px-2 py-1.5">
                  <span className="text-cyber text-[10px] tracking-widest">{k}</span>
                  <p>{v}</p>
                </div>
              ))}
            </div>
          </DraggableCard>

          {/* EXPERIENCE */}
          <DraggableCard
            id="03" title="mission.log" logTag="EXP" x="10%" y="38%"
            z={11} accent="red"
            details={
              <ul className="space-y-1.5">
                <li>→ Custom Suricata rules + auto-response scripts</li>
                <li>→ Secure code review: vuln triage & remediation</li>
                <li>→ Scapy packet dissection & anomaly heuristics</li>
                <li>→ React hooks, state mgmt, REST integration</li>
              </ul>
            }
          >
            <p className="text-cyber">[JUL–AUG 2026] CodeAlpha — Cyber Ops Intern</p>
            <p className="mt-1 text-terminal/80">
              Built a Python/Scapy network sniffer to flag suspicious traffic;
              deployed a Suricata IDS with custom detection rules.
            </p>
            <p className="mt-3 text-cyber">[JUL–AUG 2025] EFE — Frontend Trainee</p>
            <p className="mt-1 text-terminal/80">
              Intensive React track: components, hooks, state, consuming REST
              APIs; shipped responsive web interfaces.
            </p>
          </DraggableCard>

          {/* PROJECTS */}
          <DraggableCard
            id="04" title="deployed.ops" logTag="PROJ" x="52%" y="52%"
            z={13} accent="green"
            details={
              <ul className="space-y-1.5">
                <li>→ Licence PFE: honest metric comparison across models</li>
                <li>→ IDS hardening: EveBox dashboards, rule tuning</li>
                <li>→ RAG pipeline: doc retrieval + Llama generation</li>
                <li>→ IoT: sensor fusion → ML actuation loop</li>
              </ul>
            }
          >
            <ul className="space-y-2 text-terminal/85">
              <li>▸ <b className="text-cyber">Phishing Detection</b> — Licence PFE; TF-IDF + SVM/RF, deployed app</li>
              <li>▸ <b className="text-cyber">Network IDS</b> — Suricata + EveBox, production-grade</li>
              <li>▸ <b className="text-cyber">Travel Fraud ML</b> — class imbalance + RF/XGBoost</li>
              <li>▸ <b className="text-cyber">Smart Greenhouse</b> — Arduino + TF model, 76% acc</li>
              <li>▸ <b className="text-cyber">NiFi IoT Pipelines</b> — real-time ingestion, Hadoop/Hive</li>
            </ul>
          </DraggableCard>

          {/* EDUCATION */}
          <DraggableCard
            id="05" title="academy.db" logTag="EDU" x="30%" y="78%"
            z={10} accent="cyan"
            details={
              <ul className="space-y-1.5">
                <li>→ M2 ISI: intelligent systems engineering</li>
                <li>→ Licence: networks, systems, security fundamentals</li>
                <li>→ Double baccalauréat track, sciences focus</li>
              </ul>
            }
          >
            <p><span className="text-cyber">2025–2026</span> · Master 2 ISI — FSAC Casablanca</p>
            <p className="mt-1"><span className="text-cyber">2022–2025</span> · Licence Réseaux & Systèmes — FSAC</p>
            <p className="mt-1 text-terminal/70">2022 Bac Maths — Ibno Lass ·  2023 Bac Sciences Physiques </p>
          </DraggableCard>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-t from-fog via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-center text-[10px] tracking-[0.5em] text-alert/70 uppercase mb-3">
            {"// OPEN CHANNEL"}
          </p>
          <h2 className="font-condensed text-4xl md:text-6xl font-bold text-center text-white mb-12">
            ESTABLISH <span className="text-alert">UP-LINK</span>
          </h2>
          <ContactCard />
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-terminal/15 py-6 text-center text-[10px] text-terminal/40 tracking-[0.3em]">
        {"<EOF>"} — HBARRADAH.NEURAL.OPS © 2026 — ALL SIGNALS MONITORED
      </footer>
    </main>
  );
}