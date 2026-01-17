import React from "react";
import { Page } from "../layout/Page";
import { Stack } from "../layout/Stack";
import { Card } from "../layout/Card";
import { Button } from "../ui/Button";
import { useTheme } from "../hooks/useTheme";
import { useUser } from "../hooks/useUser";

export const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { username, setUsername } = useUser();

  return (
    <Page>
      <h1>Settings</h1>

      <Stack gap={16}>
        <Card title="Profile">
          <p>Username: {username}</p>

          <input
            title="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              marginTop: "0.5rem",
              padding: "0.5rem",
              borderRadius: "6px",
              border: "1px solid var(--input-border)",
              background: "var(--input-bg)",
              color: "var(--input-text)",
            }}
          />
        </Card>

        <Card title="Theme">
          <p>Current Theme: {theme}</p>
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </Card>
      </Stack>
    </Page>
  );
};
