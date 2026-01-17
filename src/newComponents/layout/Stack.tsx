// src/components/layout/Stack.tsx
import React from "react";

interface StackProps {
  children: React.ReactNode;
  gap?: number;
  direction?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
}

export const Stack: React.FC<StackProps> = ({
  children,
  gap = 12,
  direction = "column",
  align = "flex-start",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};
