import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <section
      style={{
        background: "var(--card-bg)",
        color: "var(--card-text)",
        borderRadius: 12,
        padding: "1.25rem 1.5rem",
        boxShadow: "0 8px 20px rgba(15, 23, 42, 0.12)",
      }}
    >
      {title && (
        <h2
          style={{
            marginTop: 0,
            marginBottom: "0.75rem",
            fontSize: "1.15rem",
            color: "var(--card-text)",
          }}
        >
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
};
