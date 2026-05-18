const RoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      period: "Q1-Q2 2026",
      items: ["Core AI engine development", "First 20 clubs created", "Alpha testing"],
      status: "active",
    },
    {
      phase: "Phase 2",
      title: "Launch",
      period: "Q3-Q4 2026",
      items: ["Public beta launch", "Live streaming integration", "First season kickoff"],
      status: "upcoming",
    },
    {
      phase: "Phase 3",
      title: "Scale",
      period: "2027",
      items: ["Global expansion", "Betting partnerships", "500+ AI players"],
      status: "upcoming",
    },
    {
      phase: "Phase 4",
      title: "Ecosystem",
      period: "2028",
      items: ["Fan-created leagues", "API marketplace", "Multi-sport expansion"],
      status: "upcoming",
    },
    {
      phase: "Phase 5",
      title: "Dominance",
      period: "2029+",
      items: ["1B+ users", "Full autonomy", "Self-evolving universe"],
      status: "upcoming",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#635cff]/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-violet font-semibold text-sm uppercase tracking-widest mb-4">
            Roadmap
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
            THE PATH TO<br />
            <span className="text-gradient-violet">GLOBAL SCALE</span>
          </h2>
        </div>



        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#635cff] via-[#635cff]/50 to-[#635cff]/10" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <div
                key={i}
                className={`reveal relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#635cff] border-4 border-[#232323] z-10">
                  {phase.status === "active" && (
                    <div className="absolute inset-0 rounded-full bg-[#635cff] animate-ping opacity-50" />
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className={`glass-card-strong rounded-xl p-6 hover:border-[#635cff]/50 transition-all duration-500 hover:scale-[1.02] ${
                    phase.status === "active" ? "border-[#635cff]/40 animate-border-glow" : ""
                  }`}>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-violet font-bold text-sm">{phase.phase}</span>
                      <span className="text-[#a3a3a3] text-xs px-2 py-0.5 rounded-full bg-[#635cff]/10">
                        {phase.period}
                      </span>
                      {phase.status === "active" && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#635cff]/20 text-[#635cff] font-semibold">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <h3 className="text-[#ebebed] font-bold text-xl mb-3">{phase.title}</h3>
                    <ul className="space-y-1.5">
                      {phase.items.map((item, j) => (
                        <li key={j} className="text-[#a3a3a3] text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#635cff]/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;