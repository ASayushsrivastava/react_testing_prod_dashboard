import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div data-testid="counter-box">
        <h2>Counter</h2>
        <p data-testid="count">{count}</p>

        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <input
          placeholder="Focus me"
          onFocus={() => console.log("focused")}
          onBlur={() => console.log("blurred")}
        />
      </div>
    </>
  );
}
