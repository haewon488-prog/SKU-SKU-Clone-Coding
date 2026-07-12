import { useState } from "react";
import { GENERATIONS, TEAM_DATA } from "../data/teamData.jsx";
import TeamSection from "./TeamSection.jsx";

export default function TeamPage() {
  const [gen, setGen] = useState(GENERATIONS[0]);
  const sections = TEAM_DATA[gen] || [];

  return (
    <main className="lk-main">
      <section className="lk-hero">
        <p className="lk-hero-sub">LIKELION</p>
        <h1 className="lk-hero-title">TEAM</h1>
        <div className="lk-tabs">
          {GENERATIONS.map((g) => (
            <button
              key={g}
              className={`lk-tab ${gen === g ? "active" : ""}`}
              onClick={() => setGen(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </section>

      <section className="lk-grid">
        {sections.map((s) => (
          <TeamSection section={s} key={s.title} />
        ))}
      </section>
    </main>
  );
}
