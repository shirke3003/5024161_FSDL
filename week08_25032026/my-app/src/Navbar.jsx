import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#020617" }}>
      <Link to="/" style={{ marginRight: "15px", color: "#38bdf8" }}>Dashboard</Link>
      <Link to="/analyzer" style={{ color: "#38bdf8" }}>Analyzer</Link>
    </nav>
  );
}

