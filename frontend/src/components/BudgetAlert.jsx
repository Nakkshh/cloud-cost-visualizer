import React from "react";

function BudgetAlert() {
  return (
    <section className="rounded-lg bg-black/30 p-6 shadow-md backdrop-blur-md">
      <p className="text-lg font-semibold text-red-400">
        ⚠️ Budget Alert: You’ve used 82% of this month’s cloud budget.
      </p>
    </section>
  );
}

export default BudgetAlert;
