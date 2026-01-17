// src/ColorInput.tsx
import { useState } from "react";

export default function ColorInput() {
  const [focused, setFocused] = useState(false);

  return (
    <input
      placeholder="Type here"
      style={{
        border: "2px solid",
        borderColor: focused ? "green" : "gray",
        padding: "8px",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      data-testid="color-input"
    />
  );
}
