import React from "react";
import Navbar from "./components/Navbar";
import BudgetAlert from "./components/BudgetAlert";
import TopServices from "./components/TopServices";
import Charts from "./components/Charts";
import Filters from "./components/Filters";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="p-8 space-y-12">
        <BudgetAlert />
        <TopServices />
        <Charts />
        <Filters />
      </main>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
