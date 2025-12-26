import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Charts() {
  const barData = [
    { service: "EC2", cost: 420 },
    { service: "S3", cost: 210 },
    { service: "RDS", cost: 160 },
  ];

  const pieData = [
    { name: "EC2", value: 420 },
    { name: "S3", value: 210 },
    { name: "RDS", value: 160 },
  ];

  const lineData = [
    { week: "Week 1", cost: 200 },
    { week: "Week 2", cost: 250 },
    { week: "Week 3", cost: 300 },
    { week: "Week 4", cost: 350 },
  ];

  const pieColors = ["#00bfff", "#ff1493", "#32cd32"];

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold tracking-wider">📊 Cost Charts</h2>
      <div className="grid gap-8 md:grid-cols-3">
        
        {/* Bar Chart */}
        <div className="rounded-lg bg-black/20 p-4 shadow-lg backdrop-blur-sm">
          <h3 className="mb-4 text-center text-lg font-semibold">Cost per Service</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="service" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Bar dataKey="cost" fill="#00bfff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="rounded-lg bg-black/20 p-4 shadow-lg backdrop-blur-sm">
          <h3 className="mb-4 text-center text-lg font-semibold">Service Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="rounded-lg bg-black/20 p-4 shadow-lg backdrop-blur-sm">
          <h3 className="mb-4 text-center text-lg font-semibold">Weekly Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="week" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cost" stroke="#00ffff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default Charts;
