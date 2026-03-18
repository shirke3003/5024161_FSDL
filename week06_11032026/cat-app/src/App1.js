import React, { useState } from "react";

// Component using props
function Cat(props) {
  return (
    <div>
      <h2>🐱 Happiness Level: {props.count}</h2>
    </div>
  );
}

function App() {

  // State
  const [count, setCount] = useState(0);

  // Event
  const petCat = () => {
    setCount(count + 1);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>Pet the Cat</h1>

      <button onClick={petCat}>Pet 🐾</button>

      {/* Component with Props */}
      <Cat count={count} />

    </div>
  );
}

export default App;  