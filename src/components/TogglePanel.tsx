import { useState } from "react";

interface TogglePanelProps {
  title: string;
  children: React.ReactNode;
}

export default function TogglePanel({ title, children }: TogglePanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div data-testid="toggle-panel">
      <h3>{title}</h3>

      <button onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"}</button>

      {open && <div data-testid="panel-content">{children}</div>}
    </div>
  );
}
