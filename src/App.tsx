import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Counter from "./components/Counter";
import Search from "./components/Search";
import ColorInput from "./components/ColorInput";
import TogglePanel from "./components/TogglePanel";
import SearchBox from "./components/SearchBox";
import { Dashboard } from "./newComponents/pages/Dashboard";
import { Tasks } from "./newComponents/pages/Tasks";
import { Notes } from "./newComponents/pages/Notes";
import { Settings } from "./newComponents/pages/Settings";
import { AppProvider } from "./newComponents/context/AppContext";
import { useApp } from "./newComponents/context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  const { theme } = useApp();
  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <BrowserRouter>
        <nav>
          {/* <Link to="/">Home</Link> |<Link to="/users">Users</Link> |
        <Link to="/counter">Counter</Link> |<Link to="/search">Search</Link> |
        <Link to="/toggle">Toggle Panel</Link> |
        <Link to="/searchbox">Search Box</Link> */}
          <Link to="/">Dashboard</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/settings">Setting</Link>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/search" element={<Search />} />
          <Route path="/color" element={<ColorInput />} />
          <Route
            path="/toggle"
            element={<TogglePanel title="Demo Panel">AS</TogglePanel>}
          />
          <Route
            path="/searchbox"
            element={<SearchBox onSearch={(v) => console.log("Search:", v)} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
