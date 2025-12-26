export default function ExportButton({ costs }) {
  const downloadCSV = () => {
    const rows = [["Service", "Cost"], ...costs.map((c) => [c.service, c.cost])];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cloud-costs.csv";
    a.click();
  };

  return (
    <button
      onClick={downloadCSV}
      className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      ⬇️ Export CSV
    </button>
  );
}