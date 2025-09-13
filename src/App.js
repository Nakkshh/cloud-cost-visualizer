import logo from './logo.svg';
import './App.css';
import React from "react";
import "./index.css";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell,
  LineChart, Line
} from "recharts";


const mockCosts = [
  { service: "Compute Engine", cost: 250 },
  { service: "Cloud Storage", cost: 180 },
  { service: "BigQuery", cost: 120 },
  { service: "Cloud SQL", cost: 80 },
  { service: "Pub/Sub", cost: 40 },
];

const dailySpend = [
  { day: "Mon", cost: 80 },
  { day: "Tue", cost: 120 },
  { day: "Wed", cost: 90 },
  { day: "Thu", cost: 160 },
  { day: "Fri", cost: 140 },
  { day: "Sat", cost: 100 },
  { day: "Sun", cost: 200 },
];

function App() {
  return (
    <div className="bg-[#121212] font-['Space_Grotesk','Noto_Sans',sans-serif] text-white/90 min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#121212]/80 px-10 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-[#00bfff] glowing-icon">cloud</span>
          <h1 className="text-2xl font-bold neon-text">Cloud Cost Visualizer</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-white/10">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <img
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJyrnj48IkZUzclx8LpA2o0vlo1lnqSxjG9D9_0keE1qNw-z2Mi0p5iD10PBIpiOL5ZufREfbk4qduxKgdvhP_ZhB0dI5bOBjeGNRKz-4deRsUNE3VbcRO3YQSv73CocdO7wEsg_adRSD0BpGCdnWrY1w2_FiZGWRUteoU-m_GuUiCiyYNZogspDvX_-op3EK7QlgWtvirFFPAfnam6RpHJIJd71JnNxd2OIyl6eybcqfB4Mgu8e4pAwbfdbLM1BAVbziZjcPt3gw-"
          />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-4 py-8 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Budget Alert */}
          <div className="mb-8 rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-center text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <p className="font-bold">BUDGET ALERT: Total spend exceeds $500. Immediate action is recommended.</p>
          </div>

          {/* Top 3 Services */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold tracking-wider">Top 3 Costliest Services</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Compute Engine", cost: "$250.00", region: "us-central1", color: "from-[#1a1a2e] to-[#16213e] text-[#00bfff]" },
                { name: "Cloud Storage", cost: "$180.00", region: "multi-region", color: "from-[#1a1a2e] to-[#3a1c4a] text-[#8a2be2]" },
                { name: "BigQuery", cost: "$120.00", region: "us", color: "from-[#1a1a2e] to-[#4a2e5a] text-[#c837ac]" },
              ].map((svc, i) => (
                <div key={i} className={`card-glow transform-gpu rounded-xl bg-gradient-to-br ${svc.color.split(" ")[0]} ${svc.color.split(" ")[1]} p-6 transition-all duration-300 hover:-translate-y-1`}>
                  <h3 className={`text-xl font-bold ${svc.color.split(" ")[2]}`}>{svc.name}</h3>
                  <p className="mt-2 text-3xl font-light">{svc.cost}</p>
                  <p className="mt-1 text-sm text-white/50">Region: {svc.region}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Analysis */}
          <section className="mb-12 rounded-lg bg-black/20 p-6">
            <h2 className="mb-6 text-2xl font-bold tracking-wider">Cost Analysis</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Bar Chart: Cost per Service */}
            <div className="rounded-lg bg-black/30 p-4">
              <h3 className="mb-2 font-semibold">Cost per Service</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={mockCosts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="service" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Bar dataKey="cost" fill="#00bfff" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart: Cost Distribution */}
            <div className="rounded-lg bg-black/30 p-4">
              <h3 className="mb-2 font-semibold">Cost Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={mockCosts}
                    dataKey="cost"
                    nameKey="service"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {mockCosts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={["#00bfff", "#8a2be2", "#c837ac", "#ff9800", "#4caf50"][index % 5]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Line Chart: Daily Spend Trend */}
            <div className="rounded-lg bg-black/30 p-4">
              <h3 className="mb-2 font-semibold">Daily Spend Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dailySpend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="day" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Line type="monotone" dataKey="cost" stroke="#00ffff" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          </section>

          {/* Filters + What-If Calculator */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-wider">Filters & Actions</h2>
              <div className="space-y-6 rounded-lg bg-black/20 p-6">
                {/* Region/Project/Service dropdowns */}
                {/* Slack + Export buttons */}
              </div>
            </section>
            <section>
              <h2 className="mb-6 text-2xl font-bold tracking-wider">What-If Calculator</h2>
              <div className="space-y-4 rounded-lg bg-black/20 p-6">
                {/* Inputs for costs + estimated total */}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
