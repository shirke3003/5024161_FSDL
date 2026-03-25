import { useState, useRef } from "react";

export default function Analyzer() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [threshold, setThreshold] = useState("");
  const inputRef = useRef(null);

  // Add numbers (comma separated)
  const handleAdd = () => {
    const nums = input.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
    setData(nums);
    inputRef.current.focus();
  };

  // Calculations
  const mean = data.length ? (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2) : 0;

  const sorted = [...data].sort((a, b) => a - b);
  const median = data.length
    ? (data.length % 2 === 0
        ? (sorted[data.length/2 - 1] + sorted[data.length/2]) / 2
        : sorted[Math.floor(data.length/2)])
    : 0;

  const max = data.length ? Math.max(...data) : 0;
  const min = data.length ? Math.min(...data) : 0;

  const filtered = threshold
    ? data.filter(n => n > Number(threshold))
    : [];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Analyzer</h1>

      <input
        ref={inputRef}
        placeholder="Enter numbers (e.g. 10,20,30)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Process</button>

      <div style={{ marginTop: "20px" }}>
        <p>Mean: {mean}</p>
        <p>Median: {median}</p>
        <p>Max: {max}</p>
        <p>Min: {min}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Threshold filter"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
        />

        <ul>
          {filtered.map((n, i) => (
            <li key={i}>{n}</li>   {/* keys used */}
          ))}
        </ul>
      </div>
    </div>
  );
}