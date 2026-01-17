import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <input
        value={value}
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          console.log("focused");
          setFocused(true);
        }}
        onBlur={() => {
          console.log("blurred");
          setFocused(false);
        }}
        style={{
          border: "2px solid",
          borderColor: focused ? "blue" : "gray",
          outline: "none", // removes default black browser outline
          padding: "6px",
        }}
        data-testid="search-input"
      />

      <button
        onClick={() => {
          onSearch(value);
          setFocused(false);
        }}
      >
        Search
      </button>
    </div>
  );
}
