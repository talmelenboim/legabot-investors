const ContentEngineSection = () => {
  const contentTypes = [
    { type: "Live Broadcasts", desc: "AI-generated commentary & visuals", icon: "📺" },
    { type: "Match Highlights", desc: "Automated clip generation", icon: "🎬" },
    { type: "News & Articles", desc: "AI journalism & analysis", icon: "📰" },
    { type: "Social Media", desc: "Auto-generated fan content", icon: "📱" },
    { type: "Transfer Stories", desc: "Dynamic narrative arcs", icon: "📋" },
    { type: "Stats & Analytics", desc: "Real-time data visualization", icon: "📊" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative particle-bg">
      <div className="section-divider max-w-4xl mx-auto mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-violet font-semibold text-sm uppercase tracking-widest mb-4">
            Content Engine
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
            INFINITE CONTENT.<br />
            <span className="text-gradient-violet">ZERO PRODUCTION COST.</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-3xl mx-auto mt-6 font-light">
            Every match generates hundreds of content pieces automatically: broadcasts, highlights, articles, social posts, and fan engagement materials.
          </p>
        </div>

        {/* Presentation image */}
        <div className="reveal-scale mb-16 max-w-4xl mx-auto">
          <div className="perspective-container">
            <div className="tilt-card">
              <img
                src="/assets/visual-global.png"
                alt="Content Generation Pipeline"
                className="presentation-img w-full"
              />
            </div>
          </div>
        </div>

        {/* Content types grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children reveal">
          {contentTypes.map((item, i) => (
            <div
              key={i}
              className="glass-card-strong rounded-xl p-5 hover:border-[#635cff]/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 group"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="text-[#ebebed] font-semibold mb-1">{item.type}</div>
              <div className="text-[#a3a3a3] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentEngineSection;