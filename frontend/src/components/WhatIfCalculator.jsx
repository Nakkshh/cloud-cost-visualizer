import { useState } from "react";

export default function WhatIfCalculator({ costs }) {
  const [scale, setScale] = useState(1);
  const scaledTotal = costs.reduce((sum, c) => sum + c.cost * scale, 0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-2">🔮 What-If Calculator</h2>
      <input
        type="number"
        step="0.1"
        value={scale}
        onChange={(e) => setScale(parseFloat(e.target.value) || 1)}
        className="border p-2 rounded w-24"
      />
      <span className="ml-2">× scaling factor</span>
      <p className="mt-3 font-medium">
        Estimated Total Cost:{" "}
        <span className="text-blue-600">${scaledTotal.toFixed(2)}</span>
      </p>
    </div>
  );
}
