import React, { useState } from "react";

// Component + Props
function ExpenseList(props) {
  return (
    <ul>
      {props.expenses.map((exp, index) => (
        <li key={index}>
          {exp.name} - ₹{exp.amount}
        </li>
      ))}
    </ul>
  );
}

function App() {
  // State
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // Event (form submit)
  const addExpense = (e) => {
    e.preventDefault();

    if (!name || !amount) return;

    const newExpense = {
      name: name,
      amount: amount,
    };

    setExpenses([...expenses, newExpense]);
    setName("");
    setAmount("");
  };

  // Total calculation
  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Expense Tracker</h1>

      {/* Form */}
      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <h2>Total: ₹{total}</h2>

      {/* Props */}
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;