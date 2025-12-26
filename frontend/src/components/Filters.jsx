import React, { useState } from "react";
import toast from "react-hot-toast";

function Filters() {
  const [region, setRegion] = useState("");
  const [project, setProject] = useState("");
  const [service, setService] = useState("");
  const [scale, setScale] = useState(1);
  const [baseCost, setBaseCost] = useState(100);
  const estimatedCost = (scale * baseCost).toFixed(2);

  const handleExport = () => {
    toast.success("Report exported successfully! 📊");
  };

  const handleSlack = () => {
    toast.error("Slack integration not configured yet ⚡");
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Filters & Actions */}
      <section>
        <h2 className="mb-6 text-2xl font-bold tracking-wider">Filters & Actions</h2>
        <div className="space-y-6 rounded-lg bg-black/20 backdrop-blur-sm p-6 shadow-lg">

          {/* Region Dropdown */}
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full rounded bg-black/40 p-2"
          >
            <option value="">🌍 Select Region</option>
            <option value="us-east">US East</option>
            <option value="eu-west">EU West</option>
            <option value="ap-south">AP South</option>
          </select>

          {/* Project Dropdown */}
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full rounded bg-black/40 p-2"
          >
            <option value="">📁 Select Project</option>
            <option value="alpha">Project Alpha</option>
            <option value="beta">Project Beta</option>
            <option value="gamma">Project Gamma</option>
          </select>

          {/* Service Dropdown */}
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded bg-black/40 p-2"
          >
            <option value="">⚙️ Select Service</option>
            <option value="ec2">EC2</option>
            <option value="s3">S3</option>
            <option value="rds">RDS</option>
          </select>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleExport}
              className="flex-1 rounded bg-[#00bfff] p-2 font-semibold hover:bg-[#0099cc] transition"
            >
              Export Report
            </button>
            <button
              onClick={handleSlack}
              className="flex-1 rounded bg-[#8a2be2] p-2 font-semibold hover:bg-[#6c1bb9] transition"
            >
              Send to Slack
            </button>
          </div>
        </div>
      </section>

      {/* What-If Calculator */}
      <section>
        <h2 className="mb-6 text-2xl font-bold tracking-wider">🤔 What-If Calculator</h2>
        <div className="space-y-6 rounded-lg bg-black/20 backdrop-blur-sm p-6 shadow-lg">
          <input
            type="number"
            min="1"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            className="w-full rounded bg-black/40 p-2"
          />
          <p className="text-lg">
            Estimated cost:{" "}
            <span className="font-bold text-[#00ffff]">${estimatedCost}</span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Filters;
