import React from "react";

function TopServices() {
  const services = [
    { name: "EC2", cost: "$420" },
    { name: "S3", cost: "$210" },
    { name: "RDS", cost: "$160" },
  ];

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold tracking-wider">🔥 Top Services</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={i}
            className="rounded-lg bg-black/20 p-4 shadow-lg backdrop-blur-sm hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-[#00bfff]">{s.name}</h3>
            <p className="text-gray-300">{s.cost}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopServices;
