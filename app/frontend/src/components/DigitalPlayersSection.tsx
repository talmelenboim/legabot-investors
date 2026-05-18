const DigitalPlayersSection = () => {
  const traits = [
    "Unique playing style & personality",
    "Dynamic form & fitness cycles",
    "Career progression & aging",
    "Transfer market behavior",
    "Fan relationships & media presence",
    "Injury patterns & recovery",
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#635cff]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="reveal-left">
            <p className="text-violet font-semibold text-sm uppercase tracking-widest mb-4">
              Digital Players
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              AI-NATIVE<br />
              <span className="text-gradient-violet">DIGITAL DNA</span>
            </h2>
            <p className="text-[#a3a3a3] text-lg mb-8 font-light leading-relaxed">
              Every player is a unique AI entity with their own personality, playing style, career arc, and evolving abilities. They aren't scripted, they're alive.
            </p>

            {/* Traits */}
            <div className="space-y-3 stagger-children reveal">
              {traits.map((trait, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-[#635cff]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#635cff]/40 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#635cff]" />
                  </div>
                  <span className="text-[#ebebed] font-medium">{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="reveal-right perspective-container">
            <div className="tilt-card">
              <img
                src="/assets/visual-content.png"
                alt="Player Evolution System"
                className="presentation-img w-full"
              />
            </div>
            <div className="absolute -inset-4 bg-[#635cff]/5 rounded-2xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPlayersSection;