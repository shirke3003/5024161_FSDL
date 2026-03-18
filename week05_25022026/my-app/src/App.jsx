import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <input
          type="text"
          value={input}
          readOnly
          style={styles.display}
        />

        <div style={styles.buttons}>
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","="].map((btn, i) => (
            <button
              key={i}
              style={styles.button}
              onClick={() => btn === "=" ? calculate() : handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>

        <button style={styles.clear} onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9ecef",
    fontFamily: "Arial",
  },
  calculator: {
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "12px",
    width: "250px",
  },
  display: {
    width: "100%",
    height: "40px",
    marginBottom: "15px",
    textAlign: "right",
    padding: "5px",
    fontSize: "18px",
    borderRadius: "6px",
    border: "none",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
  clear: {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#ff4d4d",
    color: "white",
    cursor: "pointer",
  },
};

export default App;