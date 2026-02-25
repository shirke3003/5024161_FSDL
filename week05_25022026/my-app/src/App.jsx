import { useState } from "react";

function App() {
  const moods = ["😺 Happy", "😼 Mischievous", "😴 Sleepy", "🙀 Shocked", "😾 Grumpy"];
  const [currentMood, setCurrentMood] = useState("😺 Happy");

  const changeMood = () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setCurrentMood(randomMood);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Cat Mood</h1>

      <div style={styles.card}>
        <h2 style={styles.mood}>{currentMood}</h2>
        <button style={styles.button} onClick={changeMood}>
          Change Mood
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    fontFamily: "sans-serif",
  },
  title: {
    fontWeight: "300",
    marginBottom: "30px",
  },
  card: {
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  mood: {
    marginBottom: "20px",
  },
  button: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#222",
    color: "white",
    cursor: "pointer",
  },
};

export default App;