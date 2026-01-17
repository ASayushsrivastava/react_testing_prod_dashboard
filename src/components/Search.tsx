import { useState } from "react";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/search?q=${query}`);
      setResult(res.data.result);
    } catch {
      setResult("Search failed");
    }
  };

  return (
    <>
      <h2>searching</h2>
      <input
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {result && <p data-testid="result">{result}</p>}
    </>
  );
}
