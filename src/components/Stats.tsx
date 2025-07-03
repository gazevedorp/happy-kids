
const Stats = () => {
  const stats = [
    { number: "10x", label: "Faster Development" },
    { number: "50%", label: "Smaller Bundle Size" },
    { number: "99%", label: "Developer Satisfaction" },
    { number: "1M+", label: "Downloads Monthly" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
