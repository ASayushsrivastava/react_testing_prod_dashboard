import React from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps {
  variant?: Variant;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const base = {
    padding: "8px 16px",
    borderRadius: 20,
    fontSize: "14px",
    cursor: "pointer",
    border: "1px solid transparent",
  } as React.CSSProperties;

  const styles: Record<Variant, React.CSSProperties> = {
    primary: { ...base, background: "#2563eb", color: "#fff" },
    outline: {
      ...base,
      background: "transparent",
      color: "#2563eb",
      border: "1px solid #2563eb",
    },
    ghost: { ...base, background: "transparent", color: "#111" },
  };

  return (
    <button style={styles[variant]} {...props}>
      {children}
    </button>
  );
}
