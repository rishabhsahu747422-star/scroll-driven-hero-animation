const stats = [
  {
    value: "92%",
    text: "Customer satisfaction",
  },
  {
    value: "78%",
    text: "Conversion increase",
  },
  {
    value: "64%",
    text: "Higher engagement",
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-4 border-t border-black/10 pt-6">
      {stats.map((stat) => (
        <div key={stat.value} className="hero-stat">
          <p className="text-3xl font-bold md:text-5xl">{stat.value}</p>

          <p className="mt-2 text-[10px] uppercase tracking-[0.15em] opacity-50">
            {stat.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
