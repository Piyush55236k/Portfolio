const highlights = [
  {
    icon: "🏆",
    title: "1st Place – Hackathon at My College (2024)",
    subtitle: "Team of 2nd-year students",
  },
  {
    icon: "🚀",
    title: "Portfolio Launched",
    subtitle: "Built from scratch using React & Tailwind",
  },
  {
    icon: "🧑‍💻",
    title: "Developed 5+ practical projects using modern tech",
    subtitle: "Real-world apps using MERN & GSAP",
  },
  {
    icon: "🛠️",
    title: "Currently Build Taskizo",
    subtitle: "Freelance platform with Socket.IO",
  },
];

const Highlights = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-center mb-16">
          My Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold font-display mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400 font-body">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
